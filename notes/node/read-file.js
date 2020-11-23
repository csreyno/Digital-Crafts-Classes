const fs = require("fs")

// //assums there is a file that has valid json
// fs.readFile("stuff.json",'utf8',(err, data)=>{
//     if(err) throw err;

//     console.log(JSON.parse(data))
//     let output = JSON.parse(data)
//     output.map((value, index) =>console.log(`item number ${index} is ${value}`))
// })



// // !!! This is a blocking piece of code. Should not be used execpt for loading initial data as the program launches.
// let data = fs.readFileSync("data.json",'utf8')
// let dataArr = JSON.parse(data)
// //Do stuff with dataArr


// Exercises

fs.readFile("hey.txt", "utf8",(err, data)=>{
    if(err) throw err;
    console.log(data)
})


fs.readFile("data.json",'utf8',(err, data)=>{
    if(err) throw err;

    console.log(JSON.parse(data))
    let output = JSON.parse(data)
    output.map((person) =>console.log(`${person.name} is ${person.age} years old!`))
})
