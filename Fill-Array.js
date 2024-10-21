// the array fill method changes all the elements inside an array with the provided value 


// let nummbers = [1,2,3,4,5,6];
// let num2 = nummbers.fill(0);
// console.log(nummbers);
// console.log(num2);





// also in the fill method we can specify the start index and the end index ,

// let nummbers = [1,2,3,4,5,6];
// nummbers.fill(0, 1, 4);
// console.log(nummbers);






// we can use this method when we want to creat an array that will have all the numbers from one till n.


function fillNum(n){
    return Array(n).fill(0)
    .map((item, idx) => idx + 1)

}
console.log(fillNum(10));



// arrow func
let arr = Array(10).fill(0).map((item, i) => i+1);
console.log(arr);










