const http = require("http");
const generateContent = require("./modules/generateContent")
const navigation = require("./modules/generateContent")
const makeHeading = require("./makeHeading")
const serveFile = require("./modules/serveFile")
const port = 5565

const serveFavicon = (req, res)=>{
    fs.readFile("./favicon.ico", (err, data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.end(data)
    })
}

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    const url = new URL(req.headers.host+req.url) 
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    let additional = []
    url.searchParams.forEach((value,name) =>{
        additional.push(`<li>${name}:${value}</li>`)
    })
    let heading = makeHeading(page)
    let foo = "Yo are awesome Clint!"
    let wrapper =  generateContent({
        page,
        navigation, 
        heading, 
        count, 
        additional,
        foo
    })  
    res.write(wrapper)
    res.end()
})
server.listen(port)