// Using the array reverse method we can as the name says it reverse an array
// meaning that the first element will become the last and the last become the 
// first and also middle ones will reverse though obviously.




// this changes in the original array.

let numbers = [1,2,3,4,5,6];
numbers.reverse();
console.log(numbers);







// if we don't want to change the original array we can store new array
// and creat a shallow copy of this array using the concat method .

let nums = [1,2,3,4,5,6];

let newArr  = nums.concat().reverse();
// let newAr  = [...nums].reverse();  // by separator comas.

console.log(nums);

// console.log(newAr);









////////////////// Reverse the charactors inside of a string  /////////

let str = "java script";

let res = str
     .split('')
     .reverse()
      .join('');

console.log(res);
