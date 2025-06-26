const { log } = require("console")

function sayMyName() {
    console.log("R")
    console.log("A")
    console.log("J")
    console.log("V")
    console.log("I")
    console.log("R")
}

sayMyName // This is the refrence of the function
// sayMyName() // This is calling(or execution) of the function

function addition(number1, number2)//parameters
{


    console.log(number1 + number2);

}

addition(3, 5)//arguments

// function addition (anything that goes here is called parameters){}
// and when you call the function 
//addition(Arguments)

/* here if we try to store the addition function
in a variable, we won't be able to recieve the result in 
our console */

const result = addition(3, 8)
// console.log(result) // it will give output but also give out value from the variable as undefined

// for that we use return inside our functions

function addition2(number1, number2) { return number1 + number2 }

const result2 = addition2(3, 8)
// console.log(result2)

/* -------------------------------------------------------------- */

function loginUserMessage(username = "sam") // we can also give default value like this
{
    if (username === undefined)// can also be written as (!username)
    {
        console.log("Please enter a username")
        return
    }
    else
        return `${username} just logged in`
}

// console.log(loginUserMessage("Rajvir"));
// console.log(loginUserMessage("Rajvir")); // returns undefined just logged in

function calculateCartPrice(...num1)// creates an array of the arguments
 {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username : "Rajvir", email : "rvirdi101@icloud.com"

}

function handleObject(anyObject) {
    console.log(`Hi, my name is ${anyObject.username} and my email id is ${anyObject.email}`)
}

// handleObject(user)

handleObject({
    username: "Gurleen",
    email : "gurleen@email.com"
})

const myNewArray = [200,400,100,600]

function getArrayValue(getArray){
    return getArray[3]
}

// console.log(getArrayValue(myNewArray));
console.log(getArrayValue([200,300,400,1000]));

