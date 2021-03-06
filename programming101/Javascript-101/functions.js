// Exercise 1
//Write a function that accepts 3 arguments and returns the value of all the items added together.

function foo(bar1,bar2,bar3){
    return bar1 + bar2 + bar3
}
let res = foo('I ', 'am ', 'happy...')
console.log(res)

// Exercise 2
//Write a function that has an anonymous function as the first argument and a number as the second argument:
// the anonymous function needs to console.log something.
// Have the first function count from 0 to the number that the second argument is.
// After it is done counting have it call the anonymous function.
// call the function again with a different function as the argument.

const nextFunc = function(subFunc, aNumber){
    for(let i = 0; i < aNumber; i++){
        console.log(i)
    }
    subFunc()
}
nextFunc(function(){
    console.log('yeee haw')
}, 20)
nextFunc(function(){
    console.log('yeee yeee')
}, 2)

// const anotherFunc = function(){
//     console.log('I am here')
// }, 3)

