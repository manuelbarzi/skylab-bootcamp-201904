'user strict'

describe('join', function() {
    it('Creates and returns a new string by concatenating all of the elements in an array', function() {
        var array = ['ant', 'bison', 'camel', 'duck', 'bison'];

        var answer = ('ant', 'bison', 'camel', 'duck', 'bison')
        console.log(answer)
        var result = join(array);
        
        expect(result, answer);             
         
             
    });

});
