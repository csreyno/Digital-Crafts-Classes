//https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Javascript-102-es6/3-array-map.md

//Map will always produce an array of the same length as the source array.

// let letters = ["a","b","c","d"]
//   let letterPlus = letters.map(function(letter){
//       return letter+letter
//   })
//   console.log(letters)
//   console.log(letterPlus)

//   //another example
//   let letterObj = letters.map(function(letter,idx){
//       return {
//           name:letter,
//           index:idx,
//           letterIdx : letter+idx
//       }
//   })

//   console.log(letterObj)

  //undefined usage**

//   let numbers = [6,1,3,4,3,5,5,10]
//   //function has a conditional return
//   let increased = numbers.map(function((num, idx){
//       if(num > numbers[idx-1]) return num;
//   })
//   console.log(increased)

  //**Common Usage**

//   let family = [
//     {
//         name:"clint",
//         age:38
//     },
//     {
//         name:"Anna",
//         age:37
//     },
//     {
//         name:"Olivia",
//         age:11
//     },
//     {
//         name:"Alle",
//         age:9
//     },
//     {
//         name:"Mark",
//         age:9
//     }
// ]

//returns just names:

// let justNames = family.map(function(member){
//     return member.name
// })

//you will almost always use arrow functions 
//yea! implicit returns
//the above can also be wrriten as :
// let justNames = family.map(member=>(member.name))

// console.log(justNames)

// console.log(family)


// //you should not update the array in the map function
// let updated = family.map((member)=>{
// member.surName = "Fleetwood"
// return member
// })
// console.log(updated)
// // accidently updating objects this can lead to bugs
// console.log(family)

//better way ... create a new object
// let updated = family.map((member)=>{
//     let newMember = {}
//     for(key in member){
//         newMember[key] = member[key]
//     }
//     newMember.surName = 'Fleetwood'
//     return newMember
// })
// console.log(updated)
// console.log(family)//no change

//Exercise 1 - Create an array of vehicle objects.
    // each vehicle object needs to have keys of name, speed, passengers.
    // using map, create a list of names of the vehicles.
// let myArr = [
//     {
//         name: 'sled',
//         speed: 3,
//         passengers: 3
//     },
//     {
//         name: 'bike',
//         speed: 5,
//         passengers: 1
//     },
//     {
//         name: 'horse',
//         speed: 8,
//         passengers: 2
//     }
// ]

// let vehicleNames = myArr.map(type=>(type.name))
// console.log(vehicleNames)

//Exercise 2 - Create an array of at least 6 todo items with each todo having keys, id, todo, status.
    // Limit the status to "complete","in-progress","todo"
    // Using map create a list of different status.
    // using map of those status, make a list of status objects that has keys status, and items.
//final array should look something like this:
// [
//     {
//         status:"complete",
//         items:["Pick up yard", "clean bathroom"]
//     },
//     {
//         status:"in-progress",
//         items:['brush teeth']
//     },
//     {
//         status:"todo",
//         items:["feed kids", "vote"]
//     }
// ]

let myArr = [
    {
        item: "rake leaves",
        todo: 3,
        status: "complete"
    },
    {
        item: "wash clothes",
        todo: 3,
        status: "todo"
    },
    {
        item: "wash dog",
        todo: 3,
        status: "in-progress"
    },
    {
        item: "make dinner",
        todo: 3,
        status: "in-progress"
    },
    {
        item: "trash",
        todo: 3,
        status: "todo"
    },
    {
        item: "paint something",
        todo: 3,
        status: "complete"
    }
]

let itemStatus = myArr.map(type=>(type.status))
console.log(itemStatus)