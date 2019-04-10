console.log('\n\nDEMO', 'IndexOf');

var array = [1, 2, 5, 10, 20];

console.log('case 1');

console.log(indexOf(array, 10));
//3

console.log('case 2');

console.log(indexOf(array, 1, 1));
//-1

console.log('case 3');

try {
    indexOf(2, 10, 4);

    console.error('should not reach this point');
} catch (error) {
    console.error(error.message);
}

console.log('case 4');

try {
    indexOf(array, 10, 'a');

    console.error('should not reach this point');
} catch (error) {
    console.error(error.message);
}
