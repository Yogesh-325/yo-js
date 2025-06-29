// scope --> {}
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(a)
}

// console.log(a)
// console.log(b) not work
// console.log(c)

function one() {
    const username = "Veidahi"

    function two() {
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username = "Janta"
    if (username === "Janta") {
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website); error-show/not-work
}

// console.log(username) error-show/not-work

/************ Intresting ***********/

addone(4)
function addone(num){
    return num + 1;
}


// addTwo(5) not work --> // agar function declaration ke saath hum variable ko hold bhi kar denge toh aur hum function ko pahale call karange to error denga

const addTwo = function(num){
    return num + 2;
}

// addTwo(5) // ye correct hai 

console.log(addTwo(5))