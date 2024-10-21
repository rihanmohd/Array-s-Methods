// the array slice methoud returnes a shallaw copy of a portion of an array
// meaninig that it wont modified with originil array on which is called decodeURIComponent,
// we can provide beggininag index and the end index ,
// by default it will be start with 0 index, and end will arr.length. but we can specify and end will not included.


let numbers = [1,2,3,4,5,6,7];
let num2 = numbers.slice(2, 4)


// we can also provide a negetive number and then it will start from the end  

let num3 = numbers.slice(-3);
console.log(num2);
console.log(numbers)






//                 ((2))

let participants = ["a", "b","c", "d", "e", "f"];
let winners = participants.slice(0, 3);
console.log(winners)