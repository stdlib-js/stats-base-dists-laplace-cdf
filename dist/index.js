"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=c(function(O,s){
var a=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-exp/dist');function y(e,r,t){var n;return a(e)||a(r)||a(t)||t<=0?NaN:(n=(e-r)/t,e<r?.5*f(n):1-.5*f(-n))}s.exports=y
});var N=c(function(R,q){
var d=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist');function z(e,r){if(u(e)||u(r)||r<=0)return d(NaN);return t;function t(n){var i;return u(n)?NaN:(i=(n-e)/r,n<e?.5*v(i):1-.5*v(-i))}}q.exports=z
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),x=N();l(p,"factory",x);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
