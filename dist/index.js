"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=c(function(O,s){
var a=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-exp/dist');function y(e,r,n){var t;return a(e)||a(r)||a(n)||n<=0?NaN:(t=(e-r)/n,e<r?.5*f(t):1-.5*f(-t))}s.exports=y
});var N=c(function(R,q){
var d=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist');function z(e,r){if(u(e)||u(r)||r<=0)return d(NaN);return n;function n(t){var i;return u(t)?NaN:(i=(t-e)/r,t<e?.5*v(i):1-.5*v(-i))}}q.exports=z
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),x=N();l(p,"factory",x);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
