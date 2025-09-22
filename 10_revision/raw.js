// higher order functions => Those function who accept the function or return a function 

// for each always takes a function inside it, so forEach is a higher order function

// function abcd(val){


// }
// abcd(function(){})


function abcd() {
    return function () {
        // console.log("new")
    }()
}

abcd()



//Constructor function => normal fun jisme this ka istamal hoo and aap fun ko call karte waqut new keyword ka use karte hai 

// jab hamare pass koi aisa mauka hoo jisme hume properties wale bahut saare element banane hai us waqt aap constructor fun use kar sakte hoo

// ek aur example hai jaise sportify musics iska constructor function bhi bana sakta hu

function biskutKaSacha(brand, color) {
    this.width = 12;
    this.height = 22;
    this.color = color;
    // this.taste = "sugary";
    this.brand = brand;
}

var bis1 = new biskutKaSacha("parle", "brown");
var bis2 = new biskutKaSacha("tiger", 'red');
var bis3 = new biskutKaSacha("mom's magic");

console.table([bis1, bis2, bis3]);



// first class function => a function which whenever invoke with "New" Keyword, Returns An Object, if We Use "This" Keyword inside that function, It returns an Object With all of the Properties and Methods mentioned inside that function such function is called as Constructor function

var abc = function fclass() {
    var gesture = "hii";
    console.log(gesture);
}

// fclass() iska metter samajh nahi aaya

console.log(abc)
console.log(abc())


// new keyword create a blank object


// iife :- immediatly invoke function expression :- iife hai function ko turant chalane ki kala, iss tarike se ki hum koi private wariable bana paaye :- iska use private variables ko banane me aata hai

var ans = (function () {
    var a = 13; // agar aab mai "a" ko console me jaa kar o/p nikalu toh mujhe a is not define milenga, (to make it private)

    return {
        getter: function () {
            console.log(a); // "ans.getter()" se mai fir se "a" laa sakta hu
        },
        setter: function (val) {
            a = val; // "ans.setter(32)" isse value set hongi "ans.getter()" se value milengi
        }
    }
})()




// Prototype :- bahut sari helper method js me di hai use hi prototype kah sakte hai (for more details search what prototype actually is)


// inheritance :- the properties of ancestor fall(pass) into descendent > to pass some feature via a prototype 

var human = {
    name: "yogi",
    canFly: false,
    canTalk: true,
    willDie: true
}


var engineerYogesh = {
    type: "AI&ML ENGINEER",
    salary: 2400000,
    isrich: true
}

engineerYogesh.__proto__ = human; //this is the way to inherit


// this call apply bind :- 

// console.log(this); // ye window ki refrence denga in (global scope)


var newObj = {
    mylaptop:"acer swift go 14",
    callKaro: function hii() {
        console.log(this) //(ek fun jo object ke aandar hoo use method kahate hai) method scolpe me this ki value object aati hai
    }
}

newObj.callKaro()


// event listner

var button = document.querySelector("button");

button.addEventListener("click", function(){
    console.log(this.style.color="white"); // here "this" refers as whatever add before addEventListener in the   case button
    this.style.backgroundColor="red";
})


// now call, apply and bind this all have same motive (agar koi function aur koi object hai use hume windo na rakh kar object par lalna hai toh ye kare)

// this is a call (not what you think it's js call)

function boss(){
    console.log(this.age);
}

var obj = {age: 20}

boss.call(obj) //ise dekh lena comment me ki this jo hai obj ko call kar raha hai


// Now apply

function hr(val, val2, val3){
    console.log(this, val, val2, val3);
}

var obj1 = {age: 25}

// hr.call(obj1, 1,2,3)

// the diff b/w call and apply is very simple (make array of new parameter > )

// hr.apply(obj1, [1,2,3])



// bind :- Purpose: Creates a new function with a specified this value and optionally pre-filled arguments. It does not invoke the function immediately.

const person = { name: "Yogi bhai"};

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const boundGreet = greet.bind(person, "Hey");
boundGreet();



// pure and immpure function

// Pure Functions : A pure function is a function that:

/*Always produces the same output for the same input.
Has no side effects (does not modify external variables, states, or data outside its scope).
Characteristics:
Deterministic: Output depends only on the input.
No external state modification.
Easy to test and debug.
Example:*/
function add(a, b) {
  return a + b; // Output depends only on inputs a and b
}
console.log(add(2, 3)); // Always returns 5


// Impure Functions
/*An impure function is a function that:

May produce different outputs for the same input.
Has side effects (modifies external variables, interacts with external states, or performs I/O operations).
Characteristics:
Non-deterministic: Output may vary based on external factors.
Modifies or depends on external state.
Harder to test and debug. */


let count = 0;

function increment() {
  count++; // Modifies external variable
  return count;
}
console.log(increment()); // Output depends on the external variable `count`