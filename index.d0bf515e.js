!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("1UHsN",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}})),o.register("ffZzF",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}})),o.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a=document.querySelector(".all-books-title"),i=document.querySelector(".all-book-list");function c(t){a.innerHTML='Best Sellers&nbsp;<span class="all-books-title-accent">Books<span>',i.innerHTML=t.map((function(t){return r=(e=t).list_name,n=e.books,'\n    <li class="category-item" data-category="'.concat(r,'">\n      <h2 class="category-title">').concat(r,'</h2>\n      <ul class="category-book-list">\n        ').concat(function(t){return t.map((function(t){var e=t._id,r=t.title,n=t.author,o=t.book_image;return'\n  <li class="category-book-item" data-book-id="'.concat(e,'">\n    <a href="#" class="book-link">\n      <div class="book-image-wrapper">\n        <img class="book-image" src="').concat(o,'" alt="').concat(r,'" loading="lazy"/>\n        <div class="book-overlay">quick view</div>\n      </div>\n      <h3 class="book-title">').concat(r,'</h3>\n      <p class="book-author">').concat(n,"</p>\n    </a>\n  </li>\n  ")})).join("")}(n),'\n      </ul>\n      <button class="see-more__button" type="button">See more</button>\n    </li>\n  ');var e,r,n})).join("")}i.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"===t.target.tagName){var e=t.target.closest(".category-item").dataset.category;console.info("button See More clicked... Go to function view books by category (".concat(e,")"))}var r=t.target.closest(".category-book-item");r&&console.dir("bookItem clicked... open modal with book details ".concat(r.dataset.bookId))}));var u={};function l(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){l(a,n,o,i,c,"next",t)}function c(t){l(a,n,o,i,c,"throw",t)}i(void 0)}))}};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(t,e){var r=h.default(t,e,"get");return p.default(t,r)};var h=d(o("1UHsN")),p=d(o("ffZzF"));function d(t){return t&&t.__esModule?t:{default:t}}var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(t,e,r){y.default(t,e),e.set(t,r)};var g,y=(g=o("5k7tO"))&&g.__esModule?g:{default:g};var m={};function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(t,e,r){e&&w(t.prototype,e);r&&w(t,r);return t};var b={},k=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,k=b&&b(b(M([])));k&&k!==r&&n.call(k,a)&&(w=k);var x=m.prototype=g.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function M(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=m,u(x,"constructor",m),u(m,"constructor",y),y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(b);try{regeneratorRuntime=k}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=k:Function("r","regeneratorRuntime = r")(k)}var x=new WeakMap;(new(function(){"use strict";function e(){t(s)(this,e),t(v)(this,x,{writable:!0,value:"https://books-backend.p.goit.global"})}return t(m)(e,[{key:"getCategories",value:function(){var e=this;return t(u)(t(b).mark((function r(){var n;return t(b).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(t(f)(e,x),"/books/category-list"));case 2:return n=r.sent,r.next=5,n.json();case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})))()}},{key:"getTopBook",value:function(){var e=this;return t(u)(t(b).mark((function r(){var n;return t(b).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(t(f)(e,x),"/books/top-books"));case 2:return n=r.sent,r.next=5,n.json();case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})))()}},{key:"getBooksByCategory",value:function(e){var r=this;return t(u)(t(b).mark((function n(){var o;return t(b).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t(f)(r,x),"/books/category?category=").concat(e));case 2:return o=n.sent,n.next=5,o.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}},{key:"getBookDetail",value:function(e){var r=this;return t(u)(t(b).mark((function n(){var o;return t(b).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t(f)(r,x),"/books/").concat(e));case 2:return o=n.sent,n.next=5,o.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}}]),e}())).getTopBook().then((function(t){c(t)})).catch((function(t){console.log(t)}));var _=document.body,E=document.createElement("div"),L=document.createElement("h2");L.className="header_support",E.insertAdjacentElement("afterbegin",L),L.textContent="Support Ukraine",L.svg="";var j=document.createElement("ol");j.className="ul_support",E.className="container_support",[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}].map((function(t){var e=document.createElement("li");return e.className="list",e.innerHTML='\n    <a class="support_link" href="'.concat(t.url,'">').concat(t.title,'\n      <img class="image" src="#" alt="#"/>\n    </a>\n  '),e})).forEach((function(t){j.appendChild(t)})),E.appendChild(j),_.appendChild(E)}();
//# sourceMappingURL=index.d0bf515e.js.map
