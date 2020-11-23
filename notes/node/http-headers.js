

const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
    
//     res.setHeader("X-Foo-Header", "RandomData/Random");
//     res.setHeader("X-My-Header-Not-Real", "MoreRandom")
//     res.end("Sent. Check the network!")
// })

// server.listen(5566,()=>{
//     console.log(`Running on Port ${5566}`)
// })

// const server = http.createServer((req,res)=>{
//     //You can combine the status and set headers as an object with res.writeHead
//         res.writeHead(200, {
//             "X-Foo-Header":"RandomData/Random",
//             "X-My-Header-Not-Real":"MoreRandom"
//         })
//         res.end("Sent. Check the network!")
//     })

// server.listen(5566,()=>{
//     console.log(`Running on Port ${5566}`)
// })

let nameList = [
    {
        firstName:"chad",
        lastName:"Reynolds",
        email:"c.reynolds@gmail.com"
    },
    {
        firstName:"bob",
        lastName:"Reynolds",
        email:"bob.reynolds@gmail.com"
    },
    {
        firstName:"janet",
        lastName:"Reynolds",
        email:"janet.reynolds@gmail.com"
    }
]

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
         "Content-Type":"application/json",
         "Access-Control-Allow-Ori":"*"
     //I can access the site from anywhere
     })
     res.write(JSON.stringify(nameList))
     res.end()
 })
 server.listen(5566,()=>{
     console.log(`Running on Port ${5566}`) 
 })