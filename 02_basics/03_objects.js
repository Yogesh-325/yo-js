// singleton

// object literals

const mySym = Symbol("key1")

const item = {
    "product": "RD Sharma Book",
    [mySym]: "mykey1",
    price: "30$",
    discount: "25%",
    isBrandNew: true,
    productRating: "4.5 of 5",
    requirment: ["CBSE", "ICSE", "...others"]
}

console.log(item)
// console.log(item.price) --> jab bhi quotation me hota hai tab . se nahi, [] se output lena hota hai

// console.log(item["product"])
// console.log(item[mySym])
// console.log(typeof[mySym])

item.product = "HC Verma"
item.price = "20$"
// Object.freeze(item)

// item.product2 = "HK Das"
// item.price2 = "50$"

console.log(item);

item.approach = function(){
    console.log("Order Now Only few left");
}

item.approachTwo = function(){
    console.log(`Order Now Only few left, buy now at , ${this.price}`);
}
// console.log(item.approach)
console.log(item.approach())
console.log(item.approachTwo())