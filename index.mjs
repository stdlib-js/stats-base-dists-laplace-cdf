// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function r(t,s,r){var i;return e(t)||e(s)||e(r)||r<=0?NaN:(i=(t-s)/r,t<s?.5*n(i):1-.5*n(-i))}function i(t,r){return e(t)||e(r)||r<=0?s(NaN):function(s){var i;if(e(s))return NaN;if(i=(s-t)/r,s<t)return.5*n(i);return 1-.5*n(-i)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
