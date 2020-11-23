// json - javascript object notation

let myJSONArray = '["string1", "string2", "string3"]'
  //all string values in json require double quotes.

let moreJSONArray = '[7, false, true, 42, "more text"]'
//numbers and booleans do not require double quotes

let myJsonObject = `{
    "name":"Clint",
    "age":39,
    "email":"clint@digitalcrafts.com"
}`
//JSON objects are more like python dictonaries. They require the key to have double quotes.

let arrayOfObjectJSON = `[
    {
        "name":"Clint",
        "age":39,
        "email":"clint@digitalcrafts.com"
    },
    {
        "name":"Anna",
        "age":37,
        "email":"anna@noneya.com"
    },
    {
        "name":"Olivia",
        "age":11,
        "email":"olivia@noneya.com"
    }
]`
  //Arrays and objects are allowed to be nested in JSON

  let realArray = JSON.parse(myJSONArray)
  console.log(realArray) //array of strings

  // array of additional items
  console.log(JSON.parse(moreJSONArray)) 

  //real js object
  console.log(JSON.parse(myJsonObject))

  //js array of objects
  let famArray = JSON.parse(arrayOfObjectJSON)


  //CREATING JSON FROM JAVASCRIPT-

  let myArray = [1,3,4,5]
  let jsonArry = JSON.stringify(myArray)
  //just a string

  let jsonObjString = JSON.stringify({
      name:"Clint",
      age:39,
      email:"clint@digitalcrafts.com"
  })
  //still just a string
  let myObj = {
      coolFunc:()=>console.log('lets see'),
      a:"10",
      b:[
          "string",{
              someKey:"key is good"
          }
      ],
      anotherFunc:()=>console.log('another func')
  }
  console.log(JSON.stringify(myObj))
  //Functions and other things that JSON cannot turn into a string are ignored.


//EXERCISE 1 - Create a javascript object and convert that object into a JSON string.

let thisObject = {
    "name":"Chad",
    "age":39,
    "email":"clint@digitalcrafts.com",
    "gender":"unknown"
}
console.log(JSON.stringify(thisObject))

//EXERCISE 2 - Create an array of objects and turn that array of objects into a JSON string.
    //Turn that JSON string back into a an array of objects.

    let thisArrayOfObjects = [
        {
        "name":"Chad",
        "age":39,
        "email":"clint@digitalcrafts.com",
        "gender":"unknown"
        },
        {
        "name":"bob",
        "age":55,
        "email":"cbob@digitalcrafts.com",
        "gender":"M"
        },
        {
        "name":"gob",
        "age":21,
        "email":"gob@digitalcrafts.com",
        "gender":"F"
        }
    ]
    console.log(JSON.stringify(thisArrayOfObjects))     //correct???