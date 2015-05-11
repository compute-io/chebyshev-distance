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

	it( 'should throw an error if the first argument is a not an array', function test() {
		var values = [
			'5',
			5,
			null,
			true,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				chebyshev( value, [1,2,3] );
			};
		}
	});

	it( 'should throw an error if the second argument is a not an array', function test() {
		var values = [
			'5',
			5,
			null,
			true,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				chebyshev( [1,2,3], value );
			};
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			null,
			true,
			undefined,
			NaN,
			{},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				chebyshev( [3,2,1], [1,2,3], value );
			};
		}
	});

	it( 'should throw an error if provided two input arrays which are not of equal length', function test() {
		expect( foo ).to.throw( Error );

		function foo() {
			chebyshev( [1,2,3], [1,2,3,4] );
		}
	});

	it( 'should return null if provided empty arrays', function test() {
		assert.isNull( chebyshev( [], [] ) );
	});

	it( 'should compute the Chebyshev distance', function test() {
		var dat1, dat2, actual, expected;

		dat1 = [ 2, 4, 5, 3, 8, 2 ];
		dat2 = [ 3, 1, 5, -3, 7, 2 ];

		actual = chebyshev( dat1, dat2 );
		expected = 6;

		assert.strictEqual( actual, expected );

		// Flip the values:
		dat1 = [ 3, 1, 5, -3, 7, 2 ];
		dat2 = [ 2, 4, 5, 3, 8, 2 ];

		actual = chebyshev( dat1, dat2 );
		expected = 6;

		assert.strictEqual( actual, expected );
	});

	it( 'should compute the Chebyshev distance using an accessor', function test() {
		var dat1, dat2, actual, expected;

		dat1 = [
			[1,2],
			[2,4],
			[3,5],
			[4,3],
			[5,8],
			[6,2]
		];
		dat2 = [
			{'y':3},
			{'y':1},
			{'y':5},
			{'y':-3},
			{'y':7},
			{'y':2}
		];

		actual = chebyshev( dat1, dat2, getValue );
		expected = 6;

		assert.strictEqual( actual, expected );

		// Flip the values:
		dat1 = [
			[1,3],
			[2,1],
			[3,5],
			[4,-3],
			[5,7],
			[6,2]
		];
		dat2 = [
			{'y':2},
			{'y':4},
			{'y':5},
			{'y':3},
			{'y':8},
			{'y':2}
		];

		actual = chebyshev( dat1, dat2, getValue );
		expected = 6;

		assert.strictEqual( actual, expected );

		function getValue( d, i, j ) {
			if ( j === 0 ) {
				return d[ 1 ];
			}
			return d.y;
		}
	});

});
