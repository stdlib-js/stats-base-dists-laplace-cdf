// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,U(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){return"string"==typeof r}function T(r){var e,t,n;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&G&&G.call(r,e,t.set),r};function L(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function P(r){return r!=r}var R=Math.floor,Z=Math.ceil;function M(r){return r<0?Z(r):R(r)}var X=Number.NEGATIVE_INFINITY,Y=Number.POSITIVE_INFINITY;function z(r){return r===Y||r===X}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return B.call(r);t=r[K],a=K,e=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[K]=t:delete r[K],n}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir=tr,ar="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var cr,ur="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),t=e,r=(ar&&t instanceof Float64Array||"[object Float64Array]"===Q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=cr,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,yr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),t=e,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=pr,dr="function"==typeof Uint16Array;var vr="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===Q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:hr,uint8:gr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Ir=new fr(1),Sr=new ir(Ir.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Fr(r,e,t,n){return Ir[0]=r,e[n]=Sr[kr],e[n+t]=Sr[xr],e}function Nr(r){return Fr(r,[0,0],1,0)}L(Nr,"assign",Fr);var jr,Tr,Or=!0===Er?1:0,Vr=new fr(1),$r=new ir(Vr.buffer);function Gr(r){return Vr[0]=r,$r[Or]}!0===Er?(jr=1,Tr=0):(jr=0,Tr=1);var Hr={HIGH:jr,LOW:Tr},Wr=new fr(1),Cr=new ir(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Rr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}var Zr=[0,0];function Mr(r,e,t,n){return P(r)||z(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}L((function(r){return Mr(r,[0,0],1,0)}),"assign",Mr);var Xr=[0,0],Yr=[0,0];function zr(r,e){var t,n,i,a,o,c;return 0===e||0===r||P(r)||z(r)?r:(Mr(r,Xr,1,0),e+=Xr[1],e+=function(r){var e=Gr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Xr[0]),e<-1074?(i=0,a=r,Nr.assign(i,Zr,1,0),o=Zr[0],o&=2147483647,c=Gr(a),Rr(o|=c&=2147483648,Zr[1])):e>1023?r<0?X:Y:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Nr.assign(r,Yr,1,0),t=Yr[0],t&=2148532223,n*Rr(t|=e+1023<<20,Yr[1])))}function qr(r){var e;return P(r)||r===Y?r:r===X?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,t){var n,i,a,o;return zr(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(e=M(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function Br(r,e,t){var n;return P(r)||P(e)||P(t)||t<=0?NaN:(n=(r-e)/t,r<e?.5*qr(n):1-.5*qr(-n))}function Dr(r,e){return P(r)||P(e)||e<=0?(t=NaN,function(){return t}):function(t){var n;if(P(t))return NaN;if(n=(t-r)/e,t<r)return.5*qr(n);return 1-.5*qr(-n)};var t}L(Br,"factory",Dr);export{Br as default,Dr as factory};
//# sourceMappingURL=mod.js.map
