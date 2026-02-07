// Task 1 : Create a function recordAnswer that takes a question ID and an answer of any type, and stores it in an object.
// Task 2 : Add at least three answers: a string, a number, and an array.
// Task 3 : Print all recorded answers.


let answers:{[key:string]:any} = {} //object to store answers with question id as string and asnwer of any type


//function to record answer of any type against question id
function recordAnswer(questionId:string,answer:any):void{
    answers[questionId]=answer;
}

//adding answers of different types
recordAnswer("q1","Yes , I agree");
recordAnswer("q2",10);
recordAnswer("q3",["option1" , "option2"]);

//printing all recorded answers
for(let key in answers)
{
    console.log(`Question ID: ${key}, Answer: ${answers[key]}`);
}
