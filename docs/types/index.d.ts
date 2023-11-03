/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Returns the accessed value.
*
* @returns accessed value
*/
type NullaryCallback = () => any;

/**
* Returns the accessed value.
*
* @param value - array element value
* @returns accessed value
*/
type UnaryCallback = ( value: any ) => any;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @returns accessed value
*/
type BinaryCallback = ( value: any, idx: number ) => any;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - data buffer indices
* @returns accessed value
*/
type TernaryCallback = ( value: any, idx: number, indices: Array<number> ) => any; // tslint-disable-line max-line-length

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - data buffer indices
* @param arrays - input and output ndarrays
* @returns accessed value
*/
type QuaternaryCallback = ( value: any, idx: number, indices: Array<number>, arrays: Array<ndarray> ) => any; // tslint-disable-line max-line-length

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - data buffer indices
* @param arrays - input and output ndarrays
* @returns accessed value
*/
type Callback = NullaryCallback | UnaryCallback | BinaryCallback | TernaryCallback | QuaternaryCallback; // tslint-disable-line max-line-length

/**
* Callback invoked for each ndarray element.
*
* @param value - ndarray element
* @returns result
*/
type Unary = ( value: any ) => any;

/**
* Applies a unary function to elements in an ndarray and assigns results to elements in an ndarray.
*
* @param arrays - array-like object containing one input ndarray and one output ndarray
* @param fcn - unary function to apply to callback return values
* @param clbk - callback function
* @param thisArg - callback execution context
* @throws arrays must have the same number of dimensions
* @throws arrays must have the same shape
*
* @example
* var identity = require( `@stdlib/math/base/special/identity` );
* var Float64Array = require( `@stdlib/array/float64` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
* var sy = [ 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 1;
* var oy = 0;
*
* // Create the input and output ndarrays:
* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
*
* // Apply the unary function:
* unaryBy( [ x, y ], scale, identity );
*
* console.log( y.data );
* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
*/
declare function unaryBy( arrays: ArrayLike<ndarray>, fcn: Unary, clbk: Callback, thisArg?: any ): void; // tslint:disable-line:max-line-length


// EXPORTS //

export = unaryBy;
