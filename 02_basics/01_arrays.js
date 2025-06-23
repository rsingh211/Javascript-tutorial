// array


const myArr = [0,"penchod",2,3,4,5]

/*
console.log(myArr[1])


// Array Methods

myArr.push("bsdk") // adds new element to the end of array

myArr.push("loda-lasan")

myArr.pop() // no arguments neeeded, it just deletes the last element of an array 

myArr.unshift("pehl")// adds eleemnt to start of array
myArr.shift() // no arguments needed, removes the element from start of array

console.log(myArr)

console.log(myArr.includes(21))//checks if the element exist in the array 
// Data type boolean : true or False

console.log(myArr.indexOf(3)) // checks index
// gives -1 if element doesn't exist

const newArr = myArr.join()
// binds and converts it into string
console.log(newArr)
*/


// Slice, Splice

console.log("A ", myArr)

const myb1 = myArr.slice(1, 3) // only copies the element without affecting the initial array
console.log("B ", myArr)

console.log(myb1)

const myb2 = myArr.splice(1,3) // cuts and seperates the elements from inital array
console.log("C ", myArr)

console.log(myb2)
