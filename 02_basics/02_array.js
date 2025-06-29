const marvel_heros = ["ironman", "thor", "sentry", "hulk"];
const dc_heros = ["superman", "batman", "aquaman", "wonderwomen"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator
// console.log(all_new_heros)

const alpha = [1, 2, 3, 4, 7, [3, 6, 6, 3], 11, [10, 13, [20, 24]]]
const real_alpha = alpha.flat(Infinity)
// console.log(real_alpha);



// console.log(Array.isArray("Yogesh"))
// console.log(Array.from("Yogesh"))
// console.log(Array.from({ name: "Yogesh Pawar" }))

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

// console.log(Array.of(score1, score2, score3, score4));