# Ajax

## Objectives
- Make Ajax Request
- Make Ajax module
- Exercise

# Make Ajax Request
- ```js
    const request = new XMLHttpRequest();
    request.onreadystatechange = (evt) => {
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) console.log(req.response)
    };
    request.open("GET",'./samples/test.txt')
    request.send()
# Modularize
- ```js
    //ajax.js
    const ajax = (url, callback, method='GET')=>{
        if(!url) return console.error("Request Required")
        if(!callback) return console.error("Callback Required")
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", evt=>{
            let req = evt.target;
            if(req.readyState !== 4) return;
            if(req.status === 200) return callback(req.response)
            callback("")
        })
        request.open(method,url)
        request.send()
    }

    export default ajax;
- ```js
    //any otherfile
    import ajax from "./folder/ajax.js"

    const callback = res, err)=>document.body.append(res)    
    ajax("./samples/text.txt", callback)
## Excericses
> Feel free to use the ajax module and re-use whenever you want and modify as needed.
1. Using ajax get get a text file from your server and put the contents into the html document's body.
2. Using javascript create an unordered list and put that unordered list into the document.
    - Create 3 text files and import each one as a list item into the unordered list using ajax.