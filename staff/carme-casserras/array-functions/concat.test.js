'use strict'

describe('concat', function() {
    it('should concat some arrays in one', function() {
        var array1 = ['c','a','r'];
        var array2 = ['d', 'a', 'n', 'i'];{
        var answer = ['c','a','r','d', 'a', 'n', 'i'];

        var result = concat(array1, array2);
        
        expect(result, answer, true);    
         }   
             
    });

    it('should break on undefined array', function () {
        
        try {
            concat();

            throw Error('should not reach this point');
        } catch (error) {
            expect(error.message, 'undefined is not an array');
        }
    });

    
});

