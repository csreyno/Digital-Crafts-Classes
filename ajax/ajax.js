//https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/UI-API/7-ajax.md

//make an ajax request

const request = new XMLHttpRequest();
request.onreadystatechange = (evt) => {
    let req = evt.target;
    console.log(req.readyState);
    if(req.readyState !== 4) return;
    console.log(req.response);
    // if(req.status === 200) console.log(req.response)
};
request.open("GET",'test.txt')
request.send()

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

