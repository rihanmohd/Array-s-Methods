// the array find method will search inside of the array and it
// will return the first element for which the callback function 
// returns a truthy value,  if it doesn't find one then it will return 
// undefined .


let names = ['a', 'b', 'c', 'd'];

let res = names.find(find);

function find(item){

    return item === 'a';

};

// console.log(res);









// find person's age .

let persons = [

    {
        name: 'a',
        age: 20
    },

    {
        name: 'b',
        age: 25
    },

    {
        name: 'c',
        age: 30
    }

];

let age = persons.find(findPerson).age;

function findPerson(person){

    return person.name === 'c';

};

console.log(age);