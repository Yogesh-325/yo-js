const user = {
    username: "Yogesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Yogesh"
//     console.log(this);
// }

// const chai = function () {
//     let username = "Yogesh"
//     console.log(this);
// }

const chai = () => {
    let username = "Yogesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2 //ise kahate hai implicit return

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3,5))

const addTwo = () => ({username: "Yogesh"})

console.log(addTwo())

// arrow function loops me bhi kam me aate hai