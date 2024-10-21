//  the array from method creates a new shallow copied array from
// an array like or iterable object .



// array of charactores

let string = '1234567';

let result = Array.from(string);

// console.log(result);











// array of actual Numbers.

let str = '1234567';

let res = Array.from(str, x => Number(x));

// let res = Array.from(str, Number);  // by number constructor.

// console.log(res);








// remove duplicates from an array, for this we are going to creat a new set which 
// will remove all the duplicates and then we need to convert that set to 
// an array again.

let numbers = [1,2,3,3,4,5,4];

let resu = Array.from(new Set(numbers));

console.log(resu);







// this can work for string also.

let names = ['a', 'b', 'a', 'b', 'c'];

let resul = Array.from(new Set(names));

console.log(resul);




