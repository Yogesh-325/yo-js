const myObject = {
    js: 'javascropt',
    cpp: 'c++',
    rb: 'rufy',
    swift: 'swify by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =  ["js", "cpp", "ruby", "java", "python"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key)
// }