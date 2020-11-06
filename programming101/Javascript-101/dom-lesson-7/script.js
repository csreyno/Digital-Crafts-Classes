

// let footer = document.querySelector("footer");
// footer.classList.add("highlighted")

// let paragraph = document.querySelector("p");        //why doesnt querySelectorAll work here?
// let myInterval = setInterval(function(){
// paragraph.classList.add("primary")



//Events - https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/DOM/8-events.md
//Create a document that has a button.
// Have that button change background color when you click on it.
// Have a list of items with a title and additional info for each item.
// When you click on the title have the additional info toggle. (Hint look at mdn Node.nextSibling or Node.parent.childNodes)

//event target
// let button = document.querySelector("btn")
// const toggleBackground = function(evt){
//     evt.target.classList.toggle("btn")
// }



// let clickFun = function(evt){
//     evt.target.nextElementSibling.classList.toggle("hidden")
// }
// let titles = document.querySelectorAll(".title")
// titles.forEach(function(title){
//     title.onclick = clickFun
//     title.nextElementSibling.classList.add("hidden")
// })









//Event Listeners https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/DOM/9-event-listeners.md

// let button  = document.querySelector("#more-info")
// button.classList.add("btn")

// const func1 = function(){
//     console.log('function1 was fired')
// }
// const func2 = function(){
//     console.log('function2 was fired')
// }

// button.onclick = func1
// //add another
// button.onclick = func2
// //only function 2 is fired but i want both!
// //so add an event listener

// ================================================================
//using an event listener

// let button  = document.querySelector("#more-info")
// button.classList.add("btn")

// const func1 = function(evt){
//     console.log(evt)
//     console.log('function1 was fired')
// }
// const func2 = function(evt){
//     console.log(evt)
//     console.log('function2 was fired')
// }

// button.addEventListener("click", func1)
// button.addEventListener("click", func2)


// console.log('Gonna load the DOM')
// window.addEventListener("DOMContentLoaded", function(evt){
//     console.log('THE DOM HAS BEEN LOADED!')
// })

// button.removeEventListener("click", func1) //removes event listener for func1 above

//=======================================================
//Exercise:
// 1. Using event listeners: <-- do this one
//  Add an event listener to a button and have the text of a button increase every time it is pushed.
//   When the button is clicked 10 times. Change the color of the button and remove the event listener.
//  (bonus) do this without using a variable.
// 2. Create a div with WAY too much text, but limit the size of the div and allow the div to scroll using css.(hint lookup scrolling in css on mdn)
//  When the text scrolls to the top make the background more blue
//  when the text scrolls to the bottom make the background more red.

let num = 0;

let button  = document.querySelector(".more-info")
button.classList.add("btn")

//practice adding an additional class to another class item; this is 
//adding the 'btn' class to the first html element with the class 'child-idea'
let childIdea = document.querySelector(".child-idea");
childIdea.classList.add("btn");

const func1 = function(){
    num++;
    if(num == 10){
        button.removeEventListener("click", func1);
        button.style.backgroundColor = 'red';
    }
    button.innerHTML = num;
    console.log('function1 was fired');
};

//'click' is built into JS
button.addEventListener("click", func1)


// const func2 = function(evt){
//         console.log(evt)
//         console.log('function2 was fired')
// }


// button.addEventListener("click", func2)