//Medium 1
//Write a madlib function, which is given a name and a subject. 
//It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// function madLib(name, subject){
//     return (name + "'s favorite subject is " + subject)
// }
// console.log(madLib('jenny', 'art'))


//Medium 2 - tip calculator
//Write a function tipAmount that is given the bill amount and the 
//level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%

// let myService = {
//     good: .2
//     fair: .15
//     bad: .1
// };
// function tipAmount(bill, serviceLevel) {
//     return bill * myService[serviceLevel] || bill * 0.2;
// }
// console.log(`Tip Amount: $${tipAmount(10, "fair")}`);


//Medium 2 - tip calculator part two


//Medium 3 - Write a function printNumbers which is given a start number and 
// an end number. It will print the numbers from one to the other, one per line:
// Write two versions of the above function. One using a while loop and the other using a for loop.
//printNubers(1, 10)



//Medium 4 - Write a function printSquare which is given a size and 
// prints a square of that size using asterisks. printSqaure(5)

// const printSquare = function(v){
//     let s = "-".repeat(v)+'\n'
//     console.log(s.repeat(v))
// }
// printSquare(5)


// Medium 5 - Write function printBox which is given a width and 
// height and prints a hollow box of those given dimensions. printBox(6, 4)


// //not correct but close
// function printBox(width, height) {
//     console.log("-".repeat(width));
//     for (let i = 1; i < height -1; i++) {
//         console.log("|  " + " ".repeat(width - 2))
//     }
// }
// printBox(6, 6)


// Medium 6 - Write a function printBanner which is given some text and prints a
// banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner(text){
    let l = text.length;
    let s = "";
    let i = 0;
    for(let i = 0; i< l+2; i++) {
        s +='-';
    }
    console.log(s)
    console.log("-" + text + "-")
    console.log(s)
}

printBanner("this is the end of world")


//Medium 7
