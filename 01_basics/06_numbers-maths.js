const score = 168;
// console.log(score)

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 112.26;
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-In'))

/* *************** Math **************** */

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(6.4));
// console.log(Math.ceil(6.4));
// console.log(Math.floor(6.4));
// console.log(Math.min(4, 3, 6, 7, 5));
// console.log(Math.max(4, 3, 6, 7, 5));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 100;
const max = 200;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
