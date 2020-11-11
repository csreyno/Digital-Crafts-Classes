// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Javascript-102-es6/2-arrow-function.md

// //**Creatung an Arrow function**//

// //written different
// const myArrowFunc = (foo)=>{
//     console.log(foo)
// }
// //called the same way
// myArrowFunc('got some data for ya')



// //returning and arguments
// const returnStuff = (arg)=>{
//     return 'stuff'+arg
// }
// console.log(returnStuff('something'))



// //**Arrow function condensed**//
// //single argument can be used with out ()
// const onlyOneArg = someArg => {
//     console.log(someArg)
// }
// onlyOneArg('yup it works')
// //implicit return
// const simple = ()=>'This string is returned' 
// console.log(simple())

// //more useful example
// const xTimesX = x=>x*x //implicit return
// let res = xTimesX(12)
// console.log(res)


// //**Arrow functions as an argument/callback**//
// const doSomething = function(callback){
//     console.log('I did something')
//     callback()
// }

// doSomething(()=>{
//     console.log('The function is finished and now it is my turn')
// })

// //condensed callback
// let myArr = ['a','b','c','d']
// myArr.forEach((letter,idx)=>console.log(letter, idx))

//======================================================

//Exercise 1 - Write an arrow function that accepts a number as an argument and multiplies that number by itself and returns the value.

// const numMult = x => {
//     console.log(x*x)
// }
// numMult(4)

//Exercise 2 - Write an arrow function that has 2 arguments. Add the two arguments and console.log the results.

// const newFunc = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(newFunc(1,2))

//Exercise 3 - Write an array of names.
        //using a forEach loop, loop through the array and have the callback function be an arrow function that will 
        //print the index +1 and then the name.
        //EX: 
    // //results
    // let names = ["clint", "anna", "olivia"]
    // ...//your code
    
    // //results
    // 1. clint
    // 2. anna
    // 3. olival

    arr = ['bob', 'hob', 'nob']

    const newFunc = () => {
        return arr.forEach(name => console.log(name));
    };
    newFunc();
