// ============================
// ✅ JavaScript Core Concepts
// ============================

// Note => ye maine chatgpt se raw file ko sahi karwaya hai for further quary go to that original file i have attachet it too


// 🔹 1. Higher-Order Functions
// A Higher-Order Function is a function that:
// - Accepts another function as an argument
// - OR returns another function

[1, 2, 3].forEach(function(val) {
    console.log(val);
});

function outer() {
    return function inner() {
        console.log("Hello from inner function");
    };
}
outer()(); // Immediately invoked


// 🔹 2. First-Class Functions
// Functions in JS can be treated as values:
// - Assigned to variables
// - Passed as arguments
// - Returned from functions

function greet() {
    return "Hello!";
}

const sayHello = greet;

function executor(fn) {
    console.log(fn());
}
executor(sayHello);


// 🔹 3. Constructor Functions
// Constructor function creates reusable object templates

function Biscuit(brand, color) {
    this.width = 12;
    this.height = 22;
    this.color = color;
    this.brand = brand;
}

const b1 = new Biscuit("Parle", "brown");
const b2 = new Biscuit("Tiger", "red");

console.table([b1, b2]);


// 🔹 4. IIFE (Immediately Invoked Function Expression)
// Used to create a private scope

const module = (function() {
    let privateValue = 42;

    return {
        get: function() {
            return privateValue;
        },
        set: function(val) {
            privateValue = val;
        }
    };
})();

console.log(module.get()); // 42
module.set(100);
console.log(module.get()); // 100


// 🔹 5. `this`, `call`, `apply`, `bind`

// In global scope
console.log(this);

// In method
const obj = {
    laptop: "Acer",
    showThis: function() {
        console.log(this);
    }
};
obj.showThis();


// call()
function showAge() {
    console.log(this.age);
}
const user = { age: 25 };
showAge.call(user); // 25

// apply()
function showInfo(a, b, c) {
    console.log(this.age, a, b, c);
}
showInfo.apply(user, [1, 2, 3]);

// bind()
const person = { name: "Yogi" };

function say(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const boundGreet = say.bind(person, "Hey");
boundGreet();


// 🔹 6. Prototypes & Inheritance

const human = {
    canTalk: true,
    willDie: true
};

const engineer = {
    type: "AI Engineer",
    salary: 2400000
};

Object.setPrototypeOf(engineer, human);
console.log(engineer.canTalk); // true


// 🔹 7. Event Listener and `this` in DOM

// Assuming button exists in HTML
// <button>Click Me</button>

const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", function () {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    });
}


// 🔹 8. Pure vs Impure Functions

// ✅ Pure Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// ❌ Impure Function
let count = 0;

function increment() {
    count++; // modifies external state
    return count;
}
console.log(increment()); // depends on outside variable


// ✅ Summary
// | Concept            | Description                              |
// |--------------------|------------------------------------------|
// | Higher-Order       | Takes/returns another function            |
// | First-Class        | Functions as values                      |
// | Constructor        | Uses 'this' + 'new' to make objects       |
// | IIFE               | Runs immediately, creates private scope   |
// | this               | Refers to execution context              |
// | call/apply         | Changes `this` + invokes function         |
// | bind               | Changes `this` + returns new function     |
// | Prototype          | Used for inheritance                     |
// | Pure Function      | No side effects, consistent output        |
// | Impure Function    | Side effects, modifies outside state      |
