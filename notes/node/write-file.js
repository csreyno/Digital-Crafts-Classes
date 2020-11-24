const fs = require("fs")

//creates a text file with the content below
fs.writeFile("myFile.txt", "Hello Node Node!", 'utf8', (err)=>{
    if(err) throw err;

    console.log('file written with no errors')
})