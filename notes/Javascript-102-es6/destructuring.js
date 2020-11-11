//https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Javascript-102-es6/7-destructuring-assignment.md

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//Destructuring - In javascript destructuring is unpacking an array or object to assign the values unpacked to variables.


/* Looks odd but [x,y] is not an actual array it is assigning the variables */
let [x,y] = [20, 30]
console.log(x)
console.log(y)


 //you do not need everything
 let me = ["Clint", 29, "clint@digitalcrafts.com", 160]
//  let [name,age] = me
//  console.log(name,age)

// you can also leave out some items
let [name,age,,weight] = me
console.log(name,age,weight)


//rest of the items returned as an array
let [x,y, ...rest] = [20, 30, 40, 50]
console.log(x,y,rest)

    //rest is not a keyword
    let [x,y, ...foo] = [20, 30, 40, 50]
    console.log(x,y,foo)

let me = {name:"Clint", age:29, email:"clint@digitalcrafts.com"}

// A pattern you will see in react ... a LOT
//Grabs the keys and assign a variable to that named key
const {name,age, email} = me
console.log(name,age,email)

//just like with arrays you do not need to destructure all the parts
const {name} = me
//this is helpful if the object is large and you only need a few parts.


//Exercise 1 - Create an array with 4 numbers and use that array and destructuring for the following operations.
    // Assign the value of variables a,b,c,d to the values in the array.
    // Assign only the 2nd item's value to a variable named second.
    // Assign the value of the first to a variable named first and the rest to a variable named rest.

let numARR = [1, 2, 3, 4]
// let [a,b,c,d] = numARR
// console.log(a,b,c,d)

// let[,second,,] = numARR
// console.log(second)

let [first,...rest] = numARR
console.log(first,rest)


//Exercise 2 - Create an object called ship that has keys name, age, speed, acceleration and values of your choice. Use this object and destructuring for the following operations.
    // create a variable name, age from the object.
    // create variable for acceleration only from the object.
    // create variables age, speed from the object.
    // (bonus) (hint you will need to read into the link at top of page) create variables called ship_age, ship_speed from the age and speed keys of the object.

let ship = {
    name: 'bob',
    age: 20,
    speed: 5,
    acceleration: 10
}

const {name,age} = ship
console.log(name,age)

const {acceleration} = ship
console.log(acceleration)

const {age,speed} = ship
console.log(age,speed)