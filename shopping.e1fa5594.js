!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequired7c6=i),i.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),i.register("a2hTj",(function(t,e){"use strict";function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return t}})),i.register("ri2fH",(function(r,n){t(r.exports,"default",(function(){return h}));var o=i("bpxeT"),a=i("8MBJY"),u=i("4KMWL"),c=i("8MQK7"),s=i("a2hTj"),l=i("2TvXO"),f=new WeakMap,h=function(){"use strict";function t(){e(a)(this,t),e(c)(this,f,{writable:!0,value:"https://books-backend.p.goit.global"})}return e(s)(t,[{key:"getCategories",value:function(){var t=this;return e(o)(e(l).mark((function r(){var n;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(e(u)(t,f),"/books/category-list"));case 2:return n=r.sent,r.next=5,n.json();case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})))()}},{key:"getTopBook",value:function(){var t=this;return e(o)(e(l).mark((function r(){var n;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(e(u)(t,f),"/books/top-books"));case 2:return n=r.sent,r.next=5,n.json();case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})))()}},{key:"getBooksByCategory",value:function(t){var r=this;return e(o)(e(l).mark((function n(){var o;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e(u)(r,f),"/books/category?category=").concat(t));case 2:return o=n.sent,n.next=5,o.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}},{key:"getBookDetail",value:function(t){var r=this;return e(o)(e(l).mark((function n(){var o;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e(u)(r,f),"/books/").concat(t));case 2:return o=n.sent,n.next=5,o.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}}]),t}()})),i.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}})),i.register("4KMWL",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){var o=r.default(t,e,"get");return n.default(t,o)};var r=o(i("1UHsN")),n=o(i("ffZzF"));function o(t){return t&&t.__esModule?t:{default:t}}})),i.register("1UHsN",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}})),i.register("ffZzF",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}})),i.register("8MQK7",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){n.default(t,e),e.set(t,r)};var r,n=(r=i("5k7tO"))&&r.__esModule?r:{default:r}})),i.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={};function v(){}function y(){}function m(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==r&&n.call(x,i)&&(b=x);var k=m.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),c(k,u,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),i.register("flyUs",(function(e,r){t(e.exports,"updateBookCounter",(function(){return o}));var n=document.querySelector(".header-book-count");function o(){var t=JSON.parse(localStorage.getItem("shopping-list")).length;t>0?(n.textContent=t,n.style.display="flex"):(n.style.display="none",n.textContent="")}o()})),i.register("aEag2",(function(t,r){var n=i("1CNQx"),o=document.querySelector(".slider_line"),a=document.querySelector(".ol_support");e(n).map((function(t){var e=document.createElement("li");return e.className="list",e.innerHTML='\n      <a class="support_link" target="_blank" href="'.concat(t.url,'">\n        <img class="image" src="').concat(t.img,'" alt="').concat(t.title,'"/>\n      </a>'),e})).forEach((function(t){a.appendChild(t)}));var u=0;document.querySelector(".scroll").addEventListener("click",(function(){(u+=150)>300&&(u=0),o.style.top=-u+"px"}))})),i.register("1CNQx",(function(t,e){t.exports=JSON.parse('[{"title":"Save the Children","url":"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis","img":"https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/save-the-children.png?raw=true"},{"title":"Project HOPE","url":"https://www.projecthope.org/country/ukraine/","img":"https://github.com/AlexGoIT/images/blob/ed53d7b428e549d083f21afe53d954c4f4d99b3f/support-icons/hope.png?raw=true"},{"title":"UNITED24","url":"https://u24.gov.ua/uk","img":"https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/united24.png?raw=true"},{"title":"International Medical Corps","url":"https://internationalmedicalcorps.org/country/ukraine/","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/international-medical-corps.png?raw=true"},{"title":"Medicins Sans Frontieres","url":"https://www.msf.org/ukraine","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/medicins-sans-frontieres.png?raw=true"},{"title":"RAZOM","url":"https://www.razomforukraine.org/","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/razom.png?raw=true"},{"title":"Action against hunger","url":"https://www.actionagainsthunger.org/location/europe/ukraine/","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/action-against-hunger.png?raw=true"},{"title":"World vision","url":"https://www.wvi.org/emergencies/ukraine","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/world-vision.png?raw=true"},{"title":"Serhiy Prytula Charity Foundation","url":"https://prytulafoundation.org/en","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/sergiy-prytula.png?raw=true"}]')})),i.register("9VC5X",(function(t,e){!function(){var t=new URL(i("1cePF")),e=new URL(i("c0YbW")),r=document.getElementById("theme-styles-link"),n=document.getElementById("js-switch-theme"),o=localStorage.getItem("theme"),a=localStorage.getItem("state");function u(t,e){r.setAttribute("href",t),n.checked=e}o||(o=t,localStorage.setItem("theme",o)),n.addEventListener("change",(function(){this.checked?(u(e,this.checked),o=e,a=this.checked):(u(t,!1),o=t,a=!1);localStorage.setItem("theme",o),localStorage.setItem("state",a)})),n.checked="true"===a,u(o,n.checked)}()})),i.register("1cePF",(function(t,e){t.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("3shj9")})),i.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i.register("c0YbW",(function(t,e){t.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("bctJO")})),i("iE7OH").register(JSON.parse('{"1Vwc0":"shopping.e1fa5594.js","3shj9":"default-theme.f14d05d4.css","bctJO":"dark-theme.dc29a8c3.css"}'))}();
//# sourceMappingURL=shopping.e1fa5594.js.map