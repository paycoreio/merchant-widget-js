(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("libName", [], factory);
	else if(typeof exports === 'object')
		exports["libName"] = factory();
	else
		root["libName"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ow/dist/index.js":
/*!***************************************!*\
  !*** ./node_modules/ow/dist/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {module.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(1)),i=r(8),o=r(2),s=r(17);t.validatorSymbol=Symbol("validators");t.Predicate=class{constructor(e,t={}){this.type=e,this.options=t,this.context={validators:[]},this.context=Object.assign({},this.context,this.options);const r=this.type[0].toLowerCase()+this.type.slice(1);this.addValidator({message:(e,t)=>`Expected ${t&&t.substring(this.type.length+1)||"argument"} to be of type \`${this.type}\` but received type \`${n.default(e)}\``,validator:e=>n.default[r](e)})}[o.testSymbol](e,t,r){for(const{validator:a,message:n}of this.context.validators){if(!0===this.options.optional&&void 0===e)continue;const o=a(e);if(!0===o)continue;let s=r;throw"function"==typeof r&&(s=r()),s=s?`${this.type} \`${s}\``:this.type,new i.ArgumentError(n(e,s,o),t)}}get[t.validatorSymbol](){return this.context.validators}get not(){return s.not(this)}is(e){return this.addValidator({message:(e,t,r)=>r?`(${t}) ${r}`:`Expected ${t} \`${e}\` to pass custom validation function`,validator:e})}addValidator(e){return this.context.validators.push(e),this}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a="undefined"==typeof URL?r(16).URL:URL,n=Object.prototype.toString,i=e=>t=>typeof t===e,o=e=>!d.nullOrUndefined(e)&&!d.nullOrUndefined(e.constructor)&&d.function_(e.constructor.isBuffer)&&e.constructor.isBuffer(e),s=e=>{const t=n.call(e).slice(8,-1);return t||null},u=e=>t=>s(t)===e;function d(e){switch(e){case null:return"null";case!0:case!1:return"boolean"}switch(typeof e){case"undefined":return"undefined";case"string":return"string";case"number":return"number";case"symbol":return"symbol"}if(d.function_(e))return"Function";if(d.observable(e))return"Observable";if(Array.isArray(e))return"Array";if(o(e))return"Buffer";const t=s(e);if(t)return t;if(e instanceof String||e instanceof Boolean||e instanceof Number)throw new TypeError("Please don't use object wrappers for primitive types");return"Object"}!function(e){const t=e=>"object"==typeof e;e.undefined=i("undefined"),e.string=i("string"),e.number=i("number"),e.function_=i("function"),e.null_=(e=>null===e),e.class_=(t=>e.function_(t)&&t.toString().startsWith("class ")),e.boolean=(e=>!0===e||!1===e),e.symbol=i("symbol"),e.numericString=(t=>e.string(t)&&t.length>0&&!Number.isNaN(Number(t))),e.array=Array.isArray,e.buffer=o,e.nullOrUndefined=(t=>e.null_(t)||e.undefined(t)),e.object=(r=>!e.nullOrUndefined(r)&&(e.function_(r)||t(r))),e.iterable=(t=>!e.nullOrUndefined(t)&&e.function_(t[Symbol.iterator])),e.asyncIterable=(t=>!e.nullOrUndefined(t)&&e.function_(t[Symbol.asyncIterator])),e.generator=(t=>e.iterable(t)&&e.function_(t.next)&&e.function_(t.throw)),e.nativePromise=(e=>u("Promise")(e));e.promise=(r=>e.nativePromise(r)||(r=>!e.null_(r)&&t(r)&&e.function_(r.then)&&e.function_(r.catch))(r)),e.generatorFunction=u("GeneratorFunction"),e.asyncFunction=u("AsyncFunction"),e.boundFunction=(t=>e.function_(t)&&!t.hasOwnProperty("prototype")),e.regExp=u("RegExp"),e.date=u("Date"),e.error=u("Error"),e.map=(e=>u("Map")(e)),e.set=(e=>u("Set")(e)),e.weakMap=(e=>u("WeakMap")(e)),e.weakSet=(e=>u("WeakSet")(e)),e.int8Array=u("Int8Array"),e.uint8Array=u("Uint8Array"),e.uint8ClampedArray=u("Uint8ClampedArray"),e.int16Array=u("Int16Array"),e.uint16Array=u("Uint16Array"),e.int32Array=u("Int32Array"),e.uint32Array=u("Uint32Array"),e.float32Array=u("Float32Array"),e.float64Array=u("Float64Array"),e.arrayBuffer=u("ArrayBuffer"),e.sharedArrayBuffer=u("SharedArrayBuffer"),e.dataView=u("DataView"),e.directInstanceOf=((e,t)=>Object.getPrototypeOf(e)===t.prototype),e.urlInstance=(e=>u("URL")(e)),e.urlString=(t=>{if(!e.string(t))return!1;try{return new a(t),!0}catch(e){return!1}}),e.truthy=(e=>Boolean(e)),e.falsy=(e=>!e),e.nan=(e=>Number.isNaN(e));const r=new Set(["undefined","string","number","boolean","symbol"]);e.primitive=(t=>e.null_(t)||r.has(typeof t)),e.integer=(e=>Number.isInteger(e)),e.safeInteger=(e=>Number.isSafeInteger(e)),e.plainObject=(e=>{let t;return"Object"===s(e)&&(null===(t=Object.getPrototypeOf(e))||t===Object.getPrototypeOf({}))});const n=new Set(["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]);e.typedArray=(e=>{const t=s(e);return null!==t&&n.has(t)});e.arrayLike=(t=>!e.nullOrUndefined(t)&&!e.function_(t)&&(t=>e.safeInteger(t)&&t>-1)(t.length)),e.inRange=((t,r)=>{if(e.number(r))return t>=Math.min(0,r)&&t<=Math.max(r,0);if(e.array(r)&&2===r.length)return t>=Math.min(...r)&&t<=Math.max(...r);throw new TypeError(`Invalid range: ${JSON.stringify(r)}`)});const d=["innerHTML","ownerDocument","style","attributes","nodeValue"];e.domElement=(t=>e.object(t)&&1===t.nodeType&&e.string(t.nodeName)&&!e.plainObject(t)&&d.every(e=>e in t)),e.observable=(e=>!!e&&(!(!e[Symbol.observable]||e!==e[Symbol.observable]())||!(!e["@@observable"]||e!==e["@@observable"]()))),e.nodeStream=(r=>!e.nullOrUndefined(r)&&t(r)&&e.function_(r.pipe)&&!e.observable(r)),e.infinite=(e=>e===1/0||e===-1/0);const c=t=>r=>e.integer(r)&&Math.abs(r%2)===t;e.even=c(0),e.odd=c(1);e.emptyArray=(t=>e.array(t)&&0===t.length),e.nonEmptyArray=(t=>e.array(t)&&t.length>0),e.emptyString=(t=>e.string(t)&&0===t.length),e.nonEmptyString=(t=>e.string(t)&&t.length>0),e.emptyStringOrWhitespace=(t=>e.emptyString(t)||(t=>e.string(t)&&!1===/\S/.test(t))(t)),e.emptyObject=(t=>e.object(t)&&!e.map(t)&&!e.set(t)&&0===Object.keys(t).length),e.nonEmptyObject=(t=>e.object(t)&&!e.map(t)&&!e.set(t)&&Object.keys(t).length>0),e.emptySet=(t=>e.set(t)&&0===t.size),e.nonEmptySet=(t=>e.set(t)&&t.size>0),e.emptyMap=(t=>e.map(t)&&0===t.size),e.nonEmptyMap=(t=>e.map(t)&&t.size>0);const l=(t,r,a)=>{if(!1===e.function_(r))throw new TypeError(`Invalid predicate: ${JSON.stringify(r)}`);if(0===a.length)throw new TypeError("Invalid number of values");return t.call(a,r)};e.any=((e,...t)=>l(Array.prototype.some,e,t)),e.all=((e,...t)=>l(Array.prototype.every,e,t))}(d||(d={})),Object.defineProperties(d,{class:{value:d.class_},function:{value:d.function_},null:{value:d.null_}}),t.default=d,e.exports=d,e.exports.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.testSymbol=Symbol("test"),t.isPredicate=(e=>Boolean(e&&e[t.testSymbol]))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r=5)=>{const a=[];for(const n of t)if(!e.has(n)&&(a.push(n),a.length===r))return a;return 0===a.length||a})},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(10)),i=r(11),o=r(0);t.Predicate=o.Predicate;const s=r(2),u=a(r(18)),d=a(r(6)),c=a(r(9)),l=(e,t,r)=>{if(!s.isPredicate(t)&&"string"!=typeof t)throw new TypeError(`Expected second argument to be a predicate or a string, got \`${typeof t}\``);if(s.isPredicate(t)){const r=n.default();c.default(e,()=>i.inferLabel(r),t)}else c.default(e,t,r)};Object.defineProperties(l,{isValid:{value:(e,t)=>{try{return l(e,t),!0}catch(e){return!1}}},create:{value:(e,t)=>r=>{if(s.isPredicate(e)){const t=n.default();c.default(r,()=>i.inferLabel(t),e)}else c.default(r,e,t)}}}),t.default=d.default(u.default(l));var f=r(6);t.StringPredicate=f.StringPredicate,t.NumberPredicate=f.NumberPredicate,t.BooleanPredicate=f.BooleanPredicate,t.ArrayPredicate=f.ArrayPredicate,t.ObjectPredicate=f.ObjectPredicate,t.DatePredicate=f.DatePredicate,t.ErrorPredicate=f.ErrorPredicate,t.MapPredicate=f.MapPredicate,t.WeakMapPredicate=f.WeakMapPredicate,t.SetPredicate=f.SetPredicate,t.WeakSetPredicate=f.WeakSetPredicate,t.AnyPredicate=f.AnyPredicate},function(e,t,r){(function(e){var r=200,a="__lodash_hash_undefined__",n=1,i=2,o=9007199254740991,s="[object Arguments]",u="[object Array]",d="[object AsyncFunction]",c="[object Boolean]",l="[object Date]",f="[object Error]",p="[object Function]",g="[object GeneratorFunction]",h="[object Map]",y="[object Number]",m="[object Null]",v="[object Object]",b="[object Proxy]",_="[object RegExp]",$="[object Set]",P="[object String]",O="[object Symbol]",x="[object Undefined]",E="[object ArrayBuffer]",j="[object DataView]",S=/^\[object .+?Constructor\]$/,A=/^(?:0|[1-9]\d*)$/,w={};w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w[s]=w[u]=w[E]=w[c]=w[j]=w[l]=w[f]=w[p]=w[h]=w[y]=w[v]=w[_]=w[$]=w[P]=w["[object WeakMap]"]=!1;var V="object"==typeof global&&global&&global.Object===Object&&global,M="object"==typeof self&&self&&self.Object===Object&&self,k=V||M||Function("return this")(),z=t&&!t.nodeType&&t,N=z&&"object"==typeof e&&e&&!e.nodeType&&e,I=N&&N.exports===z,T=I&&V.process,U=function(){try{return T&&T.binding&&T.binding("util")}catch(e){}}(),J=U&&U.isTypedArray;function D(e,t){for(var r=-1,a=null==e?0:e.length;++r<a;)if(t(e[r],r,e))return!0;return!1}function W(e){var t=-1,r=Array(e.size);return e.forEach(function(e,a){r[++t]=[a,e]}),r}function q(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}var B,R,F,L=Array.prototype,C=Function.prototype,K=Object.prototype,G=k["__core-js_shared__"],H=C.toString,Q=K.hasOwnProperty,X=(B=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",Y=K.toString,Z=RegExp("^"+H.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ee=I?k.Buffer:void 0,te=k.Symbol,re=k.Uint8Array,ae=K.propertyIsEnumerable,ne=L.splice,ie=te?te.toStringTag:void 0,oe=Object.getOwnPropertySymbols,se=ee?ee.isBuffer:void 0,ue=(R=Object.keys,F=Object,function(e){return R(F(e))}),de=Ue(k,"DataView"),ce=Ue(k,"Map"),le=Ue(k,"Promise"),fe=Ue(k,"Set"),pe=Ue(k,"WeakMap"),ge=Ue(Object,"create"),he=qe(de),ye=qe(ce),me=qe(le),ve=qe(fe),be=qe(pe),_e=te?te.prototype:void 0,$e=_e?_e.valueOf:void 0;function Pe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Oe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Ee(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new xe;++t<r;)this.add(e[t])}function je(e){var t=this.__data__=new Oe(e);this.size=t.size}function Se(e,t){var r=Fe(e),a=!r&&Re(e),n=!r&&!a&&Le(e),i=!r&&!a&&!n&&Qe(e),o=r||a||n||i,s=o?function(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}(e.length,String):[],u=s.length;for(var d in e)!t&&!Q.call(e,d)||o&&("length"==d||n&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||We(d,u))||s.push(d);return s}function Ae(e,t){for(var r=e.length;r--;)if(Be(e[r][0],t))return r;return-1}function we(e){return null==e?void 0===e?x:m:ie&&ie in Object(e)?function(e){var t=Q.call(e,ie),r=e[ie];try{e[ie]=void 0;var a=!0}catch(e){}var n=Y.call(e);a&&(t?e[ie]=r:delete e[ie]);return n}(e):function(e){return Y.call(e)}(e)}function Ve(e){return He(e)&&we(e)==s}function Me(e,t,r,a,o){return e===t||(null==e||null==t||!He(e)&&!He(t)?e!=e&&t!=t:function(e,t,r,a,o,d){var p=Fe(e),g=Fe(t),m=p?u:De(e),b=g?u:De(t),x=(m=m==s?v:m)==v,S=(b=b==s?v:b)==v,A=m==b;if(A&&Le(e)){if(!Le(t))return!1;p=!0,x=!1}if(A&&!x)return d||(d=new je),p||Qe(e)?Ne(e,t,r,a,o,d):function(e,t,r,a,o,s,u){switch(r){case j:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case E:return!(e.byteLength!=t.byteLength||!s(new re(e),new re(t)));case c:case l:case y:return Be(+e,+t);case f:return e.name==t.name&&e.message==t.message;case _:case P:return e==t+"";case h:var d=W;case $:var p=a&n;if(d||(d=q),e.size!=t.size&&!p)return!1;var g=u.get(e);if(g)return g==t;a|=i,u.set(e,t);var m=Ne(d(e),d(t),a,o,s,u);return u.delete(e),m;case O:if($e)return $e.call(e)==$e.call(t)}return!1}(e,t,m,r,a,o,d);if(!(r&n)){var w=x&&Q.call(e,"__wrapped__"),V=S&&Q.call(t,"__wrapped__");if(w||V){var M=w?e.value():e,k=V?t.value():t;return d||(d=new je),o(M,k,r,a,d)}}if(!A)return!1;return d||(d=new je),function(e,t,r,a,i,o){var s=r&n,u=Ie(e),d=u.length,c=Ie(t).length;if(d!=c&&!s)return!1;for(var l=d;l--;){var f=u[l];if(!(s?f in t:Q.call(t,f)))return!1}var p=o.get(e);if(p&&o.get(t))return p==t;var g=!0;o.set(e,t),o.set(t,e);for(var h=s;++l<d;){f=u[l];var y=e[f],m=t[f];if(a)var v=s?a(m,y,f,t,e,o):a(y,m,f,e,t,o);if(!(void 0===v?y===m||i(y,m,r,a,o):v)){g=!1;break}h||(h="constructor"==f)}if(g&&!h){var b=e.constructor,_=t.constructor;b!=_&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(g=!1)}return o.delete(e),o.delete(t),g}(e,t,r,a,o,d)}(e,t,r,a,Me,o))}function ke(e){return!(!Ge(e)||(t=e,X&&X in t))&&(Ce(e)?Z:S).test(qe(e));var t}function ze(e){if(r=(t=e)&&t.constructor,a="function"==typeof r&&r.prototype||K,t!==a)return ue(e);var t,r,a,n=[];for(var i in Object(e))Q.call(e,i)&&"constructor"!=i&&n.push(i);return n}function Ne(e,t,r,a,o,s){var u=r&n,d=e.length,c=t.length;if(d!=c&&!(u&&c>d))return!1;var l=s.get(e);if(l&&s.get(t))return l==t;var f=-1,p=!0,g=r&i?new Ee:void 0;for(s.set(e,t),s.set(t,e);++f<d;){var h=e[f],y=t[f];if(a)var m=u?a(y,h,f,t,e,s):a(h,y,f,e,t,s);if(void 0!==m){if(m)continue;p=!1;break}if(g){if(!D(t,function(e,t){if(n=t,!g.has(n)&&(h===e||o(h,e,r,a,s)))return g.push(t);var n})){p=!1;break}}else if(h!==y&&!o(h,y,r,a,s)){p=!1;break}}return s.delete(e),s.delete(t),p}function Ie(e){return function(e,t,r){var a=t(e);return Fe(e)?a:function(e,t){for(var r=-1,a=t.length,n=e.length;++r<a;)e[n+r]=t[r];return e}(a,r(e))}(e,Xe,Je)}function Te(e,t){var r,a,n=e.__data__;return("string"==(a=typeof(r=t))||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==r:null===r)?n["string"==typeof t?"string":"hash"]:n.map}function Ue(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return ke(r)?r:void 0}Pe.prototype.clear=function(){this.__data__=ge?ge(null):{},this.size=0},Pe.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Pe.prototype.get=function(e){var t=this.__data__;if(ge){var r=t[e];return r===a?void 0:r}return Q.call(t,e)?t[e]:void 0},Pe.prototype.has=function(e){var t=this.__data__;return ge?void 0!==t[e]:Q.call(t,e)},Pe.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ge&&void 0===t?a:t,this},Oe.prototype.clear=function(){this.__data__=[],this.size=0},Oe.prototype.delete=function(e){var t=this.__data__,r=Ae(t,e);return!(r<0||(r==t.length-1?t.pop():ne.call(t,r,1),--this.size,0))},Oe.prototype.get=function(e){var t=this.__data__,r=Ae(t,e);return r<0?void 0:t[r][1]},Oe.prototype.has=function(e){return Ae(this.__data__,e)>-1},Oe.prototype.set=function(e,t){var r=this.__data__,a=Ae(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this},xe.prototype.clear=function(){this.size=0,this.__data__={hash:new Pe,map:new(ce||Oe),string:new Pe}},xe.prototype.delete=function(e){var t=Te(this,e).delete(e);return this.size-=t?1:0,t},xe.prototype.get=function(e){return Te(this,e).get(e)},xe.prototype.has=function(e){return Te(this,e).has(e)},xe.prototype.set=function(e,t){var r=Te(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this},Ee.prototype.add=Ee.prototype.push=function(e){return this.__data__.set(e,a),this},Ee.prototype.has=function(e){return this.__data__.has(e)},je.prototype.clear=function(){this.__data__=new Oe,this.size=0},je.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},je.prototype.get=function(e){return this.__data__.get(e)},je.prototype.has=function(e){return this.__data__.has(e)},je.prototype.set=function(e,t){var a=this.__data__;if(a instanceof Oe){var n=a.__data__;if(!ce||n.length<r-1)return n.push([e,t]),this.size=++a.size,this;a=this.__data__=new xe(n)}return a.set(e,t),this.size=a.size,this};var Je=oe?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,a=null==e?0:e.length,n=0,i=[];++r<a;){var o=e[r];t(o,r,e)&&(i[n++]=o)}return i}(oe(e),function(t){return ae.call(e,t)}))}:function(){return[]},De=we;function We(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||A.test(e))&&e>-1&&e%1==0&&e<t}function qe(e){if(null!=e){try{return H.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Be(e,t){return e===t||e!=e&&t!=t}(de&&De(new de(new ArrayBuffer(1)))!=j||ce&&De(new ce)!=h||le&&"[object Promise]"!=De(le.resolve())||fe&&De(new fe)!=$||pe&&"[object WeakMap]"!=De(new pe))&&(De=function(e){var t=we(e),r=t==v?e.constructor:void 0,a=r?qe(r):"";if(a)switch(a){case he:return j;case ye:return h;case me:return"[object Promise]";case ve:return $;case be:return"[object WeakMap]"}return t});var Re=Ve(function(){return arguments}())?Ve:function(e){return He(e)&&Q.call(e,"callee")&&!ae.call(e,"callee")},Fe=Array.isArray;var Le=se||function(){return!1};function Ce(e){if(!Ge(e))return!1;var t=we(e);return t==p||t==g||t==d||t==b}function Ke(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}function Ge(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function He(e){return null!=e&&"object"==typeof e}var Qe=J?function(e){return function(t){return e(t)}}(J):function(e){return He(e)&&Ke(e.length)&&!!w[we(e)]};function Xe(e){return null!=(t=e)&&Ke(t.length)&&!Ce(t)?Se(e):ze(e);var t}e.exports=function(e,t){return Me(e,t)}}).call(this,r(24)(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(19);t.StringPredicate=a.StringPredicate;const n=r(21);t.NumberPredicate=n.NumberPredicate;const i=r(22);t.BooleanPredicate=i.BooleanPredicate;const o=r(0),s=r(23);t.ArrayPredicate=s.ArrayPredicate;const u=r(25);t.ObjectPredicate=u.ObjectPredicate;const d=r(30);t.DatePredicate=d.DatePredicate;const c=r(31);t.ErrorPredicate=c.ErrorPredicate;const l=r(32);t.MapPredicate=l.MapPredicate;const f=r(33);t.WeakMapPredicate=f.WeakMapPredicate;const p=r(34);t.SetPredicate=p.SetPredicate;const g=r(35);t.WeakSetPredicate=g.WeakSetPredicate;const h=r(36);t.AnyPredicate=h.AnyPredicate,t.default=((e,t)=>(Object.defineProperties(e,{string:{get:()=>new a.StringPredicate(t)},number:{get:()=>new n.NumberPredicate(t)},boolean:{get:()=>new i.BooleanPredicate(t)},undefined:{get:()=>new o.Predicate("undefined",t)},null:{get:()=>new o.Predicate("null",t)},nullOrUndefined:{get:()=>new o.Predicate("nullOrUndefined",t)},nan:{get:()=>new o.Predicate("nan",t)},symbol:{get:()=>new o.Predicate("symbol",t)},array:{get:()=>new s.ArrayPredicate(t)},object:{get:()=>new u.ObjectPredicate(t)},date:{get:()=>new d.DatePredicate(t)},error:{get:()=>new c.ErrorPredicate(t)},map:{get:()=>new l.MapPredicate(t)},weakMap:{get:()=>new f.WeakMapPredicate(t)},set:{get:()=>new p.SetPredicate(t)},weakSet:{get:()=>new g.WeakSetPredicate(t)},function:{get:()=>new o.Predicate("Function",t)},buffer:{get:()=>new o.Predicate("Buffer",t)},regExp:{get:()=>new o.Predicate("RegExp",t)},promise:{get:()=>new o.Predicate("Promise",t)},typedArray:{get:()=>new o.Predicate("TypedArray",t)},int8Array:{get:()=>new o.Predicate("Int8Array",t)},uint8Array:{get:()=>new o.Predicate("Uint8Array",t)},uint8ClampedArray:{get:()=>new o.Predicate("Uint8ClampedArray",t)},int16Array:{get:()=>new o.Predicate("Int16Array",t)},uint16Array:{get:()=>new o.Predicate("Uint16Array",t)},int32Array:{get:()=>new o.Predicate("Int32Array",t)},uint32Array:{get:()=>new o.Predicate("Uint32Array",t)},float32Array:{get:()=>new o.Predicate("Float32Array",t)},float64Array:{get:()=>new o.Predicate("Float64Array",t)},arrayBuffer:{get:()=>new o.Predicate("ArrayBuffer",t)},dataView:{get:()=>new o.Predicate("DataView",t)},iterable:{get:()=>new o.Predicate("Iterable",t)},any:{value:(...e)=>new h.AnyPredicate(e,t)}}),e))},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(4));t.default=((e,t)=>{try{for(const r of e)n.default(r,t);return!0}catch(e){return e.message}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ArgumentError=class extends Error{constructor(e,t){super(e),Error.captureStackTrace(this,t),this.name="ArgumentError"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(2);t.default=function e(t,r,n){n[a.testSymbol](t,e,r)}},function(e,t,r){"use strict";const a=()=>{const e=Error.prepareStackTrace;Error.prepareStackTrace=((e,t)=>t);const t=(new Error).stack.slice(1);return Error.prepareStackTrace=e,t};e.exports=a,e.exports.default=a},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(12)),i=a(r(14)),o=a(r(15)),s=/^.*?\((.*?)[,)]/;t.inferLabel=(e=>{if(!o.default)return;const t=n.default(),r=e[1],a=r.getFileName(),u=r.getLineNumber(),d=r.getColumnNumber();if(!a||null===u||null===d)return;let c=[];try{c=t.readFileSync(a,"utf8").split("\n")}catch(e){return}let l=c[u-1];if(!l)return;l=l.slice(d-1);const f=s.exec(l);if(!f||!f[1])return;const p=f[1];return i.default(p)||i.default(p.split(".").pop())?p:void 0})},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(13));t.default=(()=>n.default("fs"))},function(module,exports,__webpack_require__){"use strict";let customRequire;Object.defineProperty(exports,"__esModule",{value:!0});try{customRequire="function"===global.__non_webpack_require__?global.__non_webpack_require__:eval("require")}catch(e){customRequire=(()=>{})}exports.default=customRequire},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=/^[a-z$_][a-z$_0-9]*$/i,n=new Set(["undefined","null","true","false","super","this","Infinity","NaN"]);t.default=(e=>e&&!n.has(e)&&a.test(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Boolean("undefined"!=typeof process&&process.versions&&process.versions.node)},function(e,t){e.exports=__webpack_require__(/*! url */ "./node_modules/url/url.js")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(0);t.not=(e=>{const t=e.addValidator;return e.addValidator=(r=>{const n=r.validator,i=r.message;return r.message=((e,t)=>`[NOT] ${i(e,t)}`),r.validator=(e=>!n(e)),e[a.validatorSymbol].push(r),e.addValidator=t,e}),e})},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(6));t.default=(e=>(Object.defineProperties(e,{optional:{get:()=>n.default({},{optional:!0})}}),e))},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(20)),i=r(0);t.StringPredicate=class extends i.Predicate{constructor(e){super("string",e)}length(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have length \`${e}\`, got \`${t}\``,validator:t=>t.length===e})}minLength(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a minimum length of \`${e}\`, got \`${t}\``,validator:t=>t.length>=e})}maxLength(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a maximum length of \`${e}\`, got \`${t}\``,validator:t=>t.length<=e})}matches(e){return this.addValidator({message:(t,r)=>`Expected ${r} to match \`${e}\`, got \`${t}\``,validator:t=>e.test(t)})}startsWith(e){return this.addValidator({message:(t,r)=>`Expected ${r} to start with \`${e}\`, got \`${t}\``,validator:t=>t.startsWith(e)})}endsWith(e){return this.addValidator({message:(t,r)=>`Expected ${r} to end with \`${e}\`, got \`${t}\``,validator:t=>t.endsWith(e)})}includes(e){return this.addValidator({message:(t,r)=>`Expected ${r} to include \`${e}\`, got \`${t}\``,validator:t=>t.includes(e)})}oneOf(e){return this.addValidator({message:(t,r)=>{let a=JSON.stringify(e);if(e.length>10){const t=e.length-10;a=JSON.stringify(e.slice(0,10)).replace(/]$/,`,…+${t} more]`)}return`Expected ${r} to be one of \`${a}\`, got \`${t}\``},validator:t=>e.includes(t)})}get empty(){return this.addValidator({message:(e,t)=>`Expected ${t} to be empty, got \`${e}\``,validator:e=>""===e})}get nonEmpty(){return this.addValidator({message:(e,t)=>`Expected ${t} to not be empty`,validator:e=>""!==e})}equals(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be equal to \`${e}\`, got \`${t}\``,validator:t=>t===e})}get alphanumeric(){return this.addValidator({message:(e,t)=>`Expected ${t} to be alphanumeric, got \`${e}\``,validator:e=>/^[a-z\d]+$/i.test(e)})}get alphabetical(){return this.addValidator({message:(e,t)=>`Expected ${t} to be alphabetical, got \`${e}\``,validator:e=>/^[a-z]+$/gi.test(e)})}get numeric(){return this.addValidator({message:(e,t)=>`Expected ${t} to be numeric, got \`${e}\``,validator:e=>/^(\+|-)?\d+$/i.test(e)})}get date(){return this.addValidator({message:(e,t)=>`Expected ${t} to be a date, got \`${e}\``,validator:n.default})}get lowercase(){return this.addValidator({message:(e,t)=>`Expected ${t} to be lowercase, got \`${e}\``,validator:e=>""!==e.trim()&&e===e.toLowerCase()})}get uppercase(){return this.addValidator({message:(e,t)=>`Expected ${t} to be uppercase, got \`${e}\``,validator:e=>""!==e.trim()&&e===e.toUpperCase()})}}},function(e,t,r){"use strict";e.exports=function(e){return!isNaN(Date.parse(e))}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(1)),i=r(0);t.NumberPredicate=class extends i.Predicate{constructor(e){super("number",e)}inRange(e,t){return this.addValidator({message:(r,a)=>`Expected ${a} to be in range [${e}..${t}], got ${r}`,validator:r=>n.default.inRange(r,[e,t])})}greaterThan(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be greater than ${e}, got ${t}`,validator:t=>t>e})}greaterThanOrEqual(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be greater than or equal to ${e}, got ${t}`,validator:t=>t>=e})}lessThan(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be less than ${e}, got ${t}`,validator:t=>t<e})}lessThanOrEqual(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be less than or equal to ${e}, got ${t}`,validator:t=>t<=e})}equal(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be equal to ${e}, got ${t}`,validator:t=>t===e})}get integer(){return this.addValidator({message:(e,t)=>`Expected ${t} to be an integer, got ${e}`,validator:e=>n.default.integer(e)})}get finite(){return this.addValidator({message:(e,t)=>`Expected ${t} to be finite, got ${e}`,validator:e=>!n.default.infinite(e)})}get infinite(){return this.addValidator({message:(e,t)=>`Expected ${t} to be infinite, got ${e}`,validator:e=>n.default.infinite(e)})}get positive(){return this.addValidator({message:(e,t)=>`Expected ${t} to be positive, got ${e}`,validator:e=>e>0})}get negative(){return this.addValidator({message:(e,t)=>`Expected ${t} to be negative, got ${e}`,validator:e=>e<0})}get integerOrInfinite(){return this.addValidator({message:(e,t)=>`Expected ${t} to be an integer or infinite, got ${e}`,validator:e=>n.default.integer(e)||n.default.infinite(e)})}get uint8(){return this.integer.inRange(0,255)}get uint16(){return this.integer.inRange(0,65535)}get uint32(){return this.integer.inRange(0,4294967295)}get int8(){return this.integer.inRange(-128,127)}get int16(){return this.integer.inRange(-32768,32767)}get int32(){return this.integer.inRange(-2147483648,2147483647)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(0);t.BooleanPredicate=class extends a.Predicate{constructor(e){super("boolean",e)}get true(){return this.addValidator({message:(e,t)=>`Expected ${t} to be true, got ${e}`,validator:e=>!0===e})}get false(){return this.addValidator({message:(e,t)=>`Expected ${t} to be false, got ${e}`,validator:e=>!1===e})}}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(5)),i=a(r(4)),o=r(0);t.ArrayPredicate=class extends o.Predicate{constructor(e){super("array",e)}length(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have length \`${e}\`, got \`${t.length}\``,validator:t=>t.length===e})}minLength(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a minimum length of \`${e}\`, got \`${t.length}\``,validator:t=>t.length>=e})}maxLength(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a maximum length of \`${e}\`, got \`${t.length}\``,validator:t=>t.length<=e})}startsWith(e){return this.addValidator({message:(t,r)=>`Expected ${r} to start with \`${e}\`, got \`${t[0]}\``,validator:t=>t[0]===e})}endsWith(e){return this.addValidator({message:(t,r)=>`Expected ${r} to end with \`${e}\`, got \`${t[t.length-1]}\``,validator:t=>t[t.length-1]===e})}includes(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to include all elements of \`${JSON.stringify(e)}\`, got \`${JSON.stringify(t)}\``,validator:t=>e.every(e=>-1!==t.indexOf(e))})}includesAny(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to include any element of \`${JSON.stringify(e)}\`, got \`${JSON.stringify(t)}\``,validator:t=>e.some(e=>-1!==t.indexOf(e))})}get empty(){return this.addValidator({message:(e,t)=>`Expected ${t} to be empty, got \`${JSON.stringify(e)}\``,validator:e=>0===e.length})}get nonEmpty(){return this.addValidator({message:(e,t)=>`Expected ${t} to not be empty`,validator:e=>e.length>0})}deepEqual(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be deeply equal to \`${JSON.stringify(e)}\`, got \`${JSON.stringify(t)}\``,validator:t=>n.default(t,e)})}ofType(e){let t;return this.addValidator({message:(e,r)=>`(${r}) ${t}`,validator:r=>{try{for(const t of r)i.default(t,e);return!0}catch(e){return t=e.message,!1}}})}}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(1)),i=a(r(26)),o=a(r(5)),s=r(0),u=a(r(3)),d=a(r(7)),c=a(r(28)),l=r(29);t.ObjectPredicate=class extends s.Predicate{constructor(e){super("object",e)}get plain(){return this.addValidator({message:(e,t)=>`Expected ${t} to be a plain object`,validator:e=>n.default.plainObject(e)})}get empty(){return this.addValidator({message:(e,t)=>`Expected ${t} to be empty, got \`${JSON.stringify(e)}\``,validator:e=>0===Object.keys(e).length})}get nonEmpty(){return this.addValidator({message:(e,t)=>`Expected ${t} to not be empty`,validator:e=>Object.keys(e).length>0})}valuesOfType(e){return this.addValidator({message:(e,t,r)=>`(${t}) ${r}`,validator:t=>{const r=Object.keys(t).map(e=>t[e]);return d.default(r,e)}})}deepValuesOfType(e){return this.addValidator({message:(e,t,r)=>`(${t}) ${r}`,validator:t=>c.default(t,e)})}deepEqual(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be deeply equal to \`${JSON.stringify(e)}\`, got \`${JSON.stringify(t)}\``,validator:t=>o.default(t,e)})}instanceOf(e){return this.addValidator({message:(t,r)=>{let a=t.constructor.name;return a&&"Object"!==a||(a=JSON.stringify(t)),`Expected ${r} \`${a}\` to be of type \`${e.name}\``},validator:t=>t instanceof e})}hasKeys(...e){return this.addValidator({message:(e,t,r)=>`Expected ${t} to have keys \`${JSON.stringify(r)}\``,validator:t=>u.default({has:e=>i.default.has(t,e)},e)})}hasAnyKeys(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to have any key of \`${JSON.stringify(e)}\``,validator:t=>e.some(e=>i.default.has(t,e))})}partialShape(e){return this.addValidator({message:(e,t,r)=>`${r.replace("Expected","Expected property")} in ${t}`,validator:t=>l.partial(t,e)})}exactShape(e){return this.addValidator({message:(e,t,r)=>`${r.replace("Expected","Expected property")} in ${t}`,validator:t=>l.exact(t,e)})}}},function(e,t,r){"use strict";const a=r(27);function n(e){const t=e.split("."),r=[];for(let e=0;e<t.length;e++){let a=t[e];for(;"\\"===a[a.length-1]&&void 0!==t[e+1];)a=a.slice(0,-1)+".",a+=t[++e];r.push(a)}return r}e.exports={get(e,t,r){if(!a(e)||"string"!=typeof t)return void 0===r?e:r;const i=n(t);for(let t=0;t<i.length;t++){if(!Object.prototype.propertyIsEnumerable.call(e,i[t]))return r;if(null==(e=e[i[t]])){if(t!==i.length-1)return r;break}}return e},set(e,t,r){if(!a(e)||"string"!=typeof t)return e;const i=e,o=n(t);for(let t=0;t<o.length;t++){const n=o[t];a(e[n])||(e[n]={}),t===o.length-1&&(e[n]=r),e=e[n]}return i},delete(e,t){if(!a(e)||"string"!=typeof t)return;const r=n(t);for(let t=0;t<r.length;t++){const n=r[t];if(t===r.length-1)return void delete e[n];if(e=e[n],!a(e))return}},has(e,t){if(!a(e)||"string"!=typeof t)return!1;const r=n(t);for(let t=0;t<r.length;t++){if(!a(e))return!1;if(!(r[t]in e))return!1;e=e[r[t]]}return!0}}},function(e,t,r){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(1)),i=a(r(4)),o=(e,t)=>n.default.plainObject(e)?Object.keys(e).every(r=>o(e[r],t)):(i.default(e,t),!0);t.default=((e,t)=>{try{return o(e,t)}catch(e){return e.message}})},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(1)),i=a(r(9)),o=r(2);t.partial=function e(t,r,a){try{for(const s of Object.keys(r)){const u=a?`${a}.${s}`:s;if(o.isPredicate(r[s]))i.default(t[s],u,r[s]);else if(n.default.plainObject(r[s])){const a=e(t[s],r[s],u);if(!0!==a)return a}}return!0}catch(e){return e.message}},t.exact=function e(t,r,a){try{const s=new Set(Object.keys(t));for(const u of Object.keys(r)){s.delete(u);const d=a?`${a}.${u}`:u;if(o.isPredicate(r[u]))i.default(t[u],d,r[u]);else if(n.default.plainObject(r[u])){const a=e(t[u],r[u],d);if(!0!==a)return a}}if(s.size>0){const e=Array.from(s.keys())[0];return`Did not expect property \`${a?`${a}.${e}`:e}\` to exist, got \`${t[e]}\``}return!0}catch(e){return e.message}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(0);t.DatePredicate=class extends a.Predicate{constructor(e){super("date",e)}before(e){return this.addValidator({message:(t,r)=>`Expected ${r} ${t.toISOString()} to be before ${e.toISOString()}`,validator:t=>t.getTime()<e.getTime()})}after(e){return this.addValidator({message:(t,r)=>`Expected ${r} ${t.toISOString()} to be after ${e.toISOString()}`,validator:t=>t.getTime()>e.getTime()})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(0);t.ErrorPredicate=class extends a.Predicate{constructor(e){super("error",e)}name(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have name \`${e}\`, got \`${t.name}\``,validator:t=>t.name===e})}message(e){return this.addValidator({message:(t,r)=>`Expected ${r} message to be \`${e}\`, got \`${t.message}\``,validator:t=>t.message===e})}messageIncludes(e){return this.addValidator({message:(t,r)=>`Expected ${r} message to include \`${e}\`, got \`${t.message}\``,validator:t=>t.message.includes(e)})}hasKeys(...e){return this.addValidator({message:(t,r)=>`Expected ${r} message to have keys \`${e.join("`, `")}\``,validator:t=>e.every(e=>t.hasOwnProperty(e))})}instanceOf(e){return this.addValidator({message:(t,r)=>`Expected ${r} \`${t.name}\` to be of type \`${e.name}\``,validator:t=>t instanceof e})}get typeError(){return this.instanceOf(TypeError)}get evalError(){return this.instanceOf(EvalError)}get rangeError(){return this.instanceOf(RangeError)}get referenceError(){return this.instanceOf(ReferenceError)}get syntaxError(){return this.instanceOf(SyntaxError)}get uriError(){return this.instanceOf(URIError)}}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(5)),i=r(0),o=a(r(3)),s=a(r(7));t.MapPredicate=class extends i.Predicate{constructor(e){super("Map",e)}size(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have size \`${e}\`, got \`${t.size}\``,validator:t=>t.size===e})}minSize(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a minimum size of \`${e}\`, got \`${t.size}\``,validator:t=>t.size>=e})}maxSize(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a maximum size of \`${e}\`, got \`${t.size}\``,validator:t=>t.size<=e})}hasKeys(...e){return this.addValidator({message:(e,t,r)=>`Expected ${t} to have keys \`${JSON.stringify(r)}\``,validator:t=>o.default(t,e)})}hasAnyKeys(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to have any key of \`${JSON.stringify(e)}\``,validator:t=>e.some(e=>t.has(e))})}hasValues(...e){return this.addValidator({message:(e,t,r)=>`Expected ${t} to have values \`${JSON.stringify(r)}\``,validator:t=>o.default(new Set(t.values()),e)})}hasAnyValues(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to have any value of \`${JSON.stringify(e)}\``,validator:t=>{const r=new Set(t.values());return e.some(e=>r.has(e))}})}keysOfType(e){return this.addValidator({message:(e,t,r)=>`(${t}) ${r}`,validator:t=>s.default(t.keys(),e)})}valuesOfType(e){return this.addValidator({message:(e,t,r)=>`(${t}) ${r}`,validator:t=>s.default(t.values(),e)})}get empty(){return this.addValidator({message:(e,t)=>`Expected ${t} to be empty, got \`${JSON.stringify(Array.from(e))}\``,validator:e=>0===e.size})}get nonEmpty(){return this.addValidator({message:(e,t)=>`Expected ${t} to not be empty`,validator:e=>e.size>0})}deepEqual(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be deeply equal to \`${JSON.stringify(Array.from(e))}\`, got \`${JSON.stringify(Array.from(t))}\``,validator:t=>n.default(t,e)})}}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),i=a(r(3));t.WeakMapPredicate=class extends n.Predicate{constructor(e){super("WeakMap",e)}hasKeys(...e){return this.addValidator({message:(e,t,r)=>`Expected ${t} to have keys \`${JSON.stringify(r)}\``,validator:t=>i.default(t,e)})}hasAnyKeys(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to have any key of \`${JSON.stringify(e)}\``,validator:t=>e.some(e=>t.has(e))})}}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(5)),i=r(0),o=a(r(3)),s=a(r(7));t.SetPredicate=class extends i.Predicate{constructor(e){super("Set",e)}size(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have size \`${e}\`, got \`${t.size}\``,validator:t=>t.size===e})}minSize(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a minimum size of \`${e}\`, got \`${t.size}\``,validator:t=>t.size>=e})}maxSize(e){return this.addValidator({message:(t,r)=>`Expected ${r} to have a maximum size of \`${e}\`, got \`${t.size}\``,validator:t=>t.size<=e})}has(...e){return this.addValidator({message:(e,t,r)=>`Expected ${t} to have items \`${JSON.stringify(r)}\``,validator:t=>o.default(t,e)})}hasAny(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to have any item of \`${JSON.stringify(e)}\``,validator:t=>e.some(e=>t.has(e))})}ofType(e){return this.addValidator({message:(e,t,r)=>`(${t}) ${r}`,validator:t=>s.default(t,e)})}get empty(){return this.addValidator({message:(e,t)=>`Expected ${t} to be empty, got \`${JSON.stringify(Array.from(e))}\``,validator:e=>0===e.size})}get nonEmpty(){return this.addValidator({message:(e,t)=>`Expected ${t} to not be empty`,validator:e=>e.size>0})}deepEqual(e){return this.addValidator({message:(t,r)=>`Expected ${r} to be deeply equal to \`${JSON.stringify(Array.from(e))}\`, got \`${JSON.stringify(Array.from(t))}\``,validator:t=>n.default(t,e)})}}},function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),i=a(r(3));t.WeakSetPredicate=class extends n.Predicate{constructor(e){super("WeakSet",e)}has(...e){return this.addValidator({message:(e,t,r)=>`Expected ${t} to have items \`${JSON.stringify(r)}\``,validator:t=>i.default(t,e)})}hasAny(...e){return this.addValidator({message:(t,r)=>`Expected ${r} to have any item of \`${JSON.stringify(e)}\``,validator:t=>e.some(e=>t.has(e))})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(8),n=r(2);t.AnyPredicate=class{constructor(e,t={}){this.predicates=e,this.options=t}[n.testSymbol](e,t,r){const n=["Any predicate failed with the following errors:"];for(const a of this.predicates)try{return void t(e,r,a)}catch(t){if(void 0===e&&!0===this.options.optional)return;n.push(`- ${t.message}`)}throw new a.ArgumentError(n.join("\n"),t)}}}]);const __export__=module.exports.default;module.exports=__export__,module.exports.default=__export__;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === 'number' ? opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    formatter: formats.formatters[formats['default']],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/EventService.js":
/*!*****************************!*\
  !*** ./src/EventService.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class EventService {
  // FIXME: Maybe make some Promise Based event subscriber? 
  // Probably not yet  🥴;
  constructor(config) {
    this.addEventListener = this.addEventListener.bind(this);
    this.listener = this.listener.bind(this);
    this.listeners = {};
    this.config = config;
  }

  bindEventListener(eventName, hanlder) {
    this.listeners[eventName] = hanlder;
  }

  listener(event) {
    if (this.listeners[event.data]) {
      this.listeners[event.data](this.config);
    }
  }

  addEventListener() {
    if (window.addEventListener) {
      window.addEventListener("message", this.listener);
    } else {
      // IE8
      window.attachEvent("onmessage", this.listener);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EventService);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: stringify, resolveOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveOrigin", function() { return resolveOrigin; });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @param {String} obj The Object of config, to parse queiry
 * 
 */

const stringify = obj => {
  const stringifyedQS = qs__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(obj, {
    skipNulls: true
  });
  return stringifyedQS;
};
/**
 * Takes a URL and returns the origin
 * @param  {String} url The full URL being requested
 * @return {String}     The URLs origin
 */

const resolveOrigin = url => {
  const a = document.createElement('a');
  a.href = url;
  const protocol = a.protocol.length > 4 ? a.protocol : window.location.protocol;
  const host = a.host.length ? a.port === '80' || a.port === '443' ? a.hostname : a.host : window.location.host;
  return a.origin || `${protocol}//${host}`;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _mount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mount */ "./src/mount.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var ow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ow */ "./node_modules/ow/dist/index.js");
/* harmony import */ var ow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EventService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventService */ "./src/EventService.js");




 // FIXME: Do we need UMD instead if IIFE?
// Probably not yet  🥴;

(function (window, undefined) {
  const buildFrameSrc = ({
    // FIXME: move it to upper function
    baseUrl = 'https://com-dev.paycore.io/hpp',
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
    available_locales = null,
    customer = null,
    reference_id = null,
    metadata = null,
    lang = null,
    display = null,
    style = null,
    pay_button_label = null
  }) => {
    const qParams = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stringify"])({
      // Required params
      amount,
      currency,
      public_key,
      // Optional params
      description,
      expires,
      locale,
      available_locales,
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
      lang
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


  const _init = config => {
    try {
      ow__WEBPACK_IMPORTED_MODULE_3___default()(config, ow__WEBPACK_IMPORTED_MODULE_3___default.a.object.exactShape({
        flow: ow__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        selector: ow__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        public_key: ow__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        amount: ow__WEBPACK_IMPORTED_MODULE_3___default.a.number,
        currency: ow__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        baseUrl: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        styling: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.object,
        frameId: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        description: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        src: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        service: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        service_fields: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.array,
        cpi: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        expires: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.any(ow__WEBPACK_IMPORTED_MODULE_3___default.a.string, ow__WEBPACK_IMPORTED_MODULE_3___default.a.number),
        theme: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        locale: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        available_locales: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        reference_id: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        language: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        metadata: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.any(ow__WEBPACK_IMPORTED_MODULE_3___default.a.object, ow__WEBPACK_IMPORTED_MODULE_3___default.a.array),
        lang: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
        customer: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.object.exactShape({
          reference_id: ow__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          email: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          phone: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          name: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          date_of_birth: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string.matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/),
          individual_tax_id: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string.minLength(2).maxLength(100),
          metadata: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.any(ow__WEBPACK_IMPORTED_MODULE_3___default.a.object, ow__WEBPACK_IMPORTED_MODULE_3___default.a.array),
          address: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.object.exactShape({
            country: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
            city: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
            post_code: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
            region: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
            street: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
            full_address: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string
          })
        }),
        display: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.object.exactShape({
          hide_footer: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.boolean,
          hide_header: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.boolean,
          hide_progress_bar: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.boolean,
          hide_method_filter: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.boolean,
          hide_lifetime_counter: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.boolean
        }),
        style: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.object.exactShape({
          theme: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          font_family: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          success_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          warning_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          danger_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          info_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          primary: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          primary_variant: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          primary_text_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          primary_background_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          on_primary_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          secondary: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          secondary_variant: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          secondary_text_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          secondary_background_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          on_secondary_color: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          pay_button_label: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.string,
          show_method_logo: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.boolean
        })
      }));

      if (config.flow === 'iframe') {
        if (!config.frameId) {
          config.frameId = 'payment_widget';
        }
        /** We pass config to reinit */


        const CommunicationService = new _EventService__WEBPACK_IMPORTED_MODULE_4__["default"](config);
        /**
         * POST MESSAGE LISTENERS INITIALIZE
         */

        CommunicationService.addEventListener();
        CommunicationService.bindEventListener('reinit', _reinit);
        CommunicationService.bindEventListener('delete', _close);
        CommunicationService.bindEventListener('close', _close);
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
        Object(_mount__WEBPACK_IMPORTED_MODULE_1__["default"])(iFrame, document.getElementById(config.selector));
      } else {
        // Redirect flow
        const path = buildFrameSrc(config);
        window.open(path, '_blank');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const _close = config => {
    const frameToClose = document.getElementById(config.frameId);

    if (frameToClose) {
      frameToClose.remove();
    }
  };

  const _reinit = config => {
    _close(config);

    _init(config);

    return;
  };

  const initializeIframe = props => Object(_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attrs: {
      id: props.frameId,
      src: props.src || '',
      width: '100%',
      height: '100%',
      frameborder: 'none'
    }
  });

  window.widget = {
    init: _init,
    reinit: _reinit,
    close: _close
  };
})(window);

/***/ }),

/***/ "./src/mount.js":
/*!**********************!*\
  !*** ./src/mount.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (($node, $target) => {
  $target.appendChild($node);
  return $node;
});

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderIframe = ({
  attrs
}) => {
  const $el = document.createElement('iframe'); // Set attributes to iframe

  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  } // Returns an iframe


  return $el;
};

const render = node => {
  return renderIframe(node);
};

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJOYW1lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9saWJOYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy91cmwvdXJsLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvdXJsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL3NyYy9FdmVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL3NyYy9tb3VudC5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vc3JjL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJFdmVudFNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSIsImhhbmxkZXIiLCJldmVudCIsImRhdGEiLCJ3aW5kb3ciLCJhdHRhY2hFdmVudCIsInN0cmluZ2lmeSIsIm9iaiIsInN0cmluZ2lmeWVkUVMiLCJxcyIsInNraXBOdWxscyIsInJlc29sdmVPcmlnaW4iLCJ1cmwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInByb3RvY29sIiwibGVuZ3RoIiwibG9jYXRpb24iLCJob3N0IiwicG9ydCIsImhvc3RuYW1lIiwib3JpZ2luIiwidW5kZWZpbmVkIiwiYnVpbGRGcmFtZVNyYyIsImJhc2VVcmwiLCJwdWJsaWNfa2V5IiwiYW1vdW50IiwiY3VycmVuY3kiLCJzZXJ2aWNlIiwic2VydmljZV9maWVsZHMiLCJjcGkiLCJkZXNjcmlwdGlvbiIsImV4cGlyZXMiLCJ0aGVtZSIsImxvY2FsZSIsImF2YWlsYWJsZV9sb2NhbGVzIiwiY3VzdG9tZXIiLCJyZWZlcmVuY2VfaWQiLCJtZXRhZGF0YSIsImxhbmciLCJkaXNwbGF5Iiwic3R5bGUiLCJwYXlfYnV0dG9uX2xhYmVsIiwicVBhcmFtcyIsIl9pbml0Iiwib3ciLCJvYmplY3QiLCJleGFjdFNoYXBlIiwiZmxvdyIsInN0cmluZyIsInNlbGVjdG9yIiwibnVtYmVyIiwib3B0aW9uYWwiLCJzdHlsaW5nIiwiZnJhbWVJZCIsInNyYyIsImFycmF5IiwiYW55IiwibGFuZ3VhZ2UiLCJlbWFpbCIsInBob25lIiwibmFtZSIsImRhdGVfb2ZfYmlydGgiLCJtYXRjaGVzIiwiaW5kaXZpZHVhbF90YXhfaWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJhZGRyZXNzIiwiY291bnRyeSIsImNpdHkiLCJwb3N0X2NvZGUiLCJyZWdpb24iLCJzdHJlZXQiLCJmdWxsX2FkZHJlc3MiLCJoaWRlX2Zvb3RlciIsImJvb2xlYW4iLCJoaWRlX2hlYWRlciIsImhpZGVfcHJvZ3Jlc3NfYmFyIiwiaGlkZV9tZXRob2RfZmlsdGVyIiwiaGlkZV9saWZldGltZV9jb3VudGVyIiwiZm9udF9mYW1pbHkiLCJzdWNjZXNzX2NvbG9yIiwid2FybmluZ19jb2xvciIsImRhbmdlcl9jb2xvciIsImluZm9fY29sb3IiLCJwcmltYXJ5IiwicHJpbWFyeV92YXJpYW50IiwicHJpbWFyeV90ZXh0X2NvbG9yIiwicHJpbWFyeV9iYWNrZ3JvdW5kX2NvbG9yIiwib25fcHJpbWFyeV9jb2xvciIsInNlY29uZGFyeSIsInNlY29uZGFyeV92YXJpYW50Iiwic2Vjb25kYXJ5X3RleHRfY29sb3IiLCJzZWNvbmRhcnlfYmFja2dyb3VuZF9jb2xvciIsIm9uX3NlY29uZGFyeV9jb2xvciIsInNob3dfbWV0aG9kX2xvZ28iLCJDb21tdW5pY2F0aW9uU2VydmljZSIsIl9yZWluaXQiLCJfY2xvc2UiLCJwYXltZW50SWZyYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpRnJhbWUiLCJpbml0aWFsaXplSWZyYW1lIiwibW91bnQiLCJwYXRoIiwib3BlbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJmcmFtZVRvQ2xvc2UiLCJyZW1vdmUiLCJwcm9wcyIsInJlbmRlciIsImF0dHJzIiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwid2lkZ2V0IiwiaW5pdCIsInJlaW5pdCIsImNsb3NlIiwiJG5vZGUiLCIkdGFyZ2V0IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJJZnJhbWUiLCIkZWwiLCJrIiwidiIsIk9iamVjdCIsImVudHJpZXMiLCJzZXRBdHRyaWJ1dGUiLCJub2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGtGQUEyQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUsU0FBUyxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsaUJBQWlCLGtCQUFrQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0Ms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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVRYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtELEVBQUU7QUFDcEQ7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU8sV0FBVyxhQUFhO0FBQ2pEOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDck9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEtBQWU7QUFDbEMsUUFBTWEsR0FBRyxHQUFHbEgsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVosQ0FEa0MsQ0FHbEM7O0FBQ0EsT0FBSyxNQUFNLENBQUNrSCxDQUFELEVBQUlDLENBQUosQ0FBWCxJQUFxQkMsTUFBTSxDQUFDQyxPQUFQLENBQWVqQixLQUFmLENBQXJCLEVBQTRDO0FBQzFDYSxPQUFHLENBQUNLLFlBQUosQ0FBaUJKLENBQWpCLEVBQW9CQyxDQUFwQjtBQUNELEdBTmlDLENBT2xDOzs7QUFDQSxTQUFPRixHQUFQO0FBQ0QsQ0FURDs7QUFXQSxNQUFNZCxNQUFNLEdBQUlvQixJQUFELElBQVU7QUFDdkIsU0FBT1AsWUFBWSxDQUFDTyxJQUFELENBQW5CO0FBQ0QsQ0FGRDs7QUFJZXBCLHFFQUFmLEUiLCJmaWxlIjoibWVyY2hhbnRXaWRnZXQudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsaWJOYW1lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxpYk5hbWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGliTmFtZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHIoYSl7aWYodFthXSlyZXR1cm4gdFthXS5leHBvcnRzO3ZhciBuPXRbYV09e2k6YSxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW2FdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHIpLG4ubD0hMCxuLmV4cG9ydHN9cmV0dXJuIHIubT1lLHIuYz10LHIuZD1mdW5jdGlvbihlLHQsYSl7ci5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OmF9KX0sci5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHIudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgYT1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihhKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG4gaW4gZSlyLmQoYSxuLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbikpO3JldHVybiBhfSxyLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHIuZCh0LFwiYVwiLHQpLHR9LHIubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sci5wPVwiXCIscihyLnM9NCl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMSkpLGk9cig4KSxvPXIoMikscz1yKDE3KTt0LnZhbGlkYXRvclN5bWJvbD1TeW1ib2woXCJ2YWxpZGF0b3JzXCIpO3QuUHJlZGljYXRlPWNsYXNze2NvbnN0cnVjdG9yKGUsdD17fSl7dGhpcy50eXBlPWUsdGhpcy5vcHRpb25zPXQsdGhpcy5jb250ZXh0PXt2YWxpZGF0b3JzOltdfSx0aGlzLmNvbnRleHQ9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmNvbnRleHQsdGhpcy5vcHRpb25zKTtjb25zdCByPXRoaXMudHlwZVswXS50b0xvd2VyQ2FzZSgpK3RoaXMudHlwZS5zbGljZSgxKTt0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dCYmdC5zdWJzdHJpbmcodGhpcy50eXBlLmxlbmd0aCsxKXx8XCJhcmd1bWVudFwifSB0byBiZSBvZiB0eXBlIFxcYCR7dGhpcy50eXBlfVxcYCBidXQgcmVjZWl2ZWQgdHlwZSBcXGAke24uZGVmYXVsdChlKX1cXGBgLHZhbGlkYXRvcjplPT5uLmRlZmF1bHRbcl0oZSl9KX1bby50ZXN0U3ltYm9sXShlLHQscil7Zm9yKGNvbnN0e3ZhbGlkYXRvcjphLG1lc3NhZ2U6bn1vZiB0aGlzLmNvbnRleHQudmFsaWRhdG9ycyl7aWYoITA9PT10aGlzLm9wdGlvbnMub3B0aW9uYWwmJnZvaWQgMD09PWUpY29udGludWU7Y29uc3Qgbz1hKGUpO2lmKCEwPT09byljb250aW51ZTtsZXQgcz1yO3Rocm93XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHM9cigpKSxzPXM/YCR7dGhpcy50eXBlfSBcXGAke3N9XFxgYDp0aGlzLnR5cGUsbmV3IGkuQXJndW1lbnRFcnJvcihuKGUscyxvKSx0KX19Z2V0W3QudmFsaWRhdG9yU3ltYm9sXSgpe3JldHVybiB0aGlzLmNvbnRleHQudmFsaWRhdG9yc31nZXQgbm90KCl7cmV0dXJuIHMubm90KHRoaXMpfWlzKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5yP2AoJHt0fSkgJHtyfWA6YEV4cGVjdGVkICR7dH0gXFxgJHtlfVxcYCB0byBwYXNzIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uYCx2YWxpZGF0b3I6ZX0pfWFkZFZhbGlkYXRvcihlKXtyZXR1cm4gdGhpcy5jb250ZXh0LnZhbGlkYXRvcnMucHVzaChlKSx0aGlzfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBhPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBVUkw/cigxNikuVVJMOlVSTCxuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsaT1lPT50PT50eXBlb2YgdD09PWUsbz1lPT4hZC5udWxsT3JVbmRlZmluZWQoZSkmJiFkLm51bGxPclVuZGVmaW5lZChlLmNvbnN0cnVjdG9yKSYmZC5mdW5jdGlvbl8oZS5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikmJmUuY29uc3RydWN0b3IuaXNCdWZmZXIoZSkscz1lPT57Y29uc3QgdD1uLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuIHR8fG51bGx9LHU9ZT0+dD0+cyh0KT09PWU7ZnVuY3Rpb24gZChlKXtzd2l0Y2goZSl7Y2FzZSBudWxsOnJldHVyblwibnVsbFwiO2Nhc2UhMDpjYXNlITE6cmV0dXJuXCJib29sZWFuXCJ9c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJ1bmRlZmluZWRcIjpyZXR1cm5cInVuZGVmaW5lZFwiO2Nhc2VcInN0cmluZ1wiOnJldHVyblwic3RyaW5nXCI7Y2FzZVwibnVtYmVyXCI6cmV0dXJuXCJudW1iZXJcIjtjYXNlXCJzeW1ib2xcIjpyZXR1cm5cInN5bWJvbFwifWlmKGQuZnVuY3Rpb25fKGUpKXJldHVyblwiRnVuY3Rpb25cIjtpZihkLm9ic2VydmFibGUoZSkpcmV0dXJuXCJPYnNlcnZhYmxlXCI7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm5cIkFycmF5XCI7aWYobyhlKSlyZXR1cm5cIkJ1ZmZlclwiO2NvbnN0IHQ9cyhlKTtpZih0KXJldHVybiB0O2lmKGUgaW5zdGFuY2VvZiBTdHJpbmd8fGUgaW5zdGFuY2VvZiBCb29sZWFufHxlIGluc3RhbmNlb2YgTnVtYmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQbGVhc2UgZG9uJ3QgdXNlIG9iamVjdCB3cmFwcGVycyBmb3IgcHJpbWl0aXZlIHR5cGVzXCIpO3JldHVyblwiT2JqZWN0XCJ9IWZ1bmN0aW9uKGUpe2NvbnN0IHQ9ZT0+XCJvYmplY3RcIj09dHlwZW9mIGU7ZS51bmRlZmluZWQ9aShcInVuZGVmaW5lZFwiKSxlLnN0cmluZz1pKFwic3RyaW5nXCIpLGUubnVtYmVyPWkoXCJudW1iZXJcIiksZS5mdW5jdGlvbl89aShcImZ1bmN0aW9uXCIpLGUubnVsbF89KGU9Pm51bGw9PT1lKSxlLmNsYXNzXz0odD0+ZS5mdW5jdGlvbl8odCkmJnQudG9TdHJpbmcoKS5zdGFydHNXaXRoKFwiY2xhc3MgXCIpKSxlLmJvb2xlYW49KGU9PiEwPT09ZXx8ITE9PT1lKSxlLnN5bWJvbD1pKFwic3ltYm9sXCIpLGUubnVtZXJpY1N0cmluZz0odD0+ZS5zdHJpbmcodCkmJnQubGVuZ3RoPjAmJiFOdW1iZXIuaXNOYU4oTnVtYmVyKHQpKSksZS5hcnJheT1BcnJheS5pc0FycmF5LGUuYnVmZmVyPW8sZS5udWxsT3JVbmRlZmluZWQ9KHQ9PmUubnVsbF8odCl8fGUudW5kZWZpbmVkKHQpKSxlLm9iamVjdD0ocj0+IWUubnVsbE9yVW5kZWZpbmVkKHIpJiYoZS5mdW5jdGlvbl8ocil8fHQocikpKSxlLml0ZXJhYmxlPSh0PT4hZS5udWxsT3JVbmRlZmluZWQodCkmJmUuZnVuY3Rpb25fKHRbU3ltYm9sLml0ZXJhdG9yXSkpLGUuYXN5bmNJdGVyYWJsZT0odD0+IWUubnVsbE9yVW5kZWZpbmVkKHQpJiZlLmZ1bmN0aW9uXyh0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkpLGUuZ2VuZXJhdG9yPSh0PT5lLml0ZXJhYmxlKHQpJiZlLmZ1bmN0aW9uXyh0Lm5leHQpJiZlLmZ1bmN0aW9uXyh0LnRocm93KSksZS5uYXRpdmVQcm9taXNlPShlPT51KFwiUHJvbWlzZVwiKShlKSk7ZS5wcm9taXNlPShyPT5lLm5hdGl2ZVByb21pc2Uocil8fChyPT4hZS5udWxsXyhyKSYmdChyKSYmZS5mdW5jdGlvbl8oci50aGVuKSYmZS5mdW5jdGlvbl8oci5jYXRjaCkpKHIpKSxlLmdlbmVyYXRvckZ1bmN0aW9uPXUoXCJHZW5lcmF0b3JGdW5jdGlvblwiKSxlLmFzeW5jRnVuY3Rpb249dShcIkFzeW5jRnVuY3Rpb25cIiksZS5ib3VuZEZ1bmN0aW9uPSh0PT5lLmZ1bmN0aW9uXyh0KSYmIXQuaGFzT3duUHJvcGVydHkoXCJwcm90b3R5cGVcIikpLGUucmVnRXhwPXUoXCJSZWdFeHBcIiksZS5kYXRlPXUoXCJEYXRlXCIpLGUuZXJyb3I9dShcIkVycm9yXCIpLGUubWFwPShlPT51KFwiTWFwXCIpKGUpKSxlLnNldD0oZT0+dShcIlNldFwiKShlKSksZS53ZWFrTWFwPShlPT51KFwiV2Vha01hcFwiKShlKSksZS53ZWFrU2V0PShlPT51KFwiV2Vha1NldFwiKShlKSksZS5pbnQ4QXJyYXk9dShcIkludDhBcnJheVwiKSxlLnVpbnQ4QXJyYXk9dShcIlVpbnQ4QXJyYXlcIiksZS51aW50OENsYW1wZWRBcnJheT11KFwiVWludDhDbGFtcGVkQXJyYXlcIiksZS5pbnQxNkFycmF5PXUoXCJJbnQxNkFycmF5XCIpLGUudWludDE2QXJyYXk9dShcIlVpbnQxNkFycmF5XCIpLGUuaW50MzJBcnJheT11KFwiSW50MzJBcnJheVwiKSxlLnVpbnQzMkFycmF5PXUoXCJVaW50MzJBcnJheVwiKSxlLmZsb2F0MzJBcnJheT11KFwiRmxvYXQzMkFycmF5XCIpLGUuZmxvYXQ2NEFycmF5PXUoXCJGbG9hdDY0QXJyYXlcIiksZS5hcnJheUJ1ZmZlcj11KFwiQXJyYXlCdWZmZXJcIiksZS5zaGFyZWRBcnJheUJ1ZmZlcj11KFwiU2hhcmVkQXJyYXlCdWZmZXJcIiksZS5kYXRhVmlldz11KFwiRGF0YVZpZXdcIiksZS5kaXJlY3RJbnN0YW5jZU9mPSgoZSx0KT0+T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpPT09dC5wcm90b3R5cGUpLGUudXJsSW5zdGFuY2U9KGU9PnUoXCJVUkxcIikoZSkpLGUudXJsU3RyaW5nPSh0PT57aWYoIWUuc3RyaW5nKHQpKXJldHVybiExO3RyeXtyZXR1cm4gbmV3IGEodCksITB9Y2F0Y2goZSl7cmV0dXJuITF9fSksZS50cnV0aHk9KGU9PkJvb2xlYW4oZSkpLGUuZmFsc3k9KGU9PiFlKSxlLm5hbj0oZT0+TnVtYmVyLmlzTmFOKGUpKTtjb25zdCByPW5ldyBTZXQoW1widW5kZWZpbmVkXCIsXCJzdHJpbmdcIixcIm51bWJlclwiLFwiYm9vbGVhblwiLFwic3ltYm9sXCJdKTtlLnByaW1pdGl2ZT0odD0+ZS5udWxsXyh0KXx8ci5oYXModHlwZW9mIHQpKSxlLmludGVnZXI9KGU9Pk51bWJlci5pc0ludGVnZXIoZSkpLGUuc2FmZUludGVnZXI9KGU9Pk51bWJlci5pc1NhZmVJbnRlZ2VyKGUpKSxlLnBsYWluT2JqZWN0PShlPT57bGV0IHQ7cmV0dXJuXCJPYmplY3RcIj09PXMoZSkmJihudWxsPT09KHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpKXx8dD09PU9iamVjdC5nZXRQcm90b3R5cGVPZih7fSkpfSk7Y29uc3Qgbj1uZXcgU2V0KFtcIkludDhBcnJheVwiLFwiVWludDhBcnJheVwiLFwiVWludDhDbGFtcGVkQXJyYXlcIixcIkludDE2QXJyYXlcIixcIlVpbnQxNkFycmF5XCIsXCJJbnQzMkFycmF5XCIsXCJVaW50MzJBcnJheVwiLFwiRmxvYXQzMkFycmF5XCIsXCJGbG9hdDY0QXJyYXlcIl0pO2UudHlwZWRBcnJheT0oZT0+e2NvbnN0IHQ9cyhlKTtyZXR1cm4gbnVsbCE9PXQmJm4uaGFzKHQpfSk7ZS5hcnJheUxpa2U9KHQ9PiFlLm51bGxPclVuZGVmaW5lZCh0KSYmIWUuZnVuY3Rpb25fKHQpJiYodD0+ZS5zYWZlSW50ZWdlcih0KSYmdD4tMSkodC5sZW5ndGgpKSxlLmluUmFuZ2U9KCh0LHIpPT57aWYoZS5udW1iZXIocikpcmV0dXJuIHQ+PU1hdGgubWluKDAscikmJnQ8PU1hdGgubWF4KHIsMCk7aWYoZS5hcnJheShyKSYmMj09PXIubGVuZ3RoKXJldHVybiB0Pj1NYXRoLm1pbiguLi5yKSYmdDw9TWF0aC5tYXgoLi4ucik7dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCByYW5nZTogJHtKU09OLnN0cmluZ2lmeShyKX1gKX0pO2NvbnN0IGQ9W1wiaW5uZXJIVE1MXCIsXCJvd25lckRvY3VtZW50XCIsXCJzdHlsZVwiLFwiYXR0cmlidXRlc1wiLFwibm9kZVZhbHVlXCJdO2UuZG9tRWxlbWVudD0odD0+ZS5vYmplY3QodCkmJjE9PT10Lm5vZGVUeXBlJiZlLnN0cmluZyh0Lm5vZGVOYW1lKSYmIWUucGxhaW5PYmplY3QodCkmJmQuZXZlcnkoZT0+ZSBpbiB0KSksZS5vYnNlcnZhYmxlPShlPT4hIWUmJighKCFlW1N5bWJvbC5vYnNlcnZhYmxlXXx8ZSE9PWVbU3ltYm9sLm9ic2VydmFibGVdKCkpfHwhKCFlW1wiQEBvYnNlcnZhYmxlXCJdfHxlIT09ZVtcIkBAb2JzZXJ2YWJsZVwiXSgpKSkpLGUubm9kZVN0cmVhbT0ocj0+IWUubnVsbE9yVW5kZWZpbmVkKHIpJiZ0KHIpJiZlLmZ1bmN0aW9uXyhyLnBpcGUpJiYhZS5vYnNlcnZhYmxlKHIpKSxlLmluZmluaXRlPShlPT5lPT09MS8wfHxlPT09LTEvMCk7Y29uc3QgYz10PT5yPT5lLmludGVnZXIocikmJk1hdGguYWJzKHIlMik9PT10O2UuZXZlbj1jKDApLGUub2RkPWMoMSk7ZS5lbXB0eUFycmF5PSh0PT5lLmFycmF5KHQpJiYwPT09dC5sZW5ndGgpLGUubm9uRW1wdHlBcnJheT0odD0+ZS5hcnJheSh0KSYmdC5sZW5ndGg+MCksZS5lbXB0eVN0cmluZz0odD0+ZS5zdHJpbmcodCkmJjA9PT10Lmxlbmd0aCksZS5ub25FbXB0eVN0cmluZz0odD0+ZS5zdHJpbmcodCkmJnQubGVuZ3RoPjApLGUuZW1wdHlTdHJpbmdPcldoaXRlc3BhY2U9KHQ9PmUuZW1wdHlTdHJpbmcodCl8fCh0PT5lLnN0cmluZyh0KSYmITE9PT0vXFxTLy50ZXN0KHQpKSh0KSksZS5lbXB0eU9iamVjdD0odD0+ZS5vYmplY3QodCkmJiFlLm1hcCh0KSYmIWUuc2V0KHQpJiYwPT09T2JqZWN0LmtleXModCkubGVuZ3RoKSxlLm5vbkVtcHR5T2JqZWN0PSh0PT5lLm9iamVjdCh0KSYmIWUubWFwKHQpJiYhZS5zZXQodCkmJk9iamVjdC5rZXlzKHQpLmxlbmd0aD4wKSxlLmVtcHR5U2V0PSh0PT5lLnNldCh0KSYmMD09PXQuc2l6ZSksZS5ub25FbXB0eVNldD0odD0+ZS5zZXQodCkmJnQuc2l6ZT4wKSxlLmVtcHR5TWFwPSh0PT5lLm1hcCh0KSYmMD09PXQuc2l6ZSksZS5ub25FbXB0eU1hcD0odD0+ZS5tYXAodCkmJnQuc2l6ZT4wKTtjb25zdCBsPSh0LHIsYSk9PntpZighMT09PWUuZnVuY3Rpb25fKHIpKXRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgcHJlZGljYXRlOiAke0pTT04uc3RyaW5naWZ5KHIpfWApO2lmKDA9PT1hLmxlbmd0aCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBudW1iZXIgb2YgdmFsdWVzXCIpO3JldHVybiB0LmNhbGwoYSxyKX07ZS5hbnk9KChlLC4uLnQpPT5sKEFycmF5LnByb3RvdHlwZS5zb21lLGUsdCkpLGUuYWxsPSgoZSwuLi50KT0+bChBcnJheS5wcm90b3R5cGUuZXZlcnksZSx0KSl9KGR8fChkPXt9KSksT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZCx7Y2xhc3M6e3ZhbHVlOmQuY2xhc3NffSxmdW5jdGlvbjp7dmFsdWU6ZC5mdW5jdGlvbl99LG51bGw6e3ZhbHVlOmQubnVsbF99fSksdC5kZWZhdWx0PWQsZS5leHBvcnRzPWQsZS5leHBvcnRzLmRlZmF1bHQ9ZH0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQudGVzdFN5bWJvbD1TeW1ib2woXCJ0ZXN0XCIpLHQuaXNQcmVkaWNhdGU9KGU9PkJvb2xlYW4oZSYmZVt0LnRlc3RTeW1ib2xdKSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9KChlLHQscj01KT0+e2NvbnN0IGE9W107Zm9yKGNvbnN0IG4gb2YgdClpZighZS5oYXMobikmJihhLnB1c2gobiksYS5sZW5ndGg9PT1yKSlyZXR1cm4gYTtyZXR1cm4gMD09PWEubGVuZ3RofHxhfSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBuPWEocigxMCkpLGk9cigxMSksbz1yKDApO3QuUHJlZGljYXRlPW8uUHJlZGljYXRlO2NvbnN0IHM9cigyKSx1PWEocigxOCkpLGQ9YShyKDYpKSxjPWEocig5KSksbD0oZSx0LHIpPT57aWYoIXMuaXNQcmVkaWNhdGUodCkmJlwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHNlY29uZCBhcmd1bWVudCB0byBiZSBhIHByZWRpY2F0ZSBvciBhIHN0cmluZywgZ290IFxcYCR7dHlwZW9mIHR9XFxgYCk7aWYocy5pc1ByZWRpY2F0ZSh0KSl7Y29uc3Qgcj1uLmRlZmF1bHQoKTtjLmRlZmF1bHQoZSwoKT0+aS5pbmZlckxhYmVsKHIpLHQpfWVsc2UgYy5kZWZhdWx0KGUsdCxyKX07T2JqZWN0LmRlZmluZVByb3BlcnRpZXMobCx7aXNWYWxpZDp7dmFsdWU6KGUsdCk9Pnt0cnl7cmV0dXJuIGwoZSx0KSwhMH1jYXRjaChlKXtyZXR1cm4hMX19fSxjcmVhdGU6e3ZhbHVlOihlLHQpPT5yPT57aWYocy5pc1ByZWRpY2F0ZShlKSl7Y29uc3QgdD1uLmRlZmF1bHQoKTtjLmRlZmF1bHQociwoKT0+aS5pbmZlckxhYmVsKHQpLGUpfWVsc2UgYy5kZWZhdWx0KHIsZSx0KX19fSksdC5kZWZhdWx0PWQuZGVmYXVsdCh1LmRlZmF1bHQobCkpO3ZhciBmPXIoNik7dC5TdHJpbmdQcmVkaWNhdGU9Zi5TdHJpbmdQcmVkaWNhdGUsdC5OdW1iZXJQcmVkaWNhdGU9Zi5OdW1iZXJQcmVkaWNhdGUsdC5Cb29sZWFuUHJlZGljYXRlPWYuQm9vbGVhblByZWRpY2F0ZSx0LkFycmF5UHJlZGljYXRlPWYuQXJyYXlQcmVkaWNhdGUsdC5PYmplY3RQcmVkaWNhdGU9Zi5PYmplY3RQcmVkaWNhdGUsdC5EYXRlUHJlZGljYXRlPWYuRGF0ZVByZWRpY2F0ZSx0LkVycm9yUHJlZGljYXRlPWYuRXJyb3JQcmVkaWNhdGUsdC5NYXBQcmVkaWNhdGU9Zi5NYXBQcmVkaWNhdGUsdC5XZWFrTWFwUHJlZGljYXRlPWYuV2Vha01hcFByZWRpY2F0ZSx0LlNldFByZWRpY2F0ZT1mLlNldFByZWRpY2F0ZSx0LldlYWtTZXRQcmVkaWNhdGU9Zi5XZWFrU2V0UHJlZGljYXRlLHQuQW55UHJlZGljYXRlPWYuQW55UHJlZGljYXRlfSxmdW5jdGlvbihlLHQscil7KGZ1bmN0aW9uKGUpe3ZhciByPTIwMCxhPVwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiLG49MSxpPTIsbz05MDA3MTk5MjU0NzQwOTkxLHM9XCJbb2JqZWN0IEFyZ3VtZW50c11cIix1PVwiW29iamVjdCBBcnJheV1cIixkPVwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiLGM9XCJbb2JqZWN0IEJvb2xlYW5dXCIsbD1cIltvYmplY3QgRGF0ZV1cIixmPVwiW29iamVjdCBFcnJvcl1cIixwPVwiW29iamVjdCBGdW5jdGlvbl1cIixnPVwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIixoPVwiW29iamVjdCBNYXBdXCIseT1cIltvYmplY3QgTnVtYmVyXVwiLG09XCJbb2JqZWN0IE51bGxdXCIsdj1cIltvYmplY3QgT2JqZWN0XVwiLGI9XCJbb2JqZWN0IFByb3h5XVwiLF89XCJbb2JqZWN0IFJlZ0V4cF1cIiwkPVwiW29iamVjdCBTZXRdXCIsUD1cIltvYmplY3QgU3RyaW5nXVwiLE89XCJbb2JqZWN0IFN5bWJvbF1cIix4PVwiW29iamVjdCBVbmRlZmluZWRdXCIsRT1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsaj1cIltvYmplY3QgRGF0YVZpZXddXCIsUz0vXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvLEE9L14oPzowfFsxLTldXFxkKikkLyx3PXt9O3dbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09d1tcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT13W1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPXdbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPXdbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPXdbXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPXdbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT13W1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09d1tcIltvYmplY3QgVWludDMyQXJyYXldXCJdPSEwLHdbc109d1t1XT13W0VdPXdbY109d1tqXT13W2xdPXdbZl09d1twXT13W2hdPXdbeV09d1t2XT13W19dPXdbJF09d1tQXT13W1wiW29iamVjdCBXZWFrTWFwXVwiXT0hMTt2YXIgVj1cIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwmJmdsb2JhbC5PYmplY3Q9PT1PYmplY3QmJmdsb2JhbCxNPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixrPVZ8fE18fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx6PXQmJiF0Lm5vZGVUeXBlJiZ0LE49eiYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJiFlLm5vZGVUeXBlJiZlLEk9TiYmTi5leHBvcnRzPT09eixUPUkmJlYucHJvY2VzcyxVPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBUJiZULmJpbmRpbmcmJlQuYmluZGluZyhcInV0aWxcIil9Y2F0Y2goZSl7fX0oKSxKPVUmJlUuaXNUeXBlZEFycmF5O2Z1bmN0aW9uIEQoZSx0KXtmb3IodmFyIHI9LTEsYT1udWxsPT1lPzA6ZS5sZW5ndGg7KytyPGE7KWlmKHQoZVtyXSxyLGUpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIFcoZSl7dmFyIHQ9LTEscj1BcnJheShlLnNpemUpO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSxhKXtyWysrdF09W2EsZV19KSxyfWZ1bmN0aW9uIHEoZSl7dmFyIHQ9LTEscj1BcnJheShlLnNpemUpO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSl7clsrK3RdPWV9KSxyfXZhciBCLFIsRixMPUFycmF5LnByb3RvdHlwZSxDPUZ1bmN0aW9uLnByb3RvdHlwZSxLPU9iamVjdC5wcm90b3R5cGUsRz1rW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLEg9Qy50b1N0cmluZyxRPUsuaGFzT3duUHJvcGVydHksWD0oQj0vW14uXSskLy5leGVjKEcmJkcua2V5cyYmRy5rZXlzLklFX1BST1RPfHxcIlwiKSk/XCJTeW1ib2woc3JjKV8xLlwiK0I6XCJcIixZPUsudG9TdHJpbmcsWj1SZWdFeHAoXCJeXCIrSC5jYWxsKFEpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIiksZWU9ST9rLkJ1ZmZlcjp2b2lkIDAsdGU9ay5TeW1ib2wscmU9ay5VaW50OEFycmF5LGFlPUsucHJvcGVydHlJc0VudW1lcmFibGUsbmU9TC5zcGxpY2UsaWU9dGU/dGUudG9TdHJpbmdUYWc6dm9pZCAwLG9lPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsc2U9ZWU/ZWUuaXNCdWZmZXI6dm9pZCAwLHVlPShSPU9iamVjdC5rZXlzLEY9T2JqZWN0LGZ1bmN0aW9uKGUpe3JldHVybiBSKEYoZSkpfSksZGU9VWUoayxcIkRhdGFWaWV3XCIpLGNlPVVlKGssXCJNYXBcIiksbGU9VWUoayxcIlByb21pc2VcIiksZmU9VWUoayxcIlNldFwiKSxwZT1VZShrLFwiV2Vha01hcFwiKSxnZT1VZShPYmplY3QsXCJjcmVhdGVcIiksaGU9cWUoZGUpLHllPXFlKGNlKSxtZT1xZShsZSksdmU9cWUoZmUpLGJlPXFlKHBlKSxfZT10ZT90ZS5wcm90b3R5cGU6dm9pZCAwLCRlPV9lP19lLnZhbHVlT2Y6dm9pZCAwO2Z1bmN0aW9uIFBlKGUpe3ZhciB0PS0xLHI9bnVsbD09ZT8wOmUubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PHI7KXt2YXIgYT1lW3RdO3RoaXMuc2V0KGFbMF0sYVsxXSl9fWZ1bmN0aW9uIE9lKGUpe3ZhciB0PS0xLHI9bnVsbD09ZT8wOmUubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PHI7KXt2YXIgYT1lW3RdO3RoaXMuc2V0KGFbMF0sYVsxXSl9fWZ1bmN0aW9uIHhlKGUpe3ZhciB0PS0xLHI9bnVsbD09ZT8wOmUubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PHI7KXt2YXIgYT1lW3RdO3RoaXMuc2V0KGFbMF0sYVsxXSl9fWZ1bmN0aW9uIEVlKGUpe3ZhciB0PS0xLHI9bnVsbD09ZT8wOmUubGVuZ3RoO2Zvcih0aGlzLl9fZGF0YV9fPW5ldyB4ZTsrK3Q8cjspdGhpcy5hZGQoZVt0XSl9ZnVuY3Rpb24gamUoZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXz1uZXcgT2UoZSk7dGhpcy5zaXplPXQuc2l6ZX1mdW5jdGlvbiBTZShlLHQpe3ZhciByPUZlKGUpLGE9IXImJlJlKGUpLG49IXImJiFhJiZMZShlKSxpPSFyJiYhYSYmIW4mJlFlKGUpLG89cnx8YXx8bnx8aSxzPW8/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9LTEsYT1BcnJheShlKTsrK3I8ZTspYVtyXT10KHIpO3JldHVybiBhfShlLmxlbmd0aCxTdHJpbmcpOltdLHU9cy5sZW5ndGg7Zm9yKHZhciBkIGluIGUpIXQmJiFRLmNhbGwoZSxkKXx8byYmKFwibGVuZ3RoXCI9PWR8fG4mJihcIm9mZnNldFwiPT1kfHxcInBhcmVudFwiPT1kKXx8aSYmKFwiYnVmZmVyXCI9PWR8fFwiYnl0ZUxlbmd0aFwiPT1kfHxcImJ5dGVPZmZzZXRcIj09ZCl8fFdlKGQsdSkpfHxzLnB1c2goZCk7cmV0dXJuIHN9ZnVuY3Rpb24gQWUoZSx0KXtmb3IodmFyIHI9ZS5sZW5ndGg7ci0tOylpZihCZShlW3JdWzBdLHQpKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIHdlKGUpe3JldHVybiBudWxsPT1lP3ZvaWQgMD09PWU/eDptOmllJiZpZSBpbiBPYmplY3QoZSk/ZnVuY3Rpb24oZSl7dmFyIHQ9US5jYWxsKGUsaWUpLHI9ZVtpZV07dHJ5e2VbaWVdPXZvaWQgMDt2YXIgYT0hMH1jYXRjaChlKXt9dmFyIG49WS5jYWxsKGUpO2EmJih0P2VbaWVdPXI6ZGVsZXRlIGVbaWVdKTtyZXR1cm4gbn0oZSk6ZnVuY3Rpb24oZSl7cmV0dXJuIFkuY2FsbChlKX0oZSl9ZnVuY3Rpb24gVmUoZSl7cmV0dXJuIEhlKGUpJiZ3ZShlKT09c31mdW5jdGlvbiBNZShlLHQscixhLG8pe3JldHVybiBlPT09dHx8KG51bGw9PWV8fG51bGw9PXR8fCFIZShlKSYmIUhlKHQpP2UhPWUmJnQhPXQ6ZnVuY3Rpb24oZSx0LHIsYSxvLGQpe3ZhciBwPUZlKGUpLGc9RmUodCksbT1wP3U6RGUoZSksYj1nP3U6RGUodCkseD0obT1tPT1zP3Y6bSk9PXYsUz0oYj1iPT1zP3Y6Yik9PXYsQT1tPT1iO2lmKEEmJkxlKGUpKXtpZighTGUodCkpcmV0dXJuITE7cD0hMCx4PSExfWlmKEEmJiF4KXJldHVybiBkfHwoZD1uZXcgamUpLHB8fFFlKGUpP05lKGUsdCxyLGEsbyxkKTpmdW5jdGlvbihlLHQscixhLG8scyx1KXtzd2l0Y2gocil7Y2FzZSBqOmlmKGUuYnl0ZUxlbmd0aCE9dC5ieXRlTGVuZ3RofHxlLmJ5dGVPZmZzZXQhPXQuYnl0ZU9mZnNldClyZXR1cm4hMTtlPWUuYnVmZmVyLHQ9dC5idWZmZXI7Y2FzZSBFOnJldHVybiEoZS5ieXRlTGVuZ3RoIT10LmJ5dGVMZW5ndGh8fCFzKG5ldyByZShlKSxuZXcgcmUodCkpKTtjYXNlIGM6Y2FzZSBsOmNhc2UgeTpyZXR1cm4gQmUoK2UsK3QpO2Nhc2UgZjpyZXR1cm4gZS5uYW1lPT10Lm5hbWUmJmUubWVzc2FnZT09dC5tZXNzYWdlO2Nhc2UgXzpjYXNlIFA6cmV0dXJuIGU9PXQrXCJcIjtjYXNlIGg6dmFyIGQ9VztjYXNlICQ6dmFyIHA9YSZuO2lmKGR8fChkPXEpLGUuc2l6ZSE9dC5zaXplJiYhcClyZXR1cm4hMTt2YXIgZz11LmdldChlKTtpZihnKXJldHVybiBnPT10O2F8PWksdS5zZXQoZSx0KTt2YXIgbT1OZShkKGUpLGQodCksYSxvLHMsdSk7cmV0dXJuIHUuZGVsZXRlKGUpLG07Y2FzZSBPOmlmKCRlKXJldHVybiAkZS5jYWxsKGUpPT0kZS5jYWxsKHQpfXJldHVybiExfShlLHQsbSxyLGEsbyxkKTtpZighKHImbikpe3ZhciB3PXgmJlEuY2FsbChlLFwiX193cmFwcGVkX19cIiksVj1TJiZRLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpO2lmKHd8fFYpe3ZhciBNPXc/ZS52YWx1ZSgpOmUsaz1WP3QudmFsdWUoKTp0O3JldHVybiBkfHwoZD1uZXcgamUpLG8oTSxrLHIsYSxkKX19aWYoIUEpcmV0dXJuITE7cmV0dXJuIGR8fChkPW5ldyBqZSksZnVuY3Rpb24oZSx0LHIsYSxpLG8pe3ZhciBzPXImbix1PUllKGUpLGQ9dS5sZW5ndGgsYz1JZSh0KS5sZW5ndGg7aWYoZCE9YyYmIXMpcmV0dXJuITE7Zm9yKHZhciBsPWQ7bC0tOyl7dmFyIGY9dVtsXTtpZighKHM/ZiBpbiB0OlEuY2FsbCh0LGYpKSlyZXR1cm4hMX12YXIgcD1vLmdldChlKTtpZihwJiZvLmdldCh0KSlyZXR1cm4gcD09dDt2YXIgZz0hMDtvLnNldChlLHQpLG8uc2V0KHQsZSk7Zm9yKHZhciBoPXM7KytsPGQ7KXtmPXVbbF07dmFyIHk9ZVtmXSxtPXRbZl07aWYoYSl2YXIgdj1zP2EobSx5LGYsdCxlLG8pOmEoeSxtLGYsZSx0LG8pO2lmKCEodm9pZCAwPT09dj95PT09bXx8aSh5LG0scixhLG8pOnYpKXtnPSExO2JyZWFrfWh8fChoPVwiY29uc3RydWN0b3JcIj09Zil9aWYoZyYmIWgpe3ZhciBiPWUuY29uc3RydWN0b3IsXz10LmNvbnN0cnVjdG9yO2IhPV8mJlwiY29uc3RydWN0b3JcImluIGUmJlwiY29uc3RydWN0b3JcImluIHQmJiEoXCJmdW5jdGlvblwiPT10eXBlb2YgYiYmYiBpbnN0YW5jZW9mIGImJlwiZnVuY3Rpb25cIj09dHlwZW9mIF8mJl8gaW5zdGFuY2VvZiBfKSYmKGc9ITEpfXJldHVybiBvLmRlbGV0ZShlKSxvLmRlbGV0ZSh0KSxnfShlLHQscixhLG8sZCl9KGUsdCxyLGEsTWUsbykpfWZ1bmN0aW9uIGtlKGUpe3JldHVybiEoIUdlKGUpfHwodD1lLFgmJlggaW4gdCkpJiYoQ2UoZSk/WjpTKS50ZXN0KHFlKGUpKTt2YXIgdH1mdW5jdGlvbiB6ZShlKXtpZihyPSh0PWUpJiZ0LmNvbnN0cnVjdG9yLGE9XCJmdW5jdGlvblwiPT10eXBlb2YgciYmci5wcm90b3R5cGV8fEssdCE9PWEpcmV0dXJuIHVlKGUpO3ZhciB0LHIsYSxuPVtdO2Zvcih2YXIgaSBpbiBPYmplY3QoZSkpUS5jYWxsKGUsaSkmJlwiY29uc3RydWN0b3JcIiE9aSYmbi5wdXNoKGkpO3JldHVybiBufWZ1bmN0aW9uIE5lKGUsdCxyLGEsbyxzKXt2YXIgdT1yJm4sZD1lLmxlbmd0aCxjPXQubGVuZ3RoO2lmKGQhPWMmJiEodSYmYz5kKSlyZXR1cm4hMTt2YXIgbD1zLmdldChlKTtpZihsJiZzLmdldCh0KSlyZXR1cm4gbD09dDt2YXIgZj0tMSxwPSEwLGc9ciZpP25ldyBFZTp2b2lkIDA7Zm9yKHMuc2V0KGUsdCkscy5zZXQodCxlKTsrK2Y8ZDspe3ZhciBoPWVbZl0seT10W2ZdO2lmKGEpdmFyIG09dT9hKHksaCxmLHQsZSxzKTphKGgseSxmLGUsdCxzKTtpZih2b2lkIDAhPT1tKXtpZihtKWNvbnRpbnVlO3A9ITE7YnJlYWt9aWYoZyl7aWYoIUQodCxmdW5jdGlvbihlLHQpe2lmKG49dCwhZy5oYXMobikmJihoPT09ZXx8byhoLGUscixhLHMpKSlyZXR1cm4gZy5wdXNoKHQpO3ZhciBufSkpe3A9ITE7YnJlYWt9fWVsc2UgaWYoaCE9PXkmJiFvKGgseSxyLGEscykpe3A9ITE7YnJlYWt9fXJldHVybiBzLmRlbGV0ZShlKSxzLmRlbGV0ZSh0KSxwfWZ1bmN0aW9uIEllKGUpe3JldHVybiBmdW5jdGlvbihlLHQscil7dmFyIGE9dChlKTtyZXR1cm4gRmUoZSk/YTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0tMSxhPXQubGVuZ3RoLG49ZS5sZW5ndGg7KytyPGE7KWVbbityXT10W3JdO3JldHVybiBlfShhLHIoZSkpfShlLFhlLEplKX1mdW5jdGlvbiBUZShlLHQpe3ZhciByLGEsbj1lLl9fZGF0YV9fO3JldHVybihcInN0cmluZ1wiPT0oYT10eXBlb2Yocj10KSl8fFwibnVtYmVyXCI9PWF8fFwic3ltYm9sXCI9PWF8fFwiYm9vbGVhblwiPT1hP1wiX19wcm90b19fXCIhPT1yOm51bGw9PT1yKT9uW1wic3RyaW5nXCI9PXR5cGVvZiB0P1wic3RyaW5nXCI6XCJoYXNoXCJdOm4ubWFwfWZ1bmN0aW9uIFVlKGUsdCl7dmFyIHI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09ZT92b2lkIDA6ZVt0XX0oZSx0KTtyZXR1cm4ga2Uocik/cjp2b2lkIDB9UGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1nZT9nZShudWxsKTp7fSx0aGlzLnNpemU9MH0sUGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmhhcyhlKSYmZGVsZXRlIHRoaXMuX19kYXRhX19bZV07cmV0dXJuIHRoaXMuc2l6ZS09dD8xOjAsdH0sUGUucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9fZGF0YV9fO2lmKGdlKXt2YXIgcj10W2VdO3JldHVybiByPT09YT92b2lkIDA6cn1yZXR1cm4gUS5jYWxsKHQsZSk/dFtlXTp2b2lkIDB9LFBlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXztyZXR1cm4gZ2U/dm9pZCAwIT09dFtlXTpRLmNhbGwodCxlKX0sUGUucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXMoZSk/MDoxLHJbZV09Z2UmJnZvaWQgMD09PXQ/YTp0LHRoaXN9LE9lLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189W10sdGhpcy5zaXplPTB9LE9lLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXyxyPUFlKHQsZSk7cmV0dXJuIShyPDB8fChyPT10Lmxlbmd0aC0xP3QucG9wKCk6bmUuY2FsbCh0LHIsMSksLS10aGlzLnNpemUsMCkpfSxPZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX19kYXRhX18scj1BZSh0LGUpO3JldHVybiByPDA/dm9pZCAwOnRbcl1bMV19LE9lLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIEFlKHRoaXMuX19kYXRhX18sZSk+LTF9LE9lLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLl9fZGF0YV9fLGE9QWUocixlKTtyZXR1cm4gYTwwPygrK3RoaXMuc2l6ZSxyLnB1c2goW2UsdF0pKTpyW2FdWzFdPXQsdGhpc30seGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgUGUsbWFwOm5ldyhjZXx8T2UpLHN0cmluZzpuZXcgUGV9fSx4ZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciB0PVRlKHRoaXMsZSkuZGVsZXRlKGUpO3JldHVybiB0aGlzLnNpemUtPXQ/MTowLHR9LHhlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIFRlKHRoaXMsZSkuZ2V0KGUpfSx4ZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGUpe3JldHVybiBUZSh0aGlzLGUpLmhhcyhlKX0seGUucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQpe3ZhciByPVRlKHRoaXMsZSksYT1yLnNpemU7cmV0dXJuIHIuc2V0KGUsdCksdGhpcy5zaXplKz1yLnNpemU9PWE/MDoxLHRoaXN9LEVlLnByb3RvdHlwZS5hZGQ9RWUucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX19kYXRhX18uc2V0KGUsYSksdGhpc30sRWUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoZSl9LGplLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189bmV3IE9lLHRoaXMuc2l6ZT0wfSxqZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX19kYXRhX18scj10LmRlbGV0ZShlKTtyZXR1cm4gdGhpcy5zaXplPXQuc2l6ZSxyfSxqZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9fZGF0YV9fLmdldChlKX0samUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoZSl9LGplLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSx0KXt2YXIgYT10aGlzLl9fZGF0YV9fO2lmKGEgaW5zdGFuY2VvZiBPZSl7dmFyIG49YS5fX2RhdGFfXztpZighY2V8fG4ubGVuZ3RoPHItMSlyZXR1cm4gbi5wdXNoKFtlLHRdKSx0aGlzLnNpemU9KythLnNpemUsdGhpczthPXRoaXMuX19kYXRhX189bmV3IHhlKG4pfXJldHVybiBhLnNldChlLHQpLHRoaXMuc2l6ZT1hLnNpemUsdGhpc307dmFyIEplPW9lP2Z1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1tdOihlPU9iamVjdChlKSxmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0tMSxhPW51bGw9PWU/MDplLmxlbmd0aCxuPTAsaT1bXTsrK3I8YTspe3ZhciBvPWVbcl07dChvLHIsZSkmJihpW24rK109byl9cmV0dXJuIGl9KG9lKGUpLGZ1bmN0aW9uKHQpe3JldHVybiBhZS5jYWxsKGUsdCl9KSl9OmZ1bmN0aW9uKCl7cmV0dXJuW119LERlPXdlO2Z1bmN0aW9uIFdlKGUsdCl7cmV0dXJuISEodD1udWxsPT10P286dCkmJihcIm51bWJlclwiPT10eXBlb2YgZXx8QS50ZXN0KGUpKSYmZT4tMSYmZSUxPT0wJiZlPHR9ZnVuY3Rpb24gcWUoZSl7aWYobnVsbCE9ZSl7dHJ5e3JldHVybiBILmNhbGwoZSl9Y2F0Y2goZSl7fXRyeXtyZXR1cm4gZStcIlwifWNhdGNoKGUpe319cmV0dXJuXCJcIn1mdW5jdGlvbiBCZShlLHQpe3JldHVybiBlPT09dHx8ZSE9ZSYmdCE9dH0oZGUmJkRlKG5ldyBkZShuZXcgQXJyYXlCdWZmZXIoMSkpKSE9anx8Y2UmJkRlKG5ldyBjZSkhPWh8fGxlJiZcIltvYmplY3QgUHJvbWlzZV1cIiE9RGUobGUucmVzb2x2ZSgpKXx8ZmUmJkRlKG5ldyBmZSkhPSR8fHBlJiZcIltvYmplY3QgV2Vha01hcF1cIiE9RGUobmV3IHBlKSkmJihEZT1mdW5jdGlvbihlKXt2YXIgdD13ZShlKSxyPXQ9PXY/ZS5jb25zdHJ1Y3Rvcjp2b2lkIDAsYT1yP3FlKHIpOlwiXCI7aWYoYSlzd2l0Y2goYSl7Y2FzZSBoZTpyZXR1cm4gajtjYXNlIHllOnJldHVybiBoO2Nhc2UgbWU6cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSB2ZTpyZXR1cm4gJDtjYXNlIGJlOnJldHVyblwiW29iamVjdCBXZWFrTWFwXVwifXJldHVybiB0fSk7dmFyIFJlPVZlKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/VmU6ZnVuY3Rpb24oZSl7cmV0dXJuIEhlKGUpJiZRLmNhbGwoZSxcImNhbGxlZVwiKSYmIWFlLmNhbGwoZSxcImNhbGxlZVwiKX0sRmU9QXJyYXkuaXNBcnJheTt2YXIgTGU9c2V8fGZ1bmN0aW9uKCl7cmV0dXJuITF9O2Z1bmN0aW9uIENlKGUpe2lmKCFHZShlKSlyZXR1cm4hMTt2YXIgdD13ZShlKTtyZXR1cm4gdD09cHx8dD09Z3x8dD09ZHx8dD09Yn1mdW5jdGlvbiBLZShlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmZT4tMSYmZSUxPT0wJiZlPD1vfWZ1bmN0aW9uIEdlKGUpe3ZhciB0PXR5cGVvZiBlO3JldHVybiBudWxsIT1lJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBIZShlKXtyZXR1cm4gbnVsbCE9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9dmFyIFFlPUo/ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX0oSik6ZnVuY3Rpb24oZSl7cmV0dXJuIEhlKGUpJiZLZShlLmxlbmd0aCkmJiEhd1t3ZShlKV19O2Z1bmN0aW9uIFhlKGUpe3JldHVybiBudWxsIT0odD1lKSYmS2UodC5sZW5ndGgpJiYhQ2UodCk/U2UoZSk6emUoZSk7dmFyIHR9ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE1lKGUsdCl9fSkuY2FsbCh0aGlzLHIoMjQpKGUpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGE9cigxOSk7dC5TdHJpbmdQcmVkaWNhdGU9YS5TdHJpbmdQcmVkaWNhdGU7Y29uc3Qgbj1yKDIxKTt0Lk51bWJlclByZWRpY2F0ZT1uLk51bWJlclByZWRpY2F0ZTtjb25zdCBpPXIoMjIpO3QuQm9vbGVhblByZWRpY2F0ZT1pLkJvb2xlYW5QcmVkaWNhdGU7Y29uc3Qgbz1yKDApLHM9cigyMyk7dC5BcnJheVByZWRpY2F0ZT1zLkFycmF5UHJlZGljYXRlO2NvbnN0IHU9cigyNSk7dC5PYmplY3RQcmVkaWNhdGU9dS5PYmplY3RQcmVkaWNhdGU7Y29uc3QgZD1yKDMwKTt0LkRhdGVQcmVkaWNhdGU9ZC5EYXRlUHJlZGljYXRlO2NvbnN0IGM9cigzMSk7dC5FcnJvclByZWRpY2F0ZT1jLkVycm9yUHJlZGljYXRlO2NvbnN0IGw9cigzMik7dC5NYXBQcmVkaWNhdGU9bC5NYXBQcmVkaWNhdGU7Y29uc3QgZj1yKDMzKTt0LldlYWtNYXBQcmVkaWNhdGU9Zi5XZWFrTWFwUHJlZGljYXRlO2NvbnN0IHA9cigzNCk7dC5TZXRQcmVkaWNhdGU9cC5TZXRQcmVkaWNhdGU7Y29uc3QgZz1yKDM1KTt0LldlYWtTZXRQcmVkaWNhdGU9Zy5XZWFrU2V0UHJlZGljYXRlO2NvbnN0IGg9cigzNik7dC5BbnlQcmVkaWNhdGU9aC5BbnlQcmVkaWNhdGUsdC5kZWZhdWx0PSgoZSx0KT0+KE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUse3N0cmluZzp7Z2V0OigpPT5uZXcgYS5TdHJpbmdQcmVkaWNhdGUodCl9LG51bWJlcjp7Z2V0OigpPT5uZXcgbi5OdW1iZXJQcmVkaWNhdGUodCl9LGJvb2xlYW46e2dldDooKT0+bmV3IGkuQm9vbGVhblByZWRpY2F0ZSh0KX0sdW5kZWZpbmVkOntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcInVuZGVmaW5lZFwiLHQpfSxudWxsOntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIm51bGxcIix0KX0sbnVsbE9yVW5kZWZpbmVkOntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIm51bGxPclVuZGVmaW5lZFwiLHQpfSxuYW46e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwibmFuXCIsdCl9LHN5bWJvbDp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJzeW1ib2xcIix0KX0sYXJyYXk6e2dldDooKT0+bmV3IHMuQXJyYXlQcmVkaWNhdGUodCl9LG9iamVjdDp7Z2V0OigpPT5uZXcgdS5PYmplY3RQcmVkaWNhdGUodCl9LGRhdGU6e2dldDooKT0+bmV3IGQuRGF0ZVByZWRpY2F0ZSh0KX0sZXJyb3I6e2dldDooKT0+bmV3IGMuRXJyb3JQcmVkaWNhdGUodCl9LG1hcDp7Z2V0OigpPT5uZXcgbC5NYXBQcmVkaWNhdGUodCl9LHdlYWtNYXA6e2dldDooKT0+bmV3IGYuV2Vha01hcFByZWRpY2F0ZSh0KX0sc2V0OntnZXQ6KCk9Pm5ldyBwLlNldFByZWRpY2F0ZSh0KX0sd2Vha1NldDp7Z2V0OigpPT5uZXcgZy5XZWFrU2V0UHJlZGljYXRlKHQpfSxmdW5jdGlvbjp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJGdW5jdGlvblwiLHQpfSxidWZmZXI6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiQnVmZmVyXCIsdCl9LHJlZ0V4cDp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJSZWdFeHBcIix0KX0scHJvbWlzZTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJQcm9taXNlXCIsdCl9LHR5cGVkQXJyYXk6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiVHlwZWRBcnJheVwiLHQpfSxpbnQ4QXJyYXk6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiSW50OEFycmF5XCIsdCl9LHVpbnQ4QXJyYXk6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiVWludDhBcnJheVwiLHQpfSx1aW50OENsYW1wZWRBcnJheTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJVaW50OENsYW1wZWRBcnJheVwiLHQpfSxpbnQxNkFycmF5OntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIkludDE2QXJyYXlcIix0KX0sdWludDE2QXJyYXk6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiVWludDE2QXJyYXlcIix0KX0saW50MzJBcnJheTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJJbnQzMkFycmF5XCIsdCl9LHVpbnQzMkFycmF5OntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIlVpbnQzMkFycmF5XCIsdCl9LGZsb2F0MzJBcnJheTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJGbG9hdDMyQXJyYXlcIix0KX0sZmxvYXQ2NEFycmF5OntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIkZsb2F0NjRBcnJheVwiLHQpfSxhcnJheUJ1ZmZlcjp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJBcnJheUJ1ZmZlclwiLHQpfSxkYXRhVmlldzp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJEYXRhVmlld1wiLHQpfSxpdGVyYWJsZTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJJdGVyYWJsZVwiLHQpfSxhbnk6e3ZhbHVlOiguLi5lKT0+bmV3IGguQW55UHJlZGljYXRlKGUsdCl9fSksZSkpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoNCkpO3QuZGVmYXVsdD0oKGUsdCk9Pnt0cnl7Zm9yKGNvbnN0IHIgb2YgZSluLmRlZmF1bHQocix0KTtyZXR1cm4hMH1jYXRjaChlKXtyZXR1cm4gZS5tZXNzYWdlfX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dC5Bcmd1bWVudEVycm9yPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSx0KXtzdXBlcihlKSxFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLHQpLHRoaXMubmFtZT1cIkFyZ3VtZW50RXJyb3JcIn19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgYT1yKDIpO3QuZGVmYXVsdD1mdW5jdGlvbiBlKHQscixuKXtuW2EudGVzdFN5bWJvbF0odCxlLHIpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IGE9KCk9Pntjb25zdCBlPUVycm9yLnByZXBhcmVTdGFja1RyYWNlO0Vycm9yLnByZXBhcmVTdGFja1RyYWNlPSgoZSx0KT0+dCk7Y29uc3QgdD0obmV3IEVycm9yKS5zdGFjay5zbGljZSgxKTtyZXR1cm4gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9ZSx0fTtlLmV4cG9ydHM9YSxlLmV4cG9ydHMuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMTIpKSxpPWEocigxNCkpLG89YShyKDE1KSkscz0vXi4qP1xcKCguKj8pWywpXS87dC5pbmZlckxhYmVsPShlPT57aWYoIW8uZGVmYXVsdClyZXR1cm47Y29uc3QgdD1uLmRlZmF1bHQoKSxyPWVbMV0sYT1yLmdldEZpbGVOYW1lKCksdT1yLmdldExpbmVOdW1iZXIoKSxkPXIuZ2V0Q29sdW1uTnVtYmVyKCk7aWYoIWF8fG51bGw9PT11fHxudWxsPT09ZClyZXR1cm47bGV0IGM9W107dHJ5e2M9dC5yZWFkRmlsZVN5bmMoYSxcInV0ZjhcIikuc3BsaXQoXCJcXG5cIil9Y2F0Y2goZSl7cmV0dXJufWxldCBsPWNbdS0xXTtpZighbClyZXR1cm47bD1sLnNsaWNlKGQtMSk7Y29uc3QgZj1zLmV4ZWMobCk7aWYoIWZ8fCFmWzFdKXJldHVybjtjb25zdCBwPWZbMV07cmV0dXJuIGkuZGVmYXVsdChwKXx8aS5kZWZhdWx0KHAuc3BsaXQoXCIuXCIpLnBvcCgpKT9wOnZvaWQgMH0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMTMpKTt0LmRlZmF1bHQ9KCgpPT5uLmRlZmF1bHQoXCJmc1wiKSl9LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzLF9fd2VicGFja19yZXF1aXJlX18pe1widXNlIHN0cmljdFwiO2xldCBjdXN0b21SZXF1aXJlO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3RyeXtjdXN0b21SZXF1aXJlPVwiZnVuY3Rpb25cIj09PWdsb2JhbC5fX25vbl93ZWJwYWNrX3JlcXVpcmVfXz9nbG9iYWwuX19ub25fd2VicGFja19yZXF1aXJlX186ZXZhbChcInJlcXVpcmVcIil9Y2F0Y2goZSl7Y3VzdG9tUmVxdWlyZT0oKCk9Pnt9KX1leHBvcnRzLmRlZmF1bHQ9Y3VzdG9tUmVxdWlyZX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGE9L15bYS16JF9dW2EteiRfMC05XSokL2ksbj1uZXcgU2V0KFtcInVuZGVmaW5lZFwiLFwibnVsbFwiLFwidHJ1ZVwiLFwiZmFsc2VcIixcInN1cGVyXCIsXCJ0aGlzXCIsXCJJbmZpbml0eVwiLFwiTmFOXCJdKTt0LmRlZmF1bHQ9KGU9PmUmJiFuLmhhcyhlKSYmYS50ZXN0KGUpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD1Cb29sZWFuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZwcm9jZXNzLnZlcnNpb25zJiZwcm9jZXNzLnZlcnNpb25zLm5vZGUpfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1yZXF1aXJlKFwidXJsXCIpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgYT1yKDApO3Qubm90PShlPT57Y29uc3QgdD1lLmFkZFZhbGlkYXRvcjtyZXR1cm4gZS5hZGRWYWxpZGF0b3I9KHI9Pntjb25zdCBuPXIudmFsaWRhdG9yLGk9ci5tZXNzYWdlO3JldHVybiByLm1lc3NhZ2U9KChlLHQpPT5gW05PVF0gJHtpKGUsdCl9YCksci52YWxpZGF0b3I9KGU9PiFuKGUpKSxlW2EudmFsaWRhdG9yU3ltYm9sXS5wdXNoKHIpLGUuYWRkVmFsaWRhdG9yPXQsZX0pLGV9KX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDYpKTt0LmRlZmF1bHQ9KGU9PihPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLHtvcHRpb25hbDp7Z2V0OigpPT5uLmRlZmF1bHQoe30se29wdGlvbmFsOiEwfSl9fSksZSkpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMjApKSxpPXIoMCk7dC5TdHJpbmdQcmVkaWNhdGU9Y2xhc3MgZXh0ZW5kcyBpLlByZWRpY2F0ZXtjb25zdHJ1Y3RvcihlKXtzdXBlcihcInN0cmluZ1wiLGUpfWxlbmd0aChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgbGVuZ3RoIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3R9XFxgYCx2YWxpZGF0b3I6dD0+dC5sZW5ndGg9PT1lfSl9bWluTGVuZ3RoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhIG1pbmltdW0gbGVuZ3RoIG9mIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3R9XFxgYCx2YWxpZGF0b3I6dD0+dC5sZW5ndGg+PWV9KX1tYXhMZW5ndGgoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGEgbWF4aW11bSBsZW5ndGggb2YgXFxgJHtlfVxcYCwgZ290IFxcYCR7dH1cXGBgLHZhbGlkYXRvcjp0PT50Lmxlbmd0aDw9ZX0pfW1hdGNoZXMoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBtYXRjaCBcXGAke2V9XFxgLCBnb3QgXFxgJHt0fVxcYGAsdmFsaWRhdG9yOnQ9PmUudGVzdCh0KX0pfXN0YXJ0c1dpdGgoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBzdGFydCB3aXRoIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3R9XFxgYCx2YWxpZGF0b3I6dD0+dC5zdGFydHNXaXRoKGUpfSl9ZW5kc1dpdGgoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBlbmQgd2l0aCBcXGAke2V9XFxgLCBnb3QgXFxgJHt0fVxcYGAsdmFsaWRhdG9yOnQ9PnQuZW5kc1dpdGgoZSl9KX1pbmNsdWRlcyhlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGluY2x1ZGUgXFxgJHtlfVxcYCwgZ290IFxcYCR7dH1cXGBgLHZhbGlkYXRvcjp0PT50LmluY2x1ZGVzKGUpfSl9b25lT2YoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT57bGV0IGE9SlNPTi5zdHJpbmdpZnkoZSk7aWYoZS5sZW5ndGg+MTApe2NvbnN0IHQ9ZS5sZW5ndGgtMTA7YT1KU09OLnN0cmluZ2lmeShlLnNsaWNlKDAsMTApKS5yZXBsYWNlKC9dJC8sYCzigKYrJHt0fSBtb3JlXWApfXJldHVybmBFeHBlY3RlZCAke3J9IHRvIGJlIG9uZSBvZiBcXGAke2F9XFxgLCBnb3QgXFxgJHt0fVxcYGB9LHZhbGlkYXRvcjp0PT5lLmluY2x1ZGVzKHQpfSl9Z2V0IGVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBlbXB0eSwgZ290IFxcYCR7ZX1cXGBgLHZhbGlkYXRvcjplPT5cIlwiPT09ZX0pfWdldCBub25FbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gbm90IGJlIGVtcHR5YCx2YWxpZGF0b3I6ZT0+XCJcIiE9PWV9KX1lcXVhbHMoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBiZSBlcXVhbCB0byBcXGAke2V9XFxgLCBnb3QgXFxgJHt0fVxcYGAsdmFsaWRhdG9yOnQ9PnQ9PT1lfSl9Z2V0IGFscGhhbnVtZXJpYygpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgYWxwaGFudW1lcmljLCBnb3QgXFxgJHtlfVxcYGAsdmFsaWRhdG9yOmU9Pi9eW2EtelxcZF0rJC9pLnRlc3QoZSl9KX1nZXQgYWxwaGFiZXRpY2FsKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBhbHBoYWJldGljYWwsIGdvdCBcXGAke2V9XFxgYCx2YWxpZGF0b3I6ZT0+L15bYS16XSskL2dpLnRlc3QoZSl9KX1nZXQgbnVtZXJpYygpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgbnVtZXJpYywgZ290IFxcYCR7ZX1cXGBgLHZhbGlkYXRvcjplPT4vXihcXCt8LSk/XFxkKyQvaS50ZXN0KGUpfSl9Z2V0IGRhdGUoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGEgZGF0ZSwgZ290IFxcYCR7ZX1cXGBgLHZhbGlkYXRvcjpuLmRlZmF1bHR9KX1nZXQgbG93ZXJjYXNlKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBsb3dlcmNhc2UsIGdvdCBcXGAke2V9XFxgYCx2YWxpZGF0b3I6ZT0+XCJcIiE9PWUudHJpbSgpJiZlPT09ZS50b0xvd2VyQ2FzZSgpfSl9Z2V0IHVwcGVyY2FzZSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgdXBwZXJjYXNlLCBnb3QgXFxgJHtlfVxcYGAsdmFsaWRhdG9yOmU9PlwiXCIhPT1lLnRyaW0oKSYmZT09PWUudG9VcHBlckNhc2UoKX0pfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIWlzTmFOKERhdGUucGFyc2UoZSkpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDEpKSxpPXIoMCk7dC5OdW1iZXJQcmVkaWNhdGU9Y2xhc3MgZXh0ZW5kcyBpLlByZWRpY2F0ZXtjb25zdHJ1Y3RvcihlKXtzdXBlcihcIm51bWJlclwiLGUpfWluUmFuZ2UoZSx0KXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHIsYSk9PmBFeHBlY3RlZCAke2F9IHRvIGJlIGluIHJhbmdlIFske2V9Li4ke3R9XSwgZ290ICR7cn1gLHZhbGlkYXRvcjpyPT5uLmRlZmF1bHQuaW5SYW5nZShyLFtlLHRdKX0pfWdyZWF0ZXJUaGFuKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgZ3JlYXRlciB0aGFuICR7ZX0sIGdvdCAke3R9YCx2YWxpZGF0b3I6dD0+dD5lfSl9Z3JlYXRlclRoYW5PckVxdWFsKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7ZX0sIGdvdCAke3R9YCx2YWxpZGF0b3I6dD0+dD49ZX0pfWxlc3NUaGFuKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgbGVzcyB0aGFuICR7ZX0sIGdvdCAke3R9YCx2YWxpZGF0b3I6dD0+dDxlfSl9bGVzc1RoYW5PckVxdWFsKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7ZX0sIGdvdCAke3R9YCx2YWxpZGF0b3I6dD0+dDw9ZX0pfWVxdWFsKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgZXF1YWwgdG8gJHtlfSwgZ290ICR7dH1gLHZhbGlkYXRvcjp0PT50PT09ZX0pfWdldCBpbnRlZ2VyKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBhbiBpbnRlZ2VyLCBnb3QgJHtlfWAsdmFsaWRhdG9yOmU9Pm4uZGVmYXVsdC5pbnRlZ2VyKGUpfSl9Z2V0IGZpbml0ZSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgZmluaXRlLCBnb3QgJHtlfWAsdmFsaWRhdG9yOmU9PiFuLmRlZmF1bHQuaW5maW5pdGUoZSl9KX1nZXQgaW5maW5pdGUoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGluZmluaXRlLCBnb3QgJHtlfWAsdmFsaWRhdG9yOmU9Pm4uZGVmYXVsdC5pbmZpbml0ZShlKX0pfWdldCBwb3NpdGl2ZSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgcG9zaXRpdmUsIGdvdCAke2V9YCx2YWxpZGF0b3I6ZT0+ZT4wfSl9Z2V0IG5lZ2F0aXZlKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBuZWdhdGl2ZSwgZ290ICR7ZX1gLHZhbGlkYXRvcjplPT5lPDB9KX1nZXQgaW50ZWdlck9ySW5maW5pdGUoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGFuIGludGVnZXIgb3IgaW5maW5pdGUsIGdvdCAke2V9YCx2YWxpZGF0b3I6ZT0+bi5kZWZhdWx0LmludGVnZXIoZSl8fG4uZGVmYXVsdC5pbmZpbml0ZShlKX0pfWdldCB1aW50OCgpe3JldHVybiB0aGlzLmludGVnZXIuaW5SYW5nZSgwLDI1NSl9Z2V0IHVpbnQxNigpe3JldHVybiB0aGlzLmludGVnZXIuaW5SYW5nZSgwLDY1NTM1KX1nZXQgdWludDMyKCl7cmV0dXJuIHRoaXMuaW50ZWdlci5pblJhbmdlKDAsNDI5NDk2NzI5NSl9Z2V0IGludDgoKXtyZXR1cm4gdGhpcy5pbnRlZ2VyLmluUmFuZ2UoLTEyOCwxMjcpfWdldCBpbnQxNigpe3JldHVybiB0aGlzLmludGVnZXIuaW5SYW5nZSgtMzI3NjgsMzI3NjcpfWdldCBpbnQzMigpe3JldHVybiB0aGlzLmludGVnZXIuaW5SYW5nZSgtMjE0NzQ4MzY0OCwyMTQ3NDgzNjQ3KX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgYT1yKDApO3QuQm9vbGVhblByZWRpY2F0ZT1jbGFzcyBleHRlbmRzIGEuUHJlZGljYXRle2NvbnN0cnVjdG9yKGUpe3N1cGVyKFwiYm9vbGVhblwiLGUpfWdldCB0cnVlKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSB0cnVlLCBnb3QgJHtlfWAsdmFsaWRhdG9yOmU9PiEwPT09ZX0pfWdldCBmYWxzZSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgZmFsc2UsIGdvdCAke2V9YCx2YWxpZGF0b3I6ZT0+ITE9PT1lfSl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDUpKSxpPWEocig0KSksbz1yKDApO3QuQXJyYXlQcmVkaWNhdGU9Y2xhc3MgZXh0ZW5kcyBvLlByZWRpY2F0ZXtjb25zdHJ1Y3RvcihlKXtzdXBlcihcImFycmF5XCIsZSl9bGVuZ3RoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBsZW5ndGggXFxgJHtlfVxcYCwgZ290IFxcYCR7dC5sZW5ndGh9XFxgYCx2YWxpZGF0b3I6dD0+dC5sZW5ndGg9PT1lfSl9bWluTGVuZ3RoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhIG1pbmltdW0gbGVuZ3RoIG9mIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3QubGVuZ3RofVxcYGAsdmFsaWRhdG9yOnQ9PnQubGVuZ3RoPj1lfSl9bWF4TGVuZ3RoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhIG1heGltdW0gbGVuZ3RoIG9mIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3QubGVuZ3RofVxcYGAsdmFsaWRhdG9yOnQ9PnQubGVuZ3RoPD1lfSl9c3RhcnRzV2l0aChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIHN0YXJ0IHdpdGggXFxgJHtlfVxcYCwgZ290IFxcYCR7dFswXX1cXGBgLHZhbGlkYXRvcjp0PT50WzBdPT09ZX0pfWVuZHNXaXRoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gZW5kIHdpdGggXFxgJHtlfVxcYCwgZ290IFxcYCR7dFt0Lmxlbmd0aC0xXX1cXGBgLHZhbGlkYXRvcjp0PT50W3QubGVuZ3RoLTFdPT09ZX0pfWluY2x1ZGVzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaW5jbHVkZSBhbGwgZWxlbWVudHMgb2YgXFxgJHtKU09OLnN0cmluZ2lmeShlKX1cXGAsIGdvdCBcXGAke0pTT04uc3RyaW5naWZ5KHQpfVxcYGAsdmFsaWRhdG9yOnQ9PmUuZXZlcnkoZT0+LTEhPT10LmluZGV4T2YoZSkpfSl9aW5jbHVkZXNBbnkoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBpbmNsdWRlIGFueSBlbGVtZW50IG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgLCBnb3QgXFxgJHtKU09OLnN0cmluZ2lmeSh0KX1cXGBgLHZhbGlkYXRvcjp0PT5lLnNvbWUoZT0+LTEhPT10LmluZGV4T2YoZSkpfSl9Z2V0IGVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBlbXB0eSwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6ZT0+MD09PWUubGVuZ3RofSl9Z2V0IG5vbkVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBub3QgYmUgZW1wdHlgLHZhbGlkYXRvcjplPT5lLmxlbmd0aD4wfSl9ZGVlcEVxdWFsKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgZGVlcGx5IGVxdWFsIHRvIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgLCBnb3QgXFxgJHtKU09OLnN0cmluZ2lmeSh0KX1cXGBgLHZhbGlkYXRvcjp0PT5uLmRlZmF1bHQodCxlKX0pfW9mVHlwZShlKXtsZXQgdDtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUscik9PmAoJHtyfSkgJHt0fWAsdmFsaWRhdG9yOnI9Pnt0cnl7Zm9yKGNvbnN0IHQgb2YgcilpLmRlZmF1bHQodCxlKTtyZXR1cm4hMH1jYXRjaChlKXtyZXR1cm4gdD1lLm1lc3NhZ2UsITF9fX0pfX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlLndlYnBhY2tQb2x5ZmlsbHx8KGUuZGVwcmVjYXRlPWZ1bmN0aW9uKCl7fSxlLnBhdGhzPVtdLGUuY2hpbGRyZW58fChlLmNoaWxkcmVuPVtdKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImxvYWRlZFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmx9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJpZFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLml9fSksZS53ZWJwYWNrUG9seWZpbGw9MSksZX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBuPWEocigxKSksaT1hKHIoMjYpKSxvPWEocig1KSkscz1yKDApLHU9YShyKDMpKSxkPWEocig3KSksYz1hKHIoMjgpKSxsPXIoMjkpO3QuT2JqZWN0UHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgcy5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJvYmplY3RcIixlKX1nZXQgcGxhaW4oKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGEgcGxhaW4gb2JqZWN0YCx2YWxpZGF0b3I6ZT0+bi5kZWZhdWx0LnBsYWluT2JqZWN0KGUpfSl9Z2V0IGVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBlbXB0eSwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6ZT0+MD09PU9iamVjdC5rZXlzKGUpLmxlbmd0aH0pfWdldCBub25FbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gbm90IGJlIGVtcHR5YCx2YWxpZGF0b3I6ZT0+T2JqZWN0LmtleXMoZSkubGVuZ3RoPjB9KX12YWx1ZXNPZlR5cGUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmAoJHt0fSkgJHtyfWAsdmFsaWRhdG9yOnQ9Pntjb25zdCByPU9iamVjdC5rZXlzKHQpLm1hcChlPT50W2VdKTtyZXR1cm4gZC5kZWZhdWx0KHIsZSl9fSl9ZGVlcFZhbHVlc09mVHlwZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YCgke3R9KSAke3J9YCx2YWxpZGF0b3I6dD0+Yy5kZWZhdWx0KHQsZSl9KX1kZWVwRXF1YWwoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBiZSBkZWVwbHkgZXF1YWwgdG8gXFxgJHtKU09OLnN0cmluZ2lmeShlKX1cXGAsIGdvdCBcXGAke0pTT04uc3RyaW5naWZ5KHQpfVxcYGAsdmFsaWRhdG9yOnQ9Pm8uZGVmYXVsdCh0LGUpfSl9aW5zdGFuY2VPZihlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PntsZXQgYT10LmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuIGEmJlwiT2JqZWN0XCIhPT1hfHwoYT1KU09OLnN0cmluZ2lmeSh0KSksYEV4cGVjdGVkICR7cn0gXFxgJHthfVxcYCB0byBiZSBvZiB0eXBlIFxcYCR7ZS5uYW1lfVxcYGB9LHZhbGlkYXRvcjp0PT50IGluc3RhbmNlb2YgZX0pfWhhc0tleXMoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmBFeHBlY3RlZCAke3R9IHRvIGhhdmUga2V5cyBcXGAke0pTT04uc3RyaW5naWZ5KHIpfVxcYGAsdmFsaWRhdG9yOnQ9PnUuZGVmYXVsdCh7aGFzOmU9PmkuZGVmYXVsdC5oYXModCxlKX0sZSl9KX1oYXNBbnlLZXlzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhbnkga2V5IG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6dD0+ZS5zb21lKGU9PmkuZGVmYXVsdC5oYXModCxlKSl9KX1wYXJ0aWFsU2hhcGUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmAke3IucmVwbGFjZShcIkV4cGVjdGVkXCIsXCJFeHBlY3RlZCBwcm9wZXJ0eVwiKX0gaW4gJHt0fWAsdmFsaWRhdG9yOnQ9PmwucGFydGlhbCh0LGUpfSl9ZXhhY3RTaGFwZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YCR7ci5yZXBsYWNlKFwiRXhwZWN0ZWRcIixcIkV4cGVjdGVkIHByb3BlcnR5XCIpfSBpbiAke3R9YCx2YWxpZGF0b3I6dD0+bC5leGFjdCh0LGUpfSl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IGE9cigyNyk7ZnVuY3Rpb24gbihlKXtjb25zdCB0PWUuc3BsaXQoXCIuXCIpLHI9W107Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe2xldCBhPXRbZV07Zm9yKDtcIlxcXFxcIj09PWFbYS5sZW5ndGgtMV0mJnZvaWQgMCE9PXRbZSsxXTspYT1hLnNsaWNlKDAsLTEpK1wiLlwiLGErPXRbKytlXTtyLnB1c2goYSl9cmV0dXJuIHJ9ZS5leHBvcnRzPXtnZXQoZSx0LHIpe2lmKCFhKGUpfHxcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gdm9pZCAwPT09cj9lOnI7Y29uc3QgaT1uKHQpO2ZvcihsZXQgdD0wO3Q8aS5sZW5ndGg7dCsrKXtpZighT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsaVt0XSkpcmV0dXJuIHI7aWYobnVsbD09KGU9ZVtpW3RdXSkpe2lmKHQhPT1pLmxlbmd0aC0xKXJldHVybiByO2JyZWFrfX1yZXR1cm4gZX0sc2V0KGUsdCxyKXtpZighYShlKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIGU7Y29uc3QgaT1lLG89bih0KTtmb3IobGV0IHQ9MDt0PG8ubGVuZ3RoO3QrKyl7Y29uc3Qgbj1vW3RdO2EoZVtuXSl8fChlW25dPXt9KSx0PT09by5sZW5ndGgtMSYmKGVbbl09ciksZT1lW25dfXJldHVybiBpfSxkZWxldGUoZSx0KXtpZighYShlKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuO2NvbnN0IHI9bih0KTtmb3IobGV0IHQ9MDt0PHIubGVuZ3RoO3QrKyl7Y29uc3Qgbj1yW3RdO2lmKHQ9PT1yLmxlbmd0aC0xKXJldHVybiB2b2lkIGRlbGV0ZSBlW25dO2lmKGU9ZVtuXSwhYShlKSlyZXR1cm59fSxoYXMoZSx0KXtpZighYShlKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuITE7Y29uc3Qgcj1uKHQpO2ZvcihsZXQgdD0wO3Q8ci5sZW5ndGg7dCsrKXtpZighYShlKSlyZXR1cm4hMTtpZighKHJbdF1pbiBlKSlyZXR1cm4hMTtlPWVbclt0XV19cmV0dXJuITB9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD10eXBlb2YgZTtyZXR1cm4gbnVsbCE9PWUmJihcIm9iamVjdFwiPT09dHx8XCJmdW5jdGlvblwiPT09dCl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMSkpLGk9YShyKDQpKSxvPShlLHQpPT5uLmRlZmF1bHQucGxhaW5PYmplY3QoZSk/T2JqZWN0LmtleXMoZSkuZXZlcnkocj0+byhlW3JdLHQpKTooaS5kZWZhdWx0KGUsdCksITApO3QuZGVmYXVsdD0oKGUsdCk9Pnt0cnl7cmV0dXJuIG8oZSx0KX1jYXRjaChlKXtyZXR1cm4gZS5tZXNzYWdlfX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMSkpLGk9YShyKDkpKSxvPXIoMik7dC5wYXJ0aWFsPWZ1bmN0aW9uIGUodCxyLGEpe3RyeXtmb3IoY29uc3QgcyBvZiBPYmplY3Qua2V5cyhyKSl7Y29uc3QgdT1hP2Ake2F9LiR7c31gOnM7aWYoby5pc1ByZWRpY2F0ZShyW3NdKSlpLmRlZmF1bHQodFtzXSx1LHJbc10pO2Vsc2UgaWYobi5kZWZhdWx0LnBsYWluT2JqZWN0KHJbc10pKXtjb25zdCBhPWUodFtzXSxyW3NdLHUpO2lmKCEwIT09YSlyZXR1cm4gYX19cmV0dXJuITB9Y2F0Y2goZSl7cmV0dXJuIGUubWVzc2FnZX19LHQuZXhhY3Q9ZnVuY3Rpb24gZSh0LHIsYSl7dHJ5e2NvbnN0IHM9bmV3IFNldChPYmplY3Qua2V5cyh0KSk7Zm9yKGNvbnN0IHUgb2YgT2JqZWN0LmtleXMocikpe3MuZGVsZXRlKHUpO2NvbnN0IGQ9YT9gJHthfS4ke3V9YDp1O2lmKG8uaXNQcmVkaWNhdGUoclt1XSkpaS5kZWZhdWx0KHRbdV0sZCxyW3VdKTtlbHNlIGlmKG4uZGVmYXVsdC5wbGFpbk9iamVjdChyW3VdKSl7Y29uc3QgYT1lKHRbdV0sclt1XSxkKTtpZighMCE9PWEpcmV0dXJuIGF9fWlmKHMuc2l6ZT4wKXtjb25zdCBlPUFycmF5LmZyb20ocy5rZXlzKCkpWzBdO3JldHVybmBEaWQgbm90IGV4cGVjdCBwcm9wZXJ0eSBcXGAke2E/YCR7YX0uJHtlfWA6ZX1cXGAgdG8gZXhpc3QsIGdvdCBcXGAke3RbZV19XFxgYH1yZXR1cm4hMH1jYXRjaChlKXtyZXR1cm4gZS5tZXNzYWdlfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBhPXIoMCk7dC5EYXRlUHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgYS5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJkYXRlXCIsZSl9YmVmb3JlKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gJHt0LnRvSVNPU3RyaW5nKCl9IHRvIGJlIGJlZm9yZSAke2UudG9JU09TdHJpbmcoKX1gLHZhbGlkYXRvcjp0PT50LmdldFRpbWUoKTxlLmdldFRpbWUoKX0pfWFmdGVyKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gJHt0LnRvSVNPU3RyaW5nKCl9IHRvIGJlIGFmdGVyICR7ZS50b0lTT1N0cmluZygpfWAsdmFsaWRhdG9yOnQ9PnQuZ2V0VGltZSgpPmUuZ2V0VGltZSgpfSl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGE9cigwKTt0LkVycm9yUHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgYS5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJlcnJvclwiLGUpfW5hbWUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIG5hbWUgXFxgJHtlfVxcYCwgZ290IFxcYCR7dC5uYW1lfVxcYGAsdmFsaWRhdG9yOnQ9PnQubmFtZT09PWV9KX1tZXNzYWdlKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gbWVzc2FnZSB0byBiZSBcXGAke2V9XFxgLCBnb3QgXFxgJHt0Lm1lc3NhZ2V9XFxgYCx2YWxpZGF0b3I6dD0+dC5tZXNzYWdlPT09ZX0pfW1lc3NhZ2VJbmNsdWRlcyhlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IG1lc3NhZ2UgdG8gaW5jbHVkZSBcXGAke2V9XFxgLCBnb3QgXFxgJHt0Lm1lc3NhZ2V9XFxgYCx2YWxpZGF0b3I6dD0+dC5tZXNzYWdlLmluY2x1ZGVzKGUpfSl9aGFzS2V5cyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IG1lc3NhZ2UgdG8gaGF2ZSBrZXlzIFxcYCR7ZS5qb2luKFwiYCwgYFwiKX1cXGBgLHZhbGlkYXRvcjp0PT5lLmV2ZXJ5KGU9PnQuaGFzT3duUHJvcGVydHkoZSkpfSl9aW5zdGFuY2VPZihlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IFxcYCR7dC5uYW1lfVxcYCB0byBiZSBvZiB0eXBlIFxcYCR7ZS5uYW1lfVxcYGAsdmFsaWRhdG9yOnQ9PnQgaW5zdGFuY2VvZiBlfSl9Z2V0IHR5cGVFcnJvcigpe3JldHVybiB0aGlzLmluc3RhbmNlT2YoVHlwZUVycm9yKX1nZXQgZXZhbEVycm9yKCl7cmV0dXJuIHRoaXMuaW5zdGFuY2VPZihFdmFsRXJyb3IpfWdldCByYW5nZUVycm9yKCl7cmV0dXJuIHRoaXMuaW5zdGFuY2VPZihSYW5nZUVycm9yKX1nZXQgcmVmZXJlbmNlRXJyb3IoKXtyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKFJlZmVyZW5jZUVycm9yKX1nZXQgc3ludGF4RXJyb3IoKXtyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKFN5bnRheEVycm9yKX1nZXQgdXJpRXJyb3IoKXtyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKFVSSUVycm9yKX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoNSkpLGk9cigwKSxvPWEocigzKSkscz1hKHIoNykpO3QuTWFwUHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgaS5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJNYXBcIixlKX1zaXplKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBzaXplIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3Quc2l6ZX1cXGBgLHZhbGlkYXRvcjp0PT50LnNpemU9PT1lfSl9bWluU2l6ZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYSBtaW5pbXVtIHNpemUgb2YgXFxgJHtlfVxcYCwgZ290IFxcYCR7dC5zaXplfVxcYGAsdmFsaWRhdG9yOnQ9PnQuc2l6ZT49ZX0pfW1heFNpemUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGEgbWF4aW11bSBzaXplIG9mIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3Quc2l6ZX1cXGBgLHZhbGlkYXRvcjp0PT50LnNpemU8PWV9KX1oYXNLZXlzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gRXhwZWN0ZWQgJHt0fSB0byBoYXZlIGtleXMgXFxgJHtKU09OLnN0cmluZ2lmeShyKX1cXGBgLHZhbGlkYXRvcjp0PT5vLmRlZmF1bHQodCxlKX0pfWhhc0FueUtleXMoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGFueSBrZXkgb2YgXFxgJHtKU09OLnN0cmluZ2lmeShlKX1cXGBgLHZhbGlkYXRvcjp0PT5lLnNvbWUoZT0+dC5oYXMoZSkpfSl9aGFzVmFsdWVzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gRXhwZWN0ZWQgJHt0fSB0byBoYXZlIHZhbHVlcyBcXGAke0pTT04uc3RyaW5naWZ5KHIpfVxcYGAsdmFsaWRhdG9yOnQ9Pm8uZGVmYXVsdChuZXcgU2V0KHQudmFsdWVzKCkpLGUpfSl9aGFzQW55VmFsdWVzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhbnkgdmFsdWUgb2YgXFxgJHtKU09OLnN0cmluZ2lmeShlKX1cXGBgLHZhbGlkYXRvcjp0PT57Y29uc3Qgcj1uZXcgU2V0KHQudmFsdWVzKCkpO3JldHVybiBlLnNvbWUoZT0+ci5oYXMoZSkpfX0pfWtleXNPZlR5cGUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmAoJHt0fSkgJHtyfWAsdmFsaWRhdG9yOnQ9PnMuZGVmYXVsdCh0LmtleXMoKSxlKX0pfXZhbHVlc09mVHlwZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YCgke3R9KSAke3J9YCx2YWxpZGF0b3I6dD0+cy5kZWZhdWx0KHQudmFsdWVzKCksZSl9KX1nZXQgZW1wdHkoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGVtcHR5LCBnb3QgXFxgJHtKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGUpKX1cXGBgLHZhbGlkYXRvcjplPT4wPT09ZS5zaXplfSl9Z2V0IG5vbkVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBub3QgYmUgZW1wdHlgLHZhbGlkYXRvcjplPT5lLnNpemU+MH0pfWRlZXBFcXVhbChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGRlZXBseSBlcXVhbCB0byBcXGAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20oZSkpfVxcYCwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbSh0KSl9XFxgYCx2YWxpZGF0b3I6dD0+bi5kZWZhdWx0KHQsZSl9KX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1yKDApLGk9YShyKDMpKTt0LldlYWtNYXBQcmVkaWNhdGU9Y2xhc3MgZXh0ZW5kcyBuLlByZWRpY2F0ZXtjb25zdHJ1Y3RvcihlKXtzdXBlcihcIldlYWtNYXBcIixlKX1oYXNLZXlzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gRXhwZWN0ZWQgJHt0fSB0byBoYXZlIGtleXMgXFxgJHtKU09OLnN0cmluZ2lmeShyKX1cXGBgLHZhbGlkYXRvcjp0PT5pLmRlZmF1bHQodCxlKX0pfWhhc0FueUtleXMoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGFueSBrZXkgb2YgXFxgJHtKU09OLnN0cmluZ2lmeShlKX1cXGBgLHZhbGlkYXRvcjp0PT5lLnNvbWUoZT0+dC5oYXMoZSkpfSl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDUpKSxpPXIoMCksbz1hKHIoMykpLHM9YShyKDcpKTt0LlNldFByZWRpY2F0ZT1jbGFzcyBleHRlbmRzIGkuUHJlZGljYXRle2NvbnN0cnVjdG9yKGUpe3N1cGVyKFwiU2V0XCIsZSl9c2l6ZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgc2l6ZSBcXGAke2V9XFxgLCBnb3QgXFxgJHt0LnNpemV9XFxgYCx2YWxpZGF0b3I6dD0+dC5zaXplPT09ZX0pfW1pblNpemUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGEgbWluaW11bSBzaXplIG9mIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3Quc2l6ZX1cXGBgLHZhbGlkYXRvcjp0PT50LnNpemU+PWV9KX1tYXhTaXplKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhIG1heGltdW0gc2l6ZSBvZiBcXGAke2V9XFxgLCBnb3QgXFxgJHt0LnNpemV9XFxgYCx2YWxpZGF0b3I6dD0+dC5zaXplPD1lfSl9aGFzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gRXhwZWN0ZWQgJHt0fSB0byBoYXZlIGl0ZW1zIFxcYCR7SlNPTi5zdHJpbmdpZnkocil9XFxgYCx2YWxpZGF0b3I6dD0+by5kZWZhdWx0KHQsZSl9KX1oYXNBbnkoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGFueSBpdGVtIG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6dD0+ZS5zb21lKGU9PnQuaGFzKGUpKX0pfW9mVHlwZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YCgke3R9KSAke3J9YCx2YWxpZGF0b3I6dD0+cy5kZWZhdWx0KHQsZSl9KX1nZXQgZW1wdHkoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGVtcHR5LCBnb3QgXFxgJHtKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGUpKX1cXGBgLHZhbGlkYXRvcjplPT4wPT09ZS5zaXplfSl9Z2V0IG5vbkVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBub3QgYmUgZW1wdHlgLHZhbGlkYXRvcjplPT5lLnNpemU+MH0pfWRlZXBFcXVhbChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGRlZXBseSBlcXVhbCB0byBcXGAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20oZSkpfVxcYCwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbSh0KSl9XFxgYCx2YWxpZGF0b3I6dD0+bi5kZWZhdWx0KHQsZSl9KX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1yKDApLGk9YShyKDMpKTt0LldlYWtTZXRQcmVkaWNhdGU9Y2xhc3MgZXh0ZW5kcyBuLlByZWRpY2F0ZXtjb25zdHJ1Y3RvcihlKXtzdXBlcihcIldlYWtTZXRcIixlKX1oYXMoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmBFeHBlY3RlZCAke3R9IHRvIGhhdmUgaXRlbXMgXFxgJHtKU09OLnN0cmluZ2lmeShyKX1cXGBgLHZhbGlkYXRvcjp0PT5pLmRlZmF1bHQodCxlKX0pfWhhc0FueSguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYW55IGl0ZW0gb2YgXFxgJHtKU09OLnN0cmluZ2lmeShlKX1cXGBgLHZhbGlkYXRvcjp0PT5lLnNvbWUoZT0+dC5oYXMoZSkpfSl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGE9cig4KSxuPXIoMik7dC5BbnlQcmVkaWNhdGU9Y2xhc3N7Y29uc3RydWN0b3IoZSx0PXt9KXt0aGlzLnByZWRpY2F0ZXM9ZSx0aGlzLm9wdGlvbnM9dH1bbi50ZXN0U3ltYm9sXShlLHQscil7Y29uc3Qgbj1bXCJBbnkgcHJlZGljYXRlIGZhaWxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3JzOlwiXTtmb3IoY29uc3QgYSBvZiB0aGlzLnByZWRpY2F0ZXMpdHJ5e3JldHVybiB2b2lkIHQoZSxyLGEpfWNhdGNoKHQpe2lmKHZvaWQgMD09PWUmJiEwPT09dGhpcy5vcHRpb25zLm9wdGlvbmFsKXJldHVybjtuLnB1c2goYC0gJHt0Lm1lc3NhZ2V9YCl9dGhyb3cgbmV3IGEuQXJndW1lbnRFcnJvcihuLmpvaW4oXCJcXG5cIiksdCl9fX1dKTtjb25zdCBfX2V4cG9ydF9fPW1vZHVsZS5leHBvcnRzLmRlZmF1bHQ7bW9kdWxlLmV4cG9ydHM9X19leHBvcnRfXyxtb2R1bGUuZXhwb3J0cy5kZWZhdWx0PV9fZXhwb3J0X187XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZSB2MS40LjEgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgKi9cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdCFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKFxuXHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLnNlbGYgPT09IGZyZWVHbG9iYWxcblx0KSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwdW55Y29kZWAgb2JqZWN0LlxuXHQgKiBAbmFtZSBwdW55Y29kZVxuXHQgKiBAdHlwZSBPYmplY3Rcblx0ICovXG5cdHZhciBwdW55Y29kZSxcblxuXHQvKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuXHQvKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5cdGJhc2UgPSAzNixcblx0dE1pbiA9IDEsXG5cdHRNYXggPSAyNixcblx0c2tldyA9IDM4LFxuXHRkYW1wID0gNzAwLFxuXHRpbml0aWFsQmlhcyA9IDcyLFxuXHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRkZWxpbWl0ZXIgPSAnLScsIC8vICdcXHgyRCdcblxuXHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRyZWdleFB1bnljb2RlID0gL154bi0tLyxcblx0cmVnZXhOb25BU0NJSSA9IC9bXlxceDIwLVxceDdFXS8sIC8vIHVucHJpbnRhYmxlIEFTQ0lJIGNoYXJzICsgbm9uLUFTQ0lJIGNoYXJzXG5cdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuXHQvKiogRXJyb3IgbWVzc2FnZXMgKi9cblx0ZXJyb3JzID0ge1xuXHRcdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdFx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHR9LFxuXG5cdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0YmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluLFxuXHRmbG9vciA9IE1hdGguZmxvb3IsXG5cdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cblx0LyoqIFRlbXBvcmFyeSB2YXJpYWJsZSAqL1xuXHRrZXk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG5cdH1cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuXHQgKiBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXAoYXJyYXksIGZuKSB7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuXHQgKiBhZGRyZXNzZXMuXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuXHQgKiBjaGFyYWN0ZXIuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0XHR2YXIgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHRcdC8vIHRoZSBsb2NhbCBwYXJ0IChpLmUuIGV2ZXJ5dGhpbmcgdXAgdG8gYEBgKSBpbnRhY3QuXG5cdFx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHRcdH1cblx0XHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0XHR2YXIgbGFiZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG5cdFx0dmFyIGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRcdHJldHVybiByZXN1bHQgKyBlbmNvZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbnVtZXJpYyBjb2RlIHBvaW50cyBvZiBlYWNoIFVuaWNvZGVcblx0ICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuXHQgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuXHQgKiBVQ1MtMiBleHBvc2VzIGFzIHNlcGFyYXRlIGNoYXJhY3RlcnMpIGludG8gYSBzaW5nbGUgY29kZSBwb2ludCxcblx0ICogbWF0Y2hpbmcgVVRGLTE2LlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcblx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGRlY29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBVbmljb2RlIGlucHV0IHN0cmluZyAoVUNTLTIpLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgY291bnRlciA9IDAsXG5cdFx0ICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG5cdFx0ICAgIHZhbHVlLFxuXHRcdCAgICBleHRyYTtcblx0XHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmRlY29kZWBcblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZW5jb2RlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGNvZGVQb2ludHMgVGhlIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHRcdHZhbHVlIC09IDB4MTAwMDA7XG5cdFx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuXHQgKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpbiB0aGUgcmFuZ2UgYDBgIHRvIGBiYXNlIC0gMWAsIG9yIGBiYXNlYCBpZlxuXHQgKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2ljVG9EaWdpdChjb2RlUG9pbnQpIHtcblx0XHRpZiAoY29kZVBvaW50IC0gNDggPCAxMCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDIyO1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gNjUgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDY1O1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gOTcgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDk3O1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuXHQgKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcblx0ICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcblx0ICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cblx0ICovXG5cdGZ1bmN0aW9uIGRpZ2l0VG9CYXNpYyhkaWdpdCwgZmxhZykge1xuXHRcdC8vICAwLi4yNSBtYXAgdG8gQVNDSUkgYS4ueiBvciBBLi5aXG5cdFx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdFx0cmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KSAtICgoZmxhZyAhPSAwKSA8PCA1KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCaWFzIGFkYXB0YXRpb24gZnVuY3Rpb24gYXMgcGVyIHNlY3Rpb24gMy40IG9mIFJGQyAzNDkyLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS40LjEnLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7XG5cdFx0XHQvLyBpbiBOb2RlLmpzLCBpby5qcywgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAoa2V5IGluIHB1bnljb2RlKSB7XG5cdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgcGVyY2VudFR3ZW50aWVzID0gLyUyMC9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnZGVmYXVsdCc6ICdSRkMzOTg2JyxcbiAgICBmb3JtYXR0ZXJzOiB7XG4gICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICB9LFxuICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgYWxsb3dQcm90b3R5cGVzOiBmYWxzZSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgY29tbWE6IGZhbHNlLFxuICAgIGRlY29kZXI6IHV0aWxzLmRlY29kZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBpZ25vcmVRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzOiBmYWxzZSxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMCxcbiAgICBwYXJzZUFycmF5czogdHJ1ZSxcbiAgICBwbGFpbk9iamVjdHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpbnRlcnByZXROdW1lcmljRW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIyhcXGQrKTsvZywgZnVuY3Rpb24gKCQwLCBudW1iZXJTdHIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobnVtYmVyU3RyLCAxMCkpO1xuICAgIH0pO1xufTtcblxuLy8gVGhpcyBpcyB3aGF0IGJyb3dzZXJzIHdpbGwgc3VibWl0IHdoZW4gdGhlIOKckyBjaGFyYWN0ZXIgb2NjdXJzIGluIGFuXG4vLyBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQgYm9keSBhbmQgdGhlIGVuY29kaW5nIG9mIHRoZSBwYWdlIGNvbnRhaW5pbmdcbi8vIHRoZSBmb3JtIGlzIGlzby04ODU5LTEsIG9yIHdoZW4gdGhlIHN1Ym1pdHRlZCBmb3JtIGhhcyBhbiBhY2NlcHQtY2hhcnNldFxuLy8gYXR0cmlidXRlIG9mIGlzby04ODU5LTEuIFByZXN1bWFibHkgYWxzbyB3aXRoIG90aGVyIGNoYXJzZXRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbi8vIHRoZSDinJMgY2hhcmFjdGVyLCBzdWNoIGFzIHVzLWFzY2lpLlxudmFyIGlzb1NlbnRpbmVsID0gJ3V0Zjg9JTI2JTIzMTAwMDMlM0InOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JylcblxuLy8gVGhlc2UgYXJlIHRoZSBwZXJjZW50LWVuY29kZWQgdXRmLTggb2N0ZXRzIHJlcHJlc2VudGluZyBhIGNoZWNrbWFyaywgaW5kaWNhdGluZyB0aGF0IHRoZSByZXF1ZXN0IGFjdHVhbGx5IGlzIHV0Zi04IGVuY29kZWQuXG52YXIgY2hhcnNldFNlbnRpbmVsID0gJ3V0Zjg9JUUyJTlDJTkzJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuXG52YXIgcGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nVmFsdWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgY2xlYW5TdHIgPSBvcHRpb25zLmlnbm9yZVF1ZXJ5UHJlZml4ID8gc3RyLnJlcGxhY2UoL15cXD8vLCAnJykgOiBzdHI7XG4gICAgdmFyIGxpbWl0ID0gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0O1xuICAgIHZhciBwYXJ0cyA9IGNsZWFuU3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBsaW1pdCk7XG4gICAgdmFyIHNraXBJbmRleCA9IC0xOyAvLyBLZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSB1dGY4IHNlbnRpbmVsIHdhcyBmb3VuZFxuICAgIHZhciBpO1xuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRpb25zLmNoYXJzZXQ7XG4gICAgaWYgKG9wdGlvbnMuY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHBhcnRzW2ldLmluZGV4T2YoJ3V0Zjg9JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydHNbaV0gPT09IGNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRzW2ldID09PSBpc29TZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBza2lwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGkgPSBwYXJ0cy5sZW5ndGg7IC8vIFRoZSBlc2xpbnQgc2V0dGluZ3MgZG8gbm90IGFsbG93IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpID09PSBza2lwSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG5cbiAgICAgICAgdmFyIGJyYWNrZXRFcXVhbHNQb3MgPSBwYXJ0LmluZGV4T2YoJ109Jyk7XG4gICAgICAgIHZhciBwb3MgPSBicmFja2V0RXF1YWxzUG9zID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogYnJhY2tldEVxdWFsc1BvcyArIDE7XG5cbiAgICAgICAgdmFyIGtleSwgdmFsO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPyBudWxsIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZSgwLCBwb3MpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKHBvcyArIDEpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgJiYgY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICB2YWwgPSBpbnRlcnByZXROdW1lcmljRW50aXRpZXModmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5jb21tYSAmJiB2YWwuaW5kZXhPZignLCcpID4gLTEpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zcGxpdCgnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB1dGlscy5jb21iaW5lKG9ialtrZXldLCB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIHBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGVhZiA9IHZhbDtcblxuICAgIGZvciAodmFyIGkgPSBjaGFpbi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgb2JqO1xuICAgICAgICB2YXIgcm9vdCA9IGNoYWluW2ldO1xuXG4gICAgICAgIGlmIChyb290ID09PSAnW10nICYmIG9wdGlvbnMucGFyc2VBcnJheXMpIHtcbiAgICAgICAgICAgIG9iaiA9IFtdLmNvbmNhdChsZWFmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgICAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3QuY2hhckF0KDApID09PSAnWycgJiYgcm9vdC5jaGFyQXQocm9vdC5sZW5ndGggLSAxKSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCAtMSkgOiByb290O1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFyc2VBcnJheXMgJiYgY2xlYW5Sb290ID09PSAnJykge1xuICAgICAgICAgICAgICAgIG9iaiA9IHsgMDogbGVhZiB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAhaXNOYU4oaW5kZXgpXG4gICAgICAgICAgICAgICAgJiYgcm9vdCAhPT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgU3RyaW5nKGluZGV4KSA9PT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgaW5kZXggPj0gMFxuICAgICAgICAgICAgICAgICYmIChvcHRpb25zLnBhcnNlQXJyYXlzICYmIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG9iaiA9IFtdO1xuICAgICAgICAgICAgICAgIG9ialtpbmRleF0gPSBsZWFmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGxlYWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZWFmID0gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBsZWFmO1xufTtcblxudmFyIHBhcnNlS2V5cyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdLZXlzKGdpdmVuS2V5LCB2YWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWdpdmVuS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZG90IG5vdGF0aW9uIHRvIGJyYWNrZXQgbm90YXRpb25cbiAgICB2YXIga2V5ID0gb3B0aW9ucy5hbGxvd0RvdHMgPyBnaXZlbktleS5yZXBsYWNlKC9cXC4oW14uW10rKS9nLCAnWyQxXScpIDogZ2l2ZW5LZXk7XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgYnJhY2tldHMgPSAvKFxcW1teW1xcXV0qXSkvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15bXFxdXSpdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gYnJhY2tldHMuZXhlYyhrZXkpO1xuICAgIHZhciBwYXJlbnQgPSBzZWdtZW50ID8ga2V5LnNsaWNlKDAsIHNlZ21lbnQuaW5kZXgpIDoga2V5O1xuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgdXNpbmcgcGxhaW4gb2JqZWN0cywgb3B0aW9uYWxseSBwcmVmaXgga2V5cyB0aGF0IHdvdWxkIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBwYXJlbnQpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga2V5cy5wdXNoKHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc2VnbWVudFsxXS5zbGljZSgxLCAtMSkpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zKTtcbn07XG5cbnZhciBub3JtYWxpemVQYXJzZU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZGVjb2RlciAhPT0gbnVsbCAmJiBvcHRzLmRlY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5kZWNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RlY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHZhciBjaGFyc2V0ID0gdHlwZW9mIG9wdHMuY2hhcnNldCA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5jaGFyc2V0IDogb3B0cy5jaGFyc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgYWxsb3dQcm90b3R5cGVzOiB0eXBlb2Ygb3B0cy5hbGxvd1Byb3RvdHlwZXMgPT09ICdib29sZWFuJyA/IG9wdHMuYWxsb3dQcm90b3R5cGVzIDogZGVmYXVsdHMuYWxsb3dQcm90b3R5cGVzLFxuICAgICAgICBhcnJheUxpbWl0OiB0eXBlb2Ygb3B0cy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMuYXJyYXlMaW1pdCA6IGRlZmF1bHRzLmFycmF5TGltaXQsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgY29tbWE6IHR5cGVvZiBvcHRzLmNvbW1hID09PSAnYm9vbGVhbicgPyBvcHRzLmNvbW1hIDogZGVmYXVsdHMuY29tbWEsXG4gICAgICAgIGRlY29kZXI6IHR5cGVvZiBvcHRzLmRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmRlY29kZXIgOiBkZWZhdWx0cy5kZWNvZGVyLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgdXRpbHMuaXNSZWdFeHAob3B0cy5kZWxpbWl0ZXIpID8gb3B0cy5kZWxpbWl0ZXIgOiBkZWZhdWx0cy5kZWxpbWl0ZXIsXG4gICAgICAgIGRlcHRoOiB0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRzLmRlcHRoIDogZGVmYXVsdHMuZGVwdGgsXG4gICAgICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBvcHRzLmlnbm9yZVF1ZXJ5UHJlZml4ID09PSB0cnVlLFxuICAgICAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IHR5cGVvZiBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgOiBkZWZhdWx0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMsXG4gICAgICAgIHBhcmFtZXRlckxpbWl0OiB0eXBlb2Ygb3B0cy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLnBhcmFtZXRlckxpbWl0IDogZGVmYXVsdHMucGFyYW1ldGVyTGltaXQsXG4gICAgICAgIHBhcnNlQXJyYXlzOiBvcHRzLnBhcnNlQXJyYXlzICE9PSBmYWxzZSxcbiAgICAgICAgcGxhaW5PYmplY3RzOiB0eXBlb2Ygb3B0cy5wbGFpbk9iamVjdHMgPT09ICdib29sZWFuJyA/IG9wdHMucGxhaW5PYmplY3RzIDogZGVmYXVsdHMucGxhaW5PYmplY3RzLFxuICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IHR5cGVvZiBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmdcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cyk7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwgfHwgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBwYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gcGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gdXRpbHMubWVyZ2Uob2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBhcnJheVByZWZpeEdlbmVyYXRvcnMgPSB7XG4gICAgYnJhY2tldHM6IGZ1bmN0aW9uIGJyYWNrZXRzKHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICB9LFxuICAgIGNvbW1hOiAnY29tbWEnLFxuICAgIGluZGljZXM6IGZ1bmN0aW9uIGluZGljZXMocHJlZml4LCBrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbJyArIGtleSArICddJztcbiAgICB9LFxuICAgIHJlcGVhdDogZnVuY3Rpb24gcmVwZWF0KHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgIH1cbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG52YXIgcHVzaFRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZU9yQXJyYXkpIHtcbiAgICBwdXNoLmFwcGx5KGFyciwgaXNBcnJheSh2YWx1ZU9yQXJyYXkpID8gdmFsdWVPckFycmF5IDogW3ZhbHVlT3JBcnJheV0pO1xufTtcblxudmFyIHRvSVNPID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhZGRRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBmb3JtYXR0ZXI6IGZvcm1hdHMuZm9ybWF0dGVyc1tmb3JtYXRzWydkZWZhdWx0J11dLFxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBpbmRpY2VzOiBmYWxzZSxcbiAgICBzZXJpYWxpemVEYXRlOiBmdW5jdGlvbiBzZXJpYWxpemVEYXRlKGRhdGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoZGF0ZSk7XG4gICAgfSxcbiAgICBza2lwTnVsbHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgb2JqZWN0LFxuICAgIHByZWZpeCxcbiAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICBza2lwTnVsbHMsXG4gICAgZW5jb2RlcixcbiAgICBmaWx0ZXIsXG4gICAgc29ydCxcbiAgICBhbGxvd0RvdHMsXG4gICAgc2VyaWFsaXplRGF0ZSxcbiAgICBmb3JtYXR0ZXIsXG4gICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICBjaGFyc2V0XG4pIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iaiA9IGZpbHRlcihwcmVmaXgsIG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IHNlcmlhbGl6ZURhdGUob2JqKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgaXNBcnJheShvYmopKSB7XG4gICAgICAgIG9iaiA9IG9iai5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWN0TnVsbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlciAmJiAhZW5jb2RlVmFsdWVzT25seSA/IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0KSA6IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnZnVuY3Rpb24nID8gZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSkgOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRzLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChvcHRpb25zLnNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzZXRcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG52YXIgY29tcGFjdFF1ZXVlID0gZnVuY3Rpb24gY29tcGFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9iai5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2pdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5vYmpbaXRlbS5wcm9wXSA9IGNvbXBhY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBhcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gYXJyYXlUb09iamVjdChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmICFpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBhcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSB0YXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEl0ZW0gJiYgdHlwZW9mIHRhcmdldEl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG1lcmdlKHRhcmdldEl0ZW0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoaGFzLmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxudmFyIGFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnblNpbmdsZVNvdXJjZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0YXJnZXQpO1xufTtcblxudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIsIGRlY29kZXIsIGNoYXJzZXQpIHtcbiAgICB2YXIgc3RyV2l0aG91dFBsdXMgPSBzdHIucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAvLyB1bmVzY2FwZSBuZXZlciB0aHJvd3MsIG5vIHRyeS4uLmNhdGNoIG5lZWRlZDpcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzLnJlcGxhY2UoLyVbMC05YS1mXXsyfS9naSwgdW5lc2NhcGUpO1xuICAgIH1cbiAgICAvLyB1dGYtOFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyV2l0aG91dFBsdXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzO1xuICAgIH1cbn07XG5cbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoc3RyLCBkZWZhdWx0RW5jb2RlciwgY2hhcnNldCkge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBzdHIgOiBTdHJpbmcoc3RyKTtcblxuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShzdHJpbmcpLnJlcGxhY2UoLyV1WzAtOWEtZl17NH0vZ2ksIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAgICAgcmV0dXJuICclMjYlMjMnICsgcGFyc2VJbnQoJDAuc2xpY2UoMiksIDE2KSArICclM0InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIC8vIC1cbiAgICAgICAgICAgIHx8IGMgPT09IDB4MkUgLy8gLlxuICAgICAgICAgICAgfHwgYyA9PT0gMHg1RiAvLyBfXG4gICAgICAgICAgICB8fCBjID09PSAweDdFIC8vIH5cbiAgICAgICAgICAgIHx8IChjID49IDB4MzAgJiYgYyA8PSAweDM5KSAvLyAwLTlcbiAgICAgICAgICAgIHx8IChjID49IDB4NDEgJiYgYyA8PSAweDVBKSAvLyBhLXpcbiAgICAgICAgICAgIHx8IChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIG91dCArPSBoZXhUYWJsZVsweEYwIHwgKGMgPj4gMTgpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDEyKSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxudmFyIGNvbXBhY3QgPSBmdW5jdGlvbiBjb21wYWN0KHZhbHVlKSB7XG4gICAgdmFyIHF1ZXVlID0gW3sgb2JqOiB7IG86IHZhbHVlIH0sIHByb3A6ICdvJyB9XTtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlW2ldO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal07XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsICYmIHJlZnMuaW5kZXhPZih2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goeyBvYmo6IG9iaiwgcHJvcDoga2V5IH0pO1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFjdFF1ZXVlKHF1ZXVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBpc1JlZ0V4cCA9IGZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcblxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiBjb21iaW5lKGEsIGIpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGEsIGIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtZXJnZTogbWVyZ2Vcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwdW55Y29kZSA9IHJlcXVpcmUoJ3B1bnljb2RlJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5leHBvcnRzLnBhcnNlID0gdXJsUGFyc2U7XG5leHBvcnRzLnJlc29sdmUgPSB1cmxSZXNvbHZlO1xuZXhwb3J0cy5yZXNvbHZlT2JqZWN0ID0gdXJsUmVzb2x2ZU9iamVjdDtcbmV4cG9ydHMuZm9ybWF0ID0gdXJsRm9ybWF0O1xuXG5leHBvcnRzLlVybCA9IFVybDtcblxuZnVuY3Rpb24gVXJsKCkge1xuICB0aGlzLnByb3RvY29sID0gbnVsbDtcbiAgdGhpcy5zbGFzaGVzID0gbnVsbDtcbiAgdGhpcy5hdXRoID0gbnVsbDtcbiAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgdGhpcy5wb3J0ID0gbnVsbDtcbiAgdGhpcy5ob3N0bmFtZSA9IG51bGw7XG4gIHRoaXMuaGFzaCA9IG51bGw7XG4gIHRoaXMuc2VhcmNoID0gbnVsbDtcbiAgdGhpcy5xdWVyeSA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xuICB0aGlzLnBhdGggPSBudWxsO1xuICB0aGlzLmhyZWYgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBhIHNpbXBsZSBwYXRoIFVSTFxuICAgIHNpbXBsZVBhdGhQYXR0ZXJuID0gL14oXFwvXFwvPyg/IVxcLylbXlxcP1xcc10qKShcXD9bXlxcc10qKT8kLyxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIHJlc2VydmVkIGZvciBkZWxpbWl0aW5nIFVSTHMuXG4gICAgLy8gV2UgYWN0dWFsbHkganVzdCBhdXRvLWVzY2FwZSB0aGVzZS5cbiAgICBkZWxpbXMgPSBbJzwnLCAnPicsICdcIicsICdgJywgJyAnLCAnXFxyJywgJ1xcbicsICdcXHQnXSxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGZvciB2YXJpb3VzIHJlYXNvbnMuXG4gICAgdW53aXNlID0gWyd7JywgJ30nLCAnfCcsICdcXFxcJywgJ14nLCAnYCddLmNvbmNhdChkZWxpbXMpLFxuXG4gICAgLy8gQWxsb3dlZCBieSBSRkNzLCBidXQgY2F1c2Ugb2YgWFNTIGF0dGFja3MuICBBbHdheXMgZXNjYXBlIHRoZXNlLlxuICAgIGF1dG9Fc2NhcGUgPSBbJ1xcJyddLmNvbmNhdCh1bndpc2UpLFxuICAgIC8vIENoYXJhY3RlcnMgdGhhdCBhcmUgbmV2ZXIgZXZlciBhbGxvd2VkIGluIGEgaG9zdG5hbWUuXG4gICAgLy8gTm90ZSB0aGF0IGFueSBpbnZhbGlkIGNoYXJzIGFyZSBhbHNvIGhhbmRsZWQsIGJ1dCB0aGVzZVxuICAgIC8vIGFyZSB0aGUgb25lcyB0aGF0IGFyZSAqZXhwZWN0ZWQqIHRvIGJlIHNlZW4sIHNvIHdlIGZhc3QtcGF0aFxuICAgIC8vIHRoZW0uXG4gICAgbm9uSG9zdENoYXJzID0gWyclJywgJy8nLCAnPycsICc7JywgJyMnXS5jb25jYXQoYXV0b0VzY2FwZSksXG4gICAgaG9zdEVuZGluZ0NoYXJzID0gWycvJywgJz8nLCAnIyddLFxuICAgIGhvc3RuYW1lTWF4TGVuID0gMjU1LFxuICAgIGhvc3RuYW1lUGFydFBhdHRlcm4gPSAvXlsrYS16MC05QS1aXy1dezAsNjN9JC8sXG4gICAgaG9zdG5hbWVQYXJ0U3RhcnQgPSAvXihbK2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC8sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgY2FuIGFsbG93IFwidW5zYWZlXCIgYW5kIFwidW53aXNlXCIgY2hhcnMuXG4gICAgdW5zYWZlUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH0sXG4gICAgcXVlcnlzdHJpbmcgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuXG5mdW5jdGlvbiB1cmxQYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgdXRpbC5pc09iamVjdCh1cmwpICYmIHVybCBpbnN0YW5jZW9mIFVybCkgcmV0dXJuIHVybDtcblxuICB2YXIgdSA9IG5ldyBVcmw7XG4gIHUucGFyc2UodXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCk7XG4gIHJldHVybiB1O1xufVxuXG5VcmwucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24odXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBpZiAoIXV0aWwuaXNTdHJpbmcodXJsKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXJhbWV0ZXIgJ3VybCcgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHVybCk7XG4gIH1cblxuICAvLyBDb3B5IGNocm9tZSwgSUUsIG9wZXJhIGJhY2tzbGFzaC1oYW5kbGluZyBiZWhhdmlvci5cbiAgLy8gQmFjayBzbGFzaGVzIGJlZm9yZSB0aGUgcXVlcnkgc3RyaW5nIGdldCBjb252ZXJ0ZWQgdG8gZm9yd2FyZCBzbGFzaGVzXG4gIC8vIFNlZTogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI1OTE2XG4gIHZhciBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoJz8nKSxcbiAgICAgIHNwbGl0dGVyID1cbiAgICAgICAgICAocXVlcnlJbmRleCAhPT0gLTEgJiYgcXVlcnlJbmRleCA8IHVybC5pbmRleE9mKCcjJykpID8gJz8nIDogJyMnLFxuICAgICAgdVNwbGl0ID0gdXJsLnNwbGl0KHNwbGl0dGVyKSxcbiAgICAgIHNsYXNoUmVnZXggPSAvXFxcXC9nO1xuICB1U3BsaXRbMF0gPSB1U3BsaXRbMF0ucmVwbGFjZShzbGFzaFJlZ2V4LCAnLycpO1xuICB1cmwgPSB1U3BsaXQuam9pbihzcGxpdHRlcik7XG5cbiAgdmFyIHJlc3QgPSB1cmw7XG5cbiAgLy8gdHJpbSBiZWZvcmUgcHJvY2VlZGluZy5cbiAgLy8gVGhpcyBpcyB0byBzdXBwb3J0IHBhcnNlIHN0dWZmIGxpa2UgXCIgIGh0dHA6Ly9mb28uY29tICBcXG5cIlxuICByZXN0ID0gcmVzdC50cmltKCk7XG5cbiAgaWYgKCFzbGFzaGVzRGVub3RlSG9zdCAmJiB1cmwuc3BsaXQoJyMnKS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBUcnkgZmFzdCBwYXRoIHJlZ2V4cFxuICAgIHZhciBzaW1wbGVQYXRoID0gc2ltcGxlUGF0aFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgICBpZiAoc2ltcGxlUGF0aCkge1xuICAgICAgdGhpcy5wYXRoID0gcmVzdDtcbiAgICAgIHRoaXMuaHJlZiA9IHJlc3Q7XG4gICAgICB0aGlzLnBhdGhuYW1lID0gc2ltcGxlUGF0aFsxXTtcbiAgICAgIGlmIChzaW1wbGVQYXRoWzJdKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2ltcGxlUGF0aFsyXTtcbiAgICAgICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlzdHJpbmcucGFyc2UodGhpcy5zZWFyY2guc3Vic3RyKDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5zZWFyY2guc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAnJztcbiAgICAgICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3RvID0gcHJvdG9jb2xQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gIGlmIChwcm90bykge1xuICAgIHByb3RvID0gcHJvdG9bMF07XG4gICAgdmFyIGxvd2VyUHJvdG8gPSBwcm90by50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucHJvdG9jb2wgPSBsb3dlclByb3RvO1xuICAgIHJlc3QgPSByZXN0LnN1YnN0cihwcm90by5sZW5ndGgpO1xuICB9XG5cbiAgLy8gZmlndXJlIG91dCBpZiBpdCdzIGdvdCBhIGhvc3RcbiAgLy8gdXNlckBzZXJ2ZXIgaXMgKmFsd2F5cyogaW50ZXJwcmV0ZWQgYXMgYSBob3N0bmFtZSwgYW5kIHVybFxuICAvLyByZXNvbHV0aW9uIHdpbGwgdHJlYXQgLy9mb28vYmFyIGFzIGhvc3Q9Zm9vLHBhdGg9YmFyIGJlY2F1c2UgdGhhdCdzXG4gIC8vIGhvdyB0aGUgYnJvd3NlciByZXNvbHZlcyByZWxhdGl2ZSBVUkxzLlxuICBpZiAoc2xhc2hlc0Rlbm90ZUhvc3QgfHwgcHJvdG8gfHwgcmVzdC5tYXRjaCgvXlxcL1xcL1teQFxcL10rQFteQFxcL10rLykpIHtcbiAgICB2YXIgc2xhc2hlcyA9IHJlc3Quc3Vic3RyKDAsIDIpID09PSAnLy8nO1xuICAgIGlmIChzbGFzaGVzICYmICEocHJvdG8gJiYgaG9zdGxlc3NQcm90b2NvbFtwcm90b10pKSB7XG4gICAgICByZXN0ID0gcmVzdC5zdWJzdHIoMik7XG4gICAgICB0aGlzLnNsYXNoZXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaG9zdGxlc3NQcm90b2NvbFtwcm90b10gJiZcbiAgICAgIChzbGFzaGVzIHx8IChwcm90byAmJiAhc2xhc2hlZFByb3RvY29sW3Byb3RvXSkpKSB7XG5cbiAgICAvLyB0aGVyZSdzIGEgaG9zdG5hbWUuXG4gICAgLy8gdGhlIGZpcnN0IGluc3RhbmNlIG9mIC8sID8sIDssIG9yICMgZW5kcyB0aGUgaG9zdC5cbiAgICAvL1xuICAgIC8vIElmIHRoZXJlIGlzIGFuIEAgaW4gdGhlIGhvc3RuYW1lLCB0aGVuIG5vbi1ob3N0IGNoYXJzICphcmUqIGFsbG93ZWRcbiAgICAvLyB0byB0aGUgbGVmdCBvZiB0aGUgbGFzdCBAIHNpZ24sIHVubGVzcyBzb21lIGhvc3QtZW5kaW5nIGNoYXJhY3RlclxuICAgIC8vIGNvbWVzICpiZWZvcmUqIHRoZSBALXNpZ24uXG4gICAgLy8gVVJMcyBhcmUgb2Jub3hpb3VzLlxuICAgIC8vXG4gICAgLy8gZXg6XG4gICAgLy8gaHR0cDovL2FAYkBjLyA9PiB1c2VyOmFAYiBob3N0OmNcbiAgICAvLyBodHRwOi8vYUBiP0BjID0+IHVzZXI6YSBob3N0OmMgcGF0aDovP0BjXG5cbiAgICAvLyB2MC4xMiBUT0RPKGlzYWFjcyk6IFRoaXMgaXMgbm90IHF1aXRlIGhvdyBDaHJvbWUgZG9lcyB0aGluZ3MuXG4gICAgLy8gUmV2aWV3IG91ciB0ZXN0IGNhc2UgYWdhaW5zdCBicm93c2VycyBtb3JlIGNvbXByZWhlbnNpdmVseS5cblxuICAgIC8vIGZpbmQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIGFueSBob3N0RW5kaW5nQ2hhcnNcbiAgICB2YXIgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9zdEVuZGluZ0NoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKGhvc3RFbmRpbmdDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuXG4gICAgLy8gYXQgdGhpcyBwb2ludCwgZWl0aGVyIHdlIGhhdmUgYW4gZXhwbGljaXQgcG9pbnQgd2hlcmUgdGhlXG4gICAgLy8gYXV0aCBwb3J0aW9uIGNhbm5vdCBnbyBwYXN0LCBvciB0aGUgbGFzdCBAIGNoYXIgaXMgdGhlIGRlY2lkZXIuXG4gICAgdmFyIGF1dGgsIGF0U2lnbjtcbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIGF0U2lnbiBjYW4gYmUgYW55d2hlcmUuXG4gICAgICBhdFNpZ24gPSByZXN0Lmxhc3RJbmRleE9mKCdAJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGF0U2lnbiBtdXN0IGJlIGluIGF1dGggcG9ydGlvbi5cbiAgICAgIC8vIGh0dHA6Ly9hQGIvY0BkID0+IGhvc3Q6YiBhdXRoOmEgcGF0aDovY0BkXG4gICAgICBhdFNpZ24gPSByZXN0Lmxhc3RJbmRleE9mKCdAJywgaG9zdEVuZCk7XG4gICAgfVxuXG4gICAgLy8gTm93IHdlIGhhdmUgYSBwb3J0aW9uIHdoaWNoIGlzIGRlZmluaXRlbHkgdGhlIGF1dGguXG4gICAgLy8gUHVsbCB0aGF0IG9mZi5cbiAgICBpZiAoYXRTaWduICE9PSAtMSkge1xuICAgICAgYXV0aCA9IHJlc3Quc2xpY2UoMCwgYXRTaWduKTtcbiAgICAgIHJlc3QgPSByZXN0LnNsaWNlKGF0U2lnbiArIDEpO1xuICAgICAgdGhpcy5hdXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIH1cblxuICAgIC8vIHRoZSBob3N0IGlzIHRoZSByZW1haW5pbmcgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IG5vbi1ob3N0IGNoYXJcbiAgICBob3N0RW5kID0gLTE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub25Ib3N0Q2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoZWMgPSByZXN0LmluZGV4T2Yobm9uSG9zdENoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSlcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICB9XG4gICAgLy8gaWYgd2Ugc3RpbGwgaGF2ZSBub3QgaGl0IGl0LCB0aGVuIHRoZSBlbnRpcmUgdGhpbmcgaXMgYSBob3N0LlxuICAgIGlmIChob3N0RW5kID09PSAtMSlcbiAgICAgIGhvc3RFbmQgPSByZXN0Lmxlbmd0aDtcblxuICAgIHRoaXMuaG9zdCA9IHJlc3Quc2xpY2UoMCwgaG9zdEVuZCk7XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoaG9zdEVuZCk7XG5cbiAgICAvLyBwdWxsIG91dCBwb3J0LlxuICAgIHRoaXMucGFyc2VIb3N0KCk7XG5cbiAgICAvLyB3ZSd2ZSBpbmRpY2F0ZWQgdGhhdCB0aGVyZSBpcyBhIGhvc3RuYW1lLFxuICAgIC8vIHNvIGV2ZW4gaWYgaXQncyBlbXB0eSwgaXQgaGFzIHRvIGJlIHByZXNlbnQuXG4gICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUgfHwgJyc7XG5cbiAgICAvLyBpZiBob3N0bmFtZSBiZWdpbnMgd2l0aCBbIGFuZCBlbmRzIHdpdGggXVxuICAgIC8vIGFzc3VtZSB0aGF0IGl0J3MgYW4gSVB2NiBhZGRyZXNzLlxuICAgIHZhciBpcHY2SG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lWzBdID09PSAnWycgJiZcbiAgICAgICAgdGhpcy5ob3N0bmFtZVt0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDFdID09PSAnXSc7XG5cbiAgICAvLyB2YWxpZGF0ZSBhIGxpdHRsZS5cbiAgICBpZiAoIWlwdjZIb3N0bmFtZSkge1xuICAgICAgdmFyIGhvc3RwYXJ0cyA9IHRoaXMuaG9zdG5hbWUuc3BsaXQoL1xcLi8pO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBob3N0cGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gaG9zdHBhcnRzW2ldO1xuICAgICAgICBpZiAoIXBhcnQpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIXBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICB2YXIgbmV3cGFydCA9ICcnO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBrID0gcGFydC5sZW5ndGg7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJ0LmNoYXJDb2RlQXQoaikgPiAxMjcpIHtcbiAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSBub24tQVNDSUkgY2hhciB3aXRoIGEgdGVtcG9yYXJ5IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgIC8vIHdlIG5lZWQgdGhpcyB0byBtYWtlIHN1cmUgc2l6ZSBvZiBob3N0bmFtZSBpcyBub3RcbiAgICAgICAgICAgICAgLy8gYnJva2VuIGJ5IHJlcGxhY2luZyBub24tQVNDSUkgYnkgbm90aGluZ1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9ICd4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gcGFydFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2UgdGVzdCBhZ2FpbiB3aXRoIEFTQ0lJIGNoYXIgb25seVxuICAgICAgICAgIGlmICghbmV3cGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkUGFydHMgPSBob3N0cGFydHMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB2YXIgbm90SG9zdCA9IGhvc3RwYXJ0cy5zbGljZShpICsgMSk7XG4gICAgICAgICAgICB2YXIgYml0ID0gcGFydC5tYXRjaChob3N0bmFtZVBhcnRTdGFydCk7XG4gICAgICAgICAgICBpZiAoYml0KSB7XG4gICAgICAgICAgICAgIHZhbGlkUGFydHMucHVzaChiaXRbMV0pO1xuICAgICAgICAgICAgICBub3RIb3N0LnVuc2hpZnQoYml0WzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RIb3N0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXN0ID0gJy8nICsgbm90SG9zdC5qb2luKCcuJykgKyByZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHZhbGlkUGFydHMuam9pbignLicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9zdG5hbWUubGVuZ3RoID4gaG9zdG5hbWVNYXhMZW4pIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaG9zdG5hbWVzIGFyZSBhbHdheXMgbG93ZXIgY2FzZS5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIC8vIElETkEgU3VwcG9ydDogUmV0dXJucyBhIHB1bnljb2RlZCByZXByZXNlbnRhdGlvbiBvZiBcImRvbWFpblwiLlxuICAgICAgLy8gSXQgb25seSBjb252ZXJ0cyBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgdGhhdFxuICAgICAgLy8gaGF2ZSBub24tQVNDSUkgY2hhcmFjdGVycywgaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZlxuICAgICAgLy8geW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0IGFscmVhZHkgaXMgQVNDSUktb25seS5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSBwdW55Y29kZS50b0FTQ0lJKHRoaXMuaG9zdG5hbWUpO1xuICAgIH1cblxuICAgIHZhciBwID0gdGhpcy5wb3J0ID8gJzonICsgdGhpcy5wb3J0IDogJyc7XG4gICAgdmFyIGggPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuICAgIHRoaXMuaG9zdCA9IGggKyBwO1xuICAgIHRoaXMuaHJlZiArPSB0aGlzLmhvc3Q7XG5cbiAgICAvLyBzdHJpcCBbIGFuZCBdIGZyb20gdGhlIGhvc3RuYW1lXG4gICAgLy8gdGhlIGhvc3QgZmllbGQgc3RpbGwgcmV0YWlucyB0aGVtLCB0aG91Z2hcbiAgICBpZiAoaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS5zdWJzdHIoMSwgdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIGlmIChyZXN0WzBdICE9PSAnLycpIHtcbiAgICAgICAgcmVzdCA9ICcvJyArIHJlc3Q7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbm93IHJlc3QgaXMgc2V0IHRvIHRoZSBwb3N0LWhvc3Qgc3R1ZmYuXG4gIC8vIGNob3Agb2ZmIGFueSBkZWxpbSBjaGFycy5cbiAgaWYgKCF1bnNhZmVQcm90b2NvbFtsb3dlclByb3RvXSkge1xuXG4gICAgLy8gRmlyc3QsIG1ha2UgMTAwJSBzdXJlIHRoYXQgYW55IFwiYXV0b0VzY2FwZVwiIGNoYXJzIGdldFxuICAgIC8vIGVzY2FwZWQsIGV2ZW4gaWYgZW5jb2RlVVJJQ29tcG9uZW50IGRvZXNuJ3QgdGhpbmsgdGhleVxuICAgIC8vIG5lZWQgdG8gYmUuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdXRvRXNjYXBlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGFlID0gYXV0b0VzY2FwZVtpXTtcbiAgICAgIGlmIChyZXN0LmluZGV4T2YoYWUpID09PSAtMSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB2YXIgZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGFlKTtcbiAgICAgIGlmIChlc2MgPT09IGFlKSB7XG4gICAgICAgIGVzYyA9IGVzY2FwZShhZSk7XG4gICAgICB9XG4gICAgICByZXN0ID0gcmVzdC5zcGxpdChhZSkuam9pbihlc2MpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gY2hvcCBvZmYgZnJvbSB0aGUgdGFpbCBmaXJzdC5cbiAgdmFyIGhhc2ggPSByZXN0LmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2ggIT09IC0xKSB7XG4gICAgLy8gZ290IGEgZnJhZ21lbnQgc3RyaW5nLlxuICAgIHRoaXMuaGFzaCA9IHJlc3Quc3Vic3RyKGhhc2gpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIGhhc2gpO1xuICB9XG4gIHZhciBxbSA9IHJlc3QuaW5kZXhPZignPycpO1xuICBpZiAocW0gIT09IC0xKSB7XG4gICAgdGhpcy5zZWFyY2ggPSByZXN0LnN1YnN0cihxbSk7XG4gICAgdGhpcy5xdWVyeSA9IHJlc3Quc3Vic3RyKHFtICsgMSk7XG4gICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgcW0pO1xuICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAvLyBubyBxdWVyeSBzdHJpbmcsIGJ1dCBwYXJzZVF1ZXJ5U3RyaW5nIHN0aWxsIHJlcXVlc3RlZFxuICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICB9XG4gIGlmIChyZXN0KSB0aGlzLnBhdGhuYW1lID0gcmVzdDtcbiAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuICAgICAgdGhpcy5ob3N0bmFtZSAmJiAhdGhpcy5wYXRobmFtZSkge1xuICAgIHRoaXMucGF0aG5hbWUgPSAnLyc7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gIGlmICh0aGlzLnBhdGhuYW1lIHx8IHRoaXMuc2VhcmNoKSB7XG4gICAgdmFyIHAgPSB0aGlzLnBhdGhuYW1lIHx8ICcnO1xuICAgIHZhciBzID0gdGhpcy5zZWFyY2ggfHwgJyc7XG4gICAgdGhpcy5wYXRoID0gcCArIHM7XG4gIH1cblxuICAvLyBmaW5hbGx5LCByZWNvbnN0cnVjdCB0aGUgaHJlZiBiYXNlZCBvbiB3aGF0IGhhcyBiZWVuIHZhbGlkYXRlZC5cbiAgdGhpcy5ocmVmID0gdGhpcy5mb3JtYXQoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBmb3JtYXQgYSBwYXJzZWQgb2JqZWN0IGludG8gYSB1cmwgc3RyaW5nXG5mdW5jdGlvbiB1cmxGb3JtYXQob2JqKSB7XG4gIC8vIGVuc3VyZSBpdCdzIGFuIG9iamVjdCwgYW5kIG5vdCBhIHN0cmluZyB1cmwuXG4gIC8vIElmIGl0J3MgYW4gb2JqLCB0aGlzIGlzIGEgbm8tb3AuXG4gIC8vIHRoaXMgd2F5LCB5b3UgY2FuIGNhbGwgdXJsX2Zvcm1hdCgpIG9uIHN0cmluZ3NcbiAgLy8gdG8gY2xlYW4gdXAgcG90ZW50aWFsbHkgd29ua3kgdXJscy5cbiAgaWYgKHV0aWwuaXNTdHJpbmcob2JqKSkgb2JqID0gdXJsUGFyc2Uob2JqKTtcbiAgaWYgKCEob2JqIGluc3RhbmNlb2YgVXJsKSkgcmV0dXJuIFVybC5wcm90b3R5cGUuZm9ybWF0LmNhbGwob2JqKTtcbiAgcmV0dXJuIG9iai5mb3JtYXQoKTtcbn1cblxuVXJsLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGF1dGggPSB0aGlzLmF1dGggfHwgJyc7XG4gIGlmIChhdXRoKSB7XG4gICAgYXV0aCA9IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICBhdXRoID0gYXV0aC5yZXBsYWNlKC8lM0EvaSwgJzonKTtcbiAgICBhdXRoICs9ICdAJztcbiAgfVxuXG4gIHZhciBwcm90b2NvbCA9IHRoaXMucHJvdG9jb2wgfHwgJycsXG4gICAgICBwYXRobmFtZSA9IHRoaXMucGF0aG5hbWUgfHwgJycsXG4gICAgICBoYXNoID0gdGhpcy5oYXNoIHx8ICcnLFxuICAgICAgaG9zdCA9IGZhbHNlLFxuICAgICAgcXVlcnkgPSAnJztcblxuICBpZiAodGhpcy5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB0aGlzLmhvc3Q7XG4gIH0gZWxzZSBpZiAodGhpcy5ob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpID09PSAtMSA/XG4gICAgICAgIHRoaXMuaG9zdG5hbWUgOlxuICAgICAgICAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nKTtcbiAgICBpZiAodGhpcy5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHRoaXMucG9ydDtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5xdWVyeSAmJlxuICAgICAgdXRpbC5pc09iamVjdCh0aGlzLnF1ZXJ5KSAmJlxuICAgICAgT2JqZWN0LmtleXModGhpcy5xdWVyeSkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkodGhpcy5xdWVyeSk7XG4gIH1cblxuICB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2ggfHwgKHF1ZXJ5ICYmICgnPycgKyBxdWVyeSkpIHx8ICcnO1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICAvLyBvbmx5IHRoZSBzbGFzaGVkUHJvdG9jb2xzIGdldCB0aGUgLy8uICBOb3QgbWFpbHRvOiwgeG1wcDosIGV0Yy5cbiAgLy8gdW5sZXNzIHRoZXkgaGFkIHRoZW0gdG8gYmVnaW4gd2l0aC5cbiAgaWYgKHRoaXMuc2xhc2hlcyB8fFxuICAgICAgKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xbcHJvdG9jb2xdKSAmJiBob3N0ICE9PSBmYWxzZSkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpO1xuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZTtcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJztcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoO1xuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICB9KTtcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJyk7XG5cbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmUoc291cmNlLCByZWxhdGl2ZSkge1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZShyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIHJldHVybiB0aGlzLnJlc29sdmVPYmplY3QodXJsUGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKSkuZm9ybWF0KCk7XG59O1xuXG5mdW5jdGlvbiB1cmxSZXNvbHZlT2JqZWN0KHNvdXJjZSwgcmVsYXRpdmUpIHtcbiAgaWYgKCFzb3VyY2UpIHJldHVybiByZWxhdGl2ZTtcbiAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmVPYmplY3QocmVsYXRpdmUpO1xufVxuXG5VcmwucHJvdG90eXBlLnJlc29sdmVPYmplY3QgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICBpZiAodXRpbC5pc1N0cmluZyhyZWxhdGl2ZSkpIHtcbiAgICB2YXIgcmVsID0gbmV3IFVybCgpO1xuICAgIHJlbC5wYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpO1xuICAgIHJlbGF0aXZlID0gcmVsO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBVcmwoKTtcbiAgdmFyIHRrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gIGZvciAodmFyIHRrID0gMDsgdGsgPCB0a2V5cy5sZW5ndGg7IHRrKyspIHtcbiAgICB2YXIgdGtleSA9IHRrZXlzW3RrXTtcbiAgICByZXN1bHRbdGtleV0gPSB0aGlzW3RrZXldO1xuICB9XG5cbiAgLy8gaGFzaCBpcyBhbHdheXMgb3ZlcnJpZGRlbiwgbm8gbWF0dGVyIHdoYXQuXG4gIC8vIGV2ZW4gaHJlZj1cIlwiIHdpbGwgcmVtb3ZlIGl0LlxuICByZXN1bHQuaGFzaCA9IHJlbGF0aXZlLmhhc2g7XG5cbiAgLy8gaWYgdGhlIHJlbGF0aXZlIHVybCBpcyBlbXB0eSwgdGhlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBkbyBoZXJlLlxuICBpZiAocmVsYXRpdmUuaHJlZiA9PT0gJycpIHtcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaHJlZnMgbGlrZSAvL2Zvby9iYXIgYWx3YXlzIGN1dCB0byB0aGUgcHJvdG9jb2wuXG4gIGlmIChyZWxhdGl2ZS5zbGFzaGVzICYmICFyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgIC8vIHRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIHByb3RvY29sIGZyb20gcmVsYXRpdmVcbiAgICB2YXIgcmtleXMgPSBPYmplY3Qua2V5cyhyZWxhdGl2ZSk7XG4gICAgZm9yICh2YXIgcmsgPSAwOyByayA8IHJrZXlzLmxlbmd0aDsgcmsrKykge1xuICAgICAgdmFyIHJrZXkgPSBya2V5c1tya107XG4gICAgICBpZiAocmtleSAhPT0gJ3Byb3RvY29sJylcbiAgICAgICAgcmVzdWx0W3JrZXldID0gcmVsYXRpdmVbcmtleV07XG4gICAgfVxuXG4gICAgLy91cmxQYXJzZSBhcHBlbmRzIHRyYWlsaW5nIC8gdG8gdXJscyBsaWtlIGh0dHA6Ly93d3cuZXhhbXBsZS5jb21cbiAgICBpZiAoc2xhc2hlZFByb3RvY29sW3Jlc3VsdC5wcm90b2NvbF0gJiZcbiAgICAgICAgcmVzdWx0Lmhvc3RuYW1lICYmICFyZXN1bHQucGF0aG5hbWUpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gcmVzdWx0LnBhdGhuYW1lID0gJy8nO1xuICAgIH1cblxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAocmVsYXRpdmUucHJvdG9jb2wgJiYgcmVsYXRpdmUucHJvdG9jb2wgIT09IHJlc3VsdC5wcm90b2NvbCkge1xuICAgIC8vIGlmIGl0J3MgYSBrbm93biB1cmwgcHJvdG9jb2wsIHRoZW4gY2hhbmdpbmdcbiAgICAvLyB0aGUgcHJvdG9jb2wgZG9lcyB3ZWlyZCB0aGluZ3NcbiAgICAvLyBmaXJzdCwgaWYgaXQncyBub3QgZmlsZTosIHRoZW4gd2UgTVVTVCBoYXZlIGEgaG9zdCxcbiAgICAvLyBhbmQgaWYgdGhlcmUgd2FzIGEgcGF0aFxuICAgIC8vIHRvIGJlZ2luIHdpdGgsIHRoZW4gd2UgTVVTVCBoYXZlIGEgcGF0aC5cbiAgICAvLyBpZiBpdCBpcyBmaWxlOiwgdGhlbiB0aGUgaG9zdCBpcyBkcm9wcGVkLFxuICAgIC8vIGJlY2F1c2UgdGhhdCdzIGtub3duIHRvIGJlIGhvc3RsZXNzLlxuICAgIC8vIGFueXRoaW5nIGVsc2UgaXMgYXNzdW1lZCB0byBiZSBhYnNvbHV0ZS5cbiAgICBpZiAoIXNsYXNoZWRQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmVsYXRpdmUpO1xuICAgICAgZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gICAgICAgIHZhciBrID0ga2V5c1t2XTtcbiAgICAgICAgcmVzdWx0W2tdID0gcmVsYXRpdmVba107XG4gICAgICB9XG4gICAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVzdWx0LnByb3RvY29sID0gcmVsYXRpdmUucHJvdG9jb2w7XG4gICAgaWYgKCFyZWxhdGl2ZS5ob3N0ICYmICFob3N0bGVzc1Byb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgdmFyIHJlbFBhdGggPSAocmVsYXRpdmUucGF0aG5hbWUgfHwgJycpLnNwbGl0KCcvJyk7XG4gICAgICB3aGlsZSAocmVsUGF0aC5sZW5ndGggJiYgIShyZWxhdGl2ZS5ob3N0ID0gcmVsUGF0aC5zaGlmdCgpKSk7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3QpIHJlbGF0aXZlLmhvc3QgPSAnJztcbiAgICAgIGlmICghcmVsYXRpdmUuaG9zdG5hbWUpIHJlbGF0aXZlLmhvc3RuYW1lID0gJyc7XG4gICAgICBpZiAocmVsUGF0aFswXSAhPT0gJycpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG4gICAgICBpZiAocmVsUGF0aC5sZW5ndGggPCAyKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgcmVzdWx0LnBhdGhuYW1lID0gcmVsUGF0aC5qb2luKCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbGF0aXZlLnBhdGhuYW1lO1xuICAgIH1cbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIHJlc3VsdC5ob3N0ID0gcmVsYXRpdmUuaG9zdCB8fCAnJztcbiAgICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGg7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVsYXRpdmUuaG9zdG5hbWUgfHwgcmVsYXRpdmUuaG9zdDtcbiAgICByZXN1bHQucG9ydCA9IHJlbGF0aXZlLnBvcnQ7XG4gICAgLy8gdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAocmVzdWx0LnBhdGhuYW1lIHx8IHJlc3VsdC5zZWFyY2gpIHtcbiAgICAgIHZhciBwID0gcmVzdWx0LnBhdGhuYW1lIHx8ICcnO1xuICAgICAgdmFyIHMgPSByZXN1bHQuc2VhcmNoIHx8ICcnO1xuICAgICAgcmVzdWx0LnBhdGggPSBwICsgcztcbiAgICB9XG4gICAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2YXIgaXNTb3VyY2VBYnMgPSAocmVzdWx0LnBhdGhuYW1lICYmIHJlc3VsdC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyksXG4gICAgICBpc1JlbEFicyA9IChcbiAgICAgICAgICByZWxhdGl2ZS5ob3N0IHx8XG4gICAgICAgICAgcmVsYXRpdmUucGF0aG5hbWUgJiYgcmVsYXRpdmUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLydcbiAgICAgICksXG4gICAgICBtdXN0RW5kQWJzID0gKGlzUmVsQWJzIHx8IGlzU291cmNlQWJzIHx8XG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQuaG9zdCAmJiByZWxhdGl2ZS5wYXRobmFtZSkpLFxuICAgICAgcmVtb3ZlQWxsRG90cyA9IG11c3RFbmRBYnMsXG4gICAgICBzcmNQYXRoID0gcmVzdWx0LnBhdGhuYW1lICYmIHJlc3VsdC5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcmVsUGF0aCA9IHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLnNwbGl0KCcvJykgfHwgW10sXG4gICAgICBwc3ljaG90aWMgPSByZXN1bHQucHJvdG9jb2wgJiYgIXNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdO1xuXG4gIC8vIGlmIHRoZSB1cmwgaXMgYSBub24tc2xhc2hlZCB1cmwsIHRoZW4gcmVsYXRpdmVcbiAgLy8gbGlua3MgbGlrZSAuLi8uLiBzaG91bGQgYmUgYWJsZVxuICAvLyB0byBjcmF3bCB1cCB0byB0aGUgaG9zdG5hbWUsIGFzIHdlbGwuICBUaGlzIGlzIHN0cmFuZ2UuXG4gIC8vIHJlc3VsdC5wcm90b2NvbCBoYXMgYWxyZWFkeSBiZWVuIHNldCBieSBub3cuXG4gIC8vIExhdGVyIG9uLCBwdXQgdGhlIGZpcnN0IHBhdGggcGFydCBpbnRvIHRoZSBob3N0IGZpZWxkLlxuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gJyc7XG4gICAgcmVzdWx0LnBvcnQgPSBudWxsO1xuICAgIGlmIChyZXN1bHQuaG9zdCkge1xuICAgICAgaWYgKHNyY1BhdGhbMF0gPT09ICcnKSBzcmNQYXRoWzBdID0gcmVzdWx0Lmhvc3Q7XG4gICAgICBlbHNlIHNyY1BhdGgudW5zaGlmdChyZXN1bHQuaG9zdCk7XG4gICAgfVxuICAgIHJlc3VsdC5ob3N0ID0gJyc7XG4gICAgaWYgKHJlbGF0aXZlLnByb3RvY29sKSB7XG4gICAgICByZWxhdGl2ZS5ob3N0bmFtZSA9IG51bGw7XG4gICAgICByZWxhdGl2ZS5wb3J0ID0gbnVsbDtcbiAgICAgIGlmIChyZWxhdGl2ZS5ob3N0KSB7XG4gICAgICAgIGlmIChyZWxQYXRoWzBdID09PSAnJykgcmVsUGF0aFswXSA9IHJlbGF0aXZlLmhvc3Q7XG4gICAgICAgIGVsc2UgcmVsUGF0aC51bnNoaWZ0KHJlbGF0aXZlLmhvc3QpO1xuICAgICAgfVxuICAgICAgcmVsYXRpdmUuaG9zdCA9IG51bGw7XG4gICAgfVxuICAgIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzICYmIChyZWxQYXRoWzBdID09PSAnJyB8fCBzcmNQYXRoWzBdID09PSAnJyk7XG4gIH1cblxuICBpZiAoaXNSZWxBYnMpIHtcbiAgICAvLyBpdCdzIGFic29sdXRlLlxuICAgIHJlc3VsdC5ob3N0ID0gKHJlbGF0aXZlLmhvc3QgfHwgcmVsYXRpdmUuaG9zdCA9PT0gJycpID9cbiAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3QgOiByZXN1bHQuaG9zdDtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSAocmVsYXRpdmUuaG9zdG5hbWUgfHwgcmVsYXRpdmUuaG9zdG5hbWUgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgOiByZXN1bHQuaG9zdG5hbWU7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICBzcmNQYXRoID0gcmVsUGF0aDtcbiAgICAvLyBmYWxsIHRocm91Z2ggdG8gdGhlIGRvdC1oYW5kbGluZyBiZWxvdy5cbiAgfSBlbHNlIGlmIChyZWxQYXRoLmxlbmd0aCkge1xuICAgIC8vIGl0J3MgcmVsYXRpdmVcbiAgICAvLyB0aHJvdyBhd2F5IHRoZSBleGlzdGluZyBmaWxlLCBhbmQgdGFrZSB0aGUgbmV3IHBhdGggaW5zdGVhZC5cbiAgICBpZiAoIXNyY1BhdGgpIHNyY1BhdGggPSBbXTtcbiAgICBzcmNQYXRoLnBvcCgpO1xuICAgIHNyY1BhdGggPSBzcmNQYXRoLmNvbmNhdChyZWxQYXRoKTtcbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICB9IGVsc2UgaWYgKCF1dGlsLmlzTnVsbE9yVW5kZWZpbmVkKHJlbGF0aXZlLnNlYXJjaCkpIHtcbiAgICAvLyBqdXN0IHB1bGwgb3V0IHRoZSBzZWFyY2guXG4gICAgLy8gbGlrZSBocmVmPSc/Zm9vJy5cbiAgICAvLyBQdXQgdGhpcyBhZnRlciB0aGUgb3RoZXIgdHdvIGNhc2VzIGJlY2F1c2UgaXQgc2ltcGxpZmllcyB0aGUgYm9vbGVhbnNcbiAgICBpZiAocHN5Y2hvdGljKSB7XG4gICAgICByZXN1bHQuaG9zdG5hbWUgPSByZXN1bHQuaG9zdCA9IHNyY1BhdGguc2hpZnQoKTtcbiAgICAgIC8vb2NjYXRpb25hbHkgdGhlIGF1dGggY2FuIGdldCBzdHVjayBvbmx5IGluIGhvc3RcbiAgICAgIC8vdGhpcyBlc3BlY2lhbGx5IGhhcHBlbnMgaW4gY2FzZXMgbGlrZVxuICAgICAgLy91cmwucmVzb2x2ZU9iamVjdCgnbWFpbHRvOmxvY2FsMUBkb21haW4xJywgJ2xvY2FsMkBkb21haW4yJylcbiAgICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ob3N0LnNwbGl0KCdAJykgOiBmYWxzZTtcbiAgICAgIGlmIChhdXRoSW5Ib3N0KSB7XG4gICAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgICByZXN1bHQuaG9zdCA9IHJlc3VsdC5ob3N0bmFtZSA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKCF1dGlsLmlzTnVsbChyZXN1bHQucGF0aG5hbWUpIHx8ICF1dGlsLmlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIC8vIG5vIHBhdGggYXQgYWxsLiAgZWFzeS5cbiAgICAvLyB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIG90aGVyIHN0dWZmIGFib3ZlLlxuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQuc2VhcmNoKSB7XG4gICAgICByZXN1bHQucGF0aCA9ICcvJyArIHJlc3VsdC5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGlmIGEgdXJsIEVORHMgaW4gLiBvciAuLiwgdGhlbiBpdCBtdXN0IGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICAvLyBob3dldmVyLCBpZiBpdCBlbmRzIGluIGFueXRoaW5nIGVsc2Ugbm9uLXNsYXNoeSxcbiAgLy8gdGhlbiBpdCBtdXN0IE5PVCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIGxhc3QgPSBzcmNQYXRoLnNsaWNlKC0xKVswXTtcbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSAoXG4gICAgICAocmVzdWx0Lmhvc3QgfHwgcmVsYXRpdmUuaG9zdCB8fCBzcmNQYXRoLmxlbmd0aCA+IDEpICYmXG4gICAgICAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHx8IGxhc3QgPT09ICcnKTtcblxuICAvLyBzdHJpcCBzaW5nbGUgZG90cywgcmVzb2x2ZSBkb3VibGUgZG90cyB0byBwYXJlbnQgZGlyXG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBzcmNQYXRoLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICBsYXN0ID0gc3JjUGF0aFtpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoIW11c3RFbmRBYnMgJiYgIXJlbW92ZUFsbERvdHMpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHNyY1BhdGgudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAobXVzdEVuZEFicyAmJiBzcmNQYXRoWzBdICE9PSAnJyAmJlxuICAgICAgKCFzcmNQYXRoWzBdIHx8IHNyY1BhdGhbMF0uY2hhckF0KDApICE9PSAnLycpKSB7XG4gICAgc3JjUGF0aC51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIChzcmNQYXRoLmpvaW4oJy8nKS5zdWJzdHIoLTEpICE9PSAnLycpKSB7XG4gICAgc3JjUGF0aC5wdXNoKCcnKTtcbiAgfVxuXG4gIHZhciBpc0Fic29sdXRlID0gc3JjUGF0aFswXSA9PT0gJycgfHxcbiAgICAgIChzcmNQYXRoWzBdICYmIHNyY1BhdGhbMF0uY2hhckF0KDApID09PSAnLycpO1xuXG4gIC8vIHB1dCB0aGUgaG9zdCBiYWNrXG4gIGlmIChwc3ljaG90aWMpIHtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSByZXN1bHQuaG9zdCA9IGlzQWJzb2x1dGUgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNQYXRoLmxlbmd0aCA/IHNyY1BhdGguc2hpZnQoKSA6ICcnO1xuICAgIC8vb2NjYXRpb25hbHkgdGhlIGF1dGggY2FuIGdldCBzdHVjayBvbmx5IGluIGhvc3RcbiAgICAvL3RoaXMgZXNwZWNpYWxseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgfHwgKHJlc3VsdC5ob3N0ICYmIHNyY1BhdGgubGVuZ3RoKTtcblxuICBpZiAobXVzdEVuZEFicyAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gc3JjUGF0aC5qb2luKCcvJyk7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgcmVxdWVzdC5odHRwXG4gIGlmICghdXRpbC5pc051bGwocmVzdWx0LnBhdGhuYW1lKSB8fCAhdXRpbC5pc051bGwocmVzdWx0LnNlYXJjaCkpIHtcbiAgICByZXN1bHQucGF0aCA9IChyZXN1bHQucGF0aG5hbWUgPyByZXN1bHQucGF0aG5hbWUgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICB9XG4gIHJlc3VsdC5hdXRoID0gcmVsYXRpdmUuYXV0aCB8fCByZXN1bHQuYXV0aDtcbiAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblVybC5wcm90b3R5cGUucGFyc2VIb3N0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBob3N0ID0gdGhpcy5ob3N0O1xuICB2YXIgcG9ydCA9IHBvcnRQYXR0ZXJuLmV4ZWMoaG9zdCk7XG4gIGlmIChwb3J0KSB7XG4gICAgcG9ydCA9IHBvcnRbMF07XG4gICAgaWYgKHBvcnQgIT09ICc6Jykge1xuICAgICAgdGhpcy5wb3J0ID0gcG9ydC5zdWJzdHIoMSk7XG4gICAgfVxuICAgIGhvc3QgPSBob3N0LnN1YnN0cigwLCBob3N0Lmxlbmd0aCAtIHBvcnQubGVuZ3RoKTtcbiAgfVxuICBpZiAoaG9zdCkgdGhpcy5ob3N0bmFtZSA9IGhvc3Q7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNTdHJpbmc6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YoYXJnKSA9PT0gJ3N0cmluZyc7XG4gIH0sXG4gIGlzT2JqZWN0OiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mKGFyZykgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbiAgfSxcbiAgaXNOdWxsOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gYXJnID09PSBudWxsO1xuICB9LFxuICBpc051bGxPclVuZGVmaW5lZDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGFyZyA9PSBudWxsO1xuICB9XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiY2xhc3MgRXZlbnRTZXJ2aWNlIHtcbiAgLy8gRklYTUU6IE1heWJlIG1ha2Ugc29tZSBQcm9taXNlIEJhc2VkIGV2ZW50IHN1YnNjcmliZXI/IFxuICAvLyBQcm9iYWJseSBub3QgeWV0ICDwn6W0O1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5saXN0ZW5lciA9IHRoaXMubGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuXG4gIGJpbmRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFubGRlcikge1xuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBoYW5sZGVyO1xuICB9XG5cbiAgbGlzdGVuZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnQuZGF0YV0pIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50LmRhdGFdKHRoaXMuY29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5saXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIHRoaXMubGlzdGVuZXIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlcnZpY2UgICIsImltcG9ydCBxcyBmcm9tICdxcydcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIFRoZSBPYmplY3Qgb2YgY29uZmlnLCB0byBwYXJzZSBxdWVpcnlcbiAqIFxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5ID0gb2JqID0+IHtcbiAgY29uc3Qgc3RyaW5naWZ5ZWRRUyA9IHFzLnN0cmluZ2lmeShvYmosIHsgc2tpcE51bGxzOiB0cnVlIH0pO1xuICByZXR1cm4gc3RyaW5naWZ5ZWRRUztcbn07XG5cbi8qKlxuICogVGFrZXMgYSBVUkwgYW5kIHJldHVybnMgdGhlIG9yaWdpblxuICogQHBhcmFtICB7U3RyaW5nfSB1cmwgVGhlIGZ1bGwgVVJMIGJlaW5nIHJlcXVlc3RlZFxuICogQHJldHVybiB7U3RyaW5nfSAgICAgVGhlIFVSTHMgb3JpZ2luXG4gKi9cbmV4cG9ydCBjb25zdCByZXNvbHZlT3JpZ2luID0gKHVybCkgPT4ge1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGEuaHJlZiA9IHVybFxuICBjb25zdCBwcm90b2NvbCA9IGEucHJvdG9jb2wubGVuZ3RoID4gNCA/IGEucHJvdG9jb2wgOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2xcbiAgY29uc3QgaG9zdCA9IGEuaG9zdC5sZW5ndGggPyAoKGEucG9ydCA9PT0gJzgwJyB8fCBhLnBvcnQgPT09ICc0NDMnKSA/IGEuaG9zdG5hbWUgOiBhLmhvc3QpIDogd2luZG93LmxvY2F0aW9uLmhvc3RcbiAgcmV0dXJuIGEub3JpZ2luIHx8IGAke3Byb3RvY29sfS8vJHtob3N0fWBcbn1cblxuIiwiaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgbW91bnQgZnJvbSAnLi9tb3VudCc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IG93IGZyb20gJ293JztcbmltcG9ydCBFdmVudFNlcnZpY2UgZnJvbSAnLi9FdmVudFNlcnZpY2UnO1xuXG4vLyBGSVhNRTogRG8gd2UgbmVlZCBVTUQgaW5zdGVhZCBpZiBJSUZFP1xuLy8gUHJvYmFibHkgbm90IHlldCAg8J+ltDtcblxuKGZ1bmN0aW9uKHdpbmRvdywgdW5kZWZpbmVkKSB7XG5cdGNvbnN0IGJ1aWxkRnJhbWVTcmMgPSAoe1xuXHRcdC8vIEZJWE1FOiBtb3ZlIGl0IHRvIHVwcGVyIGZ1bmN0aW9uXG5cdFx0YmFzZVVybCA9ICdodHRwczovL2NvbS1kZXYucGF5Y29yZS5pby9ocHAnLFxuXHRcdHB1YmxpY19rZXksXG5cdFx0YW1vdW50LFxuXHRcdGN1cnJlbmN5LFxuXHRcdHNlcnZpY2UgPSBudWxsLFxuXHRcdHNlcnZpY2VfZmllbGRzID0gbnVsbCxcblx0XHRjcGkgPSBudWxsLFxuXHRcdGRlc2NyaXB0aW9uID0gbnVsbCxcblx0XHRleHBpcmVzID0gbnVsbCxcblx0XHR0aGVtZSA9IG51bGwsXG5cdFx0bG9jYWxlID0gbnVsbCxcblx0XHRhdmFpbGFibGVfbG9jYWxlcyA9IG51bGwsXG5cdFx0Y3VzdG9tZXIgPSBudWxsLFxuXHRcdHJlZmVyZW5jZV9pZCA9IG51bGwsXG5cdFx0bWV0YWRhdGEgPSBudWxsLFxuXHRcdGxhbmcgPSBudWxsLFxuXHRcdGRpc3BsYXkgPSBudWxsLFxuXHRcdHN0eWxlID0gbnVsbCxcblx0XHRwYXlfYnV0dG9uX2xhYmVsID0gbnVsbCxcblx0fSkgPT4ge1xuXHRcdGNvbnN0IHFQYXJhbXMgPSBzdHJpbmdpZnkoe1xuXHRcdFx0Ly8gUmVxdWlyZWQgcGFyYW1zXG5cdFx0XHRhbW91bnQsXG5cdFx0XHRjdXJyZW5jeSxcblx0XHRcdHB1YmxpY19rZXksXG5cblx0XHRcdC8vIE9wdGlvbmFsIHBhcmFtc1xuXHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHRleHBpcmVzLFxuXHRcdFx0bG9jYWxlLFxuXHRcdFx0YXZhaWxhYmxlX2xvY2FsZXMsXG5cdFx0XHRyZWZlcmVuY2VfaWQsXG5cdFx0XHRtZXRhZGF0YSxcblx0XHRcdGN1c3RvbWVyLFxuXG5cdFx0XHQvLyBUaGVtaW5nLCBVWFxuXHRcdFx0ZGlzcGxheSxcblx0XHRcdHN0eWxlLFxuXHRcdFx0dGhlbWUsXG5cdFx0XHRwYXlfYnV0dG9uX2xhYmVsLFxuXG5cdFx0XHQvLyBEaWZmZXJlbnQgdXNlY2FzZSBmbG93IHBhcmFtc1xuXHRcdFx0c2VydmljZSxcblx0XHRcdHNlcnZpY2VfZmllbGRzLFxuXHRcdFx0Y3BpLFxuXHRcdFx0bGFuZyxcblx0XHR9KTtcblx0XHRyZXR1cm4gYCR7YmFzZVVybH0/JHtxUGFyYW1zfWA7XG5cdH07XG5cdC8qXG5cdCAqIFdpZGdldCBpbml0aWFsaXplIG1ldGhvZDpcblx0ICpcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgU2VsZWN0b3IgVGhlIEVsZW1lbnQgc2VsZWN0b3IgdG8gcmVuZGVyIGFuIGlmcmFtZSwgbXVzdCBiZSBhbiBJRFxuXHQgKiBAcGFyYW0gIHtPYmplY3R9ICBUaGUgQ29uZmlnIHdpdGggcHVibGljIGtleSBvZiBjb21tZXJjZSBhcHAsIGN1cnJlbmN5IGFuZCBhbW91bnQsIGRlc2NyaXB0aW9uXG5cdCAqIEBwYXJhbSAge09iamVjdH0gIFByZWRlZmluZWQgc3R5bGVzIGZvciBNZXJjaGFudCBIUFAgaW5zaWRlIGlmcmFtZVxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9ICBMb2NhbGUgb2YgY2xpZW50IHBhZ2Vcblx0ICpcblx0ICovXG5cblx0Y29uc3QgX2luaXQgPSBjb25maWcgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRvdyhcblx0XHRcdFx0Y29uZmlnLFxuXHRcdFx0XHRvdy5vYmplY3QuZXhhY3RTaGFwZSh7XG5cdFx0XHRcdFx0Zmxvdzogb3cuc3RyaW5nLFxuXHRcdFx0XHRcdHNlbGVjdG9yOiBvdy5zdHJpbmcsXG5cdFx0XHRcdFx0cHVibGljX2tleTogb3cuc3RyaW5nLFxuXHRcdFx0XHRcdGFtb3VudDogb3cubnVtYmVyLFxuXHRcdFx0XHRcdGN1cnJlbmN5OiBvdy5zdHJpbmcsXG5cdFx0XHRcdFx0YmFzZVVybDogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdHN0eWxpbmc6IG93Lm9wdGlvbmFsLm9iamVjdCxcblx0XHRcdFx0XHRmcmFtZUlkOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRzcmM6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRzZXJ2aWNlOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0c2VydmljZV9maWVsZHM6IG93Lm9wdGlvbmFsLmFycmF5LFxuXHRcdFx0XHRcdGNwaTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdGV4cGlyZXM6IG93Lm9wdGlvbmFsLmFueShvdy5zdHJpbmcsIG93Lm51bWJlciksXG5cdFx0XHRcdFx0dGhlbWU6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRsb2NhbGU6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRhdmFpbGFibGVfbG9jYWxlczogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdHJlZmVyZW5jZV9pZDogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdGxhbmd1YWdlOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRtZXRhZGF0YTogb3cub3B0aW9uYWwuYW55KG93Lm9iamVjdCwgb3cuYXJyYXkpLFxuXG5cdFx0XHRcdFx0bGFuZzogb3cub3B0aW9uYWwuc3RyaW5nLFxuXG5cdFx0XHRcdFx0Y3VzdG9tZXI6IG93Lm9wdGlvbmFsLm9iamVjdC5leGFjdFNoYXBlKHtcblx0XHRcdFx0XHRcdHJlZmVyZW5jZV9pZDogb3cuc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZW1haWw6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHBob25lOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRuYW1lOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRkYXRlX29mX2JpcnRoOiBvdy5vcHRpb25hbC5zdHJpbmcubWF0Y2hlcyhcblx0XHRcdFx0XHRcdFx0L15cXGR7NH0tKDBbMS05XXwxWzAtMl0pLSgwWzEtOV18WzEyXVxcZHwzWzAxXSkkL1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdGluZGl2aWR1YWxfdGF4X2lkOiBvdy5vcHRpb25hbC5zdHJpbmcubWluTGVuZ3RoKDIpLm1heExlbmd0aCgxMDApLFxuXHRcdFx0XHRcdFx0bWV0YWRhdGE6IG93Lm9wdGlvbmFsLmFueShvdy5vYmplY3QsIG93LmFycmF5KSxcblx0XHRcdFx0XHRcdGFkZHJlc3M6IG93Lm9wdGlvbmFsLm9iamVjdC5leGFjdFNoYXBlKHtcblx0XHRcdFx0XHRcdFx0Y291bnRyeTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRjaXR5OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRcdHBvc3RfY29kZTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRyZWdpb246IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdFx0c3RyZWV0OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRcdGZ1bGxfYWRkcmVzczogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0fSksXG5cblx0XHRcdFx0XHRkaXNwbGF5OiBvdy5vcHRpb25hbC5vYmplY3QuZXhhY3RTaGFwZSh7XG5cdFx0XHRcdFx0XHRoaWRlX2Zvb3Rlcjogb3cub3B0aW9uYWwuYm9vbGVhbixcblx0XHRcdFx0XHRcdGhpZGVfaGVhZGVyOiBvdy5vcHRpb25hbC5ib29sZWFuLFxuXHRcdFx0XHRcdFx0aGlkZV9wcm9ncmVzc19iYXI6IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0XHRoaWRlX21ldGhvZF9maWx0ZXI6IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0XHRoaWRlX2xpZmV0aW1lX2NvdW50ZXI6IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0fSksXG5cblx0XHRcdFx0XHRzdHlsZTogb3cub3B0aW9uYWwub2JqZWN0LmV4YWN0U2hhcGUoe1xuXHRcdFx0XHRcdFx0dGhlbWU6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdGZvbnRfZmFtaWx5OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRcdHN1Y2Nlc3NfY29sb3I6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHdhcm5pbmdfY29sb3I6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdGRhbmdlcl9jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0aW5mb19jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXG5cdFx0XHRcdFx0XHRwcmltYXJ5OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRwcmltYXJ5X3ZhcmlhbnQ6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHByaW1hcnlfdGV4dF9jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0cHJpbWFyeV9iYWNrZ3JvdW5kX2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRvbl9wcmltYXJ5X2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRcdHNlY29uZGFyeTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0c2Vjb25kYXJ5X3ZhcmlhbnQ6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHNlY29uZGFyeV90ZXh0X2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRzZWNvbmRhcnlfYmFja2dyb3VuZF9jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0b25fc2Vjb25kYXJ5X2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRcdHBheV9idXR0b25fbGFiZWw6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHNob3dfbWV0aG9kX2xvZ286IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0aWYgKGNvbmZpZy5mbG93ID09PSAnaWZyYW1lJykge1xuXHRcdFx0XHRpZiAoIWNvbmZpZy5mcmFtZUlkKSB7XG5cdFx0XHRcdFx0Y29uZmlnLmZyYW1lSWQgPSAncGF5bWVudF93aWRnZXQnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqIFdlIHBhc3MgY29uZmlnIHRvIHJlaW5pdCAqL1xuXHRcdFx0XHRjb25zdCBDb21tdW5pY2F0aW9uU2VydmljZSA9IG5ldyBFdmVudFNlcnZpY2UoY29uZmlnKTtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogUE9TVCBNRVNTQUdFIExJU1RFTkVSUyBJTklUSUFMSVpFXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRDb21tdW5pY2F0aW9uU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCk7XG5cdFx0XHRcdENvbW11bmljYXRpb25TZXJ2aWNlLmJpbmRFdmVudExpc3RlbmVyKCdyZWluaXQnLCBfcmVpbml0KTtcblx0XHRcdFx0Q29tbXVuaWNhdGlvblNlcnZpY2UuYmluZEV2ZW50TGlzdGVuZXIoJ2RlbGV0ZScsIF9jbG9zZSk7XG5cdFx0XHRcdENvbW11bmljYXRpb25TZXJ2aWNlLmJpbmRFdmVudExpc3RlbmVyKCdjbG9zZScsIF9jbG9zZSk7XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIElmIGFscmVhZHkgZXhpc3RzIGlmcmFtZSB3aXRoIGV4aXN0ZWQgSUQgLSBoZSB3aWxsIGJlIHJlcmVuZGVyZWRcblx0XHRcdFx0ICogKi9cblx0XHRcdFx0Y29uc3QgcGF5bWVudElmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5mcmFtZUlkKTtcblx0XHRcdFx0aWYgKHBheW1lbnRJZnJhbWUpIHtcblx0XHRcdFx0XHRfcmVpbml0KGNvbmZpZyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEByZXR1cm5zIGlmcmFtZSBzcmMgYXR0cmlidXRlO1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0Y29uZmlnLnNyYyA9IGJ1aWxkRnJhbWVTcmMoY29uZmlnKTtcblx0XHRcdFx0Y29uc3QgaUZyYW1lID0gaW5pdGlhbGl6ZUlmcmFtZShjb25maWcpO1xuXHRcdFx0XHRtb3VudChpRnJhbWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5zZWxlY3RvcikpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXJlY3QgZmxvd1xuXHRcdFx0XHRjb25zdCBwYXRoID0gYnVpbGRGcmFtZVNyYyhjb25maWcpO1xuXHRcdFx0XHR3aW5kb3cub3BlbihwYXRoLCAnX2JsYW5rJyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgX2Nsb3NlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCBmcmFtZVRvQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZnJhbWVJZCk7XG5cdFx0aWYgKGZyYW1lVG9DbG9zZSkge1xuXHRcdFx0ZnJhbWVUb0Nsb3NlLnJlbW92ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBfcmVpbml0ID0gY29uZmlnID0+IHtcblx0XHRfY2xvc2UoY29uZmlnKTtcblx0XHRfaW5pdChjb25maWcpO1xuXHRcdHJldHVybjtcblx0fTtcblxuXHRjb25zdCBpbml0aWFsaXplSWZyYW1lID0gcHJvcHMgPT5cblx0XHRyZW5kZXIoe1xuXHRcdFx0YXR0cnM6IHtcblx0XHRcdFx0aWQ6IHByb3BzLmZyYW1lSWQsXG5cdFx0XHRcdHNyYzogcHJvcHMuc3JjIHx8ICcnLFxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdFx0ZnJhbWVib3JkZXI6ICdub25lJyxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0d2luZG93LndpZGdldCA9IHtcblx0XHRpbml0OiBfaW5pdCxcblx0XHRyZWluaXQ6IF9yZWluaXQsXG5cdFx0Y2xvc2U6IF9jbG9zZSxcblx0fTtcbn0pKHdpbmRvdyk7XG4iLCJleHBvcnQgZGVmYXVsdCAoJG5vZGUsICR0YXJnZXQpID0+IHtcbiAgJHRhcmdldC5hcHBlbmRDaGlsZCgkbm9kZSk7XG4gIHJldHVybiAkbm9kZTtcbn0iLCJcbmNvbnN0IHJlbmRlcklmcmFtZSA9ICh7IGF0dHJzIH0pID0+IHtcbiAgY29uc3QgJGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXMgdG8gaWZyYW1lXG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzKSkge1xuICAgICRlbC5zZXRBdHRyaWJ1dGUoaywgdik7XG4gIH1cbiAgLy8gUmV0dXJucyBhbiBpZnJhbWVcbiAgcmV0dXJuICRlbDtcbn07XG5cbmNvbnN0IHJlbmRlciA9IChub2RlKSA9PiB7XG4gIHJldHVybiByZW5kZXJJZnJhbWUobm9kZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiXSwic291cmNlUm9vdCI6IiJ9