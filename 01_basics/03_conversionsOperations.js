let score = "49abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
// iski madad se hum is string ko number me convert kara sakte hai lekin originally ye number nahi hai(NaN)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 49 => 49 
// "49sqrgf" => NaN
// true => 1; false => 0

let isLoggedIn = "Yogesh";

let booleaIsLoggedIn = Boolean(isLoggedIn);

console.log(booleaIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Yogesh" => true

let anyNumber = 234;

let stringNumber = String(anyNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


/* <=================== Operations ====================> */

let value = 3;
let negValue = -value;

// console.log(negValue);

// console.log(2+3); 
// console.log(2-3); 
// console.log(2*3); 
// console.log(2/3); 
// console.log(2%3); 
// console.log(2**3); 


let str1 = "hello"
let str2 = " Yogesh"

let str3 = str1 + str2;

console.log(str3);

console.log("1" + 3);
console.log(1 + "3");
console.log("1" + 3 + 5);
console.log(1 + "3" + 5);
console.log(1 + 3 + "5");

console.log(+true);
// console.log(true+); not possible
console.log(+"");

let num1, num2, num3;

// num1 = num2 = num3 = 2+2; don't make it more confusing
num1 = num2 = num3 = 2+2;

console.log(num1);
console.log(num2);
console.log(num3);

let gameCounter = 100;
++gameCounter;
console.log(++gameCounter);
