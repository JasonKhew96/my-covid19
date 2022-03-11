/*! For license information please see component---src-pages-index-tsx-b5af03daacc2c79beafb.js.LICENSE.txt */
(self.webpackChunkmy_covid19=self.webpackChunkmy_covid19||[]).push([[691],{1118:function(t,e,r){"use strict";r.d(e,{FT:function(){return u}});var n=r(885),a=r(7294),i=r(5893),o=["as","disabled"];function u(t){var e=t.tagName,r=t.disabled,n=t.href,a=t.target,i=t.rel,o=t.onClick,u=t.tabIndex,c=void 0===u?0:u,l=t.type;e||(e=null!=n||null!=a||null!=i?"a":"button");var s={tagName:e};if("button"===e)return[{type:l||"button",disabled:r},s];var f=function(t){(r||"a"===e&&function(t){return!t||"#"===t.trim()}(n))&&t.preventDefault(),r?t.stopPropagation():null==o||o(t)};return"a"===e&&(n||(n="#"),r&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:r?void 0:c,href:n,target:"a"===e?a:void 0,"aria-disabled":r||void 0,rel:"a"===e?i:void 0,onClick:f,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),f(t))}},s]}var c=a.forwardRef((function(t,e){var r=t.as,a=t.disabled,c=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,o),l=u(Object.assign({tagName:r,disabled:a},c)),s=(0,n.Z)(l,2),f=s[0],d=s[1].tagName;return(0,i.jsx)(d,Object.assign({},c,f,{ref:e}))}));c.displayName="Button",e.ZP=c},5900:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&t.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&t.push(u);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},6594:function(t,e,r){"use strict";var n=r(4942),a=r(885),i=r(5987),o=r(5900),u=r.n(o),c=r(7294),l=r(1118),s=r(9541),f=r(5893),d=["as","bsPrefix","variant","size","active","className"];function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=c.forwardRef((function(t,e){var r=t.as,n=t.bsPrefix,o=t.variant,c=t.size,b=t.active,v=t.className,y=(0,i.Z)(t,d),m=(0,s.vE)(n,"btn"),g=(0,l.FT)(p({tagName:r},y)),O=(0,a.Z)(g,2),h=O[0],j=O[1].tagName;return(0,f.jsx)(j,p(p(p({},h),y),{},{ref:e,className:u()(v,m,b&&"active",o&&"".concat(m,"-").concat(o),c&&"".concat(m,"-").concat(c),y.href&&y.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=v},9541:function(t,e,r){"use strict";r.d(e,{SC:function(){return u},vE:function(){return o}});var n=r(7294);r(5893);var a=["xxl","xl","lg","md","sm","xs"],i=n.createContext({prefixes:{},breakpoints:a});i.Consumer,i.Provider;function o(t,e){var r=(0,n.useContext)(i).prefixes;return t||r[e]||e}function u(){return"rtl"===(0,n.useContext)(i).dir}},6738:function(t,e,r){"use strict";r.r(e);var n=r(7294),a=r(6594),i=r(1597);e.default=function(){return n.createElement("main",{style:{padding:32}},n.createElement("p",null,n.createElement(i.Link,{to:"/cases"},n.createElement(a.Z,null,"CASES"))),n.createElement("p",null,n.createElement(i.Link,{to:"/tests"},n.createElement(a.Z,null,"TESTS"))))}},4942:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})},5987:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(3366);function a(t,e){if(null==t)return{};var r,a,i=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},3366:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}r.d(e,{Z:function(){return n}})},885:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(181);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i=[],o=!0,u=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b5af03daacc2c79beafb.js.map