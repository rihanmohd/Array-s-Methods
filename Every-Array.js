// the array every method execute a given function on every items 
// of an array and returns true only if the callback function returns 
// a truthy value for all the items inside the array, if a false value 
// is found it will return false immediately .


let numbers = [1,2,3,4,5,6];

let res = numbers.every(isPositive);

function isPositive(item){

    return item > 0;

};

console.log(res);










// we can test if we have an array of objects, if all the objects
//  inside of that array have a certain property .

let persns = [
    {
        name: 'a'
    },

    {
        name: 'b'
    },

    {
        name: 'c'
    },

    {
        surname: 'd'
    },
];

let result = persns.every(persn => persn.name !== undefined);

// console.log(result);







// array of arrays

let arrys = [

      [1,2,3],
      [4,5,6],
      [7,8,9],
    //   '123'

     ];

let rsul = arrys.every(arr => Array.isArray(arr));
console.log(rsul);




// built in func to check array.
let arr = [];
Array.isArray(arr);