
const fs = require("fs");

//creates a text file with the content below
fs.writeFile("paragraph.txt", "This is my paragrpahy. There are many like it but this paragraph is mine. Maybe one more sentence.", 'utf8', (err)=>{
    if(err) throw err;

    console.log('file written with no errors')
})



let cars = [
    {
        name: "loretta",
        speed: 20,
        year: 1965
    },
    {
        name: "loraine",
        speed: 10,
        year: 1978
    },
    {
        name: "linda",
        speed: 30,
        year: 1988
    }
]

fs.writeFile("cars.json", JSON.stringify(cars), 'utf8', (err)=>{
    if(err) throw err;

    console.log('file written with no errors')
})

const addCar = (newCar)=>{
    cars.push(newCar)
    fs.writeFile(
        "cars.json", 
        JSON.stringify(newCar),
        (err)=>{
            if (err) throw err;
            console.log("New car data saved")
        }
    )
}

addCar({name:"speeder",speed:"Fast",year:"none", payload:"none"})