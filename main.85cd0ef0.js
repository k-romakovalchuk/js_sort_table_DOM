parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function e(t){return a(t)||o(t)||n(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return i(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=document.querySelector("thead"),c=document.querySelector("tbody"),u=c.querySelectorAll("tr"),f=l.querySelector("tr");l.addEventListener("click",function(r){var n=r.target;if(n===f.children[0]){var o,a=t(e(u).sort(function(t,e){return t.children[0].textContent.localeCompare(e.children[0].textContent)}));try{for(a.s();!(o=a.n()).done;){var i=o.value;c.append(i)}}catch(S){a.e(S)}finally{a.f()}}if(n===f.children[1]){var l,d=t(e(u).sort(function(t,e){return t.children[1].textContent.localeCompare(e.children[1].textContent)}));try{for(d.s();!(l=d.n()).done;){var y=l.value;c.append(y)}}catch(S){d.e(S)}finally{d.f()}}if(n===f.children[2]){var s,h=t(e(u).sort(function(t,e){return t.children[2].textContent-e.children[2].textContent}));try{for(h.s();!(s=h.n()).done;){var p=s.value;c.append(p)}}catch(S){h.e(S)}finally{h.f()}}if(n===f.children[3]){var v,m=t(e(u).sort(function(t,e){return parseFloat(t.children[3].textContent.replace(/^./,""))-parseFloat(e.children[3].textContent.replace(/^./,""))}));try{for(m.s();!(v=m.n()).done;){var b=v.value;c.append(b)}}catch(S){m.e(S)}finally{m.f()}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.85cd0ef0.js.map