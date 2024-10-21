// the array concat method allows you to merge two or more arrays 
// into one new array which will be returned.

let a = [1,2,3];
let b = [4,5,6];
// let d = [7,8,9]; 

let c = a.concat(b, d);



//  concat method wont change the array which are used .

// console.log(a);
// console.log(b);
// console.log(c);







// if we dont pass any parameter we will get a shallow copy.
let c = a.concat();

c.push(6);
console.log(a)
console.log(c)


// we can also use concat method as a push method adding numbers as parameter .

let e = a.concat(1,2,a);
console.log(e);

