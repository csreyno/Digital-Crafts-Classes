// https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Javascript-101/8-Objects.md

// //empty object
// let myObj = {}

// //object with values
// let newObject = {
//     name:"Clint",    //key and value pair 'name' is key, 'clint' is value
//     age:38,
//     tall:false
// }

// //using new
// let another = new Object()
// console.log(another)


// //like python
// console.log(aboutMe["name"])
// //keys must be strings ... technically
// // so they can be accessed via dot notation.
// console.log(aboutMe.name)


// //changing a key
// aboutMe.name = 'Clint F'
// console.log(aboutMe)

// //adding new key
// aboutMe.gender = 'Male'
// console.log(aboutMe)

// //removeing a key
// delete aboutMe.tall
// console.log(aboutMe)

// //Looping

// //for in loop
// for(attrib in aboutMe){
//     console.log(attrib, aboutMe[attrib])
// }

// //technically this is better because of some quirkiness of js inheritance situations
// for(attrib in aboutMe){
//     if(!aboutMe.hasOwnProperty(attrib)) continue;
//     console.log(attrib)
//     console.log(aboutMe[attrib])
// }

// Exercise
// Create an object called 'spaceship'.
// give it the following keys with whatever values seems reasonable to you. speed,acceleration, passangers, fuel.
// Using the spaceship object above add a payload key after the object has been created. (just give it a number)
// Using the same object above, lower the amount of fuel by 1/3.
// loop through the object and give a message to the console like the one below for every property in the object.

  //object with values
  let spaceship = {
    speed:100,
    acceleration:10,
    passengers:20,
    fuel:100
}
spaceship.payload = 20

spaceship.fuel = 100/3
console.log(spaceship)

for(attrib in spaceship){       //'attrib' is arbitrary here, it can be anything
    if(!spaceship.hasOwnProperty(attrib)) continue;
    console.log(attrib)
    console.log(spaceship[attrib])
}