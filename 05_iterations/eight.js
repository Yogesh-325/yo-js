const myNums = [1, 3, 5, 7]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 599
    },
    {
        itemName: "ML course",
        price: 999
    },
    {
        itemName: "Ds course",
        price: 1299
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);