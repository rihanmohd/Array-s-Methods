// forEch methoud requres callback fun , that callback fun will be given three parameters
// the value for the current step on the loop
// the index and the array which is called upon

const numbers = [1,6,3,4,5];


numbers.forEach((item, index, arr) =>{
    // console.log(arr);
    // console.log('a[' + index +'] = ' + item);
    // console.log(index);
});



// we can pass this fun as callback in forEch loop 

function consoleItem(item, index, arr){
    // console.log(item);
    // console.log('a[' + '] = ' + item);
    // console.log(index);
}




// we can use it to calculate the sum of the numrs from array
// we dont need more two peramitrs because we are not using, so we remove them

// let sum = 0;
// numbers.forEach(item =>{
//     sum += item
// });
// console.log(sum);




// let's see how many times a latter appeares in an array

let latters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];
let count = {};

latters.forEach(item =>{
    if(count[item] ){
        count[item] ++
    }else{
        count[item] =  1;
    }
   
});
console.log(count);



