// the array some method execute a given function on the elements of the 
// aray, and returns true if the callback function returns a truthy value 
// for at least one element inside of the array , if for all of the elements 
// it will return falsy value then the some method will return false also.



let numbers = [1,2,3,4,5];

let result = numbers.some(greaterThanTwo);

function greaterThanTwo(item){
    return item > 2;

};

// console.log(result);






// array of objects // at least one adult
let people = [
    
    {
        name: 'a',
        age: 25
    },

    {
        name: 'b',
        age: 20
    },

    {
        name: 'c',
        age: 15
    }

];

let res = people.some(isAdult);

function isAdult(person){
    return person.age >= 18 ;

};

console.log(res);
