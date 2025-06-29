function sayMyName() {
    console.log("Y")
    console.log("O")
    console.log("G")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName()

// function addTwoNumbers(Number1, Number2) {
//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2) {
    // let result = Number1 + Number2;
    // return result;
    return Number1 + Number2;
}

const resultComplete = addTwoNumbers(4, 5)

// console.log("Result: ", resultComplete)

// function loginUserMessage(username) // agar maine ye likha toh hi if condition chalengi nahi to ye dusra wala if ko override kar denga
function loginUserMessage(username = "Arya") {
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return "invalid username"
    // }

    if (!username) {
        console.log("please enter a username");
        return "invalid username"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Yogesh"))
// console.log(loginUserMessage()) 

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 449, 500, 999, 799))

const user = {
    username: "Yogesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "yogi",
    price: 399
})

const myNewArray = [200, 300, 100, 500]

function returnFourthValue(getArray) {
    return getArray[3]
}

console.log(returnFourthValue(myNewArray));
console.log(returnFourthValue([200, 400, 500, 1000]));