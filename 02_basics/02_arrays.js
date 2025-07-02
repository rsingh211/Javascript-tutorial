const { log } = require("console")

const marvel_heroes = ["Thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) 
// takes dc_heroes array as an element itself all together

// console.log(marvel_heroes)

// There is better way of doing this using concat

// const justice_avengers = marvel_heroes.concat(dc_heroes)
// console.log(justice_avengers)

//This combines both arrays to make a new array


//Spread - seperates all the elements of a array

const allHeroes = [...marvel_heroes, ...dc_heroes]
// here we use spread(...) to first seperate the elements
// from both arrays and inside a new array

console.log(allHeroes);


const newArray = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]

const real_newArray = newArray.flat(Infinity) // dissolve the arrays into one single array
console.log(real_newArray);

console.log(Array.isArray("Rajvir")) //checks for array

console.log(Array.from("Rajvir"))
console.log(Array.from({name : "rajvir"})) // results empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))