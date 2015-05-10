'use strict';

// MODULES //

var max = require( 'compute-max' ),
	isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );


// FUNCTIONS //

/**
* FUNCTION: chebyshev( x, y )
* 		calculates the Chebyshev distance between n-dimensional vectors
*
* @param {Array} x - array
* @param {Array} y - array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number} Chebyshev distance
*/
function chebyshev( x, y, clbk ) {

	var diffs, i;

	if ( !isArray(x) ) {
		throw new TypeError( 'chebyshev()::invalid input argument. x argument must be a number array. Value: `' + x + '`.' );
	}

	if ( !isArray(y) ) {
		throw new TypeError( 'chebyshev()::invalid input argument. y argument must be a number array. Value: `' + y + '`.' );
	}

	if ( x.length !== y.length ) {
		throw new TypeError( 'chebyshev()::invalid input arguments. x and y must have the same length' );
	}

	// in case of empty arrays, return null
	if ( x.length === 0 ) {
		return null;
	}

	if ( arguments.length > 2 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'chebyshev()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}

	diffs = new Array( x.length );
	if ( clbk ) {
		for ( i = 0; i < x.length; i++ ) {
			diffs[i] = Math.abs( clbk( x[i] ) -  clbk( y[i] ) );
		}
	} else {
		for ( i = 0; i < x.length; i++ ) {
			diffs[i] = Math.abs(  x[i] -  y[i]  );
		}
	}

	return max( diffs );

} // end FUNCTION chebyshev()


// EXPORTS //

module.exports = chebyshev;
