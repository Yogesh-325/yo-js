// immidiatly invoke function expression(IIFE)

// first () function defination , second () is a execution of function

(function pawar() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();
// agar kabhi aisa special function banaya toh hamesa ; (semi-colon) lagana jaruri hai kyuki jo niche wala function nahi calenga iske karan


// arrow function
((name) => {
    console.log(`DB CONNECTED TO ${name}`)
})('Yogesh'); // "" --> bhi laga sakta tha