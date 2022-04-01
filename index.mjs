// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var s=e,i=r;var a=n,d=e,m=r;var o=function(t,e,r){var n;return s(t)||s(e)||s(r)||r<=0?NaN:(n=(t-e)/r,t<e?.5*i(n):1-.5*i(-n))},l=function(t,e){return d(t)||d(e)||e<=0?a(NaN):function(r){var n;if(d(r))return NaN;if(n=(r-t)/e,r<t)return.5*m(n);return 1-.5*m(-n)}};t(o,"factory",l);var f=o;export{f as default,l as factory};
//# sourceMappingURL=index.mjs.map
