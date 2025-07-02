// singleton 
//Object.create = 


// Object liteals
 const obj1 = {
    name: "Rajvir",
    email : "rajvir@google.com",
    city : "Winnipeg",

 }


console.log(obj1.email) 
console.log(obj1["name"])

// we can also change the values 

obj1.name = "Rajvir Singh"
console.log(obj1["name"])

// we can also freeze so no changes can be implemented
// Object.freeze(obj1)



 //let's say we want to add new 
 // for array it was something like Array.push

//  obj1.greetings = `Hello ${this.name}`

obj1.greetings = function(){
   console.log("Hello Js User")
}
obj1.greetings2 = function(){
   console.log(`Hello ${this.name}`)
}

 console.log(obj1.greetings) //this will output function
 console.log(obj1.greetings())
 console.log(obj1.greetings2())