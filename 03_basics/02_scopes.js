
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner : ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);
 
function one() {
   const username = "Rajvir"

   function two() {
    const website = "Youtube"
    console.log(username);
   }

two()

}

// one()

if (true){
    const name = "Rajvir"
    if(name === "Raj"){
        const email = "rvirdi@gmail.com"
        console.log(`My name is ${name} and my email is ${email}`)
    }
//  console.log(email);
    
}

// console.log(name);

// ++++++++++++++++++++++++++++ Interesting +++++++++++++++++++
console.log(addOne(8)); // can be used before assigning function

function addOne(num){
    return num + 1
}

// console.log(addTwo(9)); // cannot be accessed before


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(8));



