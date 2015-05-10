chebyshev-distance
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance) between two sequences


## Installation

``` bash
$ npm install compute-chebyshev-distance
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var chebyshev = require( 'compute-chebyshev-distance' );
```

#### chebyshev( x, y[, accessor] )

Computes the [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance) between two arrays `x` and `y` of equal length, defined as

<div align="center">
	<img src="https://github.com/compute-io/chebyshev-distance/blob/master/docs/img/eqn.png" alt="Formula of Chebyshev Distance" height="96px">
	<br>
</div>

``` javascript

var x = [ 1, 3, 7, 4 ],
	y = [ 2, 4, 6, -4 ];

var dist = chebyshev( x, y );
// returns 8
```

The chebyshev distance is equal to the [Minkowski distance](http://en.wikipedia.org/wiki/Minkowski_distance) in the limiting case when `p` goes to infinity.

To compute the [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance) between nested `array` values, provide an accessor `function` for accessing `numeric` values.

``` javascript
var x = [
	{'x':2},
	{'x':4},
	{'x':5}
];

var y = [
	[1,3],
	[2,1],
	[3,5]
];

function getValue( d, i, j ) {
	if ( j === 0 ) {
		return d.x;
	}
	return d[ 1 ];
}

var dist = chebyshev( x, y, getValue );
// returns 3
```

The accessor `function` is provided three arguments:

-	__d__: current datum.
-	__i__: current datum index.
-	__j__: array index; e.g., array `x` has index `0` and array `y` has index `1`.


If provided empty `arrays`, the function returns `null`.

## Examples

``` javascript
var chebyshev = require( 'compute-chebyshev-distance' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/compute-chebyshev-distance.svg
[npm-url]: https://npmjs.org/package/compute-chebyshev-distance

[travis-image]: http://img.shields.io/travis/compute-io/chebyshev-distance/master.svg
[travis-url]: https://travis-ci.org/compute-io/chebyshev-distance

[coveralls-image]: https://img.shields.io/coveralls/compute-io/chebyshev-distance/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/chebyshev-distance?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/chebyshev-distance.svg
[dependencies-url]: https://david-dm.org/compute-io/chebyshev-distance

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/chebyshev-distance.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/chebyshev-distance

[github-issues-image]: http://img.shields.io/github/issues/compute-io/chebyshev-distance.svg
[github-issues-url]: https://github.com/compute-io/chebyshev-distance/issues
