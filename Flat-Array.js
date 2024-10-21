//  the array flat method creates a new array with all the sub Arrays elements
// concatenated into it , it was recursivly up to the specified depth .
// the flat method telling how deep it should go inside the nested arrays,
// by default value will one,




//we have nested array but  we want to have a one-dimensional array.

let arr = [1, [2, [3, [4]]]];

let result = arr.flat(3);  
//Infinity for no metter how many arrays 
// we have nested inside of an array.

console.log(result);