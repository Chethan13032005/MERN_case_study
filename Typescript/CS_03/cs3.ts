//Task 1: Declare a variable called city and assign it your favorite city as a string.

// Task 2: Declare a variable called temperature with type number and assign it a value.

// Task 3: Create a variable called isRaining and let TypeScript infer its type from the value you assign.

// Task 4: Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like: "In <city>, it is <temperature>°C. Is it raining? <true/false>"

// Task 5: Try calling the function with your variables

var city:string="Mysore"; //variable with type and value
var temperature:number=25; //variable with type and value
var isRaining=true; //varable with only value , type is infered

function weatherReport(
    city:string,
    temperature:number,
    isRaining:boolean
):void{
    console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`); //function to print weather report by taking 3 parameters
}

weatherReport(city,temperature,isRaining); //function call with variables as arguments