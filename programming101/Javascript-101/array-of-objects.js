// https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Javascript-101/9-arrays-of-objects.md

// let people = [          //each object is comma separated
//     {
//         name:"Clint",
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
//         age:7
//     }       
// ]
// //single item
// console.log(people[0].name+' is '+people[0].age+' years old')

// let cur = people[1];
// console.log(cur.name+ ' is ' + cur.age+ ' years old')

// loop through array
// people.forEach(function(person){
//     console.log(person.name+' is '+person.age+' years old')
// })

//Exercise 1
// Make an array of ship objects (at least 3). Each ship needs a name, topSpeed, acceleration, and cargo capacity.
// console.log the name and top speed of the 2nd ship.
// loop through the array and print out every stat in a key:value style.
// (Bonus) sort the array by the ship with the fastest speed and console log it out.

let ships = [         
    {
        name:"Clint",
        top_speed:38,
        acceleration:100,
        capacity:20
    },
    {
        name:"Bob",
        top_speed:20,
        acceleration:15,
        capacity:100
    },
    {
        name:"Dan",
        top_speed:100,
        acceleration:50,
        capacity:3
    }
]

// console.log(ships[1].name+'\'s top speed is ' +ships[1].top_speed+' feet per hour!')

// ships.forEach(function(ship){
//     console.log(ship.name+'\'s top speed is '+ship.top_speed)
// })

// for(attrib in ships){       //'attrib' is arbitrary here, it can be anything
//     if(!ships.hasOwnProperty(attrib)) continue;
//     console.log(attrib)
//     console.log(ships[attrib])
// }

ships.sort(function(a,b){           //sorts fastest to slowest
    return b.top_speed - a.top_speed
})
console.log(ships)