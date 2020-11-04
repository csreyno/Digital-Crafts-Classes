// https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Javascript-101/5-loops.md

//Exercise 1
//Using a while loop add numbers from 1 to 10.
// let i   = 1;
// let sum = 0;
// while (i < 11) {
//   sum += i;
//   i++;
// }
// console.log(sum)

//Exercise 2
//Using a for loop, count from a number of your choice to another number.

//Exercise 3
// Using a for loop, start with a number and then divide and replace that number by each number from 6 to 2.

// let n = 100     //choose a number

// for(let i = 6; i > 1; n/i; i--){
//     console.log(n) 
// }


//Exercise 4
// Using either type of loop add all of the numbers not divisible by 2 and 3 from 0 to a number of your choice.

let number = 200
let value = 0
let i = 0  
while (i < number){         //while loop
    if((i % 2) && (i % 3)){
        value += i
    }
    i++
}
console.log(value)

//for loop
for(let i = 0; i < number; i++){
    value += (i % 2 != 0 && i % 3 != 0) ? i : 0
}
console.log(value)
