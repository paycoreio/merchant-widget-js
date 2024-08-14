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
        available_locales: ow__WEBPACK_IMPORTED_MODULE_3___default.a.optional.array,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJOYW1lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9saWJOYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL25vZGVfbW9kdWxlcy91cmwvdXJsLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9ub2RlX21vZHVsZXMvdXJsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL3NyYy9FdmVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2xpYk5hbWUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGliTmFtZS8uL3NyYy9tb3VudC5qcyIsIndlYnBhY2s6Ly9saWJOYW1lLy4vc3JjL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJFdmVudFNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSIsImhhbmxkZXIiLCJldmVudCIsImRhdGEiLCJ3aW5kb3ciLCJhdHRhY2hFdmVudCIsInN0cmluZ2lmeSIsIm9iaiIsInN0cmluZ2lmeWVkUVMiLCJxcyIsInNraXBOdWxscyIsInJlc29sdmVPcmlnaW4iLCJ1cmwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInByb3RvY29sIiwibGVuZ3RoIiwibG9jYXRpb24iLCJob3N0IiwicG9ydCIsImhvc3RuYW1lIiwib3JpZ2luIiwidW5kZWZpbmVkIiwiYnVpbGRGcmFtZVNyYyIsImJhc2VVcmwiLCJwdWJsaWNfa2V5IiwiYW1vdW50IiwiY3VycmVuY3kiLCJzZXJ2aWNlIiwic2VydmljZV9maWVsZHMiLCJjcGkiLCJkZXNjcmlwdGlvbiIsImV4cGlyZXMiLCJ0aGVtZSIsImxvY2FsZSIsImF2YWlsYWJsZV9sb2NhbGVzIiwiY3VzdG9tZXIiLCJyZWZlcmVuY2VfaWQiLCJtZXRhZGF0YSIsImxhbmciLCJkaXNwbGF5Iiwic3R5bGUiLCJwYXlfYnV0dG9uX2xhYmVsIiwicVBhcmFtcyIsIl9pbml0Iiwib3ciLCJvYmplY3QiLCJleGFjdFNoYXBlIiwiZmxvdyIsInN0cmluZyIsInNlbGVjdG9yIiwibnVtYmVyIiwib3B0aW9uYWwiLCJzdHlsaW5nIiwiZnJhbWVJZCIsInNyYyIsImFycmF5IiwiYW55IiwibGFuZ3VhZ2UiLCJlbWFpbCIsInBob25lIiwibmFtZSIsImRhdGVfb2ZfYmlydGgiLCJtYXRjaGVzIiwiaW5kaXZpZHVhbF90YXhfaWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJhZGRyZXNzIiwiY291bnRyeSIsImNpdHkiLCJwb3N0X2NvZGUiLCJyZWdpb24iLCJzdHJlZXQiLCJmdWxsX2FkZHJlc3MiLCJoaWRlX2Zvb3RlciIsImJvb2xlYW4iLCJoaWRlX2hlYWRlciIsImhpZGVfcHJvZ3Jlc3NfYmFyIiwiaGlkZV9tZXRob2RfZmlsdGVyIiwiaGlkZV9saWZldGltZV9jb3VudGVyIiwiZm9udF9mYW1pbHkiLCJzdWNjZXNzX2NvbG9yIiwid2FybmluZ19jb2xvciIsImRhbmdlcl9jb2xvciIsImluZm9fY29sb3IiLCJwcmltYXJ5IiwicHJpbWFyeV92YXJpYW50IiwicHJpbWFyeV90ZXh0X2NvbG9yIiwicHJpbWFyeV9iYWNrZ3JvdW5kX2NvbG9yIiwib25fcHJpbWFyeV9jb2xvciIsInNlY29uZGFyeSIsInNlY29uZGFyeV92YXJpYW50Iiwic2Vjb25kYXJ5X3RleHRfY29sb3IiLCJzZWNvbmRhcnlfYmFja2dyb3VuZF9jb2xvciIsIm9uX3NlY29uZGFyeV9jb2xvciIsInNob3dfbWV0aG9kX2xvZ28iLCJDb21tdW5pY2F0aW9uU2VydmljZSIsIl9yZWluaXQiLCJfY2xvc2UiLCJwYXltZW50SWZyYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpRnJhbWUiLCJpbml0aWFsaXplSWZyYW1lIiwibW91bnQiLCJwYXRoIiwib3BlbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJmcmFtZVRvQ2xvc2UiLCJyZW1vdmUiLCJwcm9wcyIsInJlbmRlciIsImF0dHJzIiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwid2lkZ2V0IiwiaW5pdCIsInJlaW5pdCIsImNsb3NlIiwiJG5vZGUiLCIkdGFyZ2V0IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJJZnJhbWUiLCIkZWwiLCJrIiwidiIsIk9iamVjdCIsImVudHJpZXMiLCJzZXRBdHRyaWJ1dGUiLCJub2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGtGQUEyQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUsU0FBUyxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsaUJBQWlCLGtCQUFrQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLHNDQUFzQyx1Q0FBdUMsa0JBQWtCLGtCQUFrQixFQUFFLHlDQUF5QyxjQUFjLDhCQUE4Qiw0QkFBNEIsc0RBQXNELG1CQUFtQiwyQkFBMkIsK0NBQStDLG1CQUFtQixVQUFVLHlCQUF5QixhQUFhLGlDQUFpQyxFQUFFLHNCQUFzQixVQUFVLHNCQUFzQiw0QkFBNEIsbURBQW1ELGFBQWEsbUJBQW1CLFFBQVEsMENBQTBDLFVBQVUsS0FBSyxFQUFFLCtDQUErQyx5QkFBeUIsK0JBQStCLFVBQVUsbUJBQW1CLE1BQU0sMEJBQTBCLHVCQUF1QixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLG1EQUFtRCxFQUFFLGdCQUFnQiw4Q0FBOEMsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxtT0FBbU8sOEJBQThCLGVBQWUsa0JBQWtCLGNBQWMsVUFBVSx1QkFBdUIsOEJBQThCLGlCQUFpQixrQ0FBa0MsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsbUNBQW1DLHNDQUFzQyxrQ0FBa0MsdUJBQXVCLGFBQWEsY0FBYyw4SUFBOEksZUFBZSxhQUFhLDhCQUE4Qixxc0JBQXFzQixrNUJBQWs1Qix5QkFBeUIsSUFBSSxtQkFBbUIsU0FBUyxVQUFVLHNFQUFzRSxvRUFBb0UsOElBQThJLE1BQU0seUZBQXlGLEdBQUcsRUFBRSxvSkFBb0osa0JBQWtCLGFBQWEsMEJBQTBCLEVBQUUsa0hBQWtILHlEQUF5RCx3RUFBd0Usc0NBQXNDLGtCQUFrQixHQUFHLEVBQUUsdUVBQXVFLGdXQUFnVyw4Q0FBOEMsdUJBQXVCLGlrQkFBaWtCLGtCQUFrQixpRUFBaUUsa0JBQWtCLEdBQUcsZ0VBQWdFLG9CQUFvQiw2RkFBNkYsU0FBUyw4QkFBOEIsT0FBTyxlQUFlLFdBQVcsa0JBQWtCLE9BQU8sZUFBZSw4Q0FBOEMsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsNkVBQTZFLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLHlCQUF5QixXQUFXLGlFQUFpRSx1QkFBdUIsRUFBRSxpQkFBaUIsYUFBYSw4Q0FBOEMsMEJBQTBCLFlBQVksc0NBQXNDLFNBQVMsRUFBRSxnQ0FBZ0Msd0JBQXdCLHdEQUF3RCw4SEFBOEgsU0FBUyxLQUFLLHFCQUFxQixvQkFBb0IsbUNBQW1DLHVCQUF1QiwyQkFBMkIsU0FBUyxjQUFjLElBQUksaUJBQWlCLFNBQVMsV0FBVyxTQUFTLGlCQUFpQixxQkFBcUIsb0JBQW9CLG1DQUFtQyx3QkFBd0Isb0NBQW9DLFdBQVcsNFpBQTRaLGlCQUFpQixhQUFhLGtpQkFBa2lCLCtVQUErVSxnUkFBZ1IsSUFBSSx1Q0FBdUMsV0FBVyx1QkFBdUIsZ0JBQWdCLGtDQUFrQyxNQUFNLHlCQUF5QixTQUFTLGNBQWMseUJBQXlCLCtCQUErQixhQUFhLElBQUksY0FBYyx5QkFBeUIsNkJBQTZCLFNBQVMsSUFBSSxxUUFBcVEsK1NBQStTLGVBQWUscU5BQXFOLGVBQWUsOEJBQThCLGlCQUFpQixNQUFNLEVBQUUsV0FBVyxxQkFBcUIsZUFBZSw4QkFBOEIsaUJBQWlCLE1BQU0sRUFBRSxXQUFXLHFCQUFxQixlQUFlLDhCQUE4QixpQkFBaUIsTUFBTSxFQUFFLFdBQVcscUJBQXFCLGVBQWUsOEJBQThCLHlCQUF5QixNQUFNLGdCQUFnQixlQUFlLDhCQUE4QixpQkFBaUIsaUJBQWlCLDJGQUEyRix3QkFBd0IsTUFBTSxXQUFXLFNBQVMsZ0NBQWdDLHlKQUF5SixTQUFTLGlCQUFpQixtQkFBbUIsSUFBSSwyQkFBMkIsU0FBUyxlQUFlLDhEQUE4RCwyQkFBMkIsSUFBSSxhQUFhLFNBQVMsVUFBVSxnQkFBZ0IsNEJBQTRCLFNBQVMsZ0JBQWdCLGlCQUFpQixJQUFJLGVBQWUsdUJBQXVCLHVCQUF1QixpRkFBaUYsdUZBQXVGLGFBQWEsbUJBQW1CLFVBQVUsK0VBQStFLFVBQVUsMEVBQTBFLHNCQUFzQixvRUFBb0Usc0NBQXNDLG1EQUFtRCw2QkFBNkIsZUFBZSxpQkFBaUIsd0NBQXdDLGVBQWUsaUJBQWlCLGdCQUFnQiw0QkFBNEIscUJBQXFCLDJDQUEyQyxTQUFTLGdCQUFnQixXQUFXLDhEQUE4RCxTQUFTLG9DQUFvQyxtQ0FBbUMsZUFBZSwyQ0FBMkMsNENBQTRDLHFCQUFxQixZQUFZLElBQUksRUFBRSxXQUFXLG9DQUFvQyxlQUFlLDJCQUEyQixTQUFTLHNCQUFzQixZQUFZLE1BQU0sRUFBRSxPQUFPLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLEtBQUssTUFBTSx3QkFBd0IsVUFBVSxvQ0FBb0Msa0lBQWtJLGlDQUFpQyxjQUFjLGdCQUFnQixlQUFlLDBEQUEwRCxNQUFNLGVBQWUsb0ZBQW9GLGVBQWUsZ0VBQWdFLFNBQVMseUJBQXlCLGdDQUFnQyw0QkFBNEIsZUFBZSwyQkFBMkIsa0NBQWtDLDBCQUEwQixNQUFNLEVBQUUsa0JBQWtCLDJDQUEyQyxlQUFlLGNBQWMsS0FBSyxNQUFNLE1BQU0sc0JBQXNCLHlEQUF5RCxNQUFNLEdBQUcsS0FBSyxPQUFPLDhCQUE4QixLQUFLLE9BQU8saUNBQWlDLGVBQWUsdUJBQXVCLFdBQVcsNkJBQTZCLG1DQUFtQyxNQUFNLGFBQWEsU0FBUyxTQUFTLFVBQVUsaUJBQWlCLHFCQUFxQiwrSUFBK0ksaUJBQWlCLG9CQUFvQiwyQkFBMkIsTUFBTSxzQkFBc0IsOEJBQThCLDRCQUE0QixhQUFhLGlDQUFpQywyQ0FBMkMsMEJBQTBCLDhCQUE4QixvQkFBb0IsT0FBTyxXQUFXLHNCQUFzQiwrQkFBK0IsOEJBQThCLG9CQUFvQixvQ0FBb0MsZ0NBQWdDLG9CQUFvQiwrREFBK0QsK0JBQStCLDZCQUE2QixpQ0FBaUMsOEJBQThCLG1FQUFtRSw4QkFBOEIsOEJBQThCLDBCQUEwQiw4QkFBOEIsOEJBQThCLGdDQUFnQyw4QkFBOEIsc0RBQXNELCtCQUErQiwyQkFBMkIsMkNBQTJDLGlDQUFpQywyQkFBMkIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsOEJBQThCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLGdEQUFnRCxnREFBZ0QsbUNBQW1DLDhCQUE4Qiw0QkFBNEIsK0JBQStCLGlDQUFpQyxpQ0FBaUMsa0NBQWtDLDBCQUEwQiw4QkFBOEIsNEJBQTRCLDhCQUE4Qiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixvQkFBb0IsaUJBQWlCLGtFQUFrRSwwQkFBMEIseUNBQXlDLHNCQUFzQiw2Q0FBNkMsMkNBQTJDLE1BQU0sRUFBRSxXQUFXLHFCQUFxQixTQUFTLG1CQUFtQixvQkFBb0IsR0FBRyxZQUFZLFNBQVMsT0FBTyxpQkFBaUIsNEVBQTRFLGVBQWUsWUFBWSxJQUFJLGlCQUFpQixVQUFVLElBQUksWUFBWSxXQUFXLFNBQVMsaUJBQWlCLHlCQUF5Qiw2S0FBNksscURBQXFELGVBQWUsaUJBQWlCLGlCQUFpQixpQ0FBaUMsaUJBQWlCLGlDQUFpQyxTQUFTLEVBQUUscUJBQXFCLGlCQUFpQixtQkFBbUIsdURBQXVELGtCQUFrQixzQkFBc0IsVUFBVSxlQUFlLG1CQUFtQixZQUFZLDhCQUE4QixlQUFlLDZDQUE2QyxlQUFlLGVBQWUsNkNBQTZDLGVBQWUsbUNBQW1DLHFCQUFxQixtQkFBbUIsYUFBYSxnQkFBZ0Isd0NBQXdDLGVBQWUscURBQXFELE1BQU0sd0JBQXdCLGdCQUFnQixzQkFBc0IsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxjQUFjLG9DQUFvQyxjQUFjLG9DQUFvQyxjQUFjLHNDQUFzQyxxQkFBcUIsa0NBQWtDLGNBQWMsb0NBQW9DLGNBQWMsZ0NBQWdDLGNBQWMsa0NBQWtDLGNBQWMsOEJBQThCLGNBQWMsc0NBQXNDLGNBQWMsOEJBQThCLGNBQWMsc0NBQXNDLGNBQWMsNEVBQTRFLFFBQVEsaUNBQWlDLFNBQVMsaUNBQWlDLFVBQVUsa0NBQWtDLFlBQVksdUNBQXVDLE9BQU8sa0NBQWtDLGtCQUFrQiw2Q0FBNkMsTUFBTSxpQ0FBaUMsU0FBUyxvQ0FBb0MsUUFBUSxnQ0FBZ0MsU0FBUyxpQ0FBaUMsT0FBTywrQkFBK0IsUUFBUSxnQ0FBZ0MsTUFBTSw4QkFBOEIsVUFBVSxrQ0FBa0MsTUFBTSw4QkFBOEIsVUFBVSxrQ0FBa0MsV0FBVyxzQ0FBc0MsU0FBUyxvQ0FBb0MsU0FBUyxvQ0FBb0MsVUFBVSxxQ0FBcUMsYUFBYSx3Q0FBd0MsWUFBWSx1Q0FBdUMsYUFBYSx3Q0FBd0Msb0JBQW9CLCtDQUErQyxhQUFhLHdDQUF3QyxjQUFjLHlDQUF5QyxhQUFhLHdDQUF3QyxjQUFjLHlDQUF5QyxlQUFlLDBDQUEwQyxlQUFlLDBDQUEwQyxjQUFjLHlDQUF5QyxXQUFXLHNDQUFzQyxXQUFXLHNDQUFzQyxNQUFNLHVDQUF1QyxNQUFNLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUIsSUFBSSxnQ0FBZ0MsU0FBUyxTQUFTLGtCQUFrQixFQUFFLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsb0NBQW9DLGlCQUFpQixxRUFBcUUsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxhQUFhLDRCQUE0Qix3QkFBd0IsaUJBQWlCLGFBQWEsYUFBYSxnQ0FBZ0MsbUNBQW1DLG1DQUFtQyxvQ0FBb0MsZ0NBQWdDLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLDJEQUEyRCxrQkFBa0IscUJBQXFCLHVGQUF1RixpQ0FBaUMsU0FBUyxJQUFJLHVDQUF1QyxTQUFTLE9BQU8sYUFBYSxhQUFhLGVBQWUsa0JBQWtCLG9CQUFvQixhQUFhLDREQUE0RCxFQUFFLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLGlCQUFpQixnQ0FBZ0MsOENBQThDLGFBQWEsa0JBQWtCLDRDQUE0QyxTQUFTLEVBQUUsSUFBSSx5R0FBeUcsU0FBUyxxQkFBcUIsRUFBRSw4QkFBOEIsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSwrR0FBK0csdUNBQXVDLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLDBGQUEwRixlQUFlLFVBQVUsbUJBQU8sQ0FBQyxzQ0FBSyxFQUFFLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsYUFBYSxXQUFXLHVCQUF1QiwyQkFBMkIsZ0NBQWdDLGtDQUFrQyxPQUFPLDBFQUEwRSxJQUFJLEVBQUUsaUJBQWlCLGFBQWEsOENBQThDLDBCQUEwQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsZ0JBQWdCLDBDQUEwQyxVQUFVLG9CQUFvQixFQUFFLFlBQVksR0FBRyxNQUFNLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLHdCQUF3Qiw0Q0FBNEMsZUFBZSxrQkFBa0IsVUFBVSwwQkFBMEIsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLDhCQUE4QixFQUFFLGFBQWEsMEJBQTBCLDJCQUEyQixFQUFFLGlDQUFpQyxFQUFFLFlBQVksRUFBRSw2QkFBNkIsRUFBRSxhQUFhLDBCQUEwQiwyQkFBMkIsRUFBRSxpQ0FBaUMsRUFBRSxZQUFZLEVBQUUsNkJBQTZCLEVBQUUsV0FBVywwQkFBMEIsMkJBQTJCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSwyQkFBMkIsRUFBRSxjQUFjLDBCQUEwQiwyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsaUNBQWlDLEVBQUUsWUFBWSwwQkFBMEIsMkJBQTJCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFLFlBQVksMEJBQTBCLDJCQUEyQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRSxTQUFTLDBCQUEwQixnQkFBZ0Isd0JBQXdCLGdCQUFnQixvQkFBb0IsbURBQW1ELEVBQUUsU0FBUyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSw0QkFBNEIsRUFBRSxZQUFZLDBCQUEwQiwyQkFBMkIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxlQUFlLDBCQUEwQiwyQkFBMkIsRUFBRSxzQ0FBc0MsRUFBRSxVQUFVLDBCQUEwQiwyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLDBCQUEwQiwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSx1Q0FBdUMsRUFBRSxtQkFBbUIsMEJBQTBCLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLHNDQUFzQyxFQUFFLGNBQWMsMEJBQTBCLDJCQUEyQixFQUFFLHdCQUF3QixFQUFFLHlDQUF5QyxFQUFFLFdBQVcsMEJBQTBCLDJCQUEyQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLGdCQUFnQiwwQkFBMEIsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsb0RBQW9ELEVBQUUsZ0JBQWdCLDBCQUEwQiwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSxvREFBb0QsSUFBSSxpQkFBaUIsYUFBYSxzQkFBc0IsNkJBQTZCLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLHVCQUF1Qiw0Q0FBNEMsZUFBZSxrQkFBa0IsYUFBYSwwQkFBMEIsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSwwQ0FBMEMsRUFBRSxlQUFlLDBCQUEwQiwyQkFBMkIsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLDBCQUEwQiwyQkFBMkIsRUFBRSxrQ0FBa0MsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSwwQkFBMEIsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQiwwQkFBMEIsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsMEJBQTBCLDJCQUEyQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLDBCQUEwQiwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSxvQ0FBb0MsRUFBRSxhQUFhLDBCQUEwQiwyQkFBMkIsRUFBRSxxQkFBcUIsRUFBRSxzQ0FBc0MsRUFBRSxlQUFlLDBCQUEwQiwyQkFBMkIsRUFBRSx1QkFBdUIsRUFBRSxxQ0FBcUMsRUFBRSxlQUFlLDBCQUEwQiwyQkFBMkIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLDBCQUEwQiwyQkFBMkIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSx3QkFBd0IsMEJBQTBCLDJCQUEyQixFQUFFLHFDQUFxQyxFQUFFLDJEQUEyRCxFQUFFLFlBQVksbUNBQW1DLGFBQWEscUNBQXFDLGFBQWEsMENBQTBDLFdBQVcsc0NBQXNDLFlBQVksMENBQTBDLFlBQVksc0RBQXNELGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsYUFBYSw2Q0FBNkMsZUFBZSxtQkFBbUIsV0FBVywwQkFBMEIsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsWUFBWSwwQkFBMEIsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLElBQUksaUJBQWlCLGFBQWEsOENBQThDLDBCQUEwQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsaUNBQWlDLDJDQUEyQyxlQUFlLGlCQUFpQixVQUFVLDBCQUEwQiwyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLFNBQVMsOEJBQThCLEVBQUUsYUFBYSwwQkFBMEIsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsWUFBWSxTQUFTLDZCQUE2QixFQUFFLGFBQWEsMEJBQTBCLDJCQUEyQixFQUFFLGlDQUFpQyxFQUFFLFlBQVksU0FBUyw2QkFBNkIsRUFBRSxjQUFjLDBCQUEwQiwyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEtBQUssMEJBQTBCLEVBQUUsWUFBWSwwQkFBMEIsMkJBQTJCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxjQUFjLG1DQUFtQyxFQUFFLGVBQWUsMEJBQTBCLDJCQUEyQixFQUFFLGdDQUFnQyxrQkFBa0IsWUFBWSxrQkFBa0IsK0NBQStDLEVBQUUsa0JBQWtCLDBCQUEwQiwyQkFBMkIsRUFBRSwrQkFBK0Isa0JBQWtCLFlBQVksa0JBQWtCLDhDQUE4QyxFQUFFLFlBQVksMEJBQTBCLDJCQUEyQixFQUFFLHNCQUFzQixrQkFBa0IsOEJBQThCLEVBQUUsZUFBZSwwQkFBMEIsMkJBQTJCLEVBQUUsMENBQTBDLEVBQUUsYUFBYSwwQkFBMEIsMkJBQTJCLEVBQUUsMkJBQTJCLGtCQUFrQixZQUFZLGtCQUFrQixnQ0FBZ0MsRUFBRSxVQUFVLE1BQU0sMEJBQTBCLG1CQUFtQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsSUFBSSxnQ0FBZ0MsU0FBUyxTQUFTLHdCQUF3QixJQUFJLGVBQWUsc0JBQXNCLG1EQUFtRCwwRUFBMEUsNkJBQTZCLFlBQVksZ0NBQWdDLDZCQUE2QixZQUFZLDBCQUEwQixpQkFBaUIsYUFBYSw4Q0FBOEMsMEJBQTBCLFlBQVksc0NBQXNDLFNBQVMsRUFBRSxtRkFBbUYsNENBQTRDLGVBQWUsa0JBQWtCLFlBQVksMEJBQTBCLDJCQUEyQixFQUFFLDZEQUE2RCxFQUFFLFlBQVksMEJBQTBCLDJCQUEyQixFQUFFLHNCQUFzQixrQkFBa0IsMkNBQTJDLEVBQUUsZUFBZSwwQkFBMEIsMkJBQTJCLEVBQUUsdURBQXVELEVBQUUsZ0JBQWdCLDBCQUEwQixxQkFBcUIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLG9DQUFvQyx1QkFBdUIsRUFBRSxvQkFBb0IsMEJBQTBCLHFCQUFxQixFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRSxhQUFhLDBCQUEwQiwyQkFBMkIsRUFBRSwyQkFBMkIsa0JBQWtCLFlBQVksa0JBQWtCLGdDQUFnQyxFQUFFLGNBQWMsMEJBQTBCLGdCQUFnQix5QkFBeUIsMERBQTBELEVBQUUsS0FBSyxFQUFFLHFCQUFxQixPQUFPLElBQUksNkJBQTZCLEVBQUUsY0FBYywwQkFBMEIsNkJBQTZCLEVBQUUsa0JBQWtCLGtCQUFrQiw0QkFBNEIsMEJBQTBCLElBQUksRUFBRSxpQkFBaUIsMEJBQTBCLDJCQUEyQixFQUFFLHdCQUF3QixrQkFBa0IsK0NBQStDLEVBQUUsZ0JBQWdCLDBCQUEwQixvQkFBb0IsMENBQTBDLE1BQU0sRUFBRSw4QkFBOEIsRUFBRSxjQUFjLDBCQUEwQixvQkFBb0IsMENBQTBDLE1BQU0sRUFBRSw0QkFBNEIsSUFBSSxpQkFBaUIsYUFBYSxjQUFjLGNBQWMsMEJBQTBCLFlBQVksV0FBVyxLQUFLLFdBQVcsS0FBSyxzQ0FBc0MsK0JBQStCLFVBQVUsU0FBUyxXQUFXLFdBQVcsbURBQW1ELGFBQWEsWUFBWSxXQUFXLEtBQUssZ0VBQWdFLHNCQUFzQiwyQkFBMkIsT0FBTyxTQUFTLFlBQVksc0NBQXNDLGlCQUFpQixZQUFZLFdBQVcsS0FBSyxhQUFhLGlCQUFpQixrQ0FBa0MsU0FBUyxhQUFhLG9DQUFvQyxhQUFhLFlBQVksV0FBVyxLQUFLLGFBQWEsMENBQTBDLHdCQUF3QixVQUFVLHNDQUFzQyxhQUFhLFlBQVksV0FBVyxLQUFLLGtCQUFrQix3QkFBd0IsVUFBVSxXQUFXLGlCQUFpQixhQUFhLHNCQUFzQixlQUFlLGlEQUFpRCxpQkFBaUIsYUFBYSw4Q0FBOEMsMEJBQTBCLFlBQVksc0NBQXNDLFNBQVMsRUFBRSxtSEFBbUgsbUJBQW1CLElBQUksY0FBYyxTQUFTLGtCQUFrQixFQUFFLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLGlDQUFpQyw0QkFBNEIsSUFBSSwrQkFBK0IsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLDhDQUE4QyxxQ0FBcUMsdUJBQXVCLG9CQUFvQixTQUFTLFNBQVMsa0JBQWtCLDJCQUEyQixJQUFJLGdDQUFnQywrQkFBK0IsWUFBWSxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksOENBQThDLHFDQUFxQyx1QkFBdUIsb0JBQW9CLGFBQWEsZ0NBQWdDLG1DQUFtQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUkscUJBQXFCLEtBQUssSUFBSSxTQUFTLFNBQVMsbUJBQW1CLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsYUFBYSwwQ0FBMEMsZUFBZSxnQkFBZ0IsVUFBVSwwQkFBMEIsMkJBQTJCLEVBQUUsR0FBRyxnQkFBZ0IsZ0JBQWdCLGdCQUFnQix1Q0FBdUMsRUFBRSxTQUFTLDBCQUEwQiwyQkFBMkIsRUFBRSxHQUFHLGdCQUFnQixlQUFlLGdCQUFnQix1Q0FBdUMsSUFBSSxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGFBQWEsMkNBQTJDLGVBQWUsaUJBQWlCLFFBQVEsMEJBQTBCLDJCQUEyQixFQUFFLGtCQUFrQixFQUFFLFlBQVksT0FBTyw0QkFBNEIsRUFBRSxXQUFXLDBCQUEwQiwyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLFVBQVUsK0JBQStCLEVBQUUsbUJBQW1CLDBCQUEwQiwyQkFBMkIsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLFVBQVUsdUNBQXVDLEVBQUUsY0FBYywwQkFBMEIsMkJBQTJCLEVBQUUsMEJBQTBCLGVBQWUsaURBQWlELEVBQUUsY0FBYywwQkFBMEIsMkJBQTJCLEVBQUUsS0FBSyxPQUFPLHFCQUFxQixPQUFPLGdDQUFnQyxFQUFFLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLGtDQUFrQyxpQkFBaUIsbUNBQW1DLHFCQUFxQix1Q0FBdUMsa0JBQWtCLG9DQUFvQyxlQUFlLG1DQUFtQyxpQkFBaUIsYUFBYSw4Q0FBOEMsMEJBQTBCLFlBQVksc0NBQXNDLFNBQVMsRUFBRSwyQ0FBMkMseUNBQXlDLGVBQWUsZUFBZSxRQUFRLDBCQUEwQiwyQkFBMkIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLE9BQU8sNEJBQTRCLEVBQUUsV0FBVywwQkFBMEIsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsWUFBWSxPQUFPLDJCQUEyQixFQUFFLFdBQVcsMEJBQTBCLDJCQUEyQixFQUFFLCtCQUErQixFQUFFLFlBQVksT0FBTywyQkFBMkIsRUFBRSxjQUFjLDBCQUEwQiw2QkFBNkIsRUFBRSxrQkFBa0Isa0JBQWtCLGdDQUFnQyxFQUFFLGlCQUFpQiwwQkFBMEIsMkJBQTJCLEVBQUUsd0JBQXdCLGtCQUFrQixxQ0FBcUMsRUFBRSxnQkFBZ0IsMEJBQTBCLDZCQUE2QixFQUFFLG9CQUFvQixrQkFBa0Isa0RBQWtELEVBQUUsbUJBQW1CLDBCQUEwQiwyQkFBMkIsRUFBRSwwQkFBMEIsa0JBQWtCLGtCQUFrQiw0QkFBNEIsNEJBQTRCLEVBQUUsY0FBYywwQkFBMEIscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHFDQUFxQyxFQUFFLGdCQUFnQiwwQkFBMEIscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHVDQUF1QyxFQUFFLFlBQVksMEJBQTBCLDJCQUEyQixFQUFFLHNCQUFzQiw4QkFBOEIsNEJBQTRCLEVBQUUsZUFBZSwwQkFBMEIsMkJBQTJCLEVBQUUsd0NBQXdDLEVBQUUsYUFBYSwwQkFBMEIsMkJBQTJCLEVBQUUsMkJBQTJCLDhCQUE4QixZQUFZLDhCQUE4QixnQ0FBZ0MsSUFBSSxpQkFBaUIsYUFBYSw4Q0FBOEMsMEJBQTBCLFlBQVksc0NBQXNDLFNBQVMsRUFBRSx1QkFBdUIsNkNBQTZDLGVBQWUsbUJBQW1CLGNBQWMsMEJBQTBCLDZCQUE2QixFQUFFLGtCQUFrQixrQkFBa0IsZ0NBQWdDLEVBQUUsaUJBQWlCLDBCQUEwQiwyQkFBMkIsRUFBRSx3QkFBd0Isa0JBQWtCLHFDQUFxQyxJQUFJLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLDJDQUEyQyx5Q0FBeUMsZUFBZSxlQUFlLFFBQVEsMEJBQTBCLDJCQUEyQixFQUFFLGtCQUFrQixFQUFFLFlBQVksT0FBTyw0QkFBNEIsRUFBRSxXQUFXLDBCQUEwQiwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSxZQUFZLE9BQU8sMkJBQTJCLEVBQUUsV0FBVywwQkFBMEIsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsWUFBWSxPQUFPLDJCQUEyQixFQUFFLFVBQVUsMEJBQTBCLDZCQUE2QixFQUFFLG1CQUFtQixrQkFBa0IsZ0NBQWdDLEVBQUUsYUFBYSwwQkFBMEIsMkJBQTJCLEVBQUUseUJBQXlCLGtCQUFrQixxQ0FBcUMsRUFBRSxVQUFVLDBCQUEwQixxQkFBcUIsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsWUFBWSwwQkFBMEIsMkJBQTJCLEVBQUUsc0JBQXNCLDhCQUE4Qiw0QkFBNEIsRUFBRSxlQUFlLDBCQUEwQiwyQkFBMkIsRUFBRSx3Q0FBd0MsRUFBRSxhQUFhLDBCQUEwQiwyQkFBMkIsRUFBRSwyQkFBMkIsOEJBQThCLFlBQVksOEJBQThCLGdDQUFnQyxJQUFJLGlCQUFpQixhQUFhLDhDQUE4QywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLHVCQUF1Qiw2Q0FBNkMsZUFBZSxtQkFBbUIsVUFBVSwwQkFBMEIsNkJBQTZCLEVBQUUsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsRUFBRSxhQUFhLDBCQUEwQiwyQkFBMkIsRUFBRSx5QkFBeUIsa0JBQWtCLHFDQUFxQyxJQUFJLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsb0JBQW9CLHFCQUFxQixrQkFBa0IsRUFBRSxpQ0FBaUMsc0JBQXNCLDREQUE0RCxtQ0FBbUMscUJBQXFCLFNBQVMsaURBQWlELFlBQVksVUFBVSxHQUFHLDRDQUE0QyxHQUFHLHdDQUF3QztBQUNsbnpDLGlDOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1CQUFtQixLQUEwQjtBQUM3QztBQUNBLGtCQUFrQixLQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFNBQVM7QUFDckI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qjs7QUFFeEIseUNBQXlDLHFCQUFxQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsY0FBYyxpQkFBaUI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBRVU7QUFDWjtBQUNBLEVBQUUsbUNBQW1CO0FBQ3JCO0FBQ0EsR0FBRztBQUFBLG9HQUFDO0FBQ0osRUFBRSxNQUFNLEVBYU47O0FBRUYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNwaEJZOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJhOztBQUViLGdCQUFnQixtQkFBTyxDQUFDLHVEQUFhO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQywrQ0FBUztBQUM3QixjQUFjLG1CQUFPLENBQUMsbURBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsK0NBQVM7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQ0FBZ0M7O0FBRXhFO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqUGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLCtDQUFTO0FBQzdCLGNBQWMsbUJBQU8sQ0FBQyxtREFBVztBQUNqQzs7QUFFQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLEtBQUs7QUFDTCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVRYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtELEVBQUU7QUFDcEQ7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU8sV0FBVyxhQUFhO0FBQ2pEOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDck9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWIsaUNBQWlDLG1CQUFPLENBQUMsMERBQVU7QUFDbkQscUNBQXFDLG1CQUFPLENBQUMsMERBQVU7Ozs7Ozs7Ozs7Ozs7QUNIdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixlQUFlLG1CQUFPLENBQUMscURBQVU7QUFDakMsV0FBVyxtQkFBTyxDQUFDLDBDQUFROztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQUs7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsMkNBQTJDLEtBQUs7QUFDaEQsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixtQkFBTyxDQUFDLDREQUFhOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RCxLQUFlO0FBQ2xDLFFBQU1hLEdBQUcsR0FBR2xILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFaLENBRGtDLENBR2xDOztBQUNBLE9BQUssTUFBTSxDQUFDa0gsQ0FBRCxFQUFJQyxDQUFKLENBQVgsSUFBcUJDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlakIsS0FBZixDQUFyQixFQUE0QztBQUMxQ2EsT0FBRyxDQUFDSyxZQUFKLENBQWlCSixDQUFqQixFQUFvQkMsQ0FBcEI7QUFDRCxHQU5pQyxDQU9sQzs7O0FBQ0EsU0FBT0YsR0FBUDtBQUNELENBVEQ7O0FBV0EsTUFBTWQsTUFBTSxHQUFJb0IsSUFBRCxJQUFVO0FBQ3ZCLFNBQU9QLFlBQVksQ0FBQ08sSUFBRCxDQUFuQjtBQUNELENBRkQ7O0FBSWVwQixxRUFBZixFIiwiZmlsZSI6Im1lcmNoYW50V2lkZ2V0LnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGliTmFtZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaWJOYW1lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpYk5hbWVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKGEpe2lmKHRbYV0pcmV0dXJuIHRbYV0uZXhwb3J0czt2YXIgbj10W2FdPXtpOmEsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVthXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyxyKSxuLmw9ITAsbi5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LGEpe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDphfSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIGE9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIoYSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBuIGluIGUpci5kKGEsbixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG4pKTtyZXR1cm4gYX0sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiLHIoci5zPTQpfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDEpKSxpPXIoOCksbz1yKDIpLHM9cigxNyk7dC52YWxpZGF0b3JTeW1ib2w9U3ltYm9sKFwidmFsaWRhdG9yc1wiKTt0LlByZWRpY2F0ZT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQ9e30pe3RoaXMudHlwZT1lLHRoaXMub3B0aW9ucz10LHRoaXMuY29udGV4dD17dmFsaWRhdG9yczpbXX0sdGhpcy5jb250ZXh0PU9iamVjdC5hc3NpZ24oe30sdGhpcy5jb250ZXh0LHRoaXMub3B0aW9ucyk7Y29uc3Qgcj10aGlzLnR5cGVbMF0udG9Mb3dlckNhc2UoKSt0aGlzLnR5cGUuc2xpY2UoMSk7dGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3QmJnQuc3Vic3RyaW5nKHRoaXMudHlwZS5sZW5ndGgrMSl8fFwiYXJndW1lbnRcIn0gdG8gYmUgb2YgdHlwZSBcXGAke3RoaXMudHlwZX1cXGAgYnV0IHJlY2VpdmVkIHR5cGUgXFxgJHtuLmRlZmF1bHQoZSl9XFxgYCx2YWxpZGF0b3I6ZT0+bi5kZWZhdWx0W3JdKGUpfSl9W28udGVzdFN5bWJvbF0oZSx0LHIpe2Zvcihjb25zdHt2YWxpZGF0b3I6YSxtZXNzYWdlOm59b2YgdGhpcy5jb250ZXh0LnZhbGlkYXRvcnMpe2lmKCEwPT09dGhpcy5vcHRpb25zLm9wdGlvbmFsJiZ2b2lkIDA9PT1lKWNvbnRpbnVlO2NvbnN0IG89YShlKTtpZighMD09PW8pY29udGludWU7bGV0IHM9cjt0aHJvd1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihzPXIoKSkscz1zP2Ake3RoaXMudHlwZX0gXFxgJHtzfVxcYGA6dGhpcy50eXBlLG5ldyBpLkFyZ3VtZW50RXJyb3IobihlLHMsbyksdCl9fWdldFt0LnZhbGlkYXRvclN5bWJvbF0oKXtyZXR1cm4gdGhpcy5jb250ZXh0LnZhbGlkYXRvcnN9Z2V0IG5vdCgpe3JldHVybiBzLm5vdCh0aGlzKX1pcyhlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+cj9gKCR7dH0pICR7cn1gOmBFeHBlY3RlZCAke3R9IFxcYCR7ZX1cXGAgdG8gcGFzcyBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbmAsdmFsaWRhdG9yOmV9KX1hZGRWYWxpZGF0b3IoZSl7cmV0dXJuIHRoaXMuY29udGV4dC52YWxpZGF0b3JzLnB1c2goZSksdGhpc319fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgYT1cInVuZGVmaW5lZFwiPT10eXBlb2YgVVJMP3IoMTYpLlVSTDpVUkwsbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLGk9ZT0+dD0+dHlwZW9mIHQ9PT1lLG89ZT0+IWQubnVsbE9yVW5kZWZpbmVkKGUpJiYhZC5udWxsT3JVbmRlZmluZWQoZS5jb25zdHJ1Y3RvcikmJmQuZnVuY3Rpb25fKGUuY29uc3RydWN0b3IuaXNCdWZmZXIpJiZlLmNvbnN0cnVjdG9yLmlzQnVmZmVyKGUpLHM9ZT0+e2NvbnN0IHQ9bi5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVybiB0fHxudWxsfSx1PWU9PnQ9PnModCk9PT1lO2Z1bmN0aW9uIGQoZSl7c3dpdGNoKGUpe2Nhc2UgbnVsbDpyZXR1cm5cIm51bGxcIjtjYXNlITA6Y2FzZSExOnJldHVyblwiYm9vbGVhblwifXN3aXRjaCh0eXBlb2YgZSl7Y2FzZVwidW5kZWZpbmVkXCI6cmV0dXJuXCJ1bmRlZmluZWRcIjtjYXNlXCJzdHJpbmdcIjpyZXR1cm5cInN0cmluZ1wiO2Nhc2VcIm51bWJlclwiOnJldHVyblwibnVtYmVyXCI7Y2FzZVwic3ltYm9sXCI6cmV0dXJuXCJzeW1ib2xcIn1pZihkLmZ1bmN0aW9uXyhlKSlyZXR1cm5cIkZ1bmN0aW9uXCI7aWYoZC5vYnNlcnZhYmxlKGUpKXJldHVyblwiT2JzZXJ2YWJsZVwiO2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuXCJBcnJheVwiO2lmKG8oZSkpcmV0dXJuXCJCdWZmZXJcIjtjb25zdCB0PXMoZSk7aWYodClyZXR1cm4gdDtpZihlIGluc3RhbmNlb2YgU3RyaW5nfHxlIGluc3RhbmNlb2YgQm9vbGVhbnx8ZSBpbnN0YW5jZW9mIE51bWJlcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGxlYXNlIGRvbid0IHVzZSBvYmplY3Qgd3JhcHBlcnMgZm9yIHByaW1pdGl2ZSB0eXBlc1wiKTtyZXR1cm5cIk9iamVjdFwifSFmdW5jdGlvbihlKXtjb25zdCB0PWU9Plwib2JqZWN0XCI9PXR5cGVvZiBlO2UudW5kZWZpbmVkPWkoXCJ1bmRlZmluZWRcIiksZS5zdHJpbmc9aShcInN0cmluZ1wiKSxlLm51bWJlcj1pKFwibnVtYmVyXCIpLGUuZnVuY3Rpb25fPWkoXCJmdW5jdGlvblwiKSxlLm51bGxfPShlPT5udWxsPT09ZSksZS5jbGFzc189KHQ9PmUuZnVuY3Rpb25fKHQpJiZ0LnRvU3RyaW5nKCkuc3RhcnRzV2l0aChcImNsYXNzIFwiKSksZS5ib29sZWFuPShlPT4hMD09PWV8fCExPT09ZSksZS5zeW1ib2w9aShcInN5bWJvbFwiKSxlLm51bWVyaWNTdHJpbmc9KHQ9PmUuc3RyaW5nKHQpJiZ0Lmxlbmd0aD4wJiYhTnVtYmVyLmlzTmFOKE51bWJlcih0KSkpLGUuYXJyYXk9QXJyYXkuaXNBcnJheSxlLmJ1ZmZlcj1vLGUubnVsbE9yVW5kZWZpbmVkPSh0PT5lLm51bGxfKHQpfHxlLnVuZGVmaW5lZCh0KSksZS5vYmplY3Q9KHI9PiFlLm51bGxPclVuZGVmaW5lZChyKSYmKGUuZnVuY3Rpb25fKHIpfHx0KHIpKSksZS5pdGVyYWJsZT0odD0+IWUubnVsbE9yVW5kZWZpbmVkKHQpJiZlLmZ1bmN0aW9uXyh0W1N5bWJvbC5pdGVyYXRvcl0pKSxlLmFzeW5jSXRlcmFibGU9KHQ9PiFlLm51bGxPclVuZGVmaW5lZCh0KSYmZS5mdW5jdGlvbl8odFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pKSxlLmdlbmVyYXRvcj0odD0+ZS5pdGVyYWJsZSh0KSYmZS5mdW5jdGlvbl8odC5uZXh0KSYmZS5mdW5jdGlvbl8odC50aHJvdykpLGUubmF0aXZlUHJvbWlzZT0oZT0+dShcIlByb21pc2VcIikoZSkpO2UucHJvbWlzZT0ocj0+ZS5uYXRpdmVQcm9taXNlKHIpfHwocj0+IWUubnVsbF8ocikmJnQocikmJmUuZnVuY3Rpb25fKHIudGhlbikmJmUuZnVuY3Rpb25fKHIuY2F0Y2gpKShyKSksZS5nZW5lcmF0b3JGdW5jdGlvbj11KFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksZS5hc3luY0Z1bmN0aW9uPXUoXCJBc3luY0Z1bmN0aW9uXCIpLGUuYm91bmRGdW5jdGlvbj0odD0+ZS5mdW5jdGlvbl8odCkmJiF0Lmhhc093blByb3BlcnR5KFwicHJvdG90eXBlXCIpKSxlLnJlZ0V4cD11KFwiUmVnRXhwXCIpLGUuZGF0ZT11KFwiRGF0ZVwiKSxlLmVycm9yPXUoXCJFcnJvclwiKSxlLm1hcD0oZT0+dShcIk1hcFwiKShlKSksZS5zZXQ9KGU9PnUoXCJTZXRcIikoZSkpLGUud2Vha01hcD0oZT0+dShcIldlYWtNYXBcIikoZSkpLGUud2Vha1NldD0oZT0+dShcIldlYWtTZXRcIikoZSkpLGUuaW50OEFycmF5PXUoXCJJbnQ4QXJyYXlcIiksZS51aW50OEFycmF5PXUoXCJVaW50OEFycmF5XCIpLGUudWludDhDbGFtcGVkQXJyYXk9dShcIlVpbnQ4Q2xhbXBlZEFycmF5XCIpLGUuaW50MTZBcnJheT11KFwiSW50MTZBcnJheVwiKSxlLnVpbnQxNkFycmF5PXUoXCJVaW50MTZBcnJheVwiKSxlLmludDMyQXJyYXk9dShcIkludDMyQXJyYXlcIiksZS51aW50MzJBcnJheT11KFwiVWludDMyQXJyYXlcIiksZS5mbG9hdDMyQXJyYXk9dShcIkZsb2F0MzJBcnJheVwiKSxlLmZsb2F0NjRBcnJheT11KFwiRmxvYXQ2NEFycmF5XCIpLGUuYXJyYXlCdWZmZXI9dShcIkFycmF5QnVmZmVyXCIpLGUuc2hhcmVkQXJyYXlCdWZmZXI9dShcIlNoYXJlZEFycmF5QnVmZmVyXCIpLGUuZGF0YVZpZXc9dShcIkRhdGFWaWV3XCIpLGUuZGlyZWN0SW5zdGFuY2VPZj0oKGUsdCk9Pk9iamVjdC5nZXRQcm90b3R5cGVPZihlKT09PXQucHJvdG90eXBlKSxlLnVybEluc3RhbmNlPShlPT51KFwiVVJMXCIpKGUpKSxlLnVybFN0cmluZz0odD0+e2lmKCFlLnN0cmluZyh0KSlyZXR1cm4hMTt0cnl7cmV0dXJuIG5ldyBhKHQpLCEwfWNhdGNoKGUpe3JldHVybiExfX0pLGUudHJ1dGh5PShlPT5Cb29sZWFuKGUpKSxlLmZhbHN5PShlPT4hZSksZS5uYW49KGU9Pk51bWJlci5pc05hTihlKSk7Y29uc3Qgcj1uZXcgU2V0KFtcInVuZGVmaW5lZFwiLFwic3RyaW5nXCIsXCJudW1iZXJcIixcImJvb2xlYW5cIixcInN5bWJvbFwiXSk7ZS5wcmltaXRpdmU9KHQ9PmUubnVsbF8odCl8fHIuaGFzKHR5cGVvZiB0KSksZS5pbnRlZ2VyPShlPT5OdW1iZXIuaXNJbnRlZ2VyKGUpKSxlLnNhZmVJbnRlZ2VyPShlPT5OdW1iZXIuaXNTYWZlSW50ZWdlcihlKSksZS5wbGFpbk9iamVjdD0oZT0+e2xldCB0O3JldHVyblwiT2JqZWN0XCI9PT1zKGUpJiYobnVsbD09PSh0PU9iamVjdC5nZXRQcm90b3R5cGVPZihlKSl8fHQ9PT1PYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pKX0pO2NvbnN0IG49bmV3IFNldChbXCJJbnQ4QXJyYXlcIixcIlVpbnQ4QXJyYXlcIixcIlVpbnQ4Q2xhbXBlZEFycmF5XCIsXCJJbnQxNkFycmF5XCIsXCJVaW50MTZBcnJheVwiLFwiSW50MzJBcnJheVwiLFwiVWludDMyQXJyYXlcIixcIkZsb2F0MzJBcnJheVwiLFwiRmxvYXQ2NEFycmF5XCJdKTtlLnR5cGVkQXJyYXk9KGU9Pntjb25zdCB0PXMoZSk7cmV0dXJuIG51bGwhPT10JiZuLmhhcyh0KX0pO2UuYXJyYXlMaWtlPSh0PT4hZS5udWxsT3JVbmRlZmluZWQodCkmJiFlLmZ1bmN0aW9uXyh0KSYmKHQ9PmUuc2FmZUludGVnZXIodCkmJnQ+LTEpKHQubGVuZ3RoKSksZS5pblJhbmdlPSgodCxyKT0+e2lmKGUubnVtYmVyKHIpKXJldHVybiB0Pj1NYXRoLm1pbigwLHIpJiZ0PD1NYXRoLm1heChyLDApO2lmKGUuYXJyYXkocikmJjI9PT1yLmxlbmd0aClyZXR1cm4gdD49TWF0aC5taW4oLi4ucikmJnQ8PU1hdGgubWF4KC4uLnIpO3Rocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgcmFuZ2U6ICR7SlNPTi5zdHJpbmdpZnkocil9YCl9KTtjb25zdCBkPVtcImlubmVySFRNTFwiLFwib3duZXJEb2N1bWVudFwiLFwic3R5bGVcIixcImF0dHJpYnV0ZXNcIixcIm5vZGVWYWx1ZVwiXTtlLmRvbUVsZW1lbnQ9KHQ9PmUub2JqZWN0KHQpJiYxPT09dC5ub2RlVHlwZSYmZS5zdHJpbmcodC5ub2RlTmFtZSkmJiFlLnBsYWluT2JqZWN0KHQpJiZkLmV2ZXJ5KGU9PmUgaW4gdCkpLGUub2JzZXJ2YWJsZT0oZT0+ISFlJiYoISghZVtTeW1ib2wub2JzZXJ2YWJsZV18fGUhPT1lW1N5bWJvbC5vYnNlcnZhYmxlXSgpKXx8ISghZVtcIkBAb2JzZXJ2YWJsZVwiXXx8ZSE9PWVbXCJAQG9ic2VydmFibGVcIl0oKSkpKSxlLm5vZGVTdHJlYW09KHI9PiFlLm51bGxPclVuZGVmaW5lZChyKSYmdChyKSYmZS5mdW5jdGlvbl8oci5waXBlKSYmIWUub2JzZXJ2YWJsZShyKSksZS5pbmZpbml0ZT0oZT0+ZT09PTEvMHx8ZT09PS0xLzApO2NvbnN0IGM9dD0+cj0+ZS5pbnRlZ2VyKHIpJiZNYXRoLmFicyhyJTIpPT09dDtlLmV2ZW49YygwKSxlLm9kZD1jKDEpO2UuZW1wdHlBcnJheT0odD0+ZS5hcnJheSh0KSYmMD09PXQubGVuZ3RoKSxlLm5vbkVtcHR5QXJyYXk9KHQ9PmUuYXJyYXkodCkmJnQubGVuZ3RoPjApLGUuZW1wdHlTdHJpbmc9KHQ9PmUuc3RyaW5nKHQpJiYwPT09dC5sZW5ndGgpLGUubm9uRW1wdHlTdHJpbmc9KHQ9PmUuc3RyaW5nKHQpJiZ0Lmxlbmd0aD4wKSxlLmVtcHR5U3RyaW5nT3JXaGl0ZXNwYWNlPSh0PT5lLmVtcHR5U3RyaW5nKHQpfHwodD0+ZS5zdHJpbmcodCkmJiExPT09L1xcUy8udGVzdCh0KSkodCkpLGUuZW1wdHlPYmplY3Q9KHQ9PmUub2JqZWN0KHQpJiYhZS5tYXAodCkmJiFlLnNldCh0KSYmMD09PU9iamVjdC5rZXlzKHQpLmxlbmd0aCksZS5ub25FbXB0eU9iamVjdD0odD0+ZS5vYmplY3QodCkmJiFlLm1hcCh0KSYmIWUuc2V0KHQpJiZPYmplY3Qua2V5cyh0KS5sZW5ndGg+MCksZS5lbXB0eVNldD0odD0+ZS5zZXQodCkmJjA9PT10LnNpemUpLGUubm9uRW1wdHlTZXQ9KHQ9PmUuc2V0KHQpJiZ0LnNpemU+MCksZS5lbXB0eU1hcD0odD0+ZS5tYXAodCkmJjA9PT10LnNpemUpLGUubm9uRW1wdHlNYXA9KHQ9PmUubWFwKHQpJiZ0LnNpemU+MCk7Y29uc3QgbD0odCxyLGEpPT57aWYoITE9PT1lLmZ1bmN0aW9uXyhyKSl0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHByZWRpY2F0ZTogJHtKU09OLnN0cmluZ2lmeShyKX1gKTtpZigwPT09YS5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgbnVtYmVyIG9mIHZhbHVlc1wiKTtyZXR1cm4gdC5jYWxsKGEscil9O2UuYW55PSgoZSwuLi50KT0+bChBcnJheS5wcm90b3R5cGUuc29tZSxlLHQpKSxlLmFsbD0oKGUsLi4udCk9PmwoQXJyYXkucHJvdG90eXBlLmV2ZXJ5LGUsdCkpfShkfHwoZD17fSkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGQse2NsYXNzOnt2YWx1ZTpkLmNsYXNzX30sZnVuY3Rpb246e3ZhbHVlOmQuZnVuY3Rpb25ffSxudWxsOnt2YWx1ZTpkLm51bGxffX0pLHQuZGVmYXVsdD1kLGUuZXhwb3J0cz1kLGUuZXhwb3J0cy5kZWZhdWx0PWR9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LnRlc3RTeW1ib2w9U3ltYm9sKFwidGVzdFwiKSx0LmlzUHJlZGljYXRlPShlPT5Cb29sZWFuKGUmJmVbdC50ZXN0U3ltYm9sXSkpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PSgoZSx0LHI9NSk9Pntjb25zdCBhPVtdO2Zvcihjb25zdCBuIG9mIHQpaWYoIWUuaGFzKG4pJiYoYS5wdXNoKG4pLGEubGVuZ3RoPT09cikpcmV0dXJuIGE7cmV0dXJuIDA9PT1hLmxlbmd0aHx8YX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMTApKSxpPXIoMTEpLG89cigwKTt0LlByZWRpY2F0ZT1vLlByZWRpY2F0ZTtjb25zdCBzPXIoMiksdT1hKHIoMTgpKSxkPWEocig2KSksYz1hKHIoOSkpLGw9KGUsdCxyKT0+e2lmKCFzLmlzUHJlZGljYXRlKHQpJiZcInN0cmluZ1wiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSBwcmVkaWNhdGUgb3IgYSBzdHJpbmcsIGdvdCBcXGAke3R5cGVvZiB0fVxcYGApO2lmKHMuaXNQcmVkaWNhdGUodCkpe2NvbnN0IHI9bi5kZWZhdWx0KCk7Yy5kZWZhdWx0KGUsKCk9PmkuaW5mZXJMYWJlbChyKSx0KX1lbHNlIGMuZGVmYXVsdChlLHQscil9O09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGwse2lzVmFsaWQ6e3ZhbHVlOihlLHQpPT57dHJ5e3JldHVybiBsKGUsdCksITB9Y2F0Y2goZSl7cmV0dXJuITF9fX0sY3JlYXRlOnt2YWx1ZTooZSx0KT0+cj0+e2lmKHMuaXNQcmVkaWNhdGUoZSkpe2NvbnN0IHQ9bi5kZWZhdWx0KCk7Yy5kZWZhdWx0KHIsKCk9PmkuaW5mZXJMYWJlbCh0KSxlKX1lbHNlIGMuZGVmYXVsdChyLGUsdCl9fX0pLHQuZGVmYXVsdD1kLmRlZmF1bHQodS5kZWZhdWx0KGwpKTt2YXIgZj1yKDYpO3QuU3RyaW5nUHJlZGljYXRlPWYuU3RyaW5nUHJlZGljYXRlLHQuTnVtYmVyUHJlZGljYXRlPWYuTnVtYmVyUHJlZGljYXRlLHQuQm9vbGVhblByZWRpY2F0ZT1mLkJvb2xlYW5QcmVkaWNhdGUsdC5BcnJheVByZWRpY2F0ZT1mLkFycmF5UHJlZGljYXRlLHQuT2JqZWN0UHJlZGljYXRlPWYuT2JqZWN0UHJlZGljYXRlLHQuRGF0ZVByZWRpY2F0ZT1mLkRhdGVQcmVkaWNhdGUsdC5FcnJvclByZWRpY2F0ZT1mLkVycm9yUHJlZGljYXRlLHQuTWFwUHJlZGljYXRlPWYuTWFwUHJlZGljYXRlLHQuV2Vha01hcFByZWRpY2F0ZT1mLldlYWtNYXBQcmVkaWNhdGUsdC5TZXRQcmVkaWNhdGU9Zi5TZXRQcmVkaWNhdGUsdC5XZWFrU2V0UHJlZGljYXRlPWYuV2Vha1NldFByZWRpY2F0ZSx0LkFueVByZWRpY2F0ZT1mLkFueVByZWRpY2F0ZX0sZnVuY3Rpb24oZSx0LHIpeyhmdW5jdGlvbihlKXt2YXIgcj0yMDAsYT1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIixuPTEsaT0yLG89OTAwNzE5OTI1NDc0MDk5MSxzPVwiW29iamVjdCBBcmd1bWVudHNdXCIsdT1cIltvYmplY3QgQXJyYXldXCIsZD1cIltvYmplY3QgQXN5bmNGdW5jdGlvbl1cIixjPVwiW29iamVjdCBCb29sZWFuXVwiLGw9XCJbb2JqZWN0IERhdGVdXCIsZj1cIltvYmplY3QgRXJyb3JdXCIscD1cIltvYmplY3QgRnVuY3Rpb25dXCIsZz1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsaD1cIltvYmplY3QgTWFwXVwiLHk9XCJbb2JqZWN0IE51bWJlcl1cIixtPVwiW29iamVjdCBOdWxsXVwiLHY9XCJbb2JqZWN0IE9iamVjdF1cIixiPVwiW29iamVjdCBQcm94eV1cIixfPVwiW29iamVjdCBSZWdFeHBdXCIsJD1cIltvYmplY3QgU2V0XVwiLFA9XCJbb2JqZWN0IFN0cmluZ11cIixPPVwiW29iamVjdCBTeW1ib2xdXCIseD1cIltvYmplY3QgVW5kZWZpbmVkXVwiLEU9XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiLGo9XCJbb2JqZWN0IERhdGFWaWV3XVwiLFM9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxBPS9eKD86MHxbMS05XVxcZCopJC8sdz17fTt3W1wiW29iamVjdCBGbG9hdDMyQXJyYXldXCJdPXdbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09d1tcIltvYmplY3QgSW50OEFycmF5XVwiXT13W1wiW29iamVjdCBJbnQxNkFycmF5XVwiXT13W1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT13W1wiW29iamVjdCBVaW50OEFycmF5XVwiXT13W1wiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIl09d1tcIltvYmplY3QgVWludDE2QXJyYXldXCJdPXdbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT0hMCx3W3NdPXdbdV09d1tFXT13W2NdPXdbal09d1tsXT13W2ZdPXdbcF09d1toXT13W3ldPXdbdl09d1tfXT13WyRdPXdbUF09d1tcIltvYmplY3QgV2Vha01hcF1cIl09ITE7dmFyIFY9XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsJiZnbG9iYWwuT2JqZWN0PT09T2JqZWN0JiZnbG9iYWwsTT1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsaz1WfHxNfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksej10JiYhdC5ub2RlVHlwZSYmdCxOPXomJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiYhZS5ub2RlVHlwZSYmZSxJPU4mJk4uZXhwb3J0cz09PXosVD1JJiZWLnByb2Nlc3MsVT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gVCYmVC5iaW5kaW5nJiZULmJpbmRpbmcoXCJ1dGlsXCIpfWNhdGNoKGUpe319KCksSj1VJiZVLmlzVHlwZWRBcnJheTtmdW5jdGlvbiBEKGUsdCl7Zm9yKHZhciByPS0xLGE9bnVsbD09ZT8wOmUubGVuZ3RoOysrcjxhOylpZih0KGVbcl0scixlKSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBXKGUpe3ZhciB0PS0xLHI9QXJyYXkoZS5zaXplKTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUsYSl7clsrK3RdPVthLGVdfSkscn1mdW5jdGlvbiBxKGUpe3ZhciB0PS0xLHI9QXJyYXkoZS5zaXplKTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JbKyt0XT1lfSkscn12YXIgQixSLEYsTD1BcnJheS5wcm90b3R5cGUsQz1GdW5jdGlvbi5wcm90b3R5cGUsSz1PYmplY3QucHJvdG90eXBlLEc9a1tcIl9fY29yZS1qc19zaGFyZWRfX1wiXSxIPUMudG9TdHJpbmcsUT1LLmhhc093blByb3BlcnR5LFg9KEI9L1teLl0rJC8uZXhlYyhHJiZHLmtleXMmJkcua2V5cy5JRV9QUk9UT3x8XCJcIikpP1wiU3ltYm9sKHNyYylfMS5cIitCOlwiXCIsWT1LLnRvU3RyaW5nLFo9UmVnRXhwKFwiXlwiK0guY2FsbChRKS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLGVlPUk/ay5CdWZmZXI6dm9pZCAwLHRlPWsuU3ltYm9sLHJlPWsuVWludDhBcnJheSxhZT1LLnByb3BlcnR5SXNFbnVtZXJhYmxlLG5lPUwuc3BsaWNlLGllPXRlP3RlLnRvU3RyaW5nVGFnOnZvaWQgMCxvZT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLHNlPWVlP2VlLmlzQnVmZmVyOnZvaWQgMCx1ZT0oUj1PYmplY3Qua2V5cyxGPU9iamVjdCxmdW5jdGlvbihlKXtyZXR1cm4gUihGKGUpKX0pLGRlPVVlKGssXCJEYXRhVmlld1wiKSxjZT1VZShrLFwiTWFwXCIpLGxlPVVlKGssXCJQcm9taXNlXCIpLGZlPVVlKGssXCJTZXRcIikscGU9VWUoayxcIldlYWtNYXBcIiksZ2U9VWUoT2JqZWN0LFwiY3JlYXRlXCIpLGhlPXFlKGRlKSx5ZT1xZShjZSksbWU9cWUobGUpLHZlPXFlKGZlKSxiZT1xZShwZSksX2U9dGU/dGUucHJvdG90eXBlOnZvaWQgMCwkZT1fZT9fZS52YWx1ZU9mOnZvaWQgMDtmdW5jdGlvbiBQZShlKXt2YXIgdD0tMSxyPW51bGw9PWU/MDplLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxyOyl7dmFyIGE9ZVt0XTt0aGlzLnNldChhWzBdLGFbMV0pfX1mdW5jdGlvbiBPZShlKXt2YXIgdD0tMSxyPW51bGw9PWU/MDplLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxyOyl7dmFyIGE9ZVt0XTt0aGlzLnNldChhWzBdLGFbMV0pfX1mdW5jdGlvbiB4ZShlKXt2YXIgdD0tMSxyPW51bGw9PWU/MDplLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxyOyl7dmFyIGE9ZVt0XTt0aGlzLnNldChhWzBdLGFbMV0pfX1mdW5jdGlvbiBFZShlKXt2YXIgdD0tMSxyPW51bGw9PWU/MDplLmxlbmd0aDtmb3IodGhpcy5fX2RhdGFfXz1uZXcgeGU7Kyt0PHI7KXRoaXMuYWRkKGVbdF0pfWZ1bmN0aW9uIGplKGUpe3ZhciB0PXRoaXMuX19kYXRhX189bmV3IE9lKGUpO3RoaXMuc2l6ZT10LnNpemV9ZnVuY3Rpb24gU2UoZSx0KXt2YXIgcj1GZShlKSxhPSFyJiZSZShlKSxuPSFyJiYhYSYmTGUoZSksaT0hciYmIWEmJiFuJiZRZShlKSxvPXJ8fGF8fG58fGkscz1vP2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciByPS0xLGE9QXJyYXkoZSk7KytyPGU7KWFbcl09dChyKTtyZXR1cm4gYX0oZS5sZW5ndGgsU3RyaW5nKTpbXSx1PXMubGVuZ3RoO2Zvcih2YXIgZCBpbiBlKSF0JiYhUS5jYWxsKGUsZCl8fG8mJihcImxlbmd0aFwiPT1kfHxuJiYoXCJvZmZzZXRcIj09ZHx8XCJwYXJlbnRcIj09ZCl8fGkmJihcImJ1ZmZlclwiPT1kfHxcImJ5dGVMZW5ndGhcIj09ZHx8XCJieXRlT2Zmc2V0XCI9PWQpfHxXZShkLHUpKXx8cy5wdXNoKGQpO3JldHVybiBzfWZ1bmN0aW9uIEFlKGUsdCl7Zm9yKHZhciByPWUubGVuZ3RoO3ItLTspaWYoQmUoZVtyXVswXSx0KSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiB3ZShlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA9PT1lP3g6bTppZSYmaWUgaW4gT2JqZWN0KGUpP2Z1bmN0aW9uKGUpe3ZhciB0PVEuY2FsbChlLGllKSxyPWVbaWVdO3RyeXtlW2llXT12b2lkIDA7dmFyIGE9ITB9Y2F0Y2goZSl7fXZhciBuPVkuY2FsbChlKTthJiYodD9lW2llXT1yOmRlbGV0ZSBlW2llXSk7cmV0dXJuIG59KGUpOmZ1bmN0aW9uKGUpe3JldHVybiBZLmNhbGwoZSl9KGUpfWZ1bmN0aW9uIFZlKGUpe3JldHVybiBIZShlKSYmd2UoZSk9PXN9ZnVuY3Rpb24gTWUoZSx0LHIsYSxvKXtyZXR1cm4gZT09PXR8fChudWxsPT1lfHxudWxsPT10fHwhSGUoZSkmJiFIZSh0KT9lIT1lJiZ0IT10OmZ1bmN0aW9uKGUsdCxyLGEsbyxkKXt2YXIgcD1GZShlKSxnPUZlKHQpLG09cD91OkRlKGUpLGI9Zz91OkRlKHQpLHg9KG09bT09cz92Om0pPT12LFM9KGI9Yj09cz92OmIpPT12LEE9bT09YjtpZihBJiZMZShlKSl7aWYoIUxlKHQpKXJldHVybiExO3A9ITAseD0hMX1pZihBJiYheClyZXR1cm4gZHx8KGQ9bmV3IGplKSxwfHxRZShlKT9OZShlLHQscixhLG8sZCk6ZnVuY3Rpb24oZSx0LHIsYSxvLHMsdSl7c3dpdGNoKHIpe2Nhc2UgajppZihlLmJ5dGVMZW5ndGghPXQuYnl0ZUxlbmd0aHx8ZS5ieXRlT2Zmc2V0IT10LmJ5dGVPZmZzZXQpcmV0dXJuITE7ZT1lLmJ1ZmZlcix0PXQuYnVmZmVyO2Nhc2UgRTpyZXR1cm4hKGUuYnl0ZUxlbmd0aCE9dC5ieXRlTGVuZ3RofHwhcyhuZXcgcmUoZSksbmV3IHJlKHQpKSk7Y2FzZSBjOmNhc2UgbDpjYXNlIHk6cmV0dXJuIEJlKCtlLCt0KTtjYXNlIGY6cmV0dXJuIGUubmFtZT09dC5uYW1lJiZlLm1lc3NhZ2U9PXQubWVzc2FnZTtjYXNlIF86Y2FzZSBQOnJldHVybiBlPT10K1wiXCI7Y2FzZSBoOnZhciBkPVc7Y2FzZSAkOnZhciBwPWEmbjtpZihkfHwoZD1xKSxlLnNpemUhPXQuc2l6ZSYmIXApcmV0dXJuITE7dmFyIGc9dS5nZXQoZSk7aWYoZylyZXR1cm4gZz09dDthfD1pLHUuc2V0KGUsdCk7dmFyIG09TmUoZChlKSxkKHQpLGEsbyxzLHUpO3JldHVybiB1LmRlbGV0ZShlKSxtO2Nhc2UgTzppZigkZSlyZXR1cm4gJGUuY2FsbChlKT09JGUuY2FsbCh0KX1yZXR1cm4hMX0oZSx0LG0scixhLG8sZCk7aWYoIShyJm4pKXt2YXIgdz14JiZRLmNhbGwoZSxcIl9fd3JhcHBlZF9fXCIpLFY9UyYmUS5jYWxsKHQsXCJfX3dyYXBwZWRfX1wiKTtpZih3fHxWKXt2YXIgTT13P2UudmFsdWUoKTplLGs9Vj90LnZhbHVlKCk6dDtyZXR1cm4gZHx8KGQ9bmV3IGplKSxvKE0sayxyLGEsZCl9fWlmKCFBKXJldHVybiExO3JldHVybiBkfHwoZD1uZXcgamUpLGZ1bmN0aW9uKGUsdCxyLGEsaSxvKXt2YXIgcz1yJm4sdT1JZShlKSxkPXUubGVuZ3RoLGM9SWUodCkubGVuZ3RoO2lmKGQhPWMmJiFzKXJldHVybiExO2Zvcih2YXIgbD1kO2wtLTspe3ZhciBmPXVbbF07aWYoIShzP2YgaW4gdDpRLmNhbGwodCxmKSkpcmV0dXJuITF9dmFyIHA9by5nZXQoZSk7aWYocCYmby5nZXQodCkpcmV0dXJuIHA9PXQ7dmFyIGc9ITA7by5zZXQoZSx0KSxvLnNldCh0LGUpO2Zvcih2YXIgaD1zOysrbDxkOyl7Zj11W2xdO3ZhciB5PWVbZl0sbT10W2ZdO2lmKGEpdmFyIHY9cz9hKG0seSxmLHQsZSxvKTphKHksbSxmLGUsdCxvKTtpZighKHZvaWQgMD09PXY/eT09PW18fGkoeSxtLHIsYSxvKTp2KSl7Zz0hMTticmVha31ofHwoaD1cImNvbnN0cnVjdG9yXCI9PWYpfWlmKGcmJiFoKXt2YXIgYj1lLmNvbnN0cnVjdG9yLF89dC5jb25zdHJ1Y3RvcjtiIT1fJiZcImNvbnN0cnVjdG9yXCJpbiBlJiZcImNvbnN0cnVjdG9yXCJpbiB0JiYhKFwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmIgaW5zdGFuY2VvZiBiJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBfJiZfIGluc3RhbmNlb2YgXykmJihnPSExKX1yZXR1cm4gby5kZWxldGUoZSksby5kZWxldGUodCksZ30oZSx0LHIsYSxvLGQpfShlLHQscixhLE1lLG8pKX1mdW5jdGlvbiBrZShlKXtyZXR1cm4hKCFHZShlKXx8KHQ9ZSxYJiZYIGluIHQpKSYmKENlKGUpP1o6UykudGVzdChxZShlKSk7dmFyIHR9ZnVuY3Rpb24gemUoZSl7aWYocj0odD1lKSYmdC5jb25zdHJ1Y3RvcixhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHImJnIucHJvdG90eXBlfHxLLHQhPT1hKXJldHVybiB1ZShlKTt2YXIgdCxyLGEsbj1bXTtmb3IodmFyIGkgaW4gT2JqZWN0KGUpKVEuY2FsbChlLGkpJiZcImNvbnN0cnVjdG9yXCIhPWkmJm4ucHVzaChpKTtyZXR1cm4gbn1mdW5jdGlvbiBOZShlLHQscixhLG8scyl7dmFyIHU9ciZuLGQ9ZS5sZW5ndGgsYz10Lmxlbmd0aDtpZihkIT1jJiYhKHUmJmM+ZCkpcmV0dXJuITE7dmFyIGw9cy5nZXQoZSk7aWYobCYmcy5nZXQodCkpcmV0dXJuIGw9PXQ7dmFyIGY9LTEscD0hMCxnPXImaT9uZXcgRWU6dm9pZCAwO2ZvcihzLnNldChlLHQpLHMuc2V0KHQsZSk7KytmPGQ7KXt2YXIgaD1lW2ZdLHk9dFtmXTtpZihhKXZhciBtPXU/YSh5LGgsZix0LGUscyk6YShoLHksZixlLHQscyk7aWYodm9pZCAwIT09bSl7aWYobSljb250aW51ZTtwPSExO2JyZWFrfWlmKGcpe2lmKCFEKHQsZnVuY3Rpb24oZSx0KXtpZihuPXQsIWcuaGFzKG4pJiYoaD09PWV8fG8oaCxlLHIsYSxzKSkpcmV0dXJuIGcucHVzaCh0KTt2YXIgbn0pKXtwPSExO2JyZWFrfX1lbHNlIGlmKGghPT15JiYhbyhoLHkscixhLHMpKXtwPSExO2JyZWFrfX1yZXR1cm4gcy5kZWxldGUoZSkscy5kZWxldGUodCkscH1mdW5jdGlvbiBJZShlKXtyZXR1cm4gZnVuY3Rpb24oZSx0LHIpe3ZhciBhPXQoZSk7cmV0dXJuIEZlKGUpP2E6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9LTEsYT10Lmxlbmd0aCxuPWUubGVuZ3RoOysrcjxhOyllW24rcl09dFtyXTtyZXR1cm4gZX0oYSxyKGUpKX0oZSxYZSxKZSl9ZnVuY3Rpb24gVGUoZSx0KXt2YXIgcixhLG49ZS5fX2RhdGFfXztyZXR1cm4oXCJzdHJpbmdcIj09KGE9dHlwZW9mKHI9dCkpfHxcIm51bWJlclwiPT1hfHxcInN5bWJvbFwiPT1hfHxcImJvb2xlYW5cIj09YT9cIl9fcHJvdG9fX1wiIT09cjpudWxsPT09cik/bltcInN0cmluZ1wiPT10eXBlb2YgdD9cInN0cmluZ1wiOlwiaGFzaFwiXTpuLm1hcH1mdW5jdGlvbiBVZShlLHQpe3ZhciByPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWU/dm9pZCAwOmVbdF19KGUsdCk7cmV0dXJuIGtlKHIpP3I6dm9pZCAwfVBlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189Z2U/Z2UobnVsbCk6e30sdGhpcy5zaXplPTB9LFBlLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5oYXMoZSkmJmRlbGV0ZSB0aGlzLl9fZGF0YV9fW2VdO3JldHVybiB0aGlzLnNpemUtPXQ/MTowLHR9LFBlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXztpZihnZSl7dmFyIHI9dFtlXTtyZXR1cm4gcj09PWE/dm9pZCAwOnJ9cmV0dXJuIFEuY2FsbCh0LGUpP3RbZV06dm9pZCAwfSxQZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX19kYXRhX187cmV0dXJuIGdlP3ZvaWQgMCE9PXRbZV06US5jYWxsKHQsZSl9LFBlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLl9fZGF0YV9fO3JldHVybiB0aGlzLnNpemUrPXRoaXMuaGFzKGUpPzA6MSxyW2VdPWdlJiZ2b2lkIDA9PT10P2E6dCx0aGlzfSxPZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfSxPZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX19kYXRhX18scj1BZSh0LGUpO3JldHVybiEocjwwfHwocj09dC5sZW5ndGgtMT90LnBvcCgpOm5lLmNhbGwodCxyLDEpLC0tdGhpcy5zaXplLDApKX0sT2UucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9fZGF0YV9fLHI9QWUodCxlKTtyZXR1cm4gcjwwP3ZvaWQgMDp0W3JdWzFdfSxPZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGUpe3JldHVybiBBZSh0aGlzLl9fZGF0YV9fLGUpPi0xfSxPZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5fX2RhdGFfXyxhPUFlKHIsZSk7cmV0dXJuIGE8MD8oKyt0aGlzLnNpemUsci5wdXNoKFtlLHRdKSk6clthXVsxXT10LHRoaXN9LHhlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2l6ZT0wLHRoaXMuX19kYXRhX189e2hhc2g6bmV3IFBlLG1hcDpuZXcoY2V8fE9lKSxzdHJpbmc6bmV3IFBlfX0seGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgdD1UZSh0aGlzLGUpLmRlbGV0ZShlKTtyZXR1cm4gdGhpcy5zaXplLT10PzE6MCx0fSx4ZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBUZSh0aGlzLGUpLmdldChlKX0seGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gVGUodGhpcyxlKS5oYXMoZSl9LHhlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSx0KXt2YXIgcj1UZSh0aGlzLGUpLGE9ci5zaXplO3JldHVybiByLnNldChlLHQpLHRoaXMuc2l6ZSs9ci5zaXplPT1hPzA6MSx0aGlzfSxFZS5wcm90b3R5cGUuYWRkPUVlLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldChlLGEpLHRoaXN9LEVlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGUpfSxqZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPW5ldyBPZSx0aGlzLnNpemU9MH0samUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9fZGF0YV9fLHI9dC5kZWxldGUoZSk7cmV0dXJuIHRoaXMuc2l6ZT10LnNpemUscn0samUucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoZSl9LGplLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGUpfSxqZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCl7dmFyIGE9dGhpcy5fX2RhdGFfXztpZihhIGluc3RhbmNlb2YgT2Upe3ZhciBuPWEuX19kYXRhX187aWYoIWNlfHxuLmxlbmd0aDxyLTEpcmV0dXJuIG4ucHVzaChbZSx0XSksdGhpcy5zaXplPSsrYS5zaXplLHRoaXM7YT10aGlzLl9fZGF0YV9fPW5ldyB4ZShuKX1yZXR1cm4gYS5zZXQoZSx0KSx0aGlzLnNpemU9YS5zaXplLHRoaXN9O3ZhciBKZT1vZT9mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9bXTooZT1PYmplY3QoZSksZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9LTEsYT1udWxsPT1lPzA6ZS5sZW5ndGgsbj0wLGk9W107KytyPGE7KXt2YXIgbz1lW3JdO3QobyxyLGUpJiYoaVtuKytdPW8pfXJldHVybiBpfShvZShlKSxmdW5jdGlvbih0KXtyZXR1cm4gYWUuY2FsbChlLHQpfSkpfTpmdW5jdGlvbigpe3JldHVybltdfSxEZT13ZTtmdW5jdGlvbiBXZShlLHQpe3JldHVybiEhKHQ9bnVsbD09dD9vOnQpJiYoXCJudW1iZXJcIj09dHlwZW9mIGV8fEEudGVzdChlKSkmJmU+LTEmJmUlMT09MCYmZTx0fWZ1bmN0aW9uIHFlKGUpe2lmKG51bGwhPWUpe3RyeXtyZXR1cm4gSC5jYWxsKGUpfWNhdGNoKGUpe310cnl7cmV0dXJuIGUrXCJcIn1jYXRjaChlKXt9fXJldHVyblwiXCJ9ZnVuY3Rpb24gQmUoZSx0KXtyZXR1cm4gZT09PXR8fGUhPWUmJnQhPXR9KGRlJiZEZShuZXcgZGUobmV3IEFycmF5QnVmZmVyKDEpKSkhPWp8fGNlJiZEZShuZXcgY2UpIT1ofHxsZSYmXCJbb2JqZWN0IFByb21pc2VdXCIhPURlKGxlLnJlc29sdmUoKSl8fGZlJiZEZShuZXcgZmUpIT0kfHxwZSYmXCJbb2JqZWN0IFdlYWtNYXBdXCIhPURlKG5ldyBwZSkpJiYoRGU9ZnVuY3Rpb24oZSl7dmFyIHQ9d2UoZSkscj10PT12P2UuY29uc3RydWN0b3I6dm9pZCAwLGE9cj9xZShyKTpcIlwiO2lmKGEpc3dpdGNoKGEpe2Nhc2UgaGU6cmV0dXJuIGo7Y2FzZSB5ZTpyZXR1cm4gaDtjYXNlIG1lOnJldHVyblwiW29iamVjdCBQcm9taXNlXVwiO2Nhc2UgdmU6cmV0dXJuICQ7Y2FzZSBiZTpyZXR1cm5cIltvYmplY3QgV2Vha01hcF1cIn1yZXR1cm4gdH0pO3ZhciBSZT1WZShmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpP1ZlOmZ1bmN0aW9uKGUpe3JldHVybiBIZShlKSYmUS5jYWxsKGUsXCJjYWxsZWVcIikmJiFhZS5jYWxsKGUsXCJjYWxsZWVcIil9LEZlPUFycmF5LmlzQXJyYXk7dmFyIExlPXNlfHxmdW5jdGlvbigpe3JldHVybiExfTtmdW5jdGlvbiBDZShlKXtpZighR2UoZSkpcmV0dXJuITE7dmFyIHQ9d2UoZSk7cmV0dXJuIHQ9PXB8fHQ9PWd8fHQ9PWR8fHQ9PWJ9ZnVuY3Rpb24gS2UoZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGUmJmU+LTEmJmUlMT09MCYmZTw9b31mdW5jdGlvbiBHZShlKXt2YXIgdD10eXBlb2YgZTtyZXR1cm4gbnVsbCE9ZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gSGUoZSl7cmV0dXJuIG51bGwhPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfXZhciBRZT1KP2Z1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19KEopOmZ1bmN0aW9uKGUpe3JldHVybiBIZShlKSYmS2UoZS5sZW5ndGgpJiYhIXdbd2UoZSldfTtmdW5jdGlvbiBYZShlKXtyZXR1cm4gbnVsbCE9KHQ9ZSkmJktlKHQubGVuZ3RoKSYmIUNlKHQpP1NlKGUpOnplKGUpO3ZhciB0fWUuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBNZShlLHQpfX0pLmNhbGwodGhpcyxyKDI0KShlKSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBhPXIoMTkpO3QuU3RyaW5nUHJlZGljYXRlPWEuU3RyaW5nUHJlZGljYXRlO2NvbnN0IG49cigyMSk7dC5OdW1iZXJQcmVkaWNhdGU9bi5OdW1iZXJQcmVkaWNhdGU7Y29uc3QgaT1yKDIyKTt0LkJvb2xlYW5QcmVkaWNhdGU9aS5Cb29sZWFuUHJlZGljYXRlO2NvbnN0IG89cigwKSxzPXIoMjMpO3QuQXJyYXlQcmVkaWNhdGU9cy5BcnJheVByZWRpY2F0ZTtjb25zdCB1PXIoMjUpO3QuT2JqZWN0UHJlZGljYXRlPXUuT2JqZWN0UHJlZGljYXRlO2NvbnN0IGQ9cigzMCk7dC5EYXRlUHJlZGljYXRlPWQuRGF0ZVByZWRpY2F0ZTtjb25zdCBjPXIoMzEpO3QuRXJyb3JQcmVkaWNhdGU9Yy5FcnJvclByZWRpY2F0ZTtjb25zdCBsPXIoMzIpO3QuTWFwUHJlZGljYXRlPWwuTWFwUHJlZGljYXRlO2NvbnN0IGY9cigzMyk7dC5XZWFrTWFwUHJlZGljYXRlPWYuV2Vha01hcFByZWRpY2F0ZTtjb25zdCBwPXIoMzQpO3QuU2V0UHJlZGljYXRlPXAuU2V0UHJlZGljYXRlO2NvbnN0IGc9cigzNSk7dC5XZWFrU2V0UHJlZGljYXRlPWcuV2Vha1NldFByZWRpY2F0ZTtjb25zdCBoPXIoMzYpO3QuQW55UHJlZGljYXRlPWguQW55UHJlZGljYXRlLHQuZGVmYXVsdD0oKGUsdCk9PihPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLHtzdHJpbmc6e2dldDooKT0+bmV3IGEuU3RyaW5nUHJlZGljYXRlKHQpfSxudW1iZXI6e2dldDooKT0+bmV3IG4uTnVtYmVyUHJlZGljYXRlKHQpfSxib29sZWFuOntnZXQ6KCk9Pm5ldyBpLkJvb2xlYW5QcmVkaWNhdGUodCl9LHVuZGVmaW5lZDp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJ1bmRlZmluZWRcIix0KX0sbnVsbDp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJudWxsXCIsdCl9LG51bGxPclVuZGVmaW5lZDp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJudWxsT3JVbmRlZmluZWRcIix0KX0sbmFuOntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIm5hblwiLHQpfSxzeW1ib2w6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwic3ltYm9sXCIsdCl9LGFycmF5OntnZXQ6KCk9Pm5ldyBzLkFycmF5UHJlZGljYXRlKHQpfSxvYmplY3Q6e2dldDooKT0+bmV3IHUuT2JqZWN0UHJlZGljYXRlKHQpfSxkYXRlOntnZXQ6KCk9Pm5ldyBkLkRhdGVQcmVkaWNhdGUodCl9LGVycm9yOntnZXQ6KCk9Pm5ldyBjLkVycm9yUHJlZGljYXRlKHQpfSxtYXA6e2dldDooKT0+bmV3IGwuTWFwUHJlZGljYXRlKHQpfSx3ZWFrTWFwOntnZXQ6KCk9Pm5ldyBmLldlYWtNYXBQcmVkaWNhdGUodCl9LHNldDp7Z2V0OigpPT5uZXcgcC5TZXRQcmVkaWNhdGUodCl9LHdlYWtTZXQ6e2dldDooKT0+bmV3IGcuV2Vha1NldFByZWRpY2F0ZSh0KX0sZnVuY3Rpb246e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiRnVuY3Rpb25cIix0KX0sYnVmZmVyOntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIkJ1ZmZlclwiLHQpfSxyZWdFeHA6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiUmVnRXhwXCIsdCl9LHByb21pc2U6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiUHJvbWlzZVwiLHQpfSx0eXBlZEFycmF5OntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIlR5cGVkQXJyYXlcIix0KX0saW50OEFycmF5OntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIkludDhBcnJheVwiLHQpfSx1aW50OEFycmF5OntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIlVpbnQ4QXJyYXlcIix0KX0sdWludDhDbGFtcGVkQXJyYXk6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiVWludDhDbGFtcGVkQXJyYXlcIix0KX0saW50MTZBcnJheTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJJbnQxNkFycmF5XCIsdCl9LHVpbnQxNkFycmF5OntnZXQ6KCk9Pm5ldyBvLlByZWRpY2F0ZShcIlVpbnQxNkFycmF5XCIsdCl9LGludDMyQXJyYXk6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiSW50MzJBcnJheVwiLHQpfSx1aW50MzJBcnJheTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJVaW50MzJBcnJheVwiLHQpfSxmbG9hdDMyQXJyYXk6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiRmxvYXQzMkFycmF5XCIsdCl9LGZsb2F0NjRBcnJheTp7Z2V0OigpPT5uZXcgby5QcmVkaWNhdGUoXCJGbG9hdDY0QXJyYXlcIix0KX0sYXJyYXlCdWZmZXI6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiQXJyYXlCdWZmZXJcIix0KX0sZGF0YVZpZXc6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiRGF0YVZpZXdcIix0KX0saXRlcmFibGU6e2dldDooKT0+bmV3IG8uUHJlZGljYXRlKFwiSXRlcmFibGVcIix0KX0sYW55Ont2YWx1ZTooLi4uZSk9Pm5ldyBoLkFueVByZWRpY2F0ZShlLHQpfX0pLGUpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDQpKTt0LmRlZmF1bHQ9KChlLHQpPT57dHJ5e2Zvcihjb25zdCByIG9mIGUpbi5kZWZhdWx0KHIsdCk7cmV0dXJuITB9Y2F0Y2goZSl7cmV0dXJuIGUubWVzc2FnZX19KX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3QuQXJndW1lbnRFcnJvcj1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUsdCl7c3VwZXIoZSksRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyx0KSx0aGlzLm5hbWU9XCJBcmd1bWVudEVycm9yXCJ9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGE9cigyKTt0LmRlZmF1bHQ9ZnVuY3Rpb24gZSh0LHIsbil7blthLnRlc3RTeW1ib2xdKHQsZSxyKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBhPSgpPT57Y29uc3QgZT1FcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT0oKGUsdCk9PnQpO2NvbnN0IHQ9KG5ldyBFcnJvcikuc3RhY2suc2xpY2UoMSk7cmV0dXJuIEVycm9yLnByZXBhcmVTdGFja1RyYWNlPWUsdH07ZS5leHBvcnRzPWEsZS5leHBvcnRzLmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDEyKSksaT1hKHIoMTQpKSxvPWEocigxNSkpLHM9L14uKj9cXCgoLio/KVssKV0vO3QuaW5mZXJMYWJlbD0oZT0+e2lmKCFvLmRlZmF1bHQpcmV0dXJuO2NvbnN0IHQ9bi5kZWZhdWx0KCkscj1lWzFdLGE9ci5nZXRGaWxlTmFtZSgpLHU9ci5nZXRMaW5lTnVtYmVyKCksZD1yLmdldENvbHVtbk51bWJlcigpO2lmKCFhfHxudWxsPT09dXx8bnVsbD09PWQpcmV0dXJuO2xldCBjPVtdO3RyeXtjPXQucmVhZEZpbGVTeW5jKGEsXCJ1dGY4XCIpLnNwbGl0KFwiXFxuXCIpfWNhdGNoKGUpe3JldHVybn1sZXQgbD1jW3UtMV07aWYoIWwpcmV0dXJuO2w9bC5zbGljZShkLTEpO2NvbnN0IGY9cy5leGVjKGwpO2lmKCFmfHwhZlsxXSlyZXR1cm47Y29uc3QgcD1mWzFdO3JldHVybiBpLmRlZmF1bHQocCl8fGkuZGVmYXVsdChwLnNwbGl0KFwiLlwiKS5wb3AoKSk/cDp2b2lkIDB9KX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDEzKSk7dC5kZWZhdWx0PSgoKT0+bi5kZWZhdWx0KFwiZnNcIikpfSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyxfX3dlYnBhY2tfcmVxdWlyZV9fKXtcInVzZSBzdHJpY3RcIjtsZXQgY3VzdG9tUmVxdWlyZTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt0cnl7Y3VzdG9tUmVxdWlyZT1cImZ1bmN0aW9uXCI9PT1nbG9iYWwuX19ub25fd2VicGFja19yZXF1aXJlX18/Z2xvYmFsLl9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fOmV2YWwoXCJyZXF1aXJlXCIpfWNhdGNoKGUpe2N1c3RvbVJlcXVpcmU9KCgpPT57fSl9ZXhwb3J0cy5kZWZhdWx0PWN1c3RvbVJlcXVpcmV9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBhPS9eW2EteiRfXVthLXokXzAtOV0qJC9pLG49bmV3IFNldChbXCJ1bmRlZmluZWRcIixcIm51bGxcIixcInRydWVcIixcImZhbHNlXCIsXCJzdXBlclwiLFwidGhpc1wiLFwiSW5maW5pdHlcIixcIk5hTlwiXSk7dC5kZWZhdWx0PShlPT5lJiYhbi5oYXMoZSkmJmEudGVzdChlKSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9Qm9vbGVhbihcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmcHJvY2Vzcy52ZXJzaW9ucyYmcHJvY2Vzcy52ZXJzaW9ucy5ub2RlKX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9cmVxdWlyZShcInVybFwiKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGE9cigwKTt0Lm5vdD0oZT0+e2NvbnN0IHQ9ZS5hZGRWYWxpZGF0b3I7cmV0dXJuIGUuYWRkVmFsaWRhdG9yPShyPT57Y29uc3Qgbj1yLnZhbGlkYXRvcixpPXIubWVzc2FnZTtyZXR1cm4gci5tZXNzYWdlPSgoZSx0KT0+YFtOT1RdICR7aShlLHQpfWApLHIudmFsaWRhdG9yPShlPT4hbihlKSksZVthLnZhbGlkYXRvclN5bWJvbF0ucHVzaChyKSxlLmFkZFZhbGlkYXRvcj10LGV9KSxlfSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBuPWEocig2KSk7dC5kZWZhdWx0PShlPT4oT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSx7b3B0aW9uYWw6e2dldDooKT0+bi5kZWZhdWx0KHt9LHtvcHRpb25hbDohMH0pfX0pLGUpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDIwKSksaT1yKDApO3QuU3RyaW5nUHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgaS5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJzdHJpbmdcIixlKX1sZW5ndGgoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGxlbmd0aCBcXGAke2V9XFxgLCBnb3QgXFxgJHt0fVxcYGAsdmFsaWRhdG9yOnQ9PnQubGVuZ3RoPT09ZX0pfW1pbkxlbmd0aChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYSBtaW5pbXVtIGxlbmd0aCBvZiBcXGAke2V9XFxgLCBnb3QgXFxgJHt0fVxcYGAsdmFsaWRhdG9yOnQ9PnQubGVuZ3RoPj1lfSl9bWF4TGVuZ3RoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhIG1heGltdW0gbGVuZ3RoIG9mIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3R9XFxgYCx2YWxpZGF0b3I6dD0+dC5sZW5ndGg8PWV9KX1tYXRjaGVzKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gbWF0Y2ggXFxgJHtlfVxcYCwgZ290IFxcYCR7dH1cXGBgLHZhbGlkYXRvcjp0PT5lLnRlc3QodCl9KX1zdGFydHNXaXRoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gc3RhcnQgd2l0aCBcXGAke2V9XFxgLCBnb3QgXFxgJHt0fVxcYGAsdmFsaWRhdG9yOnQ9PnQuc3RhcnRzV2l0aChlKX0pfWVuZHNXaXRoKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gZW5kIHdpdGggXFxgJHtlfVxcYCwgZ290IFxcYCR7dH1cXGBgLHZhbGlkYXRvcjp0PT50LmVuZHNXaXRoKGUpfSl9aW5jbHVkZXMoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBpbmNsdWRlIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3R9XFxgYCx2YWxpZGF0b3I6dD0+dC5pbmNsdWRlcyhlKX0pfW9uZU9mKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+e2xldCBhPUpTT04uc3RyaW5naWZ5KGUpO2lmKGUubGVuZ3RoPjEwKXtjb25zdCB0PWUubGVuZ3RoLTEwO2E9SlNPTi5zdHJpbmdpZnkoZS5zbGljZSgwLDEwKSkucmVwbGFjZSgvXSQvLGAs4oCmKyR7dH0gbW9yZV1gKX1yZXR1cm5gRXhwZWN0ZWQgJHtyfSB0byBiZSBvbmUgb2YgXFxgJHthfVxcYCwgZ290IFxcYCR7dH1cXGBgfSx2YWxpZGF0b3I6dD0+ZS5pbmNsdWRlcyh0KX0pfWdldCBlbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgZW1wdHksIGdvdCBcXGAke2V9XFxgYCx2YWxpZGF0b3I6ZT0+XCJcIj09PWV9KX1nZXQgbm9uRW1wdHkoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIG5vdCBiZSBlbXB0eWAsdmFsaWRhdG9yOmU9PlwiXCIhPT1lfSl9ZXF1YWxzKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgZXF1YWwgdG8gXFxgJHtlfVxcYCwgZ290IFxcYCR7dH1cXGBgLHZhbGlkYXRvcjp0PT50PT09ZX0pfWdldCBhbHBoYW51bWVyaWMoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGFscGhhbnVtZXJpYywgZ290IFxcYCR7ZX1cXGBgLHZhbGlkYXRvcjplPT4vXlthLXpcXGRdKyQvaS50ZXN0KGUpfSl9Z2V0IGFscGhhYmV0aWNhbCgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgYWxwaGFiZXRpY2FsLCBnb3QgXFxgJHtlfVxcYGAsdmFsaWRhdG9yOmU9Pi9eW2Etel0rJC9naS50ZXN0KGUpfSl9Z2V0IG51bWVyaWMoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIG51bWVyaWMsIGdvdCBcXGAke2V9XFxgYCx2YWxpZGF0b3I6ZT0+L14oXFwrfC0pP1xcZCskL2kudGVzdChlKX0pfWdldCBkYXRlKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBhIGRhdGUsIGdvdCBcXGAke2V9XFxgYCx2YWxpZGF0b3I6bi5kZWZhdWx0fSl9Z2V0IGxvd2VyY2FzZSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgbG93ZXJjYXNlLCBnb3QgXFxgJHtlfVxcYGAsdmFsaWRhdG9yOmU9PlwiXCIhPT1lLnRyaW0oKSYmZT09PWUudG9Mb3dlckNhc2UoKX0pfWdldCB1cHBlcmNhc2UoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIHVwcGVyY2FzZSwgZ290IFxcYCR7ZX1cXGBgLHZhbGlkYXRvcjplPT5cIlwiIT09ZS50cmltKCkmJmU9PT1lLnRvVXBwZXJDYXNlKCl9KX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiFpc05hTihEYXRlLnBhcnNlKGUpKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBuPWEocigxKSksaT1yKDApO3QuTnVtYmVyUHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgaS5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJudW1iZXJcIixlKX1pblJhbmdlKGUsdCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihyLGEpPT5gRXhwZWN0ZWQgJHthfSB0byBiZSBpbiByYW5nZSBbJHtlfS4uJHt0fV0sIGdvdCAke3J9YCx2YWxpZGF0b3I6cj0+bi5kZWZhdWx0LmluUmFuZ2UocixbZSx0XSl9KX1ncmVhdGVyVGhhbihlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGdyZWF0ZXIgdGhhbiAke2V9LCBnb3QgJHt0fWAsdmFsaWRhdG9yOnQ9PnQ+ZX0pfWdyZWF0ZXJUaGFuT3JFcXVhbChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAke2V9LCBnb3QgJHt0fWAsdmFsaWRhdG9yOnQ9PnQ+PWV9KX1sZXNzVGhhbihlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGxlc3MgdGhhbiAke2V9LCBnb3QgJHt0fWAsdmFsaWRhdG9yOnQ9PnQ8ZX0pfWxlc3NUaGFuT3JFcXVhbChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke2V9LCBnb3QgJHt0fWAsdmFsaWRhdG9yOnQ9PnQ8PWV9KX1lcXVhbChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGVxdWFsIHRvICR7ZX0sIGdvdCAke3R9YCx2YWxpZGF0b3I6dD0+dD09PWV9KX1nZXQgaW50ZWdlcigpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgYW4gaW50ZWdlciwgZ290ICR7ZX1gLHZhbGlkYXRvcjplPT5uLmRlZmF1bHQuaW50ZWdlcihlKX0pfWdldCBmaW5pdGUoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGZpbml0ZSwgZ290ICR7ZX1gLHZhbGlkYXRvcjplPT4hbi5kZWZhdWx0LmluZmluaXRlKGUpfSl9Z2V0IGluZmluaXRlKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBpbmZpbml0ZSwgZ290ICR7ZX1gLHZhbGlkYXRvcjplPT5uLmRlZmF1bHQuaW5maW5pdGUoZSl9KX1nZXQgcG9zaXRpdmUoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIHBvc2l0aXZlLCBnb3QgJHtlfWAsdmFsaWRhdG9yOmU9PmU+MH0pfWdldCBuZWdhdGl2ZSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgbmVnYXRpdmUsIGdvdCAke2V9YCx2YWxpZGF0b3I6ZT0+ZTwwfSl9Z2V0IGludGVnZXJPckluZmluaXRlKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBhbiBpbnRlZ2VyIG9yIGluZmluaXRlLCBnb3QgJHtlfWAsdmFsaWRhdG9yOmU9Pm4uZGVmYXVsdC5pbnRlZ2VyKGUpfHxuLmRlZmF1bHQuaW5maW5pdGUoZSl9KX1nZXQgdWludDgoKXtyZXR1cm4gdGhpcy5pbnRlZ2VyLmluUmFuZ2UoMCwyNTUpfWdldCB1aW50MTYoKXtyZXR1cm4gdGhpcy5pbnRlZ2VyLmluUmFuZ2UoMCw2NTUzNSl9Z2V0IHVpbnQzMigpe3JldHVybiB0aGlzLmludGVnZXIuaW5SYW5nZSgwLDQyOTQ5NjcyOTUpfWdldCBpbnQ4KCl7cmV0dXJuIHRoaXMuaW50ZWdlci5pblJhbmdlKC0xMjgsMTI3KX1nZXQgaW50MTYoKXtyZXR1cm4gdGhpcy5pbnRlZ2VyLmluUmFuZ2UoLTMyNzY4LDMyNzY3KX1nZXQgaW50MzIoKXtyZXR1cm4gdGhpcy5pbnRlZ2VyLmluUmFuZ2UoLTIxNDc0ODM2NDgsMjE0NzQ4MzY0Nyl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGE9cigwKTt0LkJvb2xlYW5QcmVkaWNhdGU9Y2xhc3MgZXh0ZW5kcyBhLlByZWRpY2F0ZXtjb25zdHJ1Y3RvcihlKXtzdXBlcihcImJvb2xlYW5cIixlKX1nZXQgdHJ1ZSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgdHJ1ZSwgZ290ICR7ZX1gLHZhbGlkYXRvcjplPT4hMD09PWV9KX1nZXQgZmFsc2UoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIGJlIGZhbHNlLCBnb3QgJHtlfWAsdmFsaWRhdG9yOmU9PiExPT09ZX0pfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBuPWEocig1KSksaT1hKHIoNCkpLG89cigwKTt0LkFycmF5UHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgby5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJhcnJheVwiLGUpfWxlbmd0aChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgbGVuZ3RoIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3QubGVuZ3RofVxcYGAsdmFsaWRhdG9yOnQ9PnQubGVuZ3RoPT09ZX0pfW1pbkxlbmd0aChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYSBtaW5pbXVtIGxlbmd0aCBvZiBcXGAke2V9XFxgLCBnb3QgXFxgJHt0Lmxlbmd0aH1cXGBgLHZhbGlkYXRvcjp0PT50Lmxlbmd0aD49ZX0pfW1heExlbmd0aChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYSBtYXhpbXVtIGxlbmd0aCBvZiBcXGAke2V9XFxgLCBnb3QgXFxgJHt0Lmxlbmd0aH1cXGBgLHZhbGlkYXRvcjp0PT50Lmxlbmd0aDw9ZX0pfXN0YXJ0c1dpdGgoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBzdGFydCB3aXRoIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3RbMF19XFxgYCx2YWxpZGF0b3I6dD0+dFswXT09PWV9KX1lbmRzV2l0aChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGVuZCB3aXRoIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3RbdC5sZW5ndGgtMV19XFxgYCx2YWxpZGF0b3I6dD0+dFt0Lmxlbmd0aC0xXT09PWV9KX1pbmNsdWRlcyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGluY2x1ZGUgYWxsIGVsZW1lbnRzIG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgLCBnb3QgXFxgJHtKU09OLnN0cmluZ2lmeSh0KX1cXGBgLHZhbGlkYXRvcjp0PT5lLmV2ZXJ5KGU9Pi0xIT09dC5pbmRleE9mKGUpKX0pfWluY2x1ZGVzQW55KC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaW5jbHVkZSBhbnkgZWxlbWVudCBvZiBcXGAke0pTT04uc3RyaW5naWZ5KGUpfVxcYCwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkodCl9XFxgYCx2YWxpZGF0b3I6dD0+ZS5zb21lKGU9Pi0xIT09dC5pbmRleE9mKGUpKX0pfWdldCBlbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgZW1wdHksIGdvdCBcXGAke0pTT04uc3RyaW5naWZ5KGUpfVxcYGAsdmFsaWRhdG9yOmU9PjA9PT1lLmxlbmd0aH0pfWdldCBub25FbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gbm90IGJlIGVtcHR5YCx2YWxpZGF0b3I6ZT0+ZS5sZW5ndGg+MH0pfWRlZXBFcXVhbChlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGJlIGRlZXBseSBlcXVhbCB0byBcXGAke0pTT04uc3RyaW5naWZ5KGUpfVxcYCwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkodCl9XFxgYCx2YWxpZGF0b3I6dD0+bi5kZWZhdWx0KHQsZSl9KX1vZlR5cGUoZSl7bGV0IHQ7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHIpPT5gKCR7cn0pICR7dH1gLHZhbGlkYXRvcjpyPT57dHJ5e2Zvcihjb25zdCB0IG9mIHIpaS5kZWZhdWx0KHQsZSk7cmV0dXJuITB9Y2F0Y2goZSl7cmV0dXJuIHQ9ZS5tZXNzYWdlLCExfX19KX19fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZS53ZWJwYWNrUG9seWZpbGx8fChlLmRlcHJlY2F0ZT1mdW5jdGlvbigpe30sZS5wYXRocz1bXSxlLmNoaWxkcmVufHwoZS5jaGlsZHJlbj1bXSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJsb2FkZWRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5sfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiaWRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5pfX0pLGUud2VicGFja1BvbHlmaWxsPTEpLGV9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbj1hKHIoMSkpLGk9YShyKDI2KSksbz1hKHIoNSkpLHM9cigwKSx1PWEocigzKSksZD1hKHIoNykpLGM9YShyKDI4KSksbD1yKDI5KTt0Lk9iamVjdFByZWRpY2F0ZT1jbGFzcyBleHRlbmRzIHMuUHJlZGljYXRle2NvbnN0cnVjdG9yKGUpe3N1cGVyKFwib2JqZWN0XCIsZSl9Z2V0IHBsYWluKCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBhIHBsYWluIG9iamVjdGAsdmFsaWRhdG9yOmU9Pm4uZGVmYXVsdC5wbGFpbk9iamVjdChlKX0pfWdldCBlbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gYmUgZW1wdHksIGdvdCBcXGAke0pTT04uc3RyaW5naWZ5KGUpfVxcYGAsdmFsaWRhdG9yOmU9PjA9PT1PYmplY3Qua2V5cyhlKS5sZW5ndGh9KX1nZXQgbm9uRW1wdHkoKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCk9PmBFeHBlY3RlZCAke3R9IHRvIG5vdCBiZSBlbXB0eWAsdmFsaWRhdG9yOmU9Pk9iamVjdC5rZXlzKGUpLmxlbmd0aD4wfSl9dmFsdWVzT2ZUeXBlKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gKCR7dH0pICR7cn1gLHZhbGlkYXRvcjp0PT57Y29uc3Qgcj1PYmplY3Qua2V5cyh0KS5tYXAoZT0+dFtlXSk7cmV0dXJuIGQuZGVmYXVsdChyLGUpfX0pfWRlZXBWYWx1ZXNPZlR5cGUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmAoJHt0fSkgJHtyfWAsdmFsaWRhdG9yOnQ9PmMuZGVmYXVsdCh0LGUpfSl9ZGVlcEVxdWFsKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gYmUgZGVlcGx5IGVxdWFsIHRvIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgLCBnb3QgXFxgJHtKU09OLnN0cmluZ2lmeSh0KX1cXGBgLHZhbGlkYXRvcjp0PT5vLmRlZmF1bHQodCxlKX0pfWluc3RhbmNlT2YoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT57bGV0IGE9dC5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiBhJiZcIk9iamVjdFwiIT09YXx8KGE9SlNPTi5zdHJpbmdpZnkodCkpLGBFeHBlY3RlZCAke3J9IFxcYCR7YX1cXGAgdG8gYmUgb2YgdHlwZSBcXGAke2UubmFtZX1cXGBgfSx2YWxpZGF0b3I6dD0+dCBpbnN0YW5jZW9mIGV9KX1oYXNLZXlzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gRXhwZWN0ZWQgJHt0fSB0byBoYXZlIGtleXMgXFxgJHtKU09OLnN0cmluZ2lmeShyKX1cXGBgLHZhbGlkYXRvcjp0PT51LmRlZmF1bHQoe2hhczplPT5pLmRlZmF1bHQuaGFzKHQsZSl9LGUpfSl9aGFzQW55S2V5cyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYW55IGtleSBvZiBcXGAke0pTT04uc3RyaW5naWZ5KGUpfVxcYGAsdmFsaWRhdG9yOnQ9PmUuc29tZShlPT5pLmRlZmF1bHQuaGFzKHQsZSkpfSl9cGFydGlhbFNoYXBlKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gJHtyLnJlcGxhY2UoXCJFeHBlY3RlZFwiLFwiRXhwZWN0ZWQgcHJvcGVydHlcIil9IGluICR7dH1gLHZhbGlkYXRvcjp0PT5sLnBhcnRpYWwodCxlKX0pfWV4YWN0U2hhcGUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmAke3IucmVwbGFjZShcIkV4cGVjdGVkXCIsXCJFeHBlY3RlZCBwcm9wZXJ0eVwiKX0gaW4gJHt0fWAsdmFsaWRhdG9yOnQ9PmwuZXhhY3QodCxlKX0pfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBhPXIoMjcpO2Z1bmN0aW9uIG4oZSl7Y29uc3QgdD1lLnNwbGl0KFwiLlwiKSxyPVtdO2ZvcihsZXQgZT0wO2U8dC5sZW5ndGg7ZSsrKXtsZXQgYT10W2VdO2Zvcig7XCJcXFxcXCI9PT1hW2EubGVuZ3RoLTFdJiZ2b2lkIDAhPT10W2UrMV07KWE9YS5zbGljZSgwLC0xKStcIi5cIixhKz10WysrZV07ci5wdXNoKGEpfXJldHVybiByfWUuZXhwb3J0cz17Z2V0KGUsdCxyKXtpZighYShlKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHZvaWQgMD09PXI/ZTpyO2NvbnN0IGk9bih0KTtmb3IobGV0IHQ9MDt0PGkubGVuZ3RoO3QrKyl7aWYoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLGlbdF0pKXJldHVybiByO2lmKG51bGw9PShlPWVbaVt0XV0pKXtpZih0IT09aS5sZW5ndGgtMSlyZXR1cm4gcjticmVha319cmV0dXJuIGV9LHNldChlLHQscil7aWYoIWEoZSl8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiBlO2NvbnN0IGk9ZSxvPW4odCk7Zm9yKGxldCB0PTA7dDxvLmxlbmd0aDt0Kyspe2NvbnN0IG49b1t0XTthKGVbbl0pfHwoZVtuXT17fSksdD09PW8ubGVuZ3RoLTEmJihlW25dPXIpLGU9ZVtuXX1yZXR1cm4gaX0sZGVsZXRlKGUsdCl7aWYoIWEoZSl8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybjtjb25zdCByPW4odCk7Zm9yKGxldCB0PTA7dDxyLmxlbmd0aDt0Kyspe2NvbnN0IG49clt0XTtpZih0PT09ci5sZW5ndGgtMSlyZXR1cm4gdm9pZCBkZWxldGUgZVtuXTtpZihlPWVbbl0sIWEoZSkpcmV0dXJufX0saGFzKGUsdCl7aWYoIWEoZSl8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiExO2NvbnN0IHI9bih0KTtmb3IobGV0IHQ9MDt0PHIubGVuZ3RoO3QrKyl7aWYoIWEoZSkpcmV0dXJuITE7aWYoIShyW3RdaW4gZSkpcmV0dXJuITE7ZT1lW3JbdF1dfXJldHVybiEwfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9dHlwZW9mIGU7cmV0dXJuIG51bGwhPT1lJiYoXCJvYmplY3RcIj09PXR8fFwiZnVuY3Rpb25cIj09PXQpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDEpKSxpPWEocig0KSksbz0oZSx0KT0+bi5kZWZhdWx0LnBsYWluT2JqZWN0KGUpP09iamVjdC5rZXlzKGUpLmV2ZXJ5KHI9Pm8oZVtyXSx0KSk6KGkuZGVmYXVsdChlLHQpLCEwKTt0LmRlZmF1bHQ9KChlLHQpPT57dHJ5e3JldHVybiBvKGUsdCl9Y2F0Y2goZSl7cmV0dXJuIGUubWVzc2FnZX19KX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDEpKSxpPWEocig5KSksbz1yKDIpO3QucGFydGlhbD1mdW5jdGlvbiBlKHQscixhKXt0cnl7Zm9yKGNvbnN0IHMgb2YgT2JqZWN0LmtleXMocikpe2NvbnN0IHU9YT9gJHthfS4ke3N9YDpzO2lmKG8uaXNQcmVkaWNhdGUocltzXSkpaS5kZWZhdWx0KHRbc10sdSxyW3NdKTtlbHNlIGlmKG4uZGVmYXVsdC5wbGFpbk9iamVjdChyW3NdKSl7Y29uc3QgYT1lKHRbc10scltzXSx1KTtpZighMCE9PWEpcmV0dXJuIGF9fXJldHVybiEwfWNhdGNoKGUpe3JldHVybiBlLm1lc3NhZ2V9fSx0LmV4YWN0PWZ1bmN0aW9uIGUodCxyLGEpe3RyeXtjb25zdCBzPW5ldyBTZXQoT2JqZWN0LmtleXModCkpO2Zvcihjb25zdCB1IG9mIE9iamVjdC5rZXlzKHIpKXtzLmRlbGV0ZSh1KTtjb25zdCBkPWE/YCR7YX0uJHt1fWA6dTtpZihvLmlzUHJlZGljYXRlKHJbdV0pKWkuZGVmYXVsdCh0W3VdLGQsclt1XSk7ZWxzZSBpZihuLmRlZmF1bHQucGxhaW5PYmplY3Qoclt1XSkpe2NvbnN0IGE9ZSh0W3VdLHJbdV0sZCk7aWYoITAhPT1hKXJldHVybiBhfX1pZihzLnNpemU+MCl7Y29uc3QgZT1BcnJheS5mcm9tKHMua2V5cygpKVswXTtyZXR1cm5gRGlkIG5vdCBleHBlY3QgcHJvcGVydHkgXFxgJHthP2Ake2F9LiR7ZX1gOmV9XFxgIHRvIGV4aXN0LCBnb3QgXFxgJHt0W2VdfVxcYGB9cmV0dXJuITB9Y2F0Y2goZSl7cmV0dXJuIGUubWVzc2FnZX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgYT1yKDApO3QuRGF0ZVByZWRpY2F0ZT1jbGFzcyBleHRlbmRzIGEuUHJlZGljYXRle2NvbnN0cnVjdG9yKGUpe3N1cGVyKFwiZGF0ZVwiLGUpfWJlZm9yZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9ICR7dC50b0lTT1N0cmluZygpfSB0byBiZSBiZWZvcmUgJHtlLnRvSVNPU3RyaW5nKCl9YCx2YWxpZGF0b3I6dD0+dC5nZXRUaW1lKCk8ZS5nZXRUaW1lKCl9KX1hZnRlcihlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9ICR7dC50b0lTT1N0cmluZygpfSB0byBiZSBhZnRlciAke2UudG9JU09TdHJpbmcoKX1gLHZhbGlkYXRvcjp0PT50LmdldFRpbWUoKT5lLmdldFRpbWUoKX0pfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBhPXIoMCk7dC5FcnJvclByZWRpY2F0ZT1jbGFzcyBleHRlbmRzIGEuUHJlZGljYXRle2NvbnN0cnVjdG9yKGUpe3N1cGVyKFwiZXJyb3JcIixlKX1uYW1lKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBuYW1lIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3QubmFtZX1cXGBgLHZhbGlkYXRvcjp0PT50Lm5hbWU9PT1lfSl9bWVzc2FnZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IG1lc3NhZ2UgdG8gYmUgXFxgJHtlfVxcYCwgZ290IFxcYCR7dC5tZXNzYWdlfVxcYGAsdmFsaWRhdG9yOnQ9PnQubWVzc2FnZT09PWV9KX1tZXNzYWdlSW5jbHVkZXMoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSBtZXNzYWdlIHRvIGluY2x1ZGUgXFxgJHtlfVxcYCwgZ290IFxcYCR7dC5tZXNzYWdlfVxcYGAsdmFsaWRhdG9yOnQ9PnQubWVzc2FnZS5pbmNsdWRlcyhlKX0pfWhhc0tleXMoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSBtZXNzYWdlIHRvIGhhdmUga2V5cyBcXGAke2Uuam9pbihcImAsIGBcIil9XFxgYCx2YWxpZGF0b3I6dD0+ZS5ldmVyeShlPT50Lmhhc093blByb3BlcnR5KGUpKX0pfWluc3RhbmNlT2YoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSBcXGAke3QubmFtZX1cXGAgdG8gYmUgb2YgdHlwZSBcXGAke2UubmFtZX1cXGBgLHZhbGlkYXRvcjp0PT50IGluc3RhbmNlb2YgZX0pfWdldCB0eXBlRXJyb3IoKXtyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKFR5cGVFcnJvcil9Z2V0IGV2YWxFcnJvcigpe3JldHVybiB0aGlzLmluc3RhbmNlT2YoRXZhbEVycm9yKX1nZXQgcmFuZ2VFcnJvcigpe3JldHVybiB0aGlzLmluc3RhbmNlT2YoUmFuZ2VFcnJvcil9Z2V0IHJlZmVyZW5jZUVycm9yKCl7cmV0dXJuIHRoaXMuaW5zdGFuY2VPZihSZWZlcmVuY2VFcnJvcil9Z2V0IHN5bnRheEVycm9yKCl7cmV0dXJuIHRoaXMuaW5zdGFuY2VPZihTeW50YXhFcnJvcil9Z2V0IHVyaUVycm9yKCl7cmV0dXJuIHRoaXMuaW5zdGFuY2VPZihVUklFcnJvcil9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49YShyKDUpKSxpPXIoMCksbz1hKHIoMykpLHM9YShyKDcpKTt0Lk1hcFByZWRpY2F0ZT1jbGFzcyBleHRlbmRzIGkuUHJlZGljYXRle2NvbnN0cnVjdG9yKGUpe3N1cGVyKFwiTWFwXCIsZSl9c2l6ZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgc2l6ZSBcXGAke2V9XFxgLCBnb3QgXFxgJHt0LnNpemV9XFxgYCx2YWxpZGF0b3I6dD0+dC5zaXplPT09ZX0pfW1pblNpemUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGEgbWluaW11bSBzaXplIG9mIFxcYCR7ZX1cXGAsIGdvdCBcXGAke3Quc2l6ZX1cXGBgLHZhbGlkYXRvcjp0PT50LnNpemU+PWV9KX1tYXhTaXplKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhIG1heGltdW0gc2l6ZSBvZiBcXGAke2V9XFxgLCBnb3QgXFxgJHt0LnNpemV9XFxgYCx2YWxpZGF0b3I6dD0+dC5zaXplPD1lfSl9aGFzS2V5cyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YEV4cGVjdGVkICR7dH0gdG8gaGF2ZSBrZXlzIFxcYCR7SlNPTi5zdHJpbmdpZnkocil9XFxgYCx2YWxpZGF0b3I6dD0+by5kZWZhdWx0KHQsZSl9KX1oYXNBbnlLZXlzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhbnkga2V5IG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6dD0+ZS5zb21lKGU9PnQuaGFzKGUpKX0pfWhhc1ZhbHVlcyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YEV4cGVjdGVkICR7dH0gdG8gaGF2ZSB2YWx1ZXMgXFxgJHtKU09OLnN0cmluZ2lmeShyKX1cXGBgLHZhbGlkYXRvcjp0PT5vLmRlZmF1bHQobmV3IFNldCh0LnZhbHVlcygpKSxlKX0pfWhhc0FueVZhbHVlcyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYW55IHZhbHVlIG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6dD0+e2NvbnN0IHI9bmV3IFNldCh0LnZhbHVlcygpKTtyZXR1cm4gZS5zb21lKGU9PnIuaGFzKGUpKX19KX1rZXlzT2ZUeXBlKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gKCR7dH0pICR7cn1gLHZhbGlkYXRvcjp0PT5zLmRlZmF1bHQodC5rZXlzKCksZSl9KX12YWx1ZXNPZlR5cGUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmAoJHt0fSkgJHtyfWAsdmFsaWRhdG9yOnQ9PnMuZGVmYXVsdCh0LnZhbHVlcygpLGUpfSl9Z2V0IGVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBlbXB0eSwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShlKSl9XFxgYCx2YWxpZGF0b3I6ZT0+MD09PWUuc2l6ZX0pfWdldCBub25FbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gbm90IGJlIGVtcHR5YCx2YWxpZGF0b3I6ZT0+ZS5zaXplPjB9KX1kZWVwRXF1YWwoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBiZSBkZWVwbHkgZXF1YWwgdG8gXFxgJHtKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGUpKX1cXGAsIGdvdCBcXGAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odCkpfVxcYGAsdmFsaWRhdG9yOnQ9Pm4uZGVmYXVsdCh0LGUpfSl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49cigwKSxpPWEocigzKSk7dC5XZWFrTWFwUHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgbi5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJXZWFrTWFwXCIsZSl9aGFzS2V5cyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YEV4cGVjdGVkICR7dH0gdG8gaGF2ZSBrZXlzIFxcYCR7SlNPTi5zdHJpbmdpZnkocil9XFxgYCx2YWxpZGF0b3I6dD0+aS5kZWZhdWx0KHQsZSl9KX1oYXNBbnlLZXlzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhbnkga2V5IG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6dD0+ZS5zb21lKGU9PnQuaGFzKGUpKX0pfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBuPWEocig1KSksaT1yKDApLG89YShyKDMpKSxzPWEocig3KSk7dC5TZXRQcmVkaWNhdGU9Y2xhc3MgZXh0ZW5kcyBpLlByZWRpY2F0ZXtjb25zdHJ1Y3RvcihlKXtzdXBlcihcIlNldFwiLGUpfXNpemUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIHNpemUgXFxgJHtlfVxcYCwgZ290IFxcYCR7dC5zaXplfVxcYGAsdmFsaWRhdG9yOnQ9PnQuc2l6ZT09PWV9KX1taW5TaXplKGUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhIG1pbmltdW0gc2l6ZSBvZiBcXGAke2V9XFxgLCBnb3QgXFxgJHt0LnNpemV9XFxgYCx2YWxpZGF0b3I6dD0+dC5zaXplPj1lfSl9bWF4U2l6ZShlKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KHQscik9PmBFeHBlY3RlZCAke3J9IHRvIGhhdmUgYSBtYXhpbXVtIHNpemUgb2YgXFxgJHtlfVxcYCwgZ290IFxcYCR7dC5zaXplfVxcYGAsdmFsaWRhdG9yOnQ9PnQuc2l6ZTw9ZX0pfWhhcyguLi5lKXtyZXR1cm4gdGhpcy5hZGRWYWxpZGF0b3Ioe21lc3NhZ2U6KGUsdCxyKT0+YEV4cGVjdGVkICR7dH0gdG8gaGF2ZSBpdGVtcyBcXGAke0pTT04uc3RyaW5naWZ5KHIpfVxcYGAsdmFsaWRhdG9yOnQ9Pm8uZGVmYXVsdCh0LGUpfSl9aGFzQW55KC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZToodCxyKT0+YEV4cGVjdGVkICR7cn0gdG8gaGF2ZSBhbnkgaXRlbSBvZiBcXGAke0pTT04uc3RyaW5naWZ5KGUpfVxcYGAsdmFsaWRhdG9yOnQ9PmUuc29tZShlPT50LmhhcyhlKSl9KX1vZlR5cGUoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQscik9PmAoJHt0fSkgJHtyfWAsdmFsaWRhdG9yOnQ9PnMuZGVmYXVsdCh0LGUpfSl9Z2V0IGVtcHR5KCl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOihlLHQpPT5gRXhwZWN0ZWQgJHt0fSB0byBiZSBlbXB0eSwgZ290IFxcYCR7SlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShlKSl9XFxgYCx2YWxpZGF0b3I6ZT0+MD09PWUuc2l6ZX0pfWdldCBub25FbXB0eSgpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0KT0+YEV4cGVjdGVkICR7dH0gdG8gbm90IGJlIGVtcHR5YCx2YWxpZGF0b3I6ZT0+ZS5zaXplPjB9KX1kZWVwRXF1YWwoZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBiZSBkZWVwbHkgZXF1YWwgdG8gXFxgJHtKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGUpKX1cXGAsIGdvdCBcXGAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odCkpfVxcYGAsdmFsaWRhdG9yOnQ9Pm4uZGVmYXVsdCh0LGUpfSl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49cigwKSxpPWEocigzKSk7dC5XZWFrU2V0UHJlZGljYXRlPWNsYXNzIGV4dGVuZHMgbi5QcmVkaWNhdGV7Y29uc3RydWN0b3IoZSl7c3VwZXIoXCJXZWFrU2V0XCIsZSl9aGFzKC4uLmUpe3JldHVybiB0aGlzLmFkZFZhbGlkYXRvcih7bWVzc2FnZTooZSx0LHIpPT5gRXhwZWN0ZWQgJHt0fSB0byBoYXZlIGl0ZW1zIFxcYCR7SlNPTi5zdHJpbmdpZnkocil9XFxgYCx2YWxpZGF0b3I6dD0+aS5kZWZhdWx0KHQsZSl9KX1oYXNBbnkoLi4uZSl7cmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yKHttZXNzYWdlOih0LHIpPT5gRXhwZWN0ZWQgJHtyfSB0byBoYXZlIGFueSBpdGVtIG9mIFxcYCR7SlNPTi5zdHJpbmdpZnkoZSl9XFxgYCx2YWxpZGF0b3I6dD0+ZS5zb21lKGU9PnQuaGFzKGUpKX0pfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBhPXIoOCksbj1yKDIpO3QuQW55UHJlZGljYXRlPWNsYXNze2NvbnN0cnVjdG9yKGUsdD17fSl7dGhpcy5wcmVkaWNhdGVzPWUsdGhpcy5vcHRpb25zPXR9W24udGVzdFN5bWJvbF0oZSx0LHIpe2NvbnN0IG49W1wiQW55IHByZWRpY2F0ZSBmYWlsZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yczpcIl07Zm9yKGNvbnN0IGEgb2YgdGhpcy5wcmVkaWNhdGVzKXRyeXtyZXR1cm4gdm9pZCB0KGUscixhKX1jYXRjaCh0KXtpZih2b2lkIDA9PT1lJiYhMD09PXRoaXMub3B0aW9ucy5vcHRpb25hbClyZXR1cm47bi5wdXNoKGAtICR7dC5tZXNzYWdlfWApfXRocm93IG5ldyBhLkFyZ3VtZW50RXJyb3Iobi5qb2luKFwiXFxuXCIpLHQpfX19XSk7Y29uc3QgX19leHBvcnRfXz1tb2R1bGUuZXhwb3J0cy5kZWZhdWx0O21vZHVsZS5leHBvcnRzPV9fZXhwb3J0X18sbW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1fX2V4cG9ydF9fO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qISBodHRwczovL210aHMuYmUvcHVueWNvZGUgdjEuNC4xIGJ5IEBtYXRoaWFzICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGVzICovXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiZcblx0XHQhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0IW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChcblx0XHRmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsXG5cdCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBgcHVueWNvZGVgIG9iamVjdC5cblx0ICogQG5hbWUgcHVueWNvZGVcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqL1xuXHR2YXIgcHVueWNvZGUsXG5cblx0LyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuXHRtYXhJbnQgPSAyMTQ3NDgzNjQ3LCAvLyBha2EuIDB4N0ZGRkZGRkYgb3IgMl4zMS0xXG5cblx0LyoqIEJvb3RzdHJpbmcgcGFyYW1ldGVycyAqL1xuXHRiYXNlID0gMzYsXG5cdHRNaW4gPSAxLFxuXHR0TWF4ID0gMjYsXG5cdHNrZXcgPSAzOCxcblx0ZGFtcCA9IDcwMCxcblx0aW5pdGlhbEJpYXMgPSA3Mixcblx0aW5pdGlhbE4gPSAxMjgsIC8vIDB4ODBcblx0ZGVsaW1pdGVyID0gJy0nLCAvLyAnXFx4MkQnXG5cblx0LyoqIFJlZ3VsYXIgZXhwcmVzc2lvbnMgKi9cblx0cmVnZXhQdW55Y29kZSA9IC9eeG4tLS8sXG5cdHJlZ2V4Tm9uQVNDSUkgPSAvW15cXHgyMC1cXHg3RV0vLCAvLyB1bnByaW50YWJsZSBBU0NJSSBjaGFycyArIG5vbi1BU0NJSSBjaGFyc1xuXHRyZWdleFNlcGFyYXRvcnMgPSAvW1xceDJFXFx1MzAwMlxcdUZGMEVcXHVGRjYxXS9nLCAvLyBSRkMgMzQ5MCBzZXBhcmF0b3JzXG5cblx0LyoqIEVycm9yIG1lc3NhZ2VzICovXG5cdGVycm9ycyA9IHtcblx0XHQnb3ZlcmZsb3cnOiAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnLFxuXHRcdCdub3QtYmFzaWMnOiAnSWxsZWdhbCBpbnB1dCA+PSAweDgwIChub3QgYSBiYXNpYyBjb2RlIHBvaW50KScsXG5cdFx0J2ludmFsaWQtaW5wdXQnOiAnSW52YWxpZCBpbnB1dCdcblx0fSxcblxuXHQvKiogQ29udmVuaWVuY2Ugc2hvcnRjdXRzICovXG5cdGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbixcblx0Zmxvb3IgPSBNYXRoLmZsb29yLFxuXHRzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLFxuXG5cdC8qKiBUZW1wb3JhcnkgdmFyaWFibGUgKi9cblx0a2V5O1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgZXJyb3IgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhyb3dzIGEgYFJhbmdlRXJyb3JgIHdpdGggdGhlIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZS5cblx0ICovXG5cdGZ1bmN0aW9uIGVycm9yKHR5cGUpIHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM0OTIjc2VjdGlvbi0zLjRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGFkYXB0KGRlbHRhLCBudW1Qb2ludHMsIGZpcnN0VGltZSkge1xuXHRcdHZhciBrID0gMDtcblx0XHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRcdGRlbHRhICs9IGZsb29yKGRlbHRhIC8gbnVtUG9pbnRzKTtcblx0XHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuXHQgKiBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0XHQvLyBEb24ndCB1c2UgVUNTLTJcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICBvdXQsXG5cdFx0ICAgIGkgPSAwLFxuXHRcdCAgICBuID0gaW5pdGlhbE4sXG5cdFx0ICAgIGJpYXMgPSBpbml0aWFsQmlhcyxcblx0XHQgICAgYmFzaWMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIGluZGV4LFxuXHRcdCAgICBvbGRpLFxuXHRcdCAgICB3LFxuXHRcdCAgICBrLFxuXHRcdCAgICBkaWdpdCxcblx0XHQgICAgdCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGJhc2VNaW51c1Q7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzOiBsZXQgYGJhc2ljYCBiZSB0aGUgbnVtYmVyIG9mIGlucHV0IGNvZGVcblx0XHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHRcdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdFx0YmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRcdGlmIChiYXNpYyA8IDApIHtcblx0XHRcdGJhc2ljID0gMDtcblx0XHR9XG5cblx0XHRmb3IgKGogPSAwOyBqIDwgYmFzaWM7ICsraikge1xuXHRcdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRcdGVycm9yKCdub3QtYmFzaWMnKTtcblx0XHRcdH1cblx0XHRcdG91dHB1dC5wdXNoKGlucHV0LmNoYXJDb2RlQXQoaikpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0XHQvLyBwb2ludHMgd2VyZSBjb3BpZWQ7IHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb3RoZXJ3aXNlLlxuXG5cdFx0Zm9yIChpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdFx0Ly8gRGVjb2RlIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIgaW50byBgZGVsdGFgLFxuXHRcdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0XHQvLyB2YWx1ZSBhdCB0aGUgZW5kIHRvIG9idGFpbiBgZGVsdGFgLlxuXHRcdFx0Zm9yIChvbGRpID0gaSwgdyA9IDEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXG5cdFx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPj0gYmFzZSB8fCBkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHRcdH1cblxuXHRcdFx0b3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdFx0aSAlPSBvdXQ7XG5cblx0XHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXRcblx0XHRcdG91dHB1dC5zcGxpY2UoaSsrLCAwLCBuKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKG91dHB1dCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcblx0ICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG5cdFx0dmFyIG4sXG5cdFx0ICAgIGRlbHRhLFxuXHRcdCAgICBoYW5kbGVkQ1BDb3VudCxcblx0XHQgICAgYmFzaWNMZW5ndGgsXG5cdFx0ICAgIGJpYXMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIG0sXG5cdFx0ICAgIHEsXG5cdFx0ICAgIGssXG5cdFx0ICAgIHQsXG5cdFx0ICAgIGN1cnJlbnRWYWx1ZSxcblx0XHQgICAgb3V0cHV0ID0gW10sXG5cdFx0ICAgIC8qKiBgaW5wdXRMZW5ndGhgIHdpbGwgaG9sZCB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIGluIGBpbnB1dGAuICovXG5cdFx0ICAgIGlucHV0TGVuZ3RoLFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgaGFuZGxlZENQQ291bnRQbHVzT25lLFxuXHRcdCAgICBiYXNlTWludXNULFxuXHRcdCAgICBxTWludXNUO1xuXG5cdFx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gVW5pY29kZVxuXHRcdGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cblx0XHQvLyBDYWNoZSB0aGUgbGVuZ3RoXG5cdFx0aW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZVxuXHRcdG4gPSBpbml0aWFsTjtcblx0XHRkZWx0YSA9IDA7XG5cdFx0YmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50c1xuXHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShjdXJyZW50VmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblxuXHRcdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHRcdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHRcdC8vIEZpbmlzaCB0aGUgYmFzaWMgc3RyaW5nIC0gaWYgaXQgaXMgbm90IGVtcHR5IC0gd2l0aCBhIGRlbGltaXRlclxuXHRcdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGVuY29kaW5nIGxvb3A6XG5cdFx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdFx0Ly8gbGFyZ2VyIG9uZTpcblx0XHRcdGZvciAobSA9IG1heEludCwgaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3dcblx0XHRcdGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRcdGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuXHRcdFx0biA9IG07XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyXG5cdFx0XHRcdFx0Zm9yIChxID0gZGVsdGEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRcdGJpYXMgPSBhZGFwdChkZWx0YSwgaGFuZGxlZENQQ291bnRQbHVzT25lLCBoYW5kbGVkQ1BDb3VudCA9PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHRcdCsraGFuZGxlZENQQ291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0KytkZWx0YTtcblx0XHRcdCsrbjtcblxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3Ncblx0ICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuXHQgKiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCBvbiBhIHN0cmluZyB0aGF0IGhhcyBhbHJlYWR5IGJlZW5cblx0ICogY29udmVydGVkIHRvIFVuaWNvZGUuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlZCBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIGNvbnZlcnQgdG8gVW5pY29kZS5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG5cdCAqIHN0cmluZy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvVW5pY29kZShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4UHVueWNvZGUudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG5cdCAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuXHQgKiBBU0NJSS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG5cdCAqIFVuaWNvZGUgc3RyaW5nLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG5cdCAqIGVtYWlsIGFkZHJlc3MuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FTQ0lJKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhOb25BU0NJSS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cblx0cHVueWNvZGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdCd2ZXJzaW9uJzogJzEuNC4xJyxcblx0XHQvKipcblx0XHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHRcdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdFx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgT2JqZWN0XG5cdFx0ICovXG5cdFx0J3VjczInOiB7XG5cdFx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHRcdCdlbmNvZGUnOiB1Y3MyZW5jb2RlXG5cdFx0fSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHRcdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcblx0fTtcblxuXHQvKiogRXhwb3NlIGBwdW55Y29kZWAgKi9cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoJ3B1bnljb2RlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcHVueWNvZGU7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuXHRcdGlmIChtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cykge1xuXHRcdFx0Ly8gaW4gTm9kZS5qcywgaW8uanMsIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gcHVueWNvZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKGtleSBpbiBwdW55Y29kZSkge1xuXHRcdFx0XHRwdW55Y29kZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gcHVueWNvZGVba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LnB1bnljb2RlID0gcHVueWNvZGU7XG5cdH1cblxufSh0aGlzKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2RlZmF1bHQnOiAnUkZDMzk4NicsXG4gICAgZm9ybWF0dGVyczoge1xuICAgICAgICBSRkMxNzM4OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgfSxcbiAgICAgICAgUkZDMzk4NjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFJGQzE3Mzg6ICdSRkMxNzM4JyxcbiAgICBSRkMzOTg2OiAnUkZDMzk4Nidcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0czogZm9ybWF0cyxcbiAgICBwYXJzZTogcGFyc2UsXG4gICAgc3RyaW5naWZ5OiBzdHJpbmdpZnlcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGFsbG93UHJvdG90eXBlczogZmFsc2UsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGNvbW1hOiBmYWxzZSxcbiAgICBkZWNvZGVyOiB1dGlscy5kZWNvZGUsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgaWdub3JlUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogZmFsc2UsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDAsXG4gICAgcGFyc2VBcnJheXM6IHRydWUsXG4gICAgcGxhaW5PYmplY3RzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiMoXFxkKyk7L2csIGZ1bmN0aW9uICgkMCwgbnVtYmVyU3RyKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KG51bWJlclN0ciwgMTApKTtcbiAgICB9KTtcbn07XG5cbi8vIFRoaXMgaXMgd2hhdCBicm93c2VycyB3aWxsIHN1Ym1pdCB3aGVuIHRoZSDinJMgY2hhcmFjdGVyIG9jY3VycyBpbiBhblxuLy8gYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIGJvZHkgYW5kIHRoZSBlbmNvZGluZyBvZiB0aGUgcGFnZSBjb250YWluaW5nXG4vLyB0aGUgZm9ybSBpcyBpc28tODg1OS0xLCBvciB3aGVuIHRoZSBzdWJtaXR0ZWQgZm9ybSBoYXMgYW4gYWNjZXB0LWNoYXJzZXRcbi8vIGF0dHJpYnV0ZSBvZiBpc28tODg1OS0xLiBQcmVzdW1hYmx5IGFsc28gd2l0aCBvdGhlciBjaGFyc2V0cyB0aGF0IGRvIG5vdCBjb250YWluXG4vLyB0aGUg4pyTIGNoYXJhY3Rlciwgc3VjaCBhcyB1cy1hc2NpaS5cbnZhciBpc29TZW50aW5lbCA9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCcmIzEwMDAzOycpXG5cbi8vIFRoZXNlIGFyZSB0aGUgcGVyY2VudC1lbmNvZGVkIHV0Zi04IG9jdGV0cyByZXByZXNlbnRpbmcgYSBjaGVja21hcmssIGluZGljYXRpbmcgdGhhdCB0aGUgcmVxdWVzdCBhY3R1YWxseSBpcyB1dGYtOCBlbmNvZGVkLlxudmFyIGNoYXJzZXRTZW50aW5lbCA9ICd1dGY4PSVFMiU5QyU5Myc7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgn4pyTJylcblxudmFyIHBhcnNlVmFsdWVzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ1ZhbHVlcyhzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIGNsZWFuU3RyID0gb3B0aW9ucy5pZ25vcmVRdWVyeVByZWZpeCA/IHN0ci5yZXBsYWNlKC9eXFw/LywgJycpIDogc3RyO1xuICAgIHZhciBsaW1pdCA9IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdDtcbiAgICB2YXIgcGFydHMgPSBjbGVhblN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgbGltaXQpO1xuICAgIHZhciBza2lwSW5kZXggPSAtMTsgLy8gS2VlcCB0cmFjayBvZiB3aGVyZSB0aGUgdXRmOCBzZW50aW5lbCB3YXMgZm91bmRcbiAgICB2YXIgaTtcblxuICAgIHZhciBjaGFyc2V0ID0gb3B0aW9ucy5jaGFyc2V0O1xuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXS5pbmRleE9mKCd1dGY4PScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzW2ldID09PSBjaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0c1tpXSA9PT0gaXNvU2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICdpc28tODg1OS0xJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2tpcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBpID0gcGFydHMubGVuZ3RoOyAvLyBUaGUgZXNsaW50IHNldHRpbmdzIGRvIG5vdCBhbGxvdyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoaSA9PT0gc2tpcEluZGV4KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuXG4gICAgICAgIHZhciBicmFja2V0RXF1YWxzUG9zID0gcGFydC5pbmRleE9mKCddPScpO1xuICAgICAgICB2YXIgcG9zID0gYnJhY2tldEVxdWFsc1BvcyA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IGJyYWNrZXRFcXVhbHNQb3MgKyAxO1xuXG4gICAgICAgIHZhciBrZXksIHZhbDtcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nID8gbnVsbCA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UoMCwgcG9zKSwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZShwb3MgKyAxKSwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIG9wdGlvbnMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzICYmIGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAgICAgdmFsID0gaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzKHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIG9wdGlvbnMuY29tbWEgJiYgdmFsLmluZGV4T2YoJywnKSA+IC0xKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc3BsaXQoJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdXRpbHMuY29tYmluZShvYmpba2V5XSwgdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBwYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zKSB7XG4gICAgdmFyIGxlYWYgPSB2YWw7XG5cbiAgICBmb3IgKHZhciBpID0gY2hhaW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgdmFyIHJvb3QgPSBjaGFpbltpXTtcblxuICAgICAgICBpZiAocm9vdCA9PT0gJ1tdJyAmJiBvcHRpb25zLnBhcnNlQXJyYXlzKSB7XG4gICAgICAgICAgICBvYmogPSBbXS5jb25jYXQobGVhZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICAgICAgICAgIHZhciBjbGVhblJvb3QgPSByb290LmNoYXJBdCgwKSA9PT0gJ1snICYmIHJvb3QuY2hhckF0KHJvb3QubGVuZ3RoIC0gMSkgPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgLTEpIDogcm9vdDtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnBhcnNlQXJyYXlzICYmIGNsZWFuUm9vdCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB7IDA6IGxlYWYgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgIWlzTmFOKGluZGV4KVxuICAgICAgICAgICAgICAgICYmIHJvb3QgIT09IGNsZWFuUm9vdFxuICAgICAgICAgICAgICAgICYmIFN0cmluZyhpbmRleCkgPT09IGNsZWFuUm9vdFxuICAgICAgICAgICAgICAgICYmIGluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAmJiAob3B0aW9ucy5wYXJzZUFycmF5cyAmJiBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgICAgICBvYmpbaW5kZXhdID0gbGVhZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBsZWFmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGVhZiA9IG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVhZjtcbn07XG5cbnZhciBwYXJzZUtleXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nS2V5cyhnaXZlbktleSwgdmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKCFnaXZlbktleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRvdCBub3RhdGlvbiB0byBicmFja2V0IG5vdGF0aW9uXG4gICAgdmFyIGtleSA9IG9wdGlvbnMuYWxsb3dEb3RzID8gZ2l2ZW5LZXkucmVwbGFjZSgvXFwuKFteLltdKykvZywgJ1skMV0nKSA6IGdpdmVuS2V5O1xuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIGJyYWNrZXRzID0gLyhcXFtbXltcXF1dKl0pLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teW1xcXV0qXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IGJyYWNrZXRzLmV4ZWMoa2V5KTtcbiAgICB2YXIgcGFyZW50ID0gc2VnbWVudCA/IGtleS5zbGljZSgwLCBzZWdtZW50LmluZGV4KSA6IGtleTtcblxuICAgIC8vIFN0YXNoIHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzXG5cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IHVzaW5nIHBsYWluIG9iamVjdHMsIG9wdGlvbmFsbHkgcHJlZml4IGtleXMgdGhhdCB3b3VsZCBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgcGFyZW50KSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGtleXMucHVzaChwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICgoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNlZ21lbnRbMV0uc2xpY2UoMSwgLTEpKSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucyk7XG59O1xuXG52YXIgbm9ybWFsaXplUGFyc2VPcHRpb25zID0gZnVuY3Rpb24gbm9ybWFsaXplUGFyc2VPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmRlY29kZXIgIT09IG51bGwgJiYgb3B0cy5kZWNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZGVjb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdEZWNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5jaGFyc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmNoYXJzZXQgIT09ICd1dGYtOCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB2YXIgY2hhcnNldCA9IHR5cGVvZiBvcHRzLmNoYXJzZXQgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuY2hhcnNldCA6IG9wdHMuY2hhcnNldDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGFsbG93UHJvdG90eXBlczogdHlwZW9mIG9wdHMuYWxsb3dQcm90b3R5cGVzID09PSAnYm9vbGVhbicgPyBvcHRzLmFsbG93UHJvdG90eXBlcyA6IGRlZmF1bHRzLmFsbG93UHJvdG90eXBlcyxcbiAgICAgICAgYXJyYXlMaW1pdDogdHlwZW9mIG9wdHMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLmFycmF5TGltaXQgOiBkZWZhdWx0cy5hcnJheUxpbWl0LFxuICAgICAgICBjaGFyc2V0OiBjaGFyc2V0LFxuICAgICAgICBjaGFyc2V0U2VudGluZWw6IHR5cGVvZiBvcHRzLmNoYXJzZXRTZW50aW5lbCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5jaGFyc2V0U2VudGluZWwgOiBkZWZhdWx0cy5jaGFyc2V0U2VudGluZWwsXG4gICAgICAgIGNvbW1hOiB0eXBlb2Ygb3B0cy5jb21tYSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5jb21tYSA6IGRlZmF1bHRzLmNvbW1hLFxuICAgICAgICBkZWNvZGVyOiB0eXBlb2Ygb3B0cy5kZWNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5kZWNvZGVyIDogZGVmYXVsdHMuZGVjb2RlcixcbiAgICAgICAgZGVsaW1pdGVyOiB0eXBlb2Ygb3B0cy5kZWxpbWl0ZXIgPT09ICdzdHJpbmcnIHx8IHV0aWxzLmlzUmVnRXhwKG9wdHMuZGVsaW1pdGVyKSA/IG9wdHMuZGVsaW1pdGVyIDogZGVmYXVsdHMuZGVsaW1pdGVyLFxuICAgICAgICBkZXB0aDogdHlwZW9mIG9wdHMuZGVwdGggPT09ICdudW1iZXInID8gb3B0cy5kZXB0aCA6IGRlZmF1bHRzLmRlcHRoLFxuICAgICAgICBpZ25vcmVRdWVyeVByZWZpeDogb3B0cy5pZ25vcmVRdWVyeVByZWZpeCA9PT0gdHJ1ZSxcbiAgICAgICAgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzOiB0eXBlb2Ygb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgPT09ICdib29sZWFuJyA/IG9wdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzIDogZGVmYXVsdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzLFxuICAgICAgICBwYXJhbWV0ZXJMaW1pdDogdHlwZW9mIG9wdHMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0cy5wYXJhbWV0ZXJMaW1pdCA6IGRlZmF1bHRzLnBhcmFtZXRlckxpbWl0LFxuICAgICAgICBwYXJzZUFycmF5czogb3B0cy5wYXJzZUFycmF5cyAhPT0gZmFsc2UsXG4gICAgICAgIHBsYWluT2JqZWN0czogdHlwZW9mIG9wdHMucGxhaW5PYmplY3RzID09PSAnYm9vbGVhbicgPyBvcHRzLnBsYWluT2JqZWN0cyA6IGRlZmF1bHRzLnBsYWluT2JqZWN0cyxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgb3B0cykge1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplUGFyc2VPcHRpb25zKG9wdHMpO1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHwgc3RyID09PSBudWxsIHx8IHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gcGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IHBhcnNlS2V5cyhrZXksIHRlbXBPYmpba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIG9iaiA9IHV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuY29tcGFjdChvYmopO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIHB1c2hUb0FycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWVPckFycmF5KSB7XG4gICAgcHVzaC5hcHBseShhcnIsIGlzQXJyYXkodmFsdWVPckFycmF5KSA/IHZhbHVlT3JBcnJheSA6IFt2YWx1ZU9yQXJyYXldKTtcbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWRkUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGVuY29kZTogdHJ1ZSxcbiAgICBlbmNvZGVyOiB1dGlscy5lbmNvZGUsXG4gICAgZW5jb2RlVmFsdWVzT25seTogZmFsc2UsXG4gICAgZm9ybWF0dGVyOiBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0c1snZGVmYXVsdCddXSxcbiAgICAvLyBkZXByZWNhdGVkXG4gICAgaW5kaWNlczogZmFsc2UsXG4gICAgc2VyaWFsaXplRGF0ZTogZnVuY3Rpb24gc2VyaWFsaXplRGF0ZShkYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiB0b0lTTy5jYWxsKGRhdGUpO1xuICAgIH0sXG4gICAgc2tpcE51bGxzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgIG9iamVjdCxcbiAgICBwcmVmaXgsXG4gICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgc2tpcE51bGxzLFxuICAgIGVuY29kZXIsXG4gICAgZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgYWxsb3dEb3RzLFxuICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgZm9ybWF0dGVyLFxuICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgY2hhcnNldFxuKSB7XG4gICAgdmFyIG9iaiA9IG9iamVjdDtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBzZXJpYWxpemVEYXRlKG9iaik7XG4gICAgfSBlbHNlIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmogPSBvYmouam9pbignLCcpO1xuICAgIH1cblxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIgJiYgIWVuY29kZVZhbHVlc09ubHkgPyBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IHV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgaWYgKGVuY29kZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IGVuY29kZVZhbHVlc09ubHkgPyBwcmVmaXggOiBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCk7XG4gICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAnPScgKyBmb3JtYXR0ZXIoZW5jb2RlcihvYmosIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChpc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIG9iaktleXMgPSBzb3J0ID8ga2V5cy5zb3J0KHNvcnQpIDoga2V5cztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKHNraXBOdWxscyAmJiBvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2Z1bmN0aW9uJyA/IGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpIDogcHJlZml4LFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgICAgIGNoYXJzZXRcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaFRvQXJyYXkodmFsdWVzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ICsgKGFsbG93RG90cyA/ICcuJyArIGtleSA6ICdbJyArIGtleSArICddJyksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxudmFyIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmVuY29kZXIgIT09IG51bGwgJiYgb3B0cy5lbmNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZW5jb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBjaGFyc2V0ID0gb3B0cy5jaGFyc2V0IHx8IGRlZmF1bHRzLmNoYXJzZXQ7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZvcm1hdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKCFoYXMuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsIG9wdHMuZm9ybWF0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBmb3JtYXQgb3B0aW9uIHByb3ZpZGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdCA9IG9wdHMuZm9ybWF0O1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cbiAgICB2YXIgZmlsdGVyID0gZGVmYXVsdHMuZmlsdGVyO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgaXNBcnJheShvcHRzLmZpbHRlcikpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0cy5maWx0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUXVlcnlQcmVmaXg6IHR5cGVvZiBvcHRzLmFkZFF1ZXJ5UHJlZml4ID09PSAnYm9vbGVhbicgPyBvcHRzLmFkZFF1ZXJ5UHJlZml4IDogZGVmYXVsdHMuYWRkUXVlcnlQcmVmaXgsXG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgZGVsaW1pdGVyOiB0eXBlb2Ygb3B0cy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuZGVsaW1pdGVyIDogb3B0cy5kZWxpbWl0ZXIsXG4gICAgICAgIGVuY29kZTogdHlwZW9mIG9wdHMuZW5jb2RlID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZSA6IGRlZmF1bHRzLmVuY29kZSxcbiAgICAgICAgZW5jb2RlcjogdHlwZW9mIG9wdHMuZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZW5jb2RlciA6IGRlZmF1bHRzLmVuY29kZXIsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHR5cGVvZiBvcHRzLmVuY29kZVZhbHVlc09ubHkgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlVmFsdWVzT25seSA6IGRlZmF1bHRzLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdHRlcixcbiAgICAgICAgc2VyaWFsaXplRGF0ZTogdHlwZW9mIG9wdHMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgIHNraXBOdWxsczogdHlwZW9mIG9wdHMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRzLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscyxcbiAgICAgICAgc29ydDogdHlwZW9mIG9wdHMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc29ydCA6IG51bGwsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKTtcblxuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRzICYmIG9wdHMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0cy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgJ2luZGljZXMnIGluIG9wdHMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9BcnJheShrZXlzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2tpcE51bGxzLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGUgPyBvcHRpb25zLmVuY29kZXIgOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQsXG4gICAgICAgICAgICBvcHRpb25zLmFsbG93RG90cyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBrZXlzLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICAgIHZhciBwcmVmaXggPSBvcHRpb25zLmFkZFF1ZXJ5UHJlZml4ID09PSB0cnVlID8gJz8nIDogJyc7XG5cbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxudmFyIGNvbXBhY3RRdWV1ZSA9IGZ1bmN0aW9uIGNvbXBhY3RRdWV1ZShxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmoubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtqXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ub2JqW2l0ZW0ucHJvcF0gPSBjb21wYWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIGFycmF5VG9PYmplY3Qoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKChvcHRpb25zICYmIChvcHRpb25zLnBsYWluT2JqZWN0cyB8fCBvcHRpb25zLmFsbG93UHJvdG90eXBlcykpIHx8ICFoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiAhaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gdGFyZ2V0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJdGVtICYmIHR5cGVvZiB0YXJnZXRJdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBtZXJnZSh0YXJnZXRJdGVtLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ25TaW5nbGVTb3VyY2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5cbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyLCBkZWNvZGVyLCBjaGFyc2V0KSB7XG4gICAgdmFyIHN0cldpdGhvdXRQbHVzID0gc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgLy8gdW5lc2NhcGUgbmV2ZXIgdGhyb3dzLCBubyB0cnkuLi5jYXRjaCBuZWVkZWQ6XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cy5yZXBsYWNlKC8lWzAtOWEtZl17Mn0vZ2ksIHVuZXNjYXBlKTtcbiAgICB9XG4gICAgLy8gdXRmLThcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cldpdGhvdXRQbHVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cztcbiAgICB9XG59O1xuXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHN0ciwgZGVmYXVsdEVuY29kZXIsIGNoYXJzZXQpIHtcbiAgICAvLyBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgd3JpdHRlbiBieSBCcmlhbiBXaGl0ZSAobXNjZGV4KSBmb3IgdGhlIGlvLmpzIGNvcmUgcXVlcnlzdHJpbmcgbGlicmFyeS5cbiAgICAvLyBJdCBoYXMgYmVlbiBhZGFwdGVkIGhlcmUgZm9yIHN0cmljdGVyIGFkaGVyZW5jZSB0byBSRkMgMzk4NlxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyIDogU3RyaW5nKHN0cik7XG5cbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGUoc3RyaW5nKS5yZXBsYWNlKC8ldVswLTlhLWZdezR9L2dpLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJTI2JTIzJyArIHBhcnNlSW50KCQwLnNsaWNlKDIpLCAxNikgKyAnJTNCJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYyA9PT0gMHgyRCAvLyAtXG4gICAgICAgICAgICB8fCBjID09PSAweDJFIC8vIC5cbiAgICAgICAgICAgIHx8IGMgPT09IDB4NUYgLy8gX1xuICAgICAgICAgICAgfHwgYyA9PT0gMHg3RSAvLyB+XG4gICAgICAgICAgICB8fCAoYyA+PSAweDMwICYmIGMgPD0gMHgzOSkgLy8gMC05XG4gICAgICAgICAgICB8fCAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgLy8gYS16XG4gICAgICAgICAgICB8fCAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgLy8gQS1aXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gY29tcGFjdCh2YWx1ZSkge1xuICAgIHZhciBxdWV1ZSA9IFt7IG9iajogeyBvOiB2YWx1ZSB9LCBwcm9wOiAnbycgfV07XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZVtpXTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiByZWZzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgb2JqOiBvYmosIHByb3A6IGtleSB9KTtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhY3RRdWV1ZShxdWV1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgaXNSZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG5cbnZhciBjb21iaW5lID0gZnVuY3Rpb24gY29tYmluZShhLCBiKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhLCBiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5VG9PYmplY3Q6IGFycmF5VG9PYmplY3QsXG4gICAgYXNzaWduOiBhc3NpZ24sXG4gICAgY29tYmluZTogY29tYmluZSxcbiAgICBjb21wYWN0OiBjb21wYWN0LFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gICAgbWVyZ2U6IG1lcmdlXG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZXhwb3J0cy5wYXJzZSA9IHVybFBhcnNlO1xuZXhwb3J0cy5yZXNvbHZlID0gdXJsUmVzb2x2ZTtcbmV4cG9ydHMucmVzb2x2ZU9iamVjdCA9IHVybFJlc29sdmVPYmplY3Q7XG5leHBvcnRzLmZvcm1hdCA9IHVybEZvcm1hdDtcblxuZXhwb3J0cy5VcmwgPSBVcmw7XG5cbmZ1bmN0aW9uIFVybCgpIHtcbiAgdGhpcy5wcm90b2NvbCA9IG51bGw7XG4gIHRoaXMuc2xhc2hlcyA9IG51bGw7XG4gIHRoaXMuYXV0aCA9IG51bGw7XG4gIHRoaXMuaG9zdCA9IG51bGw7XG4gIHRoaXMucG9ydCA9IG51bGw7XG4gIHRoaXMuaG9zdG5hbWUgPSBudWxsO1xuICB0aGlzLmhhc2ggPSBudWxsO1xuICB0aGlzLnNlYXJjaCA9IG51bGw7XG4gIHRoaXMucXVlcnkgPSBudWxsO1xuICB0aGlzLnBhdGhuYW1lID0gbnVsbDtcbiAgdGhpcy5wYXRoID0gbnVsbDtcbiAgdGhpcy5ocmVmID0gbnVsbDtcbn1cblxuLy8gUmVmZXJlbmNlOiBSRkMgMzk4NiwgUkZDIDE4MDgsIFJGQyAyMzk2XG5cbi8vIGRlZmluZSB0aGVzZSBoZXJlIHNvIGF0IGxlYXN0IHRoZXkgb25seSBoYXZlIHRvIGJlXG4vLyBjb21waWxlZCBvbmNlIG9uIHRoZSBmaXJzdCBtb2R1bGUgbG9hZC5cbnZhciBwcm90b2NvbFBhdHRlcm4gPSAvXihbYS16MC05ListXSs6KS9pLFxuICAgIHBvcnRQYXR0ZXJuID0gLzpbMC05XSokLyxcblxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgYSBzaW1wbGUgcGF0aCBVUkxcbiAgICBzaW1wbGVQYXRoUGF0dGVybiA9IC9eKFxcL1xcLz8oPyFcXC8pW15cXD9cXHNdKikoXFw/W15cXHNdKik/JC8sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyByZXNlcnZlZCBmb3IgZGVsaW1pdGluZyBVUkxzLlxuICAgIC8vIFdlIGFjdHVhbGx5IGp1c3QgYXV0by1lc2NhcGUgdGhlc2UuXG4gICAgZGVsaW1zID0gWyc8JywgJz4nLCAnXCInLCAnYCcsICcgJywgJ1xccicsICdcXG4nLCAnXFx0J10sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyBub3QgYWxsb3dlZCBmb3IgdmFyaW91cyByZWFzb25zLlxuICAgIHVud2lzZSA9IFsneycsICd9JywgJ3wnLCAnXFxcXCcsICdeJywgJ2AnXS5jb25jYXQoZGVsaW1zKSxcblxuICAgIC8vIEFsbG93ZWQgYnkgUkZDcywgYnV0IGNhdXNlIG9mIFhTUyBhdHRhY2tzLiAgQWx3YXlzIGVzY2FwZSB0aGVzZS5cbiAgICBhdXRvRXNjYXBlID0gWydcXCcnXS5jb25jYXQodW53aXNlKSxcbiAgICAvLyBDaGFyYWN0ZXJzIHRoYXQgYXJlIG5ldmVyIGV2ZXIgYWxsb3dlZCBpbiBhIGhvc3RuYW1lLlxuICAgIC8vIE5vdGUgdGhhdCBhbnkgaW52YWxpZCBjaGFycyBhcmUgYWxzbyBoYW5kbGVkLCBidXQgdGhlc2VcbiAgICAvLyBhcmUgdGhlIG9uZXMgdGhhdCBhcmUgKmV4cGVjdGVkKiB0byBiZSBzZWVuLCBzbyB3ZSBmYXN0LXBhdGhcbiAgICAvLyB0aGVtLlxuICAgIG5vbkhvc3RDaGFycyA9IFsnJScsICcvJywgJz8nLCAnOycsICcjJ10uY29uY2F0KGF1dG9Fc2NhcGUpLFxuICAgIGhvc3RFbmRpbmdDaGFycyA9IFsnLycsICc/JywgJyMnXSxcbiAgICBob3N0bmFtZU1heExlbiA9IDI1NSxcbiAgICBob3N0bmFtZVBhcnRQYXR0ZXJuID0gL15bK2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oWythLXowLTlBLVpfLV17MCw2M30pKC4qKSQvLFxuICAgIC8vIHByb3RvY29scyB0aGF0IGNhbiBhbGxvdyBcInVuc2FmZVwiIGFuZCBcInVud2lzZVwiIGNoYXJzLlxuICAgIHVuc2FmZVByb3RvY29sID0ge1xuICAgICAgJ2phdmFzY3JpcHQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxuICAgIH0sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgbmV2ZXIgaGF2ZSBhIGhvc3RuYW1lLlxuICAgIGhvc3RsZXNzUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBhbHdheXMgY29udGFpbiBhIC8vIGJpdC5cbiAgICBzbGFzaGVkUHJvdG9jb2wgPSB7XG4gICAgICAnaHR0cCc6IHRydWUsXG4gICAgICAnaHR0cHMnOiB0cnVlLFxuICAgICAgJ2Z0cCc6IHRydWUsXG4gICAgICAnZ29waGVyJzogdHJ1ZSxcbiAgICAgICdmaWxlJzogdHJ1ZSxcbiAgICAgICdodHRwOic6IHRydWUsXG4gICAgICAnaHR0cHM6JzogdHJ1ZSxcbiAgICAgICdmdHA6JzogdHJ1ZSxcbiAgICAgICdnb3BoZXI6JzogdHJ1ZSxcbiAgICAgICdmaWxlOic6IHRydWVcbiAgICB9LFxuICAgIHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcblxuZnVuY3Rpb24gdXJsUGFyc2UodXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBpZiAodXJsICYmIHV0aWwuaXNPYmplY3QodXJsKSAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHJldHVybiB1cmw7XG5cbiAgdmFyIHUgPSBuZXcgVXJsO1xuICB1LnBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHVybCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGFyYW1ldGVyICd1cmwnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiB1cmwpO1xuICB9XG5cbiAgLy8gQ29weSBjaHJvbWUsIElFLCBvcGVyYSBiYWNrc2xhc2gtaGFuZGxpbmcgYmVoYXZpb3IuXG4gIC8vIEJhY2sgc2xhc2hlcyBiZWZvcmUgdGhlIHF1ZXJ5IHN0cmluZyBnZXQgY29udmVydGVkIHRvIGZvcndhcmQgc2xhc2hlc1xuICAvLyBTZWU6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNTkxNlxuICB2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKCc/JyksXG4gICAgICBzcGxpdHRlciA9XG4gICAgICAgICAgKHF1ZXJ5SW5kZXggIT09IC0xICYmIHF1ZXJ5SW5kZXggPCB1cmwuaW5kZXhPZignIycpKSA/ICc/JyA6ICcjJyxcbiAgICAgIHVTcGxpdCA9IHVybC5zcGxpdChzcGxpdHRlciksXG4gICAgICBzbGFzaFJlZ2V4ID0gL1xcXFwvZztcbiAgdVNwbGl0WzBdID0gdVNwbGl0WzBdLnJlcGxhY2Uoc2xhc2hSZWdleCwgJy8nKTtcbiAgdXJsID0gdVNwbGl0LmpvaW4oc3BsaXR0ZXIpO1xuXG4gIHZhciByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIGlmICghc2xhc2hlc0Rlbm90ZUhvc3QgJiYgdXJsLnNwbGl0KCcjJykubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gVHJ5IGZhc3QgcGF0aCByZWdleHBcbiAgICB2YXIgc2ltcGxlUGF0aCA9IHNpbXBsZVBhdGhQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gICAgaWYgKHNpbXBsZVBhdGgpIHtcbiAgICAgIHRoaXMucGF0aCA9IHJlc3Q7XG4gICAgICB0aGlzLmhyZWYgPSByZXN0O1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHNpbXBsZVBhdGhbMV07XG4gICAgICBpZiAoc2ltcGxlUGF0aFsyXSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNpbXBsZVBhdGhbMl07XG4gICAgICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHRoaXMuc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuc2VhcmNoLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm90byA9IHByb3RvY29sUGF0dGVybi5leGVjKHJlc3QpO1xuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdO1xuICAgIHZhciBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGZpZ3VyZSBvdXQgaWYgaXQncyBnb3QgYSBob3N0XG4gIC8vIHVzZXJAc2VydmVyIGlzICphbHdheXMqIGludGVycHJldGVkIGFzIGEgaG9zdG5hbWUsIGFuZCB1cmxcbiAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuICAvLyBob3cgdGhlIGJyb3dzZXIgcmVzb2x2ZXMgcmVsYXRpdmUgVVJMcy5cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihob3N0RW5kaW5nQ2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGRlY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaG9zdCBpcyB0aGUgcmVtYWluaW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBub24taG9zdCBjaGFyXG4gICAgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpXG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG5cbiAgICB0aGlzLmhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdCgpO1xuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXG4gICAgLy8gaWYgaG9zdG5hbWUgYmVnaW5zIHdpdGggWyBhbmQgZW5kcyB3aXRoIF1cbiAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cbiAgICB2YXIgaXB2Nkhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZVswXSA9PT0gJ1snICYmXG4gICAgICAgIHRoaXMuaG9zdG5hbWVbdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAxXSA9PT0gJ10nO1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIG5ld3BhcnQgPSAnJztcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFydC5jaGFyQ29kZUF0KGopID4gMTI3KSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2Ugbm9uLUFTQ0lJIGNoYXIgd2l0aCBhIHRlbXBvcmFyeSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG4gICAgICAgICAgICAgIC8vIGJyb2tlbiBieSByZXBsYWNpbmcgbm9uLUFTQ0lJIGJ5IG5vdGhpbmdcbiAgICAgICAgICAgICAgbmV3cGFydCArPSAneCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdlIHRlc3QgYWdhaW4gd2l0aCBBU0NJSSBjaGFyIG9ubHlcbiAgICAgICAgICBpZiAoIW5ld3BhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgdmFyIG5vdEhvc3QgPSBob3N0cGFydHMuc2xpY2UoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICB2YWxpZFBhcnRzLnB1c2goYml0WzFdKTtcbiAgICAgICAgICAgICAgbm90SG9zdC51bnNoaWZ0KGJpdFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9ICcvJyArIG5vdEhvc3Quam9pbignLicpICsgcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSB2YWxpZFBhcnRzLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhvc3RuYW1lcyBhcmUgYWx3YXlzIGxvd2VyIGNhc2UuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICAvLyBJRE5BIFN1cHBvcnQ6IFJldHVybnMgYSBwdW55Y29kZWQgcmVwcmVzZW50YXRpb24gb2YgXCJkb21haW5cIi5cbiAgICAgIC8vIEl0IG9ubHkgY29udmVydHMgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHRoYXRcbiAgICAgIC8vIGhhdmUgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWZcbiAgICAgIC8vIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCBhbHJlYWR5IGlzIEFTQ0lJLW9ubHkuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gcHVueWNvZGUudG9BU0NJSSh0aGlzLmhvc3RuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuICAgIHZhciBoID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcbiAgICB0aGlzLmhvc3QgPSBoICsgcDtcbiAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXG4gICAgLy8gc3RyaXAgWyBhbmQgXSBmcm9tIHRoZSBob3N0bmFtZVxuICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG4gICAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUuc3Vic3RyKDEsIHRoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG4gICAgICAgIHJlc3QgPSAnLycgKyByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuICAvLyBjaG9wIG9mZiBhbnkgZGVsaW0gY2hhcnMuXG4gIGlmICghdW5zYWZlUHJvdG9jb2xbbG93ZXJQcm90b10pIHtcblxuICAgIC8vIEZpcnN0LCBtYWtlIDEwMCUgc3VyZSB0aGF0IGFueSBcImF1dG9Fc2NhcGVcIiBjaGFycyBnZXRcbiAgICAvLyBlc2NhcGVkLCBldmVuIGlmIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IHRoaW5rIHRoZXlcbiAgICAvLyBuZWVkIHRvIGJlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXV0b0VzY2FwZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBhZSA9IGF1dG9Fc2NhcGVbaV07XG4gICAgICBpZiAocmVzdC5pbmRleE9mKGFlKSA9PT0gLTEpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgdmFyIGVzYyA9IGVuY29kZVVSSUNvbXBvbmVudChhZSk7XG4gICAgICBpZiAoZXNjID09PSBhZSkge1xuICAgICAgICBlc2MgPSBlc2NhcGUoYWUpO1xuICAgICAgfVxuICAgICAgcmVzdCA9IHJlc3Quc3BsaXQoYWUpLmpvaW4oZXNjKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIGNob3Agb2ZmIGZyb20gdGhlIHRhaWwgZmlyc3QuXG4gIHZhciBoYXNoID0gcmVzdC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoICE9PSAtMSkge1xuICAgIC8vIGdvdCBhIGZyYWdtZW50IHN0cmluZy5cbiAgICB0aGlzLmhhc2ggPSByZXN0LnN1YnN0cihoYXNoKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKTtcbiAgfVxuICB2YXIgcW0gPSByZXN0LmluZGV4T2YoJz8nKTtcbiAgaWYgKHFtICE9PSAtMSkge1xuICAgIHRoaXMuc2VhcmNoID0gcmVzdC5zdWJzdHIocW0pO1xuICAgIHRoaXMucXVlcnkgPSByZXN0LnN1YnN0cihxbSArIDEpO1xuICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlzdHJpbmcucGFyc2UodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIHFtKTtcbiAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgLy8gbm8gcXVlcnkgc3RyaW5nLCBidXQgcGFyc2VRdWVyeVN0cmluZyBzdGlsbCByZXF1ZXN0ZWRcbiAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgfVxuICBpZiAocmVzdCkgdGhpcy5wYXRobmFtZSA9IHJlc3Q7XG4gIGlmIChzbGFzaGVkUHJvdG9jb2xbbG93ZXJQcm90b10gJiZcbiAgICAgIHRoaXMuaG9zdG5hbWUgJiYgIXRoaXMucGF0aG5hbWUpIHtcbiAgICB0aGlzLnBhdGhuYW1lID0gJy8nO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICBpZiAodGhpcy5wYXRobmFtZSB8fCB0aGlzLnNlYXJjaCkge1xuICAgIHZhciBwID0gdGhpcy5wYXRobmFtZSB8fCAnJztcbiAgICB2YXIgcyA9IHRoaXMuc2VhcmNoIHx8ICcnO1xuICAgIHRoaXMucGF0aCA9IHAgKyBzO1xuICB9XG5cbiAgLy8gZmluYWxseSwgcmVjb25zdHJ1Y3QgdGhlIGhyZWYgYmFzZWQgb24gd2hhdCBoYXMgYmVlbiB2YWxpZGF0ZWQuXG4gIHRoaXMuaHJlZiA9IHRoaXMuZm9ybWF0KCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZm9ybWF0IGEgcGFyc2VkIG9iamVjdCBpbnRvIGEgdXJsIHN0cmluZ1xuZnVuY3Rpb24gdXJsRm9ybWF0KG9iaikge1xuICAvLyBlbnN1cmUgaXQncyBhbiBvYmplY3QsIGFuZCBub3QgYSBzdHJpbmcgdXJsLlxuICAvLyBJZiBpdCdzIGFuIG9iaiwgdGhpcyBpcyBhIG5vLW9wLlxuICAvLyB0aGlzIHdheSwgeW91IGNhbiBjYWxsIHVybF9mb3JtYXQoKSBvbiBzdHJpbmdzXG4gIC8vIHRvIGNsZWFuIHVwIHBvdGVudGlhbGx5IHdvbmt5IHVybHMuXG4gIGlmICh1dGlsLmlzU3RyaW5nKG9iaikpIG9iaiA9IHVybFBhcnNlKG9iaik7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG4gIHJldHVybiBvYmouZm9ybWF0KCk7XG59XG5cblVybC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhdXRoID0gdGhpcy5hdXRoIHx8ICcnO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksICc6Jyk7XG4gICAgYXV0aCArPSAnQCc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuICAgICAgcGF0aG5hbWUgPSB0aGlzLnBhdGhuYW1lIHx8ICcnLFxuICAgICAgaGFzaCA9IHRoaXMuaGFzaCB8fCAnJyxcbiAgICAgIGhvc3QgPSBmYWxzZSxcbiAgICAgIHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKHRoaXMuaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdGhpcy5ob3N0O1xuICB9IGVsc2UgaWYgKHRoaXMuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuICAgICAgICB0aGlzLmhvc3RuYW1lIDpcbiAgICAgICAgJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyk7XG4gICAgaWYgKHRoaXMucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMucXVlcnkgJiZcbiAgICAgIHV0aWwuaXNPYmplY3QodGhpcy5xdWVyeSkgJiZcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucXVlcnkpLmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHRoaXMucXVlcnkpO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IHRoaXMuc2VhcmNoIHx8IChxdWVyeSAmJiAoJz8nICsgcXVlcnkpKSB8fCAnJztcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOic7XG5cbiAgLy8gb25seSB0aGUgc2xhc2hlZFByb3RvY29scyBnZXQgdGhlIC8vLiAgTm90IG1haWx0bzosIHhtcHA6LCBldGMuXG4gIC8vIHVubGVzcyB0aGV5IGhhZCB0aGVtIHRvIGJlZ2luIHdpdGguXG4gIGlmICh0aGlzLnNsYXNoZXMgfHxcbiAgICAgICghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29sW3Byb3RvY29sXSkgJiYgaG9zdCAhPT0gZmFsc2UpIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKTtcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWU7XG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJyc7XG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaDtcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2guY2hhckF0KDApICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaDtcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpO1xuXG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG59O1xuXG5mdW5jdGlvbiB1cmxSZXNvbHZlKHNvdXJjZSwgcmVsYXRpdmUpIHtcbiAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmUocmVsYXRpdmUpO1xufVxuXG5VcmwucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICByZXR1cm4gdGhpcy5yZXNvbHZlT2JqZWN0KHVybFBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSkpLmZvcm1hdCgpO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZU9iamVjdChzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIGlmICghc291cmNlKSByZXR1cm4gcmVsYXRpdmU7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlT2JqZWN0KHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlT2JqZWN0ID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgaWYgKHV0aWwuaXNTdHJpbmcocmVsYXRpdmUpKSB7XG4gICAgdmFyIHJlbCA9IG5ldyBVcmwoKTtcbiAgICByZWwucGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKTtcbiAgICByZWxhdGl2ZSA9IHJlbDtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgVXJsKCk7XG4gIHZhciB0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICBmb3IgKHZhciB0ayA9IDA7IHRrIDwgdGtleXMubGVuZ3RoOyB0aysrKSB7XG4gICAgdmFyIHRrZXkgPSB0a2V5c1t0a107XG4gICAgcmVzdWx0W3RrZXldID0gdGhpc1t0a2V5XTtcbiAgfVxuXG4gIC8vIGhhc2ggaXMgYWx3YXlzIG92ZXJyaWRkZW4sIG5vIG1hdHRlciB3aGF0LlxuICAvLyBldmVuIGhyZWY9XCJcIiB3aWxsIHJlbW92ZSBpdC5cbiAgcmVzdWx0Lmhhc2ggPSByZWxhdGl2ZS5oYXNoO1xuXG4gIC8vIGlmIHRoZSByZWxhdGl2ZSB1cmwgaXMgZW1wdHksIHRoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gZG8gaGVyZS5cbiAgaWYgKHJlbGF0aXZlLmhyZWYgPT09ICcnKSB7XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGhyZWZzIGxpa2UgLy9mb28vYmFyIGFsd2F5cyBjdXQgdG8gdGhlIHByb3RvY29sLlxuICBpZiAocmVsYXRpdmUuc2xhc2hlcyAmJiAhcmVsYXRpdmUucHJvdG9jb2wpIHtcbiAgICAvLyB0YWtlIGV2ZXJ5dGhpbmcgZXhjZXB0IHRoZSBwcm90b2NvbCBmcm9tIHJlbGF0aXZlXG4gICAgdmFyIHJrZXlzID0gT2JqZWN0LmtleXMocmVsYXRpdmUpO1xuICAgIGZvciAodmFyIHJrID0gMDsgcmsgPCBya2V5cy5sZW5ndGg7IHJrKyspIHtcbiAgICAgIHZhciBya2V5ID0gcmtleXNbcmtdO1xuICAgICAgaWYgKHJrZXkgIT09ICdwcm90b2NvbCcpXG4gICAgICAgIHJlc3VsdFtya2V5XSA9IHJlbGF0aXZlW3JrZXldO1xuICAgIH1cblxuICAgIC8vdXJsUGFyc2UgYXBwZW5kcyB0cmFpbGluZyAvIHRvIHVybHMgbGlrZSBodHRwOi8vd3d3LmV4YW1wbGUuY29tXG4gICAgaWYgKHNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdICYmXG4gICAgICAgIHJlc3VsdC5ob3N0bmFtZSAmJiAhcmVzdWx0LnBhdGhuYW1lKSB7XG4gICAgICByZXN1bHQucGF0aCA9IHJlc3VsdC5wYXRobmFtZSA9ICcvJztcbiAgICB9XG5cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKHJlbGF0aXZlLnByb3RvY29sICYmIHJlbGF0aXZlLnByb3RvY29sICE9PSByZXN1bHQucHJvdG9jb2wpIHtcbiAgICAvLyBpZiBpdCdzIGEga25vd24gdXJsIHByb3RvY29sLCB0aGVuIGNoYW5naW5nXG4gICAgLy8gdGhlIHByb3RvY29sIGRvZXMgd2VpcmQgdGhpbmdzXG4gICAgLy8gZmlyc3QsIGlmIGl0J3Mgbm90IGZpbGU6LCB0aGVuIHdlIE1VU1QgaGF2ZSBhIGhvc3QsXG4gICAgLy8gYW5kIGlmIHRoZXJlIHdhcyBhIHBhdGhcbiAgICAvLyB0byBiZWdpbiB3aXRoLCB0aGVuIHdlIE1VU1QgaGF2ZSBhIHBhdGguXG4gICAgLy8gaWYgaXQgaXMgZmlsZTosIHRoZW4gdGhlIGhvc3QgaXMgZHJvcHBlZCxcbiAgICAvLyBiZWNhdXNlIHRoYXQncyBrbm93biB0byBiZSBob3N0bGVzcy5cbiAgICAvLyBhbnl0aGluZyBlbHNlIGlzIGFzc3VtZWQgdG8gYmUgYWJzb2x1dGUuXG4gICAgaWYgKCFzbGFzaGVkUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJlbGF0aXZlKTtcbiAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwga2V5cy5sZW5ndGg7IHYrKykge1xuICAgICAgICB2YXIgayA9IGtleXNbdl07XG4gICAgICAgIHJlc3VsdFtrXSA9IHJlbGF0aXZlW2tdO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5wcm90b2NvbCA9IHJlbGF0aXZlLnByb3RvY29sO1xuICAgIGlmICghcmVsYXRpdmUuaG9zdCAmJiAhaG9zdGxlc3NQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuICAgICAgd2hpbGUgKHJlbFBhdGgubGVuZ3RoICYmICEocmVsYXRpdmUuaG9zdCA9IHJlbFBhdGguc2hpZnQoKSkpO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0KSByZWxhdGl2ZS5ob3N0ID0gJyc7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuICAgICAgaWYgKHJlbFBhdGhbMF0gIT09ICcnKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgaWYgKHJlbFBhdGgubGVuZ3RoIDwgMikgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxhdGl2ZS5wYXRobmFtZTtcbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG4gICAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoO1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3Q7XG4gICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuICAgIC8vIHRvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5wYXRobmFtZSB8fCByZXN1bHQuc2VhcmNoKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcbiAgICAgIHZhciBzID0gcmVzdWx0LnNlYXJjaCB8fCAnJztcbiAgICAgIHJlc3VsdC5wYXRoID0gcCArIHM7XG4gICAgfVxuICAgIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuICAgICAgaXNSZWxBYnMgPSAoXG4gICAgICAgICAgcmVsYXRpdmUuaG9zdCB8fFxuICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgICApLFxuICAgICAgbXVzdEVuZEFicyA9IChpc1JlbEFicyB8fCBpc1NvdXJjZUFicyB8fFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcbiAgICAgIHJlbW92ZUFsbERvdHMgPSBtdXN0RW5kQWJzLFxuICAgICAgc3JjUGF0aCA9IHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcHN5Y2hvdGljID0gcmVzdWx0LnByb3RvY29sICYmICFzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXTtcblxuICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG4gIC8vIGxpbmtzIGxpa2UgLi4vLi4gc2hvdWxkIGJlIGFibGVcbiAgLy8gdG8gY3Jhd2wgdXAgdG8gdGhlIGhvc3RuYW1lLCBhcyB3ZWxsLiAgVGhpcyBpcyBzdHJhbmdlLlxuICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuICAvLyBMYXRlciBvbiwgcHV0IHRoZSBmaXJzdCBwYXRoIHBhcnQgaW50byB0aGUgaG9zdCBmaWVsZC5cbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuICAgIHJlc3VsdC5wb3J0ID0gbnVsbDtcbiAgICBpZiAocmVzdWx0Lmhvc3QpIHtcbiAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuICAgICAgZWxzZSBzcmNQYXRoLnVuc2hpZnQocmVzdWx0Lmhvc3QpO1xuICAgIH1cbiAgICByZXN1bHQuaG9zdCA9ICcnO1xuICAgIGlmIChyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgPSBudWxsO1xuICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG4gICAgICBpZiAocmVsYXRpdmUuaG9zdCkge1xuICAgICAgICBpZiAocmVsUGF0aFswXSA9PT0gJycpIHJlbFBhdGhbMF0gPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlLmhvc3QgPSBudWxsO1xuICAgIH1cbiAgICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyAmJiAocmVsUGF0aFswXSA9PT0gJycgfHwgc3JjUGF0aFswXSA9PT0gJycpO1xuICB9XG5cbiAgaWYgKGlzUmVsQWJzKSB7XG4gICAgLy8gaXQncyBhYnNvbHV0ZS5cbiAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0IDogcmVzdWx0Lmhvc3Q7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gKHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3RuYW1lID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgc3JjUGF0aCA9IHJlbFBhdGg7XG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkb3QtaGFuZGxpbmcgYmVsb3cuXG4gIH0gZWxzZSBpZiAocmVsUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBpdCdzIHJlbGF0aXZlXG4gICAgLy8gdGhyb3cgYXdheSB0aGUgZXhpc3RpbmcgZmlsZSwgYW5kIHRha2UgdGhlIG5ldyBwYXRoIGluc3RlYWQuXG4gICAgaWYgKCFzcmNQYXRoKSBzcmNQYXRoID0gW107XG4gICAgc3JjUGF0aC5wb3AoKTtcbiAgICBzcmNQYXRoID0gc3JjUGF0aC5jb25jYXQocmVsUGF0aCk7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgfSBlbHNlIGlmICghdXRpbC5pc051bGxPclVuZGVmaW5lZChyZWxhdGl2ZS5zZWFyY2gpKSB7XG4gICAgLy8ganVzdCBwdWxsIG91dCB0aGUgc2VhcmNoLlxuICAgIC8vIGxpa2UgaHJlZj0nP2ZvbycuXG4gICAgLy8gUHV0IHRoaXMgYWZ0ZXIgdGhlIG90aGVyIHR3byBjYXNlcyBiZWNhdXNlIGl0IHNpbXBsaWZpZXMgdGhlIGJvb2xlYW5zXG4gICAgaWYgKHBzeWNob3RpYykge1xuICAgICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBzcmNQYXRoLnNoaWZ0KCk7XG4gICAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgICAvL3RoaXMgZXNwZWNpYWxseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmICghdXRpbC5pc051bGwocmVzdWx0LnBhdGhuYW1lKSB8fCAhdXRpbC5pc051bGwocmVzdWx0LnNlYXJjaCkpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBubyBwYXRoIGF0IGFsbC4gIGVhc3kuXG4gICAgLy8gd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBvdGhlciBzdHVmZiBhYm92ZS5cbiAgICByZXN1bHQucGF0aG5hbWUgPSBudWxsO1xuICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAocmVzdWx0LnNlYXJjaCkge1xuICAgICAgcmVzdWx0LnBhdGggPSAnLycgKyByZXN1bHQuc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gICAgfVxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBpZiBhIHVybCBFTkRzIGluIC4gb3IgLi4sIHRoZW4gaXQgbXVzdCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgLy8gaG93ZXZlciwgaWYgaXQgZW5kcyBpbiBhbnl0aGluZyBlbHNlIG5vbi1zbGFzaHksXG4gIC8vIHRoZW4gaXQgbXVzdCBOT1QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG4gIHZhciBsYXN0ID0gc3JjUGF0aC5zbGljZSgtMSlbMF07XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gKFxuICAgICAgKHJlc3VsdC5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgfHwgc3JjUGF0aC5sZW5ndGggPiAxKSAmJlxuICAgICAgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSB8fCBsYXN0ID09PSAnJyk7XG5cbiAgLy8gc3RyaXAgc2luZ2xlIGRvdHMsIHJlc29sdmUgZG91YmxlIGRvdHMgdG8gcGFyZW50IGRpclxuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gc3JjUGF0aC5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGFzdCA9IHNyY1BhdGhbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKCFtdXN0RW5kQWJzICYmICFyZW1vdmVBbGxEb3RzKSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgc3JjUGF0aFswXSAhPT0gJycgJiZcbiAgICAgICghc3JjUGF0aFswXSB8fCBzcmNQYXRoWzBdLmNoYXJBdCgwKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgucHVzaCgnJyk7XG4gIH1cblxuICB2YXIgaXNBYnNvbHV0ZSA9IHNyY1BhdGhbMF0gPT09ICcnIHx8XG4gICAgICAoc3JjUGF0aFswXSAmJiBzcmNQYXRoWzBdLmNoYXJBdCgwKSA9PT0gJy8nKTtcblxuICAvLyBwdXQgdGhlIGhvc3QgYmFja1xuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGF0aC5sZW5ndGggPyBzcmNQYXRoLnNoaWZ0KCkgOiAnJztcbiAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgLy90aGlzIGVzcGVjaWFsbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG4gICAgLy91cmwucmVzb2x2ZU9iamVjdCgnbWFpbHRvOmxvY2FsMUBkb21haW4xJywgJ2xvY2FsMkBkb21haW4yJylcbiAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuICAgIGlmIChhdXRoSW5Ib3N0KSB7XG4gICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzIHx8IChyZXN1bHQuaG9zdCAmJiBzcmNQYXRoLmxlbmd0aCk7XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBzcmNQYXRoLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgcmVzdWx0LnBhdGggPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IHNyY1BhdGguam9pbignLycpO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IHJlcXVlc3QuaHR0cFxuICBpZiAoIXV0aWwuaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIXV0aWwuaXNOdWxsKHJlc3VsdC5zZWFyY2gpKSB7XG4gICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgfVxuICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGggfHwgcmVzdWx0LmF1dGg7XG4gIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5VcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaG9zdCA9IHRoaXMuaG9zdDtcbiAgdmFyIHBvcnQgPSBwb3J0UGF0dGVybi5leGVjKGhvc3QpO1xuICBpZiAocG9ydCkge1xuICAgIHBvcnQgPSBwb3J0WzBdO1xuICAgIGlmIChwb3J0ICE9PSAnOicpIHtcbiAgICAgIHRoaXMucG9ydCA9IHBvcnQuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBob3N0ID0gaG9zdC5zdWJzdHIoMCwgaG9zdC5sZW5ndGggLSBwb3J0Lmxlbmd0aCk7XG4gIH1cbiAgaWYgKGhvc3QpIHRoaXMuaG9zdG5hbWUgPSBob3N0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzU3RyaW5nOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mKGFyZykgPT09ICdzdHJpbmcnO1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbiAgfSxcbiAgaXNOdWxsT3JVbmRlZmluZWQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT0gbnVsbDtcbiAgfVxufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImNsYXNzIEV2ZW50U2VydmljZSB7XG4gIC8vIEZJWE1FOiBNYXliZSBtYWtlIHNvbWUgUHJvbWlzZSBCYXNlZCBldmVudCBzdWJzY3JpYmVyPyBcbiAgLy8gUHJvYmFibHkgbm90IHlldCAg8J+ltDtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKVxuICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fVxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cblxuICBiaW5kRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmxkZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdID0gaGFubGRlcjtcbiAgfVxuXG4gIGxpc3RlbmVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50LmRhdGFdKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudC5kYXRhXSh0aGlzLmNvbmZpZylcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMubGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCB0aGlzLmxpc3RlbmVyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZXJ2aWNlICAiLCJpbXBvcnQgcXMgZnJvbSAncXMnXG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IG9iaiBUaGUgT2JqZWN0IG9mIGNvbmZpZywgdG8gcGFyc2UgcXVlaXJ5XG4gKiBcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9IG9iaiA9PiB7XG4gIGNvbnN0IHN0cmluZ2lmeWVkUVMgPSBxcy5zdHJpbmdpZnkob2JqLCB7IHNraXBOdWxsczogdHJ1ZSB9KTtcbiAgcmV0dXJuIHN0cmluZ2lmeWVkUVM7XG59O1xuXG4vKipcbiAqIFRha2VzIGEgVVJMIGFuZCByZXR1cm5zIHRoZSBvcmlnaW5cbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsIFRoZSBmdWxsIFVSTCBiZWluZyByZXF1ZXN0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIFRoZSBVUkxzIG9yaWdpblxuICovXG5leHBvcnQgY29uc3QgcmVzb2x2ZU9yaWdpbiA9ICh1cmwpID0+IHtcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBhLmhyZWYgPSB1cmxcbiAgY29uc3QgcHJvdG9jb2wgPSBhLnByb3RvY29sLmxlbmd0aCA+IDQgPyBhLnByb3RvY29sIDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sXG4gIGNvbnN0IGhvc3QgPSBhLmhvc3QubGVuZ3RoID8gKChhLnBvcnQgPT09ICc4MCcgfHwgYS5wb3J0ID09PSAnNDQzJykgPyBhLmhvc3RuYW1lIDogYS5ob3N0KSA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0XG4gIHJldHVybiBhLm9yaWdpbiB8fCBgJHtwcm90b2NvbH0vLyR7aG9zdH1gXG59XG5cbiIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IG1vdW50IGZyb20gJy4vbW91bnQnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBvdyBmcm9tICdvdyc7XG5pbXBvcnQgRXZlbnRTZXJ2aWNlIGZyb20gJy4vRXZlbnRTZXJ2aWNlJztcblxuLy8gRklYTUU6IERvIHdlIG5lZWQgVU1EIGluc3RlYWQgaWYgSUlGRT9cbi8vIFByb2JhYmx5IG5vdCB5ZXQgIPCfpbQ7XG5cbihmdW5jdGlvbih3aW5kb3csIHVuZGVmaW5lZCkge1xuXHRjb25zdCBidWlsZEZyYW1lU3JjID0gKHtcblx0XHQvLyBGSVhNRTogbW92ZSBpdCB0byB1cHBlciBmdW5jdGlvblxuXHRcdGJhc2VVcmwgPSAnaHR0cHM6Ly9jb20tZGV2LnBheWNvcmUuaW8vaHBwJyxcblx0XHRwdWJsaWNfa2V5LFxuXHRcdGFtb3VudCxcblx0XHRjdXJyZW5jeSxcblx0XHRzZXJ2aWNlID0gbnVsbCxcblx0XHRzZXJ2aWNlX2ZpZWxkcyA9IG51bGwsXG5cdFx0Y3BpID0gbnVsbCxcblx0XHRkZXNjcmlwdGlvbiA9IG51bGwsXG5cdFx0ZXhwaXJlcyA9IG51bGwsXG5cdFx0dGhlbWUgPSBudWxsLFxuXHRcdGxvY2FsZSA9IG51bGwsXG5cdFx0YXZhaWxhYmxlX2xvY2FsZXMgPSBudWxsLFxuXHRcdGN1c3RvbWVyID0gbnVsbCxcblx0XHRyZWZlcmVuY2VfaWQgPSBudWxsLFxuXHRcdG1ldGFkYXRhID0gbnVsbCxcblx0XHRsYW5nID0gbnVsbCxcblx0XHRkaXNwbGF5ID0gbnVsbCxcblx0XHRzdHlsZSA9IG51bGwsXG5cdFx0cGF5X2J1dHRvbl9sYWJlbCA9IG51bGwsXG5cdH0pID0+IHtcblx0XHRjb25zdCBxUGFyYW1zID0gc3RyaW5naWZ5KHtcblx0XHRcdC8vIFJlcXVpcmVkIHBhcmFtc1xuXHRcdFx0YW1vdW50LFxuXHRcdFx0Y3VycmVuY3ksXG5cdFx0XHRwdWJsaWNfa2V5LFxuXG5cdFx0XHQvLyBPcHRpb25hbCBwYXJhbXNcblx0XHRcdGRlc2NyaXB0aW9uLFxuXHRcdFx0ZXhwaXJlcyxcblx0XHRcdGxvY2FsZSxcblx0XHRcdGF2YWlsYWJsZV9sb2NhbGVzLFxuXHRcdFx0cmVmZXJlbmNlX2lkLFxuXHRcdFx0bWV0YWRhdGEsXG5cdFx0XHRjdXN0b21lcixcblxuXHRcdFx0Ly8gVGhlbWluZywgVVhcblx0XHRcdGRpc3BsYXksXG5cdFx0XHRzdHlsZSxcblx0XHRcdHRoZW1lLFxuXHRcdFx0cGF5X2J1dHRvbl9sYWJlbCxcblxuXHRcdFx0Ly8gRGlmZmVyZW50IHVzZWNhc2UgZmxvdyBwYXJhbXNcblx0XHRcdHNlcnZpY2UsXG5cdFx0XHRzZXJ2aWNlX2ZpZWxkcyxcblx0XHRcdGNwaSxcblx0XHRcdGxhbmcsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGAke2Jhc2VVcmx9PyR7cVBhcmFtc31gO1xuXHR9O1xuXHQvKlxuXHQgKiBXaWRnZXQgaW5pdGlhbGl6ZSBtZXRob2Q6XG5cdCAqXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gIFNlbGVjdG9yIFRoZSBFbGVtZW50IHNlbGVjdG9yIHRvIHJlbmRlciBhbiBpZnJhbWUsIG11c3QgYmUgYW4gSURcblx0ICogQHBhcmFtICB7T2JqZWN0fSAgVGhlIENvbmZpZyB3aXRoIHB1YmxpYyBrZXkgb2YgY29tbWVyY2UgYXBwLCBjdXJyZW5jeSBhbmQgYW1vdW50LCBkZXNjcmlwdGlvblxuXHQgKiBAcGFyYW0gIHtPYmplY3R9ICBQcmVkZWZpbmVkIHN0eWxlcyBmb3IgTWVyY2hhbnQgSFBQIGluc2lkZSBpZnJhbWVcblx0ICogQHBhcmFtICB7U3RyaW5nfSAgTG9jYWxlIG9mIGNsaWVudCBwYWdlXG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IF9pbml0ID0gY29uZmlnID0+IHtcblx0XHR0cnkge1xuXHRcdFx0b3coXG5cdFx0XHRcdGNvbmZpZyxcblx0XHRcdFx0b3cub2JqZWN0LmV4YWN0U2hhcGUoe1xuXHRcdFx0XHRcdGZsb3c6IG93LnN0cmluZyxcblx0XHRcdFx0XHRzZWxlY3Rvcjogb3cuc3RyaW5nLFxuXHRcdFx0XHRcdHB1YmxpY19rZXk6IG93LnN0cmluZyxcblx0XHRcdFx0XHRhbW91bnQ6IG93Lm51bWJlcixcblx0XHRcdFx0XHRjdXJyZW5jeTogb3cuc3RyaW5nLFxuXHRcdFx0XHRcdGJhc2VVcmw6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRzdHlsaW5nOiBvdy5vcHRpb25hbC5vYmplY3QsXG5cdFx0XHRcdFx0ZnJhbWVJZDogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0c3JjOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0c2VydmljZTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdHNlcnZpY2VfZmllbGRzOiBvdy5vcHRpb25hbC5hcnJheSxcblx0XHRcdFx0XHRjcGk6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRleHBpcmVzOiBvdy5vcHRpb25hbC5hbnkob3cuc3RyaW5nLCBvdy5udW1iZXIpLFxuXHRcdFx0XHRcdHRoZW1lOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0bG9jYWxlOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0YXZhaWxhYmxlX2xvY2FsZXM6IG93Lm9wdGlvbmFsLmFycmF5LFxuXHRcdFx0XHRcdHJlZmVyZW5jZV9pZDogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdGxhbmd1YWdlOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRtZXRhZGF0YTogb3cub3B0aW9uYWwuYW55KG93Lm9iamVjdCwgb3cuYXJyYXkpLFxuXG5cdFx0XHRcdFx0bGFuZzogb3cub3B0aW9uYWwuc3RyaW5nLFxuXG5cdFx0XHRcdFx0Y3VzdG9tZXI6IG93Lm9wdGlvbmFsLm9iamVjdC5leGFjdFNoYXBlKHtcblx0XHRcdFx0XHRcdHJlZmVyZW5jZV9pZDogb3cuc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZW1haWw6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHBob25lOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRuYW1lOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRkYXRlX29mX2JpcnRoOiBvdy5vcHRpb25hbC5zdHJpbmcubWF0Y2hlcyhcblx0XHRcdFx0XHRcdFx0L15cXGR7NH0tKDBbMS05XXwxWzAtMl0pLSgwWzEtOV18WzEyXVxcZHwzWzAxXSkkL1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdGluZGl2aWR1YWxfdGF4X2lkOiBvdy5vcHRpb25hbC5zdHJpbmcubWluTGVuZ3RoKDIpLm1heExlbmd0aCgxMDApLFxuXHRcdFx0XHRcdFx0bWV0YWRhdGE6IG93Lm9wdGlvbmFsLmFueShvdy5vYmplY3QsIG93LmFycmF5KSxcblx0XHRcdFx0XHRcdGFkZHJlc3M6IG93Lm9wdGlvbmFsLm9iamVjdC5leGFjdFNoYXBlKHtcblx0XHRcdFx0XHRcdFx0Y291bnRyeTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRjaXR5OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRcdHBvc3RfY29kZTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRyZWdpb246IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdFx0c3RyZWV0OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRcdGZ1bGxfYWRkcmVzczogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0fSksXG5cblx0XHRcdFx0XHRkaXNwbGF5OiBvdy5vcHRpb25hbC5vYmplY3QuZXhhY3RTaGFwZSh7XG5cdFx0XHRcdFx0XHRoaWRlX2Zvb3Rlcjogb3cub3B0aW9uYWwuYm9vbGVhbixcblx0XHRcdFx0XHRcdGhpZGVfaGVhZGVyOiBvdy5vcHRpb25hbC5ib29sZWFuLFxuXHRcdFx0XHRcdFx0aGlkZV9wcm9ncmVzc19iYXI6IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0XHRoaWRlX21ldGhvZF9maWx0ZXI6IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0XHRoaWRlX2xpZmV0aW1lX2NvdW50ZXI6IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0fSksXG5cblx0XHRcdFx0XHRzdHlsZTogb3cub3B0aW9uYWwub2JqZWN0LmV4YWN0U2hhcGUoe1xuXHRcdFx0XHRcdFx0dGhlbWU6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdGZvbnRfZmFtaWx5OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRcdHN1Y2Nlc3NfY29sb3I6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHdhcm5pbmdfY29sb3I6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdGRhbmdlcl9jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0aW5mb19jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXG5cdFx0XHRcdFx0XHRwcmltYXJ5OiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRwcmltYXJ5X3ZhcmlhbnQ6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHByaW1hcnlfdGV4dF9jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0cHJpbWFyeV9iYWNrZ3JvdW5kX2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRvbl9wcmltYXJ5X2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRcdHNlY29uZGFyeTogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0c2Vjb25kYXJ5X3ZhcmlhbnQ6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHNlY29uZGFyeV90ZXh0X2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cdFx0XHRcdFx0XHRzZWNvbmRhcnlfYmFja2dyb3VuZF9jb2xvcjogb3cub3B0aW9uYWwuc3RyaW5nLFxuXHRcdFx0XHRcdFx0b25fc2Vjb25kYXJ5X2NvbG9yOiBvdy5vcHRpb25hbC5zdHJpbmcsXG5cblx0XHRcdFx0XHRcdHBheV9idXR0b25fbGFiZWw6IG93Lm9wdGlvbmFsLnN0cmluZyxcblx0XHRcdFx0XHRcdHNob3dfbWV0aG9kX2xvZ286IG93Lm9wdGlvbmFsLmJvb2xlYW4sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0aWYgKGNvbmZpZy5mbG93ID09PSAnaWZyYW1lJykge1xuXHRcdFx0XHRpZiAoIWNvbmZpZy5mcmFtZUlkKSB7XG5cdFx0XHRcdFx0Y29uZmlnLmZyYW1lSWQgPSAncGF5bWVudF93aWRnZXQnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqIFdlIHBhc3MgY29uZmlnIHRvIHJlaW5pdCAqL1xuXHRcdFx0XHRjb25zdCBDb21tdW5pY2F0aW9uU2VydmljZSA9IG5ldyBFdmVudFNlcnZpY2UoY29uZmlnKTtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogUE9TVCBNRVNTQUdFIExJU1RFTkVSUyBJTklUSUFMSVpFXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRDb21tdW5pY2F0aW9uU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCk7XG5cdFx0XHRcdENvbW11bmljYXRpb25TZXJ2aWNlLmJpbmRFdmVudExpc3RlbmVyKCdyZWluaXQnLCBfcmVpbml0KTtcblx0XHRcdFx0Q29tbXVuaWNhdGlvblNlcnZpY2UuYmluZEV2ZW50TGlzdGVuZXIoJ2RlbGV0ZScsIF9jbG9zZSk7XG5cdFx0XHRcdENvbW11bmljYXRpb25TZXJ2aWNlLmJpbmRFdmVudExpc3RlbmVyKCdjbG9zZScsIF9jbG9zZSk7XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIElmIGFscmVhZHkgZXhpc3RzIGlmcmFtZSB3aXRoIGV4aXN0ZWQgSUQgLSBoZSB3aWxsIGJlIHJlcmVuZGVyZWRcblx0XHRcdFx0ICogKi9cblx0XHRcdFx0Y29uc3QgcGF5bWVudElmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5mcmFtZUlkKTtcblx0XHRcdFx0aWYgKHBheW1lbnRJZnJhbWUpIHtcblx0XHRcdFx0XHRfcmVpbml0KGNvbmZpZyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEByZXR1cm5zIGlmcmFtZSBzcmMgYXR0cmlidXRlO1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0Y29uZmlnLnNyYyA9IGJ1aWxkRnJhbWVTcmMoY29uZmlnKTtcblx0XHRcdFx0Y29uc3QgaUZyYW1lID0gaW5pdGlhbGl6ZUlmcmFtZShjb25maWcpO1xuXHRcdFx0XHRtb3VudChpRnJhbWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5zZWxlY3RvcikpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXJlY3QgZmxvd1xuXHRcdFx0XHRjb25zdCBwYXRoID0gYnVpbGRGcmFtZVNyYyhjb25maWcpO1xuXHRcdFx0XHR3aW5kb3cub3BlbihwYXRoLCAnX2JsYW5rJyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgX2Nsb3NlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCBmcmFtZVRvQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZnJhbWVJZCk7XG5cdFx0aWYgKGZyYW1lVG9DbG9zZSkge1xuXHRcdFx0ZnJhbWVUb0Nsb3NlLnJlbW92ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBfcmVpbml0ID0gY29uZmlnID0+IHtcblx0XHRfY2xvc2UoY29uZmlnKTtcblx0XHRfaW5pdChjb25maWcpO1xuXHRcdHJldHVybjtcblx0fTtcblxuXHRjb25zdCBpbml0aWFsaXplSWZyYW1lID0gcHJvcHMgPT5cblx0XHRyZW5kZXIoe1xuXHRcdFx0YXR0cnM6IHtcblx0XHRcdFx0aWQ6IHByb3BzLmZyYW1lSWQsXG5cdFx0XHRcdHNyYzogcHJvcHMuc3JjIHx8ICcnLFxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdFx0ZnJhbWVib3JkZXI6ICdub25lJyxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0d2luZG93LndpZGdldCA9IHtcblx0XHRpbml0OiBfaW5pdCxcblx0XHRyZWluaXQ6IF9yZWluaXQsXG5cdFx0Y2xvc2U6IF9jbG9zZSxcblx0fTtcbn0pKHdpbmRvdyk7XG4iLCJleHBvcnQgZGVmYXVsdCAoJG5vZGUsICR0YXJnZXQpID0+IHtcbiAgJHRhcmdldC5hcHBlbmRDaGlsZCgkbm9kZSk7XG4gIHJldHVybiAkbm9kZTtcbn0iLCJcbmNvbnN0IHJlbmRlcklmcmFtZSA9ICh7IGF0dHJzIH0pID0+IHtcbiAgY29uc3QgJGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXMgdG8gaWZyYW1lXG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzKSkge1xuICAgICRlbC5zZXRBdHRyaWJ1dGUoaywgdik7XG4gIH1cbiAgLy8gUmV0dXJucyBhbiBpZnJhbWVcbiAgcmV0dXJuICRlbDtcbn07XG5cbmNvbnN0IHJlbmRlciA9IChub2RlKSA9PiB7XG4gIHJldHVybiByZW5kZXJJZnJhbWUobm9kZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiXSwic291cmNlUm9vdCI6IiJ9