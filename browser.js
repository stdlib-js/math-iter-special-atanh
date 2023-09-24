// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,v,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function E(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,T=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function V(r){var t,n,e;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var k,N=Object.prototype,I=N.toString,P=N.__defineGetter__,C=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===I.call(n))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(L.call(r,t)||R.call(r,t)?(e=r.__proto__,r.__proto__=N,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&C&&C.call(r,t,n.set),r};var $=k;function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var M=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=W()?function(r){var t,n,e;if(null==r)return Y.call(r);n=r[H],t=q(r,H);try{r[H]=void 0}catch(t){return Y.call(r)}return e=Y.call(r),t?r[H]=n:delete r[H],e}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=W();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return X(r)||tr(r)}function er(){return new Function("return this;")()}G(nr,"isPrimitive",X),G(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!X(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;G(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=sr;function br(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(br);function vr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pr.exec(e.toString()))return t[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}G(br,"isObjectLikeArray",dr);var gr="function"==typeof M||"object"==typeof fr||"function"==typeof cr?function(r){return vr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?vr(r).toLowerCase():t};function wr(r){return"function"===gr(r)}var hr=/./;function mr(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function jr(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString,Ar=W();function _r(r){return"object"==typeof r&&(r instanceof K||(Ar?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tr(r){return jr(r)||_r(r)}function Or(){return new Function("return this;")()}mr(Tr,"isPrimitive",jr),mr(Tr,"isObject",_r);var Sr="object"==typeof self?self:null,xr="object"==typeof window?window:null,Ur="object"==typeof globalThis?globalThis:null,Br=function(r){if(arguments.length){if(!jr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Or()}if(Ur)return Ur;if(Sr)return Sr;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")}(),Fr=Br.document&&Br.document.childNodes,Vr=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Nr=/^\s*function\s*([^(]*)/i;function Ir(r){return null!==r&&"object"==typeof r}mr(kr,"REGEXP",Nr);var Pr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Ir);function Cr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Nr.exec(e.toString()))return t[1]}return Ir(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mr(Ir,"isObjectLikeArray",Pr);var Lr="function"==typeof hr||"object"==typeof Vr||"function"==typeof Fr?function(r){return Cr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Cr(r).toLowerCase():t};function Rr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Lr(r)}(r.next)}function $r(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Gr(r){return"number"==typeof r}var Mr=Number,Xr=Mr.prototype.toString,Zr=W();function Wr(r){return"object"==typeof r&&(r instanceof Mr||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Yr(r){return Gr(r)||Wr(r)}$r(Yr,"isPrimitive",Gr),$r(Yr,"isObject",Wr);var zr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null,qr=/./;function Dr(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Hr(r){return"boolean"==typeof r}var Jr=Boolean.prototype.toString,Kr=W();function Qr(r){return"object"==typeof r&&(r instanceof K||(Kr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function rt(r){return Hr(r)||Qr(r)}function tt(){return new Function("return this;")()}Dr(rt,"isPrimitive",Hr),Dr(rt,"isObject",Qr);var nt="object"==typeof self?self:null,et="object"==typeof window?window:null,ot="object"==typeof globalThis?globalThis:null,it=function(r){if(arguments.length){if(!Hr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tt()}if(ot)return ot;if(nt)return nt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")}(),ut=it.document&&it.document.childNodes,at=Int8Array;function ct(){return/^\s*function\s*([^(]*)/i}var ft=/^\s*function\s*([^(]*)/i;function lt(r){return null!==r&&"object"==typeof r}Dr(ct,"REGEXP",ft);var st=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(lt);function pt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=ft.exec(e.toString()))return t[1]}return lt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Dr(lt,"isObjectLikeArray",st);var yt="function"==typeof qr||"object"==typeof at||"function"==typeof ut?function(r){return pt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?pt(r).toLowerCase():t};function bt(r){return"function"===yt(r)}var dt=Object,vt=/./;function gt(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function wt(r){return"boolean"==typeof r}var ht=Boolean.prototype.toString,mt=W();function jt(r){return"object"==typeof r&&(r instanceof K||(mt?function(r){try{return ht.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Et(r){return wt(r)||jt(r)}function At(){return new Function("return this;")()}gt(Et,"isPrimitive",wt),gt(Et,"isObject",jt);var _t="object"==typeof self?self:null,Tt="object"==typeof window?window:null,Ot="object"==typeof globalThis?globalThis:null,St=function(r){if(arguments.length){if(!wt(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return At()}if(Ot)return Ot;if(_t)return _t;if(Tt)return Tt;throw new Error("unexpected error. Unable to resolve global object.")}(),xt=St.document&&St.document.childNodes,Ut=Int8Array;function Bt(){return/^\s*function\s*([^(]*)/i}var Ft=/^\s*function\s*([^(]*)/i;function Vt(r){return null!==r&&"object"==typeof r}gt(Bt,"REGEXP",Ft);var kt=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Vt);function Nt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Ft.exec(e.toString()))return t[1]}return Vt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}gt(Vt,"isObjectLikeArray",kt);var It,Pt,Ct="function"==typeof vt||"object"==typeof Ut||"function"==typeof xt?function(r){return Nt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Nt(r).toLowerCase():t},Lt=Object.getPrototypeOf;Pt=Object.getPrototypeOf,It="function"===Ct(Pt)?Lt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Rt=It,$t=Object.prototype;function Gt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=dt(r),Rt(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&bt(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&bt(t.isPrototypeOf)&&(t===$t||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Mt(r,t){return Gt(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Xt(r,t,n){var e,o,i,u;if(!Rr(r))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=Mt(e,n)))throw i;return G(o={},"next",a),G(o,"return",c),zr&&wr(r[zr])&&G(o,zr,f),o;function a(){var n;return u?{done:!0}:(n=r.next()).done?(u=!0,n):{value:Gr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Xt(r[zr](),t,e)}}function Zt(r){return r!=r}var Wt,Yt="function"==typeof Uint32Array,zt="function"==typeof Uint32Array?Uint32Array:null,qt="function"==typeof Uint32Array?Uint32Array:void 0;Wt=function(){var r,t;if("function"!=typeof zt)return!1;try{r=function(r){return Yt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new zt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qt:function(){throw new Error("not implemented")};var Dt,Ht=Wt,Jt="function"==typeof Float64Array,Kt="function"==typeof Float64Array?Float64Array:null,Qt="function"==typeof Float64Array?Float64Array:void 0;Dt=function(){var r,t;if("function"!=typeof Kt)return!1;try{r=function(r){return Jt&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Kt([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Qt:function(){throw new Error("not implemented")};var rn,tn=Dt,nn="function"==typeof Uint8Array,en="function"==typeof Uint8Array?Uint8Array:null,on="function"==typeof Uint8Array?Uint8Array:void 0;rn=function(){var r,t;if("function"!=typeof en)return!1;try{r=function(r){return nn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new en(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var un,an=rn,cn="function"==typeof Uint16Array,fn="function"==typeof Uint16Array?Uint16Array:null,ln="function"==typeof Uint16Array?Uint16Array:void 0;un=function(){var r,t;if("function"!=typeof fn)return!1;try{r=function(r){return cn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new fn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var sn,pn={uint16:un,uint8:an};(sn=new pn.uint16(1))[0]=4660;var yn=52===new pn.uint8(sn.buffer)[0],bn=!0===yn?1:0,dn=new tn(1),vn=new Ht(dn.buffer);function gn(r){return dn[0]=r,vn[bn]}var wn=!0===yn?1:0,hn=new tn(1),mn=new Ht(hn.buffer);function jn(r,t){return hn[0]=r,mn[wn]=t>>>0,hn[0]}var En=Number.POSITIVE_INFINITY,An=Mr.NEGATIVE_INFINITY,_n=.6931471803691238,Tn=1.9082149292705877e-10;function On(r){var t,n,e,o,i,u,a,c,f,l;if(r<-1||Zt(r))return NaN;if(-1===r)return An;if(r===En)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=gn(f=1+r))>>20)-1023)>0?1-(f-r):r-(f-1),i/=f):(l=((n=gn(f=r))>>20)-1023,i=0),(n&=1048575)<434334?f=jn(f,1072693248|n):(l+=1,f=jn(f,1071644672|n),n=1048576-n>>2),o=f-1),t=.5*o*o,0===n?0===o?l*_n+(i+=l*Tn):l*_n-((c=t*(1-.6666666666666666*o))-(l*Tn+i)-o):(c=(a=(u=o/(2+o))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===l?o-(t-u*(t+c)):l*_n-(t-(u*(t+c)+(l*Tn+i))-o))}function Sn(r){var t,n;return Zt(r)||r<-1||r>1?NaN:1===r?En:-1===r?An:(r<0&&(t=!0,r=-r),r<3.725290298461914e-9?t?-r:r:(n=r<.5?.5*On((n=r+r)+n*r/(1-r)):.5*On((r+r)/(1-r)),t?-n:n))}return function(r){return Xt(r,Sn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAtanh=t();
//# sourceMappingURL=browser.js.map
