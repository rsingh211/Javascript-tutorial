// const tinderUser = new Object (); //This is singleton

const tinderUser = {}

tinderUser.id = "123qwerty"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false


const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Rajvir",
            lastname: "Singh"
        }
    }

}

// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = { obj1, obj2} // returns them as seperate

// const obj3 = Object.assign(obj1,obj2) // this is okay but here the values are being added into obj1

// To solve that we use {} as a target and than refer our objects
// const obj3 = Object.assign({},obj1,obj2)
// This combines the object without changing our initial objects

const obj3 = {...obj1, ...obj2} // THis is the mordern way using spread(...)

// console.log(obj3)

const users = [
    {
        id : 1,
        alias : "Bhen"
    },
    {
        id : 2,
        alias : "Jaan"
    },
    {
        id : 3,
        alias : "Jorr"
    }
]

// console.log(users[1].alias)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // gives output as array
// console.log(Object.values(tinderUser)) // gives output as array

// console.log(Object.entries(tinderUser));

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor 

const {courseInstructor} = course // when we do this we can use this key without reffering to the object name
// also we can give a diffrent name to the key aswell
//for eg
const {coursename : Subject} = course

console.log(courseInstructor);
console.log(Subject);

