// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function E(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function V(r){var t,n,e;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var k,N=Object.prototype,I=N.toString,P=N.__defineGetter__,C=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===I.call(n))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(L.call(r,t)||R.call(r,t)?(e=r.__proto__,r.__proto__=N,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&C&&C.call(r,t,n.set),r};var $=k;function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var M=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=W()?function(r){var t,n,e;if(null==r)return Y.call(r);n=r[H],t=q(r,H);try{r[H]=void 0}catch(t){return Y.call(r)}return e=Y.call(r),t?r[H]=n:delete r[H],e}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=W();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return X(r)||tr(r)}function er(){return new Function("return this;")()}G(nr,"isPrimitive",X),G(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ar="object"==typeof ur?ur:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!X(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr,br=/^\s*function\s*([^(]*)/i;G(pr,"REGEXP",br),yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var vr=yr;function dr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(dr);function wr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=br.exec(e.toString()))return t[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}G(dr,"isObjectLikeArray",gr);var hr="function"==typeof M||"object"==typeof sr||"function"==typeof lr?function(r){return wr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?wr(r).toLowerCase():t};function mr(r){return"function"===hr(r)}var jr=/./;function Er(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ar(r){return"boolean"==typeof r}var _r=Boolean.prototype.toString;var Or=W();function Tr(r){return"object"==typeof r&&(r instanceof K||(Or?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Sr(r){return Ar(r)||Tr(r)}function xr(){return new Function("return this;")()}Er(Sr,"isPrimitive",Ar),Er(Sr,"isObject",Tr);var Ur="object"==typeof self?self:null,Br="object"==typeof window?window:null,Fr="object"==typeof ur?ur:null,Vr="object"==typeof globalThis?globalThis:null;var kr=function(r){if(arguments.length){if(!Ar(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xr()}if(Vr)return Vr;if(Ur)return Ur;if(Br)return Br;if(Fr)return Fr;throw new Error("unexpected error. Unable to resolve global object.")}(),Nr=kr.document&&kr.document.childNodes,Ir=Int8Array;function Pr(){return/^\s*function\s*([^(]*)/i}var Cr=/^\s*function\s*([^(]*)/i;function Lr(r){return null!==r&&"object"==typeof r}Er(Pr,"REGEXP",Cr);var Rr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Lr);function $r(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Cr.exec(e.toString()))return t[1]}return Lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Er(Lr,"isObjectLikeArray",Rr);var Gr="function"==typeof jr||"object"==typeof Ir||"function"==typeof Nr?function(r){return $r(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?$r(r).toLowerCase():t};function Mr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Gr(r)}(r.next)}function Xr(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Zr(r){return"number"==typeof r}var Wr=Number,Yr=Wr.prototype.toString;var zr=W();function qr(r){return"object"==typeof r&&(r instanceof Wr||(zr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Dr(r){return Zr(r)||qr(r)}Xr(Dr,"isPrimitive",Zr),Xr(Dr,"isObject",qr);var Hr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Jr=/./;function Kr(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Qr(r){return"boolean"==typeof r}var rt=Boolean.prototype.toString;var tt=W();function nt(r){return"object"==typeof r&&(r instanceof K||(tt?function(r){try{return rt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function et(r){return Qr(r)||nt(r)}function ot(){return new Function("return this;")()}Kr(et,"isPrimitive",Qr),Kr(et,"isObject",nt);var it="object"==typeof self?self:null,ut="object"==typeof window?window:null,at="object"==typeof ur?ur:null,ct="object"==typeof globalThis?globalThis:null;var ft=function(r){if(arguments.length){if(!Qr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ot()}if(ct)return ct;if(it)return it;if(ut)return ut;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}(),lt=ft.document&&ft.document.childNodes,st=Int8Array;function pt(){return/^\s*function\s*([^(]*)/i}var yt=/^\s*function\s*([^(]*)/i;function bt(r){return null!==r&&"object"==typeof r}Kr(pt,"REGEXP",yt);var vt=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(bt);function dt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yt.exec(e.toString()))return t[1]}return bt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Kr(bt,"isObjectLikeArray",vt);var gt="function"==typeof Jr||"object"==typeof st||"function"==typeof lt?function(r){return dt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dt(r).toLowerCase():t};function wt(r){return"function"===gt(r)}var ht=Object,mt=/./;function jt(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Et(r){return"boolean"==typeof r}var At=Boolean.prototype.toString;var _t=W();function Ot(r){return"object"==typeof r&&(r instanceof K||(_t?function(r){try{return At.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tt(r){return Et(r)||Ot(r)}function St(){return new Function("return this;")()}jt(Tt,"isPrimitive",Et),jt(Tt,"isObject",Ot);var xt="object"==typeof self?self:null,Ut="object"==typeof window?window:null,Bt="object"==typeof ur?ur:null,Ft="object"==typeof globalThis?globalThis:null;var Vt=function(r){if(arguments.length){if(!Et(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return St()}if(Ft)return Ft;if(xt)return xt;if(Ut)return Ut;if(Bt)return Bt;throw new Error("unexpected error. Unable to resolve global object.")}(),kt=Vt.document&&Vt.document.childNodes,Nt=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var Pt=/^\s*function\s*([^(]*)/i;function Ct(r){return null!==r&&"object"==typeof r}jt(It,"REGEXP",Pt);var Lt=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Ct);function Rt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Pt.exec(e.toString()))return t[1]}return Ct(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}jt(Ct,"isObjectLikeArray",Lt);var $t="function"==typeof mt||"object"==typeof Nt||"function"==typeof kt?function(r){return Rt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Rt(r).toLowerCase():t};var Gt,Mt,Xt=Object.getPrototypeOf;Mt=Object.getPrototypeOf,Gt="function"===$t(Mt)?Xt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Zt=Gt;var Wt=Object.prototype;function Yt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(t=function(r){return null==r?null:(r=ht(r),Zt(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&wt(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&wt(t.isPrototypeOf)&&(t===Wt||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function zt(r,t){return Yt(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t))}function qt(r,t,n){var e,o,i,u;if(!Mr(r))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!mr(t))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=zt(e,n)))throw i;return G(o={},"next",a),G(o,"return",c),Hr&&mr(r[Hr])&&G(o,Hr,f),o;function a(){var n;return u?{done:!0}:(n=r.next()).done?(u=!0,n):{value:Zr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return qt(r[Hr](),t,e)}}function Dt(r){return r!=r}var Ht="function"==typeof Uint32Array;var Jt="function"==typeof Uint32Array?Uint32Array:null;var Kt,Qt="function"==typeof Uint32Array?Uint32Array:void 0;Kt=function(){var r,t;if("function"!=typeof Jt)return!1;try{r=function(r){return Ht&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Jt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qt:function(){throw new Error("not implemented")};var rn=Kt,tn="function"==typeof Float64Array;var nn="function"==typeof Float64Array?Float64Array:null;var en,on="function"==typeof Float64Array?Float64Array:void 0;en=function(){var r,t;if("function"!=typeof nn)return!1;try{r=function(r){return tn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new nn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var un=en,an="function"==typeof Uint8Array;var cn="function"==typeof Uint8Array?Uint8Array:null;var fn,ln="function"==typeof Uint8Array?Uint8Array:void 0;fn=function(){var r,t;if("function"!=typeof cn)return!1;try{r=function(r){return an&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new cn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var sn=fn,pn="function"==typeof Uint16Array;var yn="function"==typeof Uint16Array?Uint16Array:null;var bn,vn="function"==typeof Uint16Array?Uint16Array:void 0;bn=function(){var r,t;if("function"!=typeof yn)return!1;try{r=function(r){return pn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new yn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var dn,gn={uint16:bn,uint8:sn};(dn=new gn.uint16(1))[0]=4660;var wn=52===new gn.uint8(dn.buffer)[0],hn=!0===wn?1:0,mn=new un(1),jn=new rn(mn.buffer);function En(r){return mn[0]=r,jn[hn]}var An=!0===wn?1:0,_n=new un(1),On=new rn(_n.buffer);function Tn(r,t){return _n[0]=r,On[An]=t>>>0,_n[0]}var Sn=Number.POSITIVE_INFINITY,xn=Wr.NEGATIVE_INFINITY;var Un=.6931471803691238,Bn=1.9082149292705877e-10;function Fn(r){var t,n,e,o,i,u,a,c,f,l;if(r<-1||Dt(r))return NaN;if(-1===r)return xn;if(r===Sn)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=En(f=1+r))>>20)-1023)>0?1-(f-r):r-(f-1),i/=f):(l=((n=En(f=r))>>20)-1023,i=0),(n&=1048575)<434334?f=Tn(f,1072693248|n):(l+=1,f=Tn(f,1071644672|n),n=1048576-n>>2),o=f-1),t=.5*o*o,0===n?0===o?l*Un+(i+=l*Bn):l*Un-((c=t*(1-.6666666666666666*o))-(l*Bn+i)-o):(c=(a=(u=o/(2+o))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===l?o-(t-u*(t+c)):l*Un-(t-(u*(t+c)+(l*Bn+i))-o))}function Vn(r){var t,n;return Dt(r)||r<-1||r>1?NaN:1===r?Sn:-1===r?xn:(r<0&&(t=!0,r=-r),r<3.725290298461914e-9?t?-r:r:(n=r<.5?.5*Fn((n=r+r)+n*r/(1-r)):.5*Fn((r+r)/(1-r)),t?-n:n))}function kn(r){return qt(r,Vn)}export{kn as default};
//# sourceMappingURL=mod.js.map