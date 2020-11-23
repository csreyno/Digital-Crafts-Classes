const http = require("http")

const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>Oh BOY!</title>
          </head>
          <body>
              <h1>This is the H1 Heading</h1>
              <ul>
                  <li>I like fruit</li>
                  <li>I like dogs</li>
                  <li>I dont like cats</li>
              </ul>
              <script>
                  console.log("This will be our little secret")
              </script>
          </body>
      </html>
  `;

const server = http.createServer((req,res)=>{

    //set the status code to 200 before it sends
    res.statusCode = 200;

    //ends the response to the client
    //and sends the data in the argument
    // res.end("Hello World!!!")
    res.end(htmlContent)
})

server.listen(3344, () =>{
    console.log("server is up and running an listening on port 3344")
})