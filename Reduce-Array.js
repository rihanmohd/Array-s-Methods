// the reduce method executes a allaback function  on every elements of an array and it will return one single output value , think of it like geting an array of items  and then adding all of the items inside one resulting that  vallue;

// reduce takes in two parameters a callback func and the initial value which we are going to start when the iteration start,  in our exmp the total starts with zero.



//it takes four parameters accum, val, ind, arr, but there we dont need more two,  accumlator parameter will keep track of the value which will be return at the end , and it will be initialsed with the initial value we provide upon like 0.




// let numbers = [1,2,3,4,5];
//  let total = numbers.reduce(sum, 0);

// function sum(accumlator, value){
//     // console.log(accumlator)
//     return accumlator + value;

// }

// console.log(total)

//          ((simple))
// let num = [1,2,3,4,5]
// let num2 = num.reduce((h1,h2)=>{
    
//     return h1 + h2
    
// })
// // console.log(num2)








// ((2))
// /max in arr


// let numbers = [10,20,3,4,5];
//  let max= numbers.reduce(callback, 0); //-infinity;

// function callback(accumlator, value){
// console.log(accumlator)
//     if(accumlator > value){

//         return accumlator;

//     }else{

//         return value;
//     }
   

// }

// console.log(max)









// ((3))
// find out what is the word of all the products we have in our store

let store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3
    },

    {
        product: 'desktop',
        value: 1500,
        count: 4
    },

    {
        product: 'mobile',
        value: 500,
        count: 10
    }

];

let totalValueStore = store.reduce((acc, item) => acc + (item.value * item.count),0);

console.log(totalValueStore)