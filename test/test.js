/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	chebyshev = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-chebyshev-distance', function tests() {

	it( 'should export a function', function test() {
		expect( chebyshev ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided two arrays', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i], [ 1, 2, 3 ] ) ).to.throw( TypeError );
			expect( badValue( [ 1, 2, 3 ], values[i] ) ).to.throw( TypeError );
		}
		function badValue( val1, val2 ) {
			return function() {
				chebyshev( val1, val2 );
			};
		}
	});


	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				chebyshev( [1, 2, 4], [3, 2, 1], value );
			};
		}
	});


	it( 'should throw an error if the two input arguments are not the same length', function test() {
		expect( badValue( [1, 2, 3], [1, 2, 3, 4] ) ).to.throw( Error );
		function badValue( val1, val2 ) {
			return function() {
				chebyshev( val1, val2 );
			};
		}
	});

	it( 'should return null if provided empty arrays', function test() {
		assert.isNull( chebyshev( [], [] ) );
	});

	it( 'should compute the Chebyshev distance', function test() {
		var dat1, dat2, expected;

		dat1 = [ 2, 4, 5, 3, 8, 2 ];
		dat2 = [ 3, 1, 5, 3, 7, 2 ];
		expected = 3;

		assert.strictEqual( chebyshev( dat1, dat2 ), expected );

		dat1 = [ 2, 4, 5, 3, 8, 2 ];
		dat2 = [ 3, 1, 5, -3, 7, 2 ];
		expected = 6;

		assert.strictEqual( chebyshev( dat1, dat2 ), expected );

		dat1 = [ 2, 4, 5, 3, 8, 2 ];
		dat2 = [ 3, 1, 5, -3, 0, 2 ];
		expected = 8;

		assert.strictEqual( chebyshev( dat1, dat2 ), expected );
	});

	it( 'should compute the Chebyshev distance using an accessor function', function test() {
		var dat1, dat2, expected, actual;

		dat1 = [
			[1,2],
			[2,4],
			[3,5],
			[4,3],
			[5,8],
			[6,2]
		];
		dat2 = [
			[1,3],
			[2,1],
			[3,5],
			[4,3],
			[5,7],
			[6,2]
		];

		actual = chebyshev( dat1, dat2, getValue );
		expected = 3;

		assert.strictEqual( actual, expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

});
