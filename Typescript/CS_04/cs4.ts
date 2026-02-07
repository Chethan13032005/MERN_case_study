// Task 1 : Declare a variable score with let and assign it a number.

// Task 2 : Inside a block (e.g., an if statement), declare another score variable with a different value and print it.

// Task 3 : Declare a constant COUNTRY and assign it your favorite country.

// Task 4 : Try to change the value of COUNTRY and observe what happens.

// Task 5 : Try to re-declare score in the same block and see the result.

let score:number=14; // variable score with num

if(true){
    let score:number=20; //another score variable inside block with diff value
    console.log(score); //printing score value inside if block
}
const COUNTRY:string="India"; //declared COUNTRY as constant with value

// COUNTRY="USA"; // This will cause an error because COUNTRY is a constant and cannot be reassigned.

// let score:number=30; // This will cause an error because score has already been declared in the same scope.