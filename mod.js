// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,l=function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(i.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),v&&u&&u.call(r,t,n.set),r},y=t()?c:l;var v=function(r,t,n){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var p=function(r){return r!=r},b=Math.floor,A=Math.ceil,_=b,w=A;var m=function(r){return r<0?w(r):_(r)},d=Number.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,h=U,s=d;var j=function(r){return r===h||r===s};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var N=function(){return g&&"symbol"==typeof Symbol.toStringTag},I=Object.prototype.toString,O=I;var S=function(r){return O.call(r)},E=Object.prototype.hasOwnProperty;var F=function(r,t){return null!=r&&E.call(r,t)},H="function"==typeof Symbol?Symbol.toStringTag:"",T=F,G=H,P=I;var L=S,V=function(r){var t,n,e;if(null==r)return P.call(r);n=r[G],t=T(r,G);try{r[G]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[G]=n:delete r[G],e},W=N()?V:L,M=W,k="function"==typeof Uint32Array;var x="function"==typeof Uint32Array?Uint32Array:null,Y=function(r){return k&&r instanceof Uint32Array||"[object Uint32Array]"===M(r)},C=x;var q=function(){var r,t;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,4294967296,4294967297]),r=Y(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=q()?z:B,J=W,K="function"==typeof Float64Array;var Q="function"==typeof Float64Array?Float64Array:null,R=function(r){return K&&r instanceof Float64Array||"[object Float64Array]"===J(r)},X=Q;var Z=function(){var r,t;if("function"!=typeof X)return!1;try{t=new X([1,3.14,-3.14,NaN]),r=R(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var $="function"==typeof Float64Array?Float64Array:void 0,rr=function(){throw new Error("not implemented")},tr=Z()?$:rr,nr=W,er="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null,ar=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===nr(r)},ur=or;var ir=function(){var r,t;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,256,257]),r=ar(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var fr="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},lr=ir()?fr:cr,yr=W,vr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null,br=function(r){return vr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},Ar=pr;var _r=function(){var r,t;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),r=br(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0,dr=function(){throw new Error("not implemented")},Ur={uint16:_r()?mr:dr,uint8:lr};(wr=new Ur.uint16(1))[0]=4660;var hr,sr,jr=52===new Ur.uint8(wr.buffer)[0];!0===jr?(hr=1,sr=0):(hr=0,sr=1);var gr=D,Nr={HIGH:hr,LOW:sr},Ir=new tr(1),Or=new gr(Ir.buffer),Sr=Nr.HIGH,Er=Nr.LOW;var Fr=function(r,t){return Ir[0]=t,r[0]=Or[Sr],r[1]=Or[Er],r};var Hr=function(r,t){return 1===arguments.length?Fr([0,0],r):Fr(r,t)},Tr=D,Gr=!0===jr?1:0,Pr=new tr(1),Lr=new Tr(Pr.buffer);var Vr,Wr,Mr=function(r){return Pr[0]=r,Lr[Gr]};!0===jr?(Vr=1,Wr=0):(Vr=0,Wr=1);var kr=D,xr={HIGH:Vr,LOW:Wr},Yr=new tr(1),Cr=new kr(Yr.buffer),qr=xr.HIGH,zr=xr.LOW;var Br=function(r,t){return Cr[qr]=r,Cr[zr]=t,Yr[0]},Dr=Hr,Jr=Mr,Kr=Br,Qr=[0,0];var Rr=j,Xr=p,Zr=function(r){return Math.abs(r)};var $r=function(r,t){return Xr(t)||Rr(t)?(r[0]=t,r[1]=0,r):0!==t&&Zr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var rt=Mr;var tt=function(r){var t=rt(r);return(t=(2146435072&t)>>>20)-1023|0},nt=U,et=d,ot=p,at=j,ut=function(r,t){var n,e;return Dr(Qr,r),n=Qr[0],n&=2147483647,e=Jr(t),Kr(n|=e&=2147483648,Qr[1])},it=function(r,t){return 1===arguments.length?$r([0,0],r):$r(r,t)},ft=tt,ct=Hr,lt=Br,yt=[0,0],vt=[0,0];var pt=function(r,t){var n,e;return 0===t||0===r||ot(r)||at(r)?r:(it(yt,r),t+=yt[1],(t+=ft(r=yt[0]))<-1074?ut(0,r):t>1023?r<0?et:nt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ct(vt,r),n=vt[0],n&=2148532223,e*lt(n|=t+1023<<20,vt[1])))};var bt=pt,At=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var _t=p,wt=m,mt=d,dt=U,Ut=function(r,t,n){var e,o,a;return a=(e=r-t)-(o=e*e)*At(o),bt(1-(t-e*a/(2-a)-r),n)};var ht=function(r){var t;return _t(r)||r===dt?r:r===mt?0:r>709.782712893384?dt:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=wt(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Ut(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},st=p,jt=ht;var gt=function(r){return function(){return r}},Nt=p,It=ht;var Ot=function(r,t,n){var e;return st(r)||st(t)||st(n)||n<=0?NaN:(e=(r-t)/n,r<t?.5*jt(e):1-.5*jt(-e))},St=function(r,t){return Nt(r)||Nt(t)||t<=0?gt(NaN):function(n){var e;if(Nt(n))return NaN;if(e=(n-r)/t,n<r)return.5*It(e);return 1-.5*It(-e)}};v(Ot,"factory",St);var Et=Ot;export{Et as default,St as factory};
//# sourceMappingURL=mod.js.map
