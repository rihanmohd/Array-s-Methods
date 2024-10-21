// the array join method creats a new string from an array by concatinating all
// all the elements from that array , by default it ussses a coma as a separator but 
// we can specify what separator we want to be added between the items .



let countries = ["india", "USA", "PK"];

let res = countries.join(); // by default separator.
res = countries.join('- ');  //any separator we can use between , but one element won't accept .

console.log(res);









//////////////////  this is used for like this  ////////////////////

let countris = ["india", "USA", "PK"];

let result = countris.join(','); 
console.log("I want to visit " + result);