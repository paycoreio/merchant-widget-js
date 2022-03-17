import render from "./render";
import mount from "./mount";
import { stringify } from "./helpers";
import ow from "ow";
import EventService from "./EventService";

// FIXME: Do we need UMD instead if IIFE?
// Probably not yet  🥴;

(function(window, undefined) {
  const buildFrameSrc = ({
    // FIXME: move it to upper function
    baseUrl = "https://com-dev.paycore.io/hpp",
    public_key,
    amount,
    currency,
    service = null,
    service_fields = null,
    cpi = null,
    description = null,
    expires = null,
    theme = null,
    locale = null,
    customer = null,
    reference_id = null,
    metadata = null,
    lang = null,
    display = null,
    style = null,
    pay_button_label = null,
  }) => {
    const qParams = stringify({
      // Required params
      amount,
      currency,
      public_key,

      // Optional params
      description,
      expires,
      locale,
      reference_id,
      metadata,
      customer,

      // Theming, UX
      display,
      style,
      theme,
      pay_button_label,

      // Different usecase flow params
      service,
      service_fields,
      cpi,
      lang,
    });
    return `${baseUrl}?${qParams}`;
  };
  /*
   * Widget initialize method:
   *
   * @param  {string}  Selector The Element selector to render an iframe, must be an ID
   * @param  {Object}  The Config with public key of commerce app, currency and amount, description
   * @param  {Object}  Predefined styles for Merchant HPP inside iframe
   * @param  {String}  Locale of client page
   *
   */

  const _init = (config) => {
    try {
      ow(
        config,
        ow.object.exactShape({
          flow: ow.string,
          selector: ow.string,
          public_key: ow.string,
          amount: ow.number,
          currency: ow.string,
          baseUrl: ow.optional.string,
          styling: ow.optional.object,
          frameId: ow.optional.string,
          description: ow.optional.string,
          src: ow.optional.string,
          service: ow.optional.string,
          service_fields: ow.optional.array,
          cpi: ow.optional.string,
          expires: ow.optional.any(ow.string, ow.number),
          theme: ow.optional.string,
          locale: ow.optional.string,
          reference_id: ow.optional.string,
          language: ow.optional.string,

          metadata: ow.optional.any(ow.object, ow.array),

          lang: ow.optional.string,

          customer: ow.optional.object.exactShape({
            reference_id: ow.string,
            email: ow.optional.string,
            phone: ow.optional.string,
            name: ow.optional.string,
            metadata: ow.optional.any(ow.object, ow.array),
            address: ow.optional.object.exactShape({
              country: ow.optional.string,
              city: ow.optional.string,
              post_code: ow.optional.string,
              region: ow.optional.string,
              street: ow.optional.string,
              full_address: ow.optional.string
            })
          }),

          display: ow.optional.object.exactShape({
            hide_footer: ow.optional.boolean,
            hide_header: ow.optional.boolean,
            hide_progress_bar: ow.optional.boolean,
            hide_method_filter: ow.optional.boolean,
            hide_lifetime_counter: ow.optional.boolean,
          }),

          style: ow.optional.object.exactShape({
            theme: ow.optional.string,
            font_family: ow.optional.string,

            success_color: ow.optional.string,
            warning_color: ow.optional.string,
            danger_color: ow.optional.string,
            info_color: ow.optional.string,

            primary: ow.optional.string,
            primary_variant: ow.optional.string,
            primary_text_color: ow.optional.string,
            primary_background_color: ow.optional.string,
            on_primary_color: ow.optional.string,

            secondary: ow.optional.string,
            secondary_variant: ow.optional.string,
            secondary_text_color: ow.optional.string,
            secondary_background_color: ow.optional.string,
            on_secondary_color: ow.optional.string,

            pay_button_label: ow.optional.string,
            show_method_logo: ow.optional.boolean,
          }),
        })
      );
      if (config.flow === "iframe") {
        if (!config.frameId) {
          config.frameId = "payment_widget";
        }

        /** We pass config to reinit */
        const CommunicationService = new EventService(config);

        /**
         * POST MESSAGE LISTENERS INITIALIZE
         */
        CommunicationService.addEventListener();
        CommunicationService.bindEventListener("reinit", _reinit);
        CommunicationService.bindEventListener("delete", _close);
        CommunicationService.bindEventListener("close", _close);

        /**
         * If already exists iframe with existed ID - he will be rerendered
         * */
        const paymentIframe = document.getElementById(config.frameId);
        if (paymentIframe) {
          _reinit(config);
          return;
        }

        /**
         * @returns iframe src attribute;
         */
        config.src = buildFrameSrc(config);
        const iFrame = initializeIframe(config);
        mount(iFrame, document.getElementById(config.selector));
      } else {
        // Redirect flow
        const path = buildFrameSrc(config);
        window.open(path, "_blank");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const _close = (config) => {
    const frameToClose = document.getElementById(config.frameId);
    if (frameToClose) {
      frameToClose.remove();
    }
  };

  const _reinit = (config) => {
    _close(config);
    _init(config);
    return;
  };

  const initializeIframe = (props) =>
    render({
      attrs: {
        id: props.frameId,
        src: props.src || "",
        width: "100%",
        height: "100%",
        frameborder: "none",
      },
    });

  window.widget = {
    init: _init,
    reinit: _reinit,
    close: _close,
  };
})(window);
