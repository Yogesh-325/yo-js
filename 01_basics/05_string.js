const name = "Ram";

const hisAge = 18;

console.log(name + " " + hisAge);

// use `` inated of '' or "" because of string interpolation

console.log(`hello my name is ${name} my age is ${hisAge} i am resident of india`)

const gameName = new String("Yogesh")

console.log(gameName[0])
console.log(gameName[0].__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(0,2)
console.log(anotherString);


const newString1 = "    Mahesh  .   "
console.log(newString1.trim())

console.log(newString1.replace('.', 'Babu'))

console.log(newString1.includes('Babu'));

console.log(newString.split('Yo'));