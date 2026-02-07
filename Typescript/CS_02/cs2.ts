// task 3: Add a single-line and a multi-line comment to your code.

//single line comment

/* multiline comment can include
spaces
indentations
and more than one line  (shortcut= Shift+Alt+A)*/

// task 1 : Create a variable for your favorite fruit and print it.
let favFruit: string = "Mango";
console.log(`My favourite fruit is ${favFruit}`);//this prints the favourite fruit name


// task 2 : Write a function that takes a number and prints double its value.
function doubleNum(num : number):void{
    console.log(`Doubled value of ${num} is ${num*2}`);
}

/* above lines include function definition and declaration.
it prints doubled number */

doubleNum(10); //function call with number as argument


// task 4 : Define a class called Person with a method sayHello that prints a greeting.
class Person{
    sayHello():void{
        console.log("Hello everyone from sayHello method inside class person");
    }
}
/* above lines of code is for person class with sayhello
it prints a greeting msg to the objs of person class */


let person1 = new Person();// obj creation
person1.sayHello(); //method call to print greeting from Person class