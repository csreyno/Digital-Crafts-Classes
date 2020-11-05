// // alert('this is a test')

// console.log('this is happening')

// let paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs)
// console.dir(paragraphs)

// console.log(paragraphs[0])


// let ideas = document.getElementsByClassName("concept")
//   console.log(ideas)

// // let main = document.getElementById("main-idea")
// // console.log(main)


// let heading = document.querySelector("h1") //tag
// console.log(heading)

// let main = document.querySelector("#main-idea") // id
// console.log(main)

// let idea = document.querySelector(".child-idea") // class
// console.log(idea)

// let idea2 = document.querySelectorAll(".child-idea") // class
// console.log(idea2)


//creating and adding elements
//https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/DOM/3-creating-adding-elements.md

// let content = document.createElement("div")
// let bigList = document.createElement("ul")

// console.log('items created')
// console.log(content, bigList)
// let main = $("main")

// console.log('added created items to document')
// main.append(content, bigList)

// console.log('added list items to list')
// for(let i = 0; i < 6;  i++){
//     let l = document.createElement("li")
//     l.append('this is item #${i}')
//     bigList.append(l)
// }


//MODIFYING HTML CONTENT
//https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/DOM/4-modifying-html-content.md
//adding content to a node

// let header = document.querySelector("hi")
// header.innerText = "i want a new title"

// let text = documnet.createTextNode('this is the new text')
// main.append(text)


//MODIFYING ATTRIBUTES
// https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/DOM/5-modifying-attributes.md

// let main = document.querySelector("main")
// main.id = "main-item"

// console.log(main)

// let a = document.createElement("a")
// a.innerText = "This is an awesome link"
// a.href = "http://www.google.com"
// main.append(a)

// let picture = document.createElement("img")
// picture.setAttribute("src","https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg")
// picture.setAttribute("alt", "Pretty picture of rio")
// main.append(picture)
// picture.width='200'


//Exercise
//Create a html document that has an empty body.
//Create an array of objects with keys url, text, id and values that match.
//Loop through the array and make an unordered list of links.

// let main = document.querySelector("main")

// let myList = [
//     {url:"http://www.google.com", id:"google-link", text:"Go to Google yo!"},
//     {url:"http://www.amazon.com", id:"amazon-link", text:"Go to amazon!"},
//     {url:"http://www.apple.com", id:"apple-link", text:"Go to apple!"}
// ]
// let ul = document.createElement("ul")
// main.append(ul)
// myList.forEach(function(item){
//     let a = document.createElement("a")
//     a.href = item.url;
//     a.innerText = item.text;
//     let l = document.createElement("li")
//     l.append(a)
//     ul.append(l)
// })

//MODIFYING STYLES

// let header = document.querySelector("h1")
// console.dir(header)
// header.style = "border-bottom:1px solid;text-align:right"

// let ideas = document.querySelectorAll(".child-idea")

// let styleString = "background:red;font-size:2em;font-weight:bold;"

// ideas.forEach(function(idea, idx){
//     idea.style = styleString
// })

// //only modifies a single attribute
// header.style.color = 'green'
// //if an attribute would normally have a '-' just use camel case, so 'fontFamily' vs 'font-family'

// header.style.fontFamily = 'sans-serif'

//Exercise
// Create a document that has a h1, a ul with 3 items, and a p element.
// Add content to all of the items via dom manipulation.
// Add styles to all of the items using the techniques shown above.

let header = document.querySelector("h1")
let list = document.querySelector("ul")
let listItems = document.querySelectorAll("li")
header.style.color = 'yellow'
list.style.color = 'green'

