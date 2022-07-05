<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Laplace][laplace-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_cdf" align="center" raw="F(x;\mu,b) =\tfrac{1}{2} + \tfrac{1}{2} \operatorname{sgn}(x-\mu) \left(1-\exp \left(-\frac{|x-\mu|}{b} \right ) \right )" alt="Cumulative distribution function for a Laplace distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\mu,b) =\tfrac{1}{2} + \tfrac{1}{2} \operatorname{sgn}(x-\mu) \left(1-\exp \left(-\frac{|x-\mu|}{b} \right ) \right )" data-equation="eq:laplace_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/laplace/cdf/docs/img/equation_laplace_cdf.svg" alt="Cumulative distribution function for a Laplace distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-cdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-cdf@esm/index.mjs';
```

#### cdf( x, mu, b )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = cdf( 2.0, 0.0, 1.0 );
// returns ~0.932

y = cdf( 5.0, 10.0, 3.0 );
// returns ~0.094
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### cdf.factory( mu, b )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var mycdf = cdf.factory( 3.0, 1.5 );

var y = mycdf( 1.0 );
// returns ~0.132

y = mycdf( 4.0 );
// returns ~0.743
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-cdf@esm/index.mjs';

var mu;
var b;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    b = randu() * 10.0;
    y = cdf( x, mu, b );
    console.log( 'x: %d, µ: %d, b: %d, F(x;µ,b): %d', x.toFixed( 4 ), mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-laplace-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-laplace-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-laplace-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-laplace-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-laplace-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-laplace-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-laplace-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-laplace-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-laplace-cdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-laplace-cdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-laplace-cdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-laplace-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-laplace-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

</section>

<!-- /.links -->
