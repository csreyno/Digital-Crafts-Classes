//real example
const os = require("os")

const http = require("http")

const fs = require("fs")


// console.log(os.freemem())
// console.log(os.networkInterfaces())
// console.log(os.userInfo())

// Make a function that will retrieve all of the 
// above pieces of information and return that information in an array.

let myArr = [];
let mem = os.freemem();
let net = os.networkInterfaces();
let user = os.userInfo();


const getInfo = () => {
    return [os.freemem(), os.networkInterfaces(), os.userInfo()]
}

console.log(getInfo)