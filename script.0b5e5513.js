parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ez7q":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function s(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach(function(e){n(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?h(t):e}function d(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function f(t,e,i){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=d(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function p(t){return v(t)||y(t)||m()}function v(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function y(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var g={el:document,elMobile:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,smoothMobile:!1,direction:"vertical",lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,scrollFromAnywhere:!1},w=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),Object.assign(this,g,i),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowMiddle=this.windowHeight/2,this.els=[],this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:this.html.offsetHeight},this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return s(t,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame(function(){t.resize(),t.resizeTick=!1}))}},{key:"resize",value:function(){}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach(function(e){e.addEventListener("click",t.setScrollTo,!1)})}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),t.currentTarget.getAttribute("data-".concat(this.name,"-offset")))}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var e=this,i=this.instance.scroll.y,s=i+this.windowHeight;this.els.forEach(function(n,o){!n||n.inView&&!t||s>=n.top&&i<n.bottom&&e.setInView(n,o),n&&n.inView&&(s<n.top||i>n.bottom)&&e.setOutOfView(n,o)}),this.els=this.els.filter(function(t,e){return null!==t}),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,e){this.els[e].inView=!0,t.el.classList.add(t.class),t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[e].call=!1)),t.repeat||t.speed||t.sticky||(!t.call||t.call&&this.hasCallEventSet)&&(this.els[e]=null)}},{key:"setOutOfView",value:function(t,e){(t.repeat||void 0!==t.speed)&&(this.els[e].inView=!1),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,e){this.callWay=e,this.callValue=t.call.split(",").map(function(t){return t.trim()}),this.callObj=t,1==this.callValue.length&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]);var i=this.listeners[t];i.push(e),1===i.length&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),"call"===t&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,e){if(this.listeners[t]){var i=this.listeners[t],s=i.indexOf(e);s<0||(i.splice(s,1),0===i.index&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var e=this,i=t.type.replace(this.namespace,""),s=this.listeners[i];s&&0!==s.length&&s.forEach(function(t){switch(i){case"scroll":return t(e.instance);case"call":return t(e.callValue,e.callWay,e.callObj);default:return t()}})}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,e){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach(function(e){t.el.removeEventListener(t.namespace+e,t.checkEvent,!1)}),this.listeners={},this.scrollToEls.forEach(function(e){e.removeEventListener("click",t.setScrollTo,!1)})}}]),t}(),b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function S(t,e){return t(e={exports:{}},e.exports),e.exports}var k=S(function(t,e){!function(){t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var i,s=t.HTMLElement||t.Element,n=468,o={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||a,scrollIntoView:s.prototype.scrollIntoView},l=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,r=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):o.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var i=function(t){for(;t!==e.body&&!1===d(t);)t=t.parentNode||t.host;return t}(this),s=i.getBoundingClientRect(),n=this.getBoundingClientRect();i!==e.body?(p.call(this,i,i.scrollLeft+n.left-s.left,i.scrollTop+n.top-s.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function h(t,e){return"Y"===e?t.clientHeight+r<t.scrollHeight:"X"===e?t.clientWidth+r<t.scrollWidth:void 0}function u(e,i){var s=t.getComputedStyle(e,null)["overflow"+i];return"auto"===s||"scroll"===s}function d(t){var e=h(t,"Y")&&u(t,"Y"),i=h(t,"X")&&u(t,"X");return e||i}function f(e){var i,s,o,r,a=(l()-e.startTime)/n;r=a=a>1?1:a,i=.5*(1-Math.cos(Math.PI*r)),s=e.startX+(e.x-e.startX)*i,o=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,s,o),s===e.x&&o===e.y||t.requestAnimationFrame(f.bind(t,e))}function p(i,s,n){var r,c,h,u,d=l();i===e.body?(r=t,c=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,u=o.scroll):(r=i,c=i.scrollLeft,h=i.scrollTop,u=a),f({scrollable:r,method:u,startTime:d,startX:c,startY:h,x:s,y:n})}}}}()}),E=k.polyfill,T=function(t){function i(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(this,i),t=u(this,a(i).call(this,s)),window.addEventListener("scroll",t.checkScroll,!1),k.polyfill(),t}return r(i,t),s(i,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),f(a(i.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var t=this;f(a(i.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.timestamp=Date.now()),this.instance.scroll.y=window.pageYOffset,this.els.length&&(this.hasScrollTicking||(requestAnimationFrame(function(){t.detectElements()}),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/(Date.now()-this.timestamp):this.instance.speed=0}},{key:"resize",value:function(){this.els.length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var t=this;this.els=[],this.el.querySelectorAll("[data-"+this.name+"]").forEach(function(e,i){var s=e.dataset[t.name+"Class"]||t.class,n=e.getBoundingClientRect().top+t.instance.scroll.y,o=n+e.offsetHeight,l="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,r=e.dataset[t.name+"Repeat"],a=e.dataset[t.name+"Call"];r="false"!=r&&(null!=r||t.repeat);var c=t.getRelativeOffset(l),h={el:e,id:i,class:s,top:n+c[0],bottom:o-c[1],offset:l,repeat:r,inView:!!e.classList.contains(s),call:a};t.els.push(h)})}},{key:"updateElements",value:function(){var t=this;this.els.forEach(function(e,i){var s=e.el.getBoundingClientRect().top+t.instance.scroll.y,n=s+e.el.offsetHeight,o=t.getRelativeOffset(e.offset);t.els[i].top=s+o[0],t.els[i].bottom=n-o[1]}),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(t){var e=[0,0];if(t)for(var i=0;i<t.length;i++)"string"==typeof t[i]?t[i].includes("%")?e[i]=parseInt(t[i].replace("%","")*this.windowHeight/100):e[i]=parseInt(t[i]):e[i]=t[i];return e}},{key:"scrollTo",value:function(t,e,i,s,n,o){var l,r=e?parseInt(e):0;if("string"==typeof t){if("top"===t)l=this.html;else if("bottom"===t)l=this.html.offsetHeight-window.innerHeight;else if(!(l=document.querySelector(t)))return}else if("number"==typeof t)l=parseInt(t);else{if(!t||!t.tagName)return void console.warn("`targetOption` parameter is not valid");l=t}if(r="number"!=typeof l?l.getBoundingClientRect().top+r+this.instance.scroll.y:l+r,o){r=r.toFixed();window.addEventListener("scroll",function t(){window.pageYOffset.toFixed()===r&&(window.removeEventListener("scroll",t),o())})}window.scrollTo({top:r,behavior:"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){f(a(i.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),i}(w),O=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;function C(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function M(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(t){s[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(n){return!1}}var _=M()?Object.assign:function(t,e){for(var i,s,n=C(t),o=1;o<arguments.length;o++){for(var l in i=Object(arguments[o]))D.call(i,l)&&(n[l]=i[l]);if(O){s=O(i);for(var r=0;r<s.length;r++)L.call(i,s[r])&&(n[s[r]]=i[s[r]])}}return n};function x(){}x.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,l=s.length;o<l;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var H=x,B=S(function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,l,r;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),r=s.reduce(function(t,e){return t+e}),o=i.reduce(function(t,e){return t+e}),l=r/s.length,n=o/i.length,Math.abs(l)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(b)}),j={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1},P=Object.prototype.toString,A=Object.prototype.hasOwnProperty,Y=function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)A.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==P.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=R(t[n],t)}};function R(t,e){return function(){return t.apply(e,arguments)}}var X=B.Lethargy,I="virtualscroll",F=W,V={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32};function W(t){Y(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=_({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new X),this._emitter=new H,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}function q(t,e,i){return(1-i)*t+i*e}function K(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),s=i.transform||i.webkitTransform||i.mozTransform,n=s.match(/^matrix3d\((.+)\)$/);return n?(e.x=n?parseFloat(n[1].split(", ")[12]):0,e.y=n?parseFloat(n[1].split(", ")[13]):0):(n=s.match(/^matrix\((.+)\)$/),e.x=n?parseFloat(n[1].split(", ")[4]):0,e.y=n?parseFloat(n[1].split(", ")[5]):0),e}}function z(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}W.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(I,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},W.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,j.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},W.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},W.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},W.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},W.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case V.LEFT:case V.UP:e.deltaY=this.options.keyStep;break;case V.RIGHT:case V.DOWN:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case V.SPACE:e.deltaY=-i;break;default:return}this._notify(t)},W.prototype._bind=function(){j.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),j.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),j.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),j.hasPointer&&j.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),j.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},W.prototype._unbind=function(){j.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),j.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),j.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),j.hasPointer&&j.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),j.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},W.prototype.on=function(t,e){this._emitter.on(I,t,e);var i=this._emitter.e;i&&i[I]&&1===i[I].length&&this._bind()},W.prototype.off=function(t,e){this._emitter.off(I,t,e);var i=this._emitter.e;(!i[I]||i[I].length<=0)&&this._unbind()},W.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},W.prototype.destroy=function(){this._emitter.off(),this._unbind()};var N=4,U=.001,G=1e-7,$=10,J=11,Q=1/(J-1),Z="function"==typeof Float32Array;function tt(t,e){return 1-3*e+3*t}function et(t,e){return 3*e-6*t}function it(t){return 3*t}function st(t,e,i){return((tt(e,i)*t+et(e,i))*t+it(e))*t}function nt(t,e,i){return 3*tt(e,i)*t*t+2*et(e,i)*t+it(e)}function ot(t,e,i,s,n){var o,l,r=0;do{(o=st(l=e+(i-e)/2,s,n)-t)>0?i=l:e=l}while(Math.abs(o)>G&&++r<$);return l}function lt(t,e,i,s){for(var n=0;n<N;++n){var o=nt(e,i,s);if(0===o)return e;e-=(st(e,i,s)-t)/o}return e}function rt(t){return t}var at=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return rt;for(var n=Z?new Float32Array(J):new Array(J),o=0;o<J;++o)n[o]=st(o*Q,t,i);return function(o){return 0===o?0:1===o?1:st(function(e){for(var s=0,o=1,l=J-1;o!==l&&n[o]<=e;++o)s+=Q;var r=s+(e-n[--o])/(n[o+1]-n[o])*Q,a=nt(r,t,i);return a>=U?lt(e,r,t,i):0===a?r:ot(e,s,s+Q,t,i)}(o),e,s)}},ct={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32,TAB:9,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35},ht=function(t){function i(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(this,i),window.scrollTo(0,0),history.scrollRestoration="manual",(t=u(this,a(i).call(this,s))).inertia&&(t.lerp=.1*t.inertia),t.isScrolling=!1,t.isDraggingScrollbar=!1,t.isTicking=!1,t.hasScrollTicking=!1,t.parallaxElements=[],t.stop=!1,t.scrollbarContainer=s.scrollbarContainer,t.checkKey=t.checkKey.bind(h(t)),window.addEventListener("keydown",t.checkKey,!1),t}return r(i,t),s(i,[{key:"init",value:function(){var t=this;this.html.classList.add(this.smoothClass),this.instance=l({delta:{x:0,y:0}},this.instance),this.vs=new F({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on(function(e){t.stop||(t.isTicking||t.isDraggingScrollbar||(requestAnimationFrame(function(){t.updateDelta(e),t.isScrolling||t.startScrolling()}),t.isTicking=!0),t.isTicking=!1)}),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.detectElements(),this.transformElements(!0,!0),this.checkScroll(!0),f(a(i.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){this.instance.limit=this.el.offsetHeight-this.windowHeight}},{key:"startScrolling",value:function(){this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(t){var e=this;if(this.stop)t.keyCode==ct.TAB&&requestAnimationFrame(function(){e.html.scrollTop=0,document.body.scrollTop=0});else{switch(t.keyCode){case ct.TAB:requestAnimationFrame(function(){e.html.scrollTop=0,document.body.scrollTop=0,e.scrollTo(document.activeElement,-window.innerHeight/2)});break;case ct.UP:this.instance.delta.y-=240;break;case ct.DOWN:this.instance.delta.y+=240;break;case ct.PAGEUP:this.instance.delta.y-=window.innerHeight;break;case ct.PAGEDOWN:this.instance.delta.y+=window.innerHeight;break;case ct.HOME:this.instance.delta.y-=this.instance.limit;break;case ct.END:this.instance.delta.y+=this.instance.limit;break;case ct.SPACE:document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||(t.shiftKey?this.instance.delta.y-=window.innerHeight:this.instance.delta.y+=window.innerHeight);break;default:return}this.instance.delta.y<0&&(this.instance.delta.y=0),this.instance.delta.y>this.instance.limit&&(this.instance.delta.y=this.instance.limit),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}}},{key:"checkScroll",value:function(){var t=this;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(requestAnimationFrame(function(){return t.checkScroll()}),this.hasScrollTicking=!0),this.updateScroll();var e=Math.abs(this.instance.delta.y-this.instance.scroll.y);!this.animatingScroll&&(e<.5&&0!=this.instance.delta.y||e<.5&&0==this.instance.delta.y)&&this.stopScrolling();for(var s=this.sections.length-1;s>=0;s--)this.sections[s].persistent||this.instance.scroll.y>this.sections[s].offset&&this.instance.scroll.y<this.sections[s].limit?(this.transform(this.sections[s].el,0,-this.instance.scroll.y),this.sections[s].inView||(this.sections[s].inView=!0,this.sections[s].el.style.opacity=1,this.sections[s].el.style.pointerEvents="all",this.sections[s].el.setAttribute("data-".concat(this.name,"-section-inview"),""))):(this.sections[s].inView&&(this.sections[s].inView=!1,this.sections[s].el.style.opacity=0,this.sections[s].el.style.pointerEvents="none",this.sections[s].el.removeAttribute("data-".concat(this.name,"-section-inview"))),this.transform(this.sections[s].el,0,0));this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.timestamp=Date.now()),this.detectElements(),this.transformElements();var n=this.instance.scroll.y/this.instance.limit*this.scrollBarLimit;this.transform(this.scrollbarThumb,0,n),f(a(i.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowMiddle=this.windowHeight/2,this.update()}},{key:"updateDelta",value:function(t){this.instance.delta.y-=t.deltaY*this.multiplier,this.instance.delta.y<0&&(this.instance.delta.y=0),this.instance.delta.y>this.instance.limit&&(this.instance.delta.y=this.instance.limit)}},{key:"updateScroll",value:function(t){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll.y=q(this.instance.scroll.y,this.instance.delta.y,this.lerp):this.instance.scroll.y>this.instance.limit?this.setScroll(this.instance.scroll.x,this.instance.limit):this.instance.scroll.y<0?this.setScroll(this.instance.scroll.x,0):this.setScroll(this.instance.scroll.x,this.instance.delta.y)}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){this.instance.delta.y!=this.instance.scroll.y?this.instance.speed=(this.instance.delta.y-this.instance.scroll.y)/Math.max(1,Date.now()-this.timestamp):this.instance.speed=0}},{key:"initScrollBar",value:function(){this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.instance.limit+this.windowHeight<=this.windowHeight||(this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit+this.scrollbarHeight),"px"),this.scrollBarLimit=this.scrollbarHeight-this.scrollbarThumb.getBoundingClientRect().height)}},{key:"reinitScrollBar",value:function(){this.instance.limit+this.windowHeight<=this.windowHeight||(this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit+this.scrollbarHeight),"px"),this.scrollBarLimit=this.scrollbarHeight-this.scrollbarThumb.getBoundingClientRect().height)}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(t){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(t){this.isDraggingScrollbar=!1,this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(t){var e=this;!this.isTicking&&this.isDraggingScrollbar&&(requestAnimationFrame(function(){var i=100*(t.clientY-e.scrollbarBCR.top)/e.scrollbarHeight*e.instance.limit/100;i>0&&i<e.instance.limit&&(e.instance.delta.y=i)}),this.isTicking=!0),this.isTicking=!1}},{key:"addElements",value:function(){var t=this;this.els=[],this.parallaxElements=[],this.sections.forEach(function(e,i){t.sections[i].el.querySelectorAll("[data-".concat(t.name,"]")).forEach(function(e,s){var n,o,l=e.dataset[t.name+"Class"]||t.class,r=e.dataset[t.name+"Repeat"],a=e.dataset[t.name+"Call"],c=e.dataset[t.name+"Position"],h=e.dataset[t.name+"Delay"],u=e.dataset[t.name+"Direction"],d="string"==typeof e.dataset[t.name+"Sticky"],f=!!e.dataset[t.name+"Speed"]&&parseFloat(e.dataset[t.name+"Speed"])/10,p="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,v=e.dataset[t.name+"Target"];o=void 0!==v?document.querySelector("".concat(v)):e;var y=(n=t.sections[i].inView?o.getBoundingClientRect().top+t.instance.scroll.y-K(o).y:o.getBoundingClientRect().top-K(t.sections[i].el).y-K(o).y)+o.offsetHeight,m=(y-n)/2+n;if(d){var g=e.getBoundingClientRect().top,w=g-n;n+=window.innerHeight,m=((y=g+o.offsetHeight-e.offsetHeight-w)-n)/2+n}r="false"!=r&&(null!=r||t.repeat);var b=[0,0];if(p)for(var S=0;S<p.length;S++)"string"==typeof p[S]?p[S].includes("%")?b[S]=parseInt(p[S].replace("%","")*t.windowHeight/100):b[S]=parseInt(p[S]):b[S]=p[S];var k={el:e,id:s,class:l,top:n+b[0],middle:m,bottom:y-b[1],offset:p,repeat:r,inView:!!e.classList.contains(l),call:a,speed:f,delay:h,position:c,target:o,direction:u,sticky:d};t.els.push(k),(!1!==f||d)&&t.parallaxElements.push(k)})})}},{key:"addSections",value:function(){var t=this;this.sections=[];var e=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));0===e.length&&(e=[this.el]),e.forEach(function(e,i){var s=e.getBoundingClientRect().top-1.5*window.innerHeight-K(e).y,n=s+e.getBoundingClientRect().height+2*window.innerHeight,o={el:e,offset:s,limit:n,inView:!1,persistent:"string"==typeof e.dataset[t.name+"Persistent"]};t.sections[i]=o})}},{key:"transform",value:function(t,e,i,s){var n;if(s){var o=K(t),l=q(o.x,e,s),r=q(o.y,i,s);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l,",").concat(r,",0,1)")}else n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e,",").concat(i,",0,1)");t.style.webkitTransform=n,t.style.msTransform=n,t.style.transform=n}},{key:"transformElements",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.instance.scroll.y+this.windowHeight,n=this.instance.scroll.y+this.windowMiddle;this.parallaxElements.forEach(function(o,l){var r=!1;if(t&&(r=0),o.inView||i)switch(o.position){case"top":r=e.instance.scroll.y*-o.speed;break;case"elementTop":r=(s-o.top)*-o.speed;break;case"bottom":r=(e.instance.limit-s+e.windowHeight)*o.speed;break;default:r=(n-o.middle)*-o.speed}o.sticky&&(r=o.inView?e.instance.scroll.y-o.top+window.innerHeight:e.instance.scroll.y<o.top-window.innerHeight&&e.instance.scroll.y<o.top-window.innerHeight/2?0:e.instance.scroll.y>o.bottom&&e.instance.scroll.y>o.bottom+100&&o.bottom-o.top+window.innerHeight),!1!==r&&("horizontal"===o.direction?e.transform(o.el,r,0,!t&&o.delay):e.transform(o.el,0,r,!t&&o.delay))})}},{key:"scrollTo",value:function(t,e){var i,s=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.25,0,.35,1],l=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=arguments.length>5?arguments[5]:void 0,a=e?parseInt(e):0;if(o=at.apply(void 0,p(o)),"string"==typeof t){if("top"===t)i=0;else if("bottom"===t)i=this.instance.limit;else if(!(i=document.querySelector(t)))return}else if("number"==typeof t)i=parseInt(t);else{if(!t||!t.tagName)return void console.warn("`targetOption` parameter is not valid");i=t}if("number"!=typeof i){if(!z(i).includes(this.el))return;var c=i.getBoundingClientRect().top,h=z(i).find(function(t){return s.sections.find(function(e){return e.el==t})}),u=0;h&&(u=K(h).y),a=c+a-u}else a=i+a;var d=parseFloat(this.instance.delta.y),f=Math.max(0,Math.min(a,this.instance.limit))-d,v=function(t){l?s.setScroll(s.instance.delta.x,d+f*t):s.instance.delta.y=d+f*t};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var y=Date.now();!function t(){var e=(Date.now()-y)/n;e>1?(v(1),s.animatingScroll=!1,0==n&&s.update(),r&&r()):(s.scrollToRaf=requestAnimationFrame(t),v(o(e)))}()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(t,e){this.instance=l({},this.instance,{scroll:{x:t,y:e},delta:{x:t,y:e},speed:0})}},{key:"destroy",value:function(){f(a(i.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),i}(w),ut=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.options=i,Object.assign(this,g,i),this.init()}return s(t,[{key:"init",value:function(){if(this.smoothMobile||(this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1),!0!==this.smooth||this.isMobile?this.scroll=new T(this.options):this.scroll=new ht(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),e=document.getElementById(t);e&&this.scroll.scrollTo(e)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,e,i,s,n,o){this.scroll.scrollTo(t,e,i,s,n,o)}},{key:"setScroll",value:function(t,e){this.scroll.setScroll(t,e)}},{key:"on",value:function(t,e){this.scroll.setEvents(t,e)}},{key:"off",value:function(t,e){this.scroll.unsetEvents(t,e)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),t}(),dt=ut;exports.default=dt;
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=r(require("locomotive-scroll"));function r(e){return e&&e.__esModule?e:{default:e}}var t=new e.default;
},{"locomotive-scroll":"ez7q"}]},{},["mpVp"], null)
//# sourceMappingURL=script.0b5e5513.js.map