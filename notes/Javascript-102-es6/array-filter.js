

// let numbers = [5,3,-10,3,-21,78,-54,-1,8]
// let positive = numbers.filter(num=>num >= 0)

// console.log(positive)

// //filter always returns an array and for each item if the function returns true, that item is added to the new array.

// bigNumbers = numbers.filter(num=>num > 100)
// console.log(bigNumbers) //[] empty array, no numbers greater than 100



//  //common usage
//  let ships = [
//     {
//         type:"freighter",
//         name:"falcon"
//     },
//     {
//         type:"fighter",
//         name:"xwing"
//     },
//     {
//         type:"bomber",
//         name:"ywing"
//     },
//     {
//         type:"fighter",
//         name:"tie-fighter"
//     }
// ]

// // let fighters = ships.filter(ship=>ship.type == "fighter")
// // let justNames = fighters.map(fighter=> fighter.name)
// // console.log(fighters)
// // console.log(justNames)

// //the below is commonly seen
// let justNames = ships
// .filter(ship=>ship.type == "fighter")
// .map(fighter=> fighter.name)

// console.log(justNames)

// // filter is not designed to modify the item as it is added. It is designed to simply filter out items from the array.


// let numbers = ["a","b","c"]
// let a = numbers.find(num=>num == "a")
// let d = numbers.find(num=>num == "d")
// console.log(a,d) //will log a undefined, b/c there is no letter 'd' in the array

//   //find ALWAYS returns 1 item or undefined
//   //If there is more than one item it only returns the first item.

// let numbers = [1,2,3,4,5,6,7,8]
// let more = numbers.find(num=>num > 5)
// console.log(more) //will only return '6' because find only returns 1 item

// Exercise 1 - Create an array of at least 6 todo items with each todo having keys, id, todo, status, deadline (timestamp).
// Make at least one date before today.
// Limit the status to "complete","in-progress","todo"
// Using filter, create an array of only the complete items.
// Using find, get the soonest todo item that has a status of "todo".
// using filter get an array of all of the past due items.


let myArr = [
    {
        id: 1,
        todo: "rake leaves",
        status: "complete",
        deadline: new Date("11/8/2020")
    },
    {
        id: 2,
        todo: "wash clothes",
        status: "todo",
        deadline: new Date("11/8/2020")
    },
    {
        id: 3,
        todo: "wash dog",
        status: "in-progress",
        deadline: new Date("11/8/2020")
    },
    {
        id: 4,
        todo: "make dinner",
        status: "in-progress",
        deadline: new Date("11/6/2020")
    },
    {
        id: 5,
        todo: "trash",
        status: "todo",
        deadline: new Date("11/11/2020")
    },
    {
        id: 6,
        todo: "paint something",
        status: "complete",
        deadline: new Date("11/10/2020")
    }
]

// let completed = myArr.filter(currentStatus=>currentStatus.status == "complete")
// // let completed = myArr.filter(currentStatus=>currentStatus.status == "complete" ? true : false)  //can also be written like this
// console.log(completed)

let now = new Date().getTime()
let soonest = myArr.sort((a,b)=>a.deadline.getTime() - b.deadline.getTime())
.find(t=>{
    if(t.deadline.getTime() < now && t.status == "todo"){
        return true;
    }
})
// console.log(soonest)


let past = myArr.filter(t=>t.deadline.getTime() < now && t.status == 'todo')
console.log(past)

