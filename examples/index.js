'use strict';

var chebyshev = require( './../lib' );

var x = new Array( 100 ),
	y = new Array( 100 );

for ( var i = 0; i < x.length; i++ ) {
	x[ i ] = Math.round( Math.random()*100 );
	y[ i ] = Math.round( Math.random()*100 );
}

console.log( chebyshev( x, y ) );
