// the array filter methoud creates a new array by removing all the elements for which the callback func returnes a false value, consider it as a test on the items of an array if the item from the array turns true for a callback then we keep it otherwise we remove it  ,, actually it will creat a new array and we won't modify the original array .


// let numbers = [1,2,3,4,5,6];

// let even = numbers.filter(isEven);

// function isEven(value){
//     return value % 2 === 0;
// }

// console.log(even);





            // ((2))
  // as belove we have two remaining a and b becouse they are at least 18years old.


// let people = [
//     {
//         name: "a",
//         age: 16
//     },

//     {
//         name: "b",
//         age: 18
//     },

//     {
//         name: "c",
//         age: 15
//     }
// ];

// let adults = people.filter(person => person.age >= 18);
// console.log(adults)







//           ((3))
// remove the duplicates from an array, in this way we are going to need all three parameters .
// important: the indexof method returns the first occurence of a value inside of an array ,

// let numbers = [1,25,35,4,3,4,75,3,3,54,54];

// let uniqe = numbers.filter((value, index, arr) => {
//         return arr.indexOf(value) === index;
//         // console.log(arr.indexOf(value))
// });


// console.log(uniqe);