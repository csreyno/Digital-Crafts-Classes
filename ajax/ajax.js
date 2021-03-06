//https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/UI-API/7-ajax.md

//make an ajax request

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


//Setting some headers...Don't sweat it right now
request.setRequestHeader("X-Requested-With","XMLHttpRequest");
request.setRequestHeader("Access-Control-Allow-Origin","*");

//request.setRequestHeader("Content-Type","application/json");
//request.setRequestHeader("Accept","application/json");
//Use above for APIs in the future

request.send()
}

export default ajax;

// const ajax = ()=>{
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", (evt)=>{
//         let req = evt.target;
//         if(req.steadyState !== 4) return;
//         if(req.status === 200 || req.status == 304) return callback(req.response)
//         callbakc(null, req.status)
// })

//     request.open(method, url)
//     request.send()
// }

// ajax("test.txt", (resp)=>{
//     console.log(resp)
// })

