// the array findIndex method is very similar to the find method ,
// but only dffrence is that the findIndex method will find the element
// and it will return its index rather than finding the element and
// returning it as the find method does. 


let numbers  = [1,2,3,4,5];

let res = numbers.findIndex(findThree);

function findThree(value){
    return value === 3;

};

console.log(res);




// it is pretty similar to the find method , the only diffrence is that it 
// will return by index instead.