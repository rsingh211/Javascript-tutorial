const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to webisite`);

        console.log(this)//prints the current context

    }
    // This refers to current context in the scope which means it used
    //  to access the variables in the current scope of things

}

user.welcomeMessage// won't give output

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage() // this will ouput as Sam
// Tis is beacuse we have not hardcoded the value, we used this, which
//considers the current context and that is why 
//it ouputs sam which became the current context

 
console.log()// prints empty object
// In browser, It will print window object

// function chai (){
    
//     console.log(this);
// }

// chai()// outputs lots of values

function chai (){
 let username = "hitesh"
    console.log(this.username);
}

// chai()// now the output value would be undefined
// this is not being used in function

// const chaii = function () {
//      let username = "hitesh"
//     console.log(this.username);// this will also ouput undefined
// }
const chaii = () => {
     let username = "hitesh"
    console.log(this);// ouputs empty paranthesis
}

// chaii() 

// basic syntax of arrow function is 
() => {}

// can  also be hold in a name
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log( addTwo(5,10));

//implicit return
// const addTwo = (num1,num2) => (num1 + num2 ) // no need to write return or curly braces

// const addTwo = (num1,num2) => {username : "hitesh"}// outputs undefined 
// use paranthesis to return the object

const addTwo = (num1,num2) => ({username : "hitesh"})// like this

console.log( addTwo(5,10));


const myArray = [1,2,3,4,5]

myArray.forEach(() => {})
