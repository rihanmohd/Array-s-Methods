//  The array unshift method adds one or more elements at the beggining 
// of the  array and returns the new length of the array.
// we can think of it as the opposite of the push method which adds elements 
// at the end of the array.


let numbers = [1,2,3,4,5];

let totalLength = numbers.unshift(0,1);  // we can call it for multipl times.

console.log(numbers);

console.log(totalLength); // it wil returns total length.


