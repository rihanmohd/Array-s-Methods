// the array map methoud executes a given fun on every elm from an array and returnes 
// a new array (unlike forEch) and there is need to provide callback func as we did for 
// the forEch , also takes three parameters like that


            //    ((1))
// let numbers = [1,2,3,4,5,];
// let numDouble = numbers.map(double);

// function double(value, index, arr){
//     return value * 2;
// }
// console.log(numbers)
// console.log(numDouble);






//            ((2))
 // we can also multply the value by the index

//  let numbers = [1,2,3,4,5,];
// let numDouble = numbers.map(multiply);

//  function multiply(value, index, arr){
//     return value * index;
//  }
// console.log(numDouble);






//            ((3))

// swap out with an array of aobjects and an array of products
let products = [
    {
        name: "laptop",
        price: 200,
        count: 5
    },

    {
        name: 'desktop',
        price: 300,
        count: 5,
    },

    {
        name: 'phone',
        price: 400,
        count: 5,
    }

];



// const totalProductsValue = products.map(item => item.price * item.count);
// console.log(totalProductsValue);



                    //  ((4))
// we can also return an object
const totalProductsValue = products.map(item =>({
    name: item.name,
    totalValue: item.price * item.count,
}));
console.log(totalProductsValue);




//            ((5))
// convert the array of string into array of numbers
let str = ['1', '2', '3', '4'];

// let numbers = str.map(item => Number(item));

let numbers = str.map( Number);
console.log(numbers)
