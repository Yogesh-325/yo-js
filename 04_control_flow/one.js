// if 
const isUserloggedIn = true;

if (isUserloggedIn) {
    console.log("hii")
}

// <, >, <=, >=, ==, !=, ===, !==

// let age = 34;
// // age = 18;
// if (age < 18) {
//     console.log("not eligible to vote!")
// } else if (age == 18) {
//     console.log("just become adult!")
// }
// else {
//     console.log("can vote!")
// }


// nesting

const userloggedIn = true;
const debitCard = true;
const loggeInFromEmail = true;
const loggeInFromGoogle = true;

if (userloggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if (loggeInFromEmail || loggeInFromGoogle){
    console.log("User logged in");
}