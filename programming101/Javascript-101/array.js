// https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Javascript-101/7-Arrays.md


// let myArray = ['a', 'b', 'c']
// console.log(myArray[0])

// myArray.push('d')

// console.log(myArray)

// let removed = myArray.pop() //removes last item in the array
// console.log(removed) // logs what was removed
// console.log(myArray) //shows new array without item item

// myArray.unshift('z') //adds 'z' to the front of the array
// console.log(myArray)

// for(let i=0; i<myArray.length; i++){
//     console.log(myArray[i])     //logs all items in list
// }

// myArray.forEach(function(letter, idx){  
//     console.log(letter,idx)     //logs all items and the corresponding index value
// })



// Exercise 1
// Create a list of letters at with at least 10 items.
// print the 4th item.
// concatinate the 6th and 3rd item and print the results.
// add 4 more letters one at a time to the end of the array.
// remove the first item of the array.
// join all of the letters together and send the results to the console.
// (bonus) sort the letters!

let myArr = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

console.log(myArr[4])
console.log(myArr[6] + myArr[3])
myArr.push('l')
myArr.push('m')
myArr.push('n')
myArr.push('o')
console.log(myArr)

let firstItem = myArr.shift() //removes first item
  console.log(firstItem)
  console.log(myArr)

console.log(myArr.join(""))   //prints array with no spaces

