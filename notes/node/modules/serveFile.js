
const serveFile = (req, res)=>{
    fs.readFile("./style.css", (err, data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.end(data)
    })
}

module.exports = serveFile