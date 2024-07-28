// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,c,f,l,s,p,y,d,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,v=void 0,(v=y-p.length)<0?p:p=d?p+m(v):m(v)+p)),c+=n.arg||"",f+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=O.exec(r);n;)(t=r.slice(o,O.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),o=O.lastIndex,n=O.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){var t,e;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var T,k=Object.prototype,I=k.toString,V=k.__defineGetter__,N=k.__defineSetter__,P=k.__lookupGetter__,$=k.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=k,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),a&&N&&N.call(r,t,e.set),r};var C=T;function B(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=/./;function G(r){return"boolean"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function X(r,t){return null!=r&&M.call(r,t)}var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=Z()?function(r){var t,e,n;if(null==r)return W.call(r);e=r[z],t=X(r,z);try{r[z]=void 0}catch(t){return W.call(r)}return n=W.call(r),t?r[z]=e:delete r[z],n}:function(r){return W.call(r)},D=Boolean,H=Boolean.prototype.toString;var J=Z();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof er?er:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!G(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;B(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var t,e,n,o;if(("Object"===(e=q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=fr.exec(n.toString()))return t[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}B(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!lr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(sr));var yr="function"==typeof R||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function dr(r){return"function"===yr(r)}function vr(r){return"number"==typeof r}var gr=Number,br=gr.prototype.toString;var wr=Z();function hr(r){return"object"==typeof r&&(r instanceof gr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function mr(r){return vr(r)||hr(r)}B(mr,"isPrimitive",vr),B(mr,"isObject",hr);var jr="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=dr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=Ar;var Or=Object.prototype;function Ur(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(t=function(r){return null==r?null:(r=_r(r),Sr(r))}(r),!t||!X(r,"constructor")&&X(t,"constructor")&&dr(t.constructor)&&"[object Function]"===q(t.constructor)&&X(t,"isPrototypeOf")&&dr(t.isPrototypeOf)&&(t===Or||function(r){var t;for(t in r)if(!X(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!dr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!dr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Ur(t)?(X(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return B(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:vr(e.value)?t(e.value):n.invalid,done:!1}})),B(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&dr(r[jr])&&B(o,jr,(function(){return xr(r[jr](),t,n)})),o}function Fr(r){return r!=r}var Tr="function"==typeof Uint32Array;var kr="function"==typeof Uint32Array?Uint32Array:null;var Ir,Vr="function"==typeof Uint32Array?Uint32Array:void 0;Ir=function(){var r,t,e;if("function"!=typeof kr)return!1;try{t=new kr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Tr&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Nr=Ir,Pr="function"==typeof Float64Array;var $r="function"==typeof Float64Array?Float64Array:null;var Cr,Br="function"==typeof Float64Array?Float64Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r([1,3.14,-3.14,NaN]),e=t,r=(Pr&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr=Cr,Gr="function"==typeof Uint8Array;var Lr="function"==typeof Uint8Array?Uint8Array:null;var Zr,Wr="function"==typeof Uint8Array?Uint8Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof Lr)return!1;try{t=new Lr(t=[1,3.14,-3.14,256,257]),e=t,r=(Gr&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Mr=Zr,Xr="function"==typeof Uint16Array;var Yr="function"==typeof Uint16Array?Uint16Array:null;var zr,qr="function"==typeof Uint16Array?Uint16Array:void 0;zr=function(){var r,t,e;if("function"!=typeof Yr)return!1;try{t=new Yr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Xr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Dr,Hr={uint16:zr,uint8:Mr};(Dr=new Hr.uint16(1))[0]=4660;var Jr=52===new Hr.uint8(Dr.buffer)[0],Kr=!0===Jr?1:0,Qr=new Rr(1),rt=new Nr(Qr.buffer);function tt(r){return Qr[0]=r,rt[Kr]}var et=!0===Jr?1:0,nt=new Rr(1),ot=new Nr(nt.buffer);function it(r,t){return nt[0]=r,ot[et]=t>>>0,nt[0]}var at=Number.POSITIVE_INFINITY,ut=gr.NEGATIVE_INFINITY,ct=1023;var ft=.6931471803691238,lt=1.9082149292705877e-10,st=.41421356237309503,pt=-.2928932188134525,yt=1.862645149230957e-9,dt=5551115123125783e-32,vt=9007199254740992,gt=.6666666666666666;function bt(r){var t,e,n,o,i,a,u,c,f,l;if(r<-1||Fr(r))return NaN;if(-1===r)return ut;if(r===at)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<st){if(n<yt)return n<dt?r:r-r*r*.5;r>pt&&(l=0,o=r,e=1)}return 0!==l&&(n<vt?(i=(l=((e=tt(f=1+r))>>20)-ct)>0?1-(f-r):r-(f-1),i/=f):(l=((e=tt(f=r))>>20)-ct,i=0),(e&=1048575)<434334?f=it(f,1072693248|e):(l+=1,f=it(f,1071644672|e),e=1048576-e>>2),o=f-1),t=.5*o*o,0===e?0===o?l*ft+(i+=l*lt):l*ft-((c=t*(1-gt*o))-(l*lt+i)-o):(c=(u=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?o-(t-a*(t+c)):l*ft-(t-(a*(t+c)+(l*lt+i))-o))}var wt=1/(1<<28);function ht(r){var t,e;return Fr(r)||r<-1||r>1?NaN:1===r?at:-1===r?ut:(r<0&&(t=!0,r=-r),r<wt?t?-r:r:(e=r<.5?.5*bt((e=r+r)+e*r/(1-r)):.5*bt((r+r)/(1-r)),t?-e:e))}function mt(r){return xr(r,ht)}export{mt as default};
//# sourceMappingURL=mod.js.map