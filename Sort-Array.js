// the array sort method sorts the elements of an array  by manipulating the array , the default sort order is ascading ,
// it will convert the elements from the array to string and then it will compare their sequences of utf-16 code unit values .






// sort str

let names = ["a", "d", "c", "b", "f", "e"];
names.sort();
console.log(names);





// sort numbers // we get something like this because this method converts the elements to strings and even though in a numeric sort 5 will come before .

let numbers = [2,33,44,3,44,5,33,5];
// numbers.sort()
numbers.sort( comparefunc);
console.log(numbers)


// // we can slve it by creating comare func

function comparefunc(a, b){
// 1. < 0 .... a becomes first 
// 2. 0..... nothing will be change
// 3. > 0 ......... b comes first
  
   return a - b;
}






// also the sort method can work even with an array of objects 
// we want to sort this arry dependent on the price. but there array remains unchanged so we creat a comare func as we did previosly.


let products = [
    {
        name: 'laptop',
        price: 1000
    },

    {
        name: 'desktop',
        price: 1500
    },

    {
        name: 'phone',
        price: 500
    }
];

products.sort((a,b) =>  a.price - b.price  //for desc b.price - a.price//
   
);
console.log(products)