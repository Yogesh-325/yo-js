// primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5
// Both falls in Number category

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // userEmail = undefined; bhi kar sakte hai

const id = Symbol('YoBidu');
const anotherId = Symbol('YoBidu');

console.log(id)
console.log(id === anotherId);


const bigNumber = 131675673761n //this n makes a number automatically bigInt


// Non-Primitive (Reference)

// Array, Object, Functions

const superHeros = ["ironman", "thor", "Hulk", "captain america"]

let person = {
    name: "Yogesh",
    age: 20,
    isStudent: true,
}

const myFunction = function(greet) {
    console.log("Hello World");
}

myFunction()

console.log(typeof superHeros); //object
console.log(typeof person);  //objct
console.log(typeof myFunction); //function 

/* to check whether the typeof operation gives which type of value 

Visit :- https://262.ecma-international.org/#sec-typeof-operator */