'use strict'

/**
 * Reduce on each member of the array resulting in a single output value.
 * 
 * @param {Array} array The array to evaluate.
 * @param {Function} callback The expression to evalute.
 * 
 */


function reduce(array, callback) {  
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw TypeError(callback + ' is not a function')
    
    var acum = array[0];
    var endAcum = 0;
    for (var i = 1; i < array.length; i++) {
                    
            endAcum = callback(acum, array[i]);  
            acum = endAcum;        
        }
        
        return acum;    
    }

