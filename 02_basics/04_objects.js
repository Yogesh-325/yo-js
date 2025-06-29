// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Yogesh"
tinderUser.isLoggedin = false;

// console.log(tinderUser)

const regularUser = {
    email: "akashvani@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yogesh",
            lastname: "Pawar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const alpha = {1: "a", 2: "b"}
const beta = {3: "a", 4: "b"}
const gamma = {35: "a", 6: "b"}

// const both = { alpha, beta}
const object1 = Object.assign({}, alpha, beta, gamma)
// console.log(object1)

const obj2 = {...alpha, ...beta, ...gamma}
// console.log(obj2)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "yo@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'))
// console.log(tinderUser.propertyIsEnumerable())

const course = {
    coursename: "ml in hindi",
    price: "999",
    courseInstructor: "Yogesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course

console.log(instructor);

// api jab bhi call hota hai tab vo json ko call karta hai

// json aise banta hai 
// {
//     "name": "Yogesh",
//     "coursename": "ai in hindi",
//     "price": "free"
// }

// bahut baar api array ke form me bhi ilti hai
// aur unme multiple no of objects rahate hai
[
    {},
    {},
    {}
]