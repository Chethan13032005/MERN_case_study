// Task 1 : Create a function recordAnswer that takes a question ID and an answer of any type, and stores it in an object.
// Task 2 : Add at least three answers: a string, a number, and an array.
// Task 3 : Print all recorded answers.
var answers = {};
function recordAnswer(questionId, answer) {
    answers[questionId] = answer;
}
recordAnswer("q1", "Yes , I agree");
recordAnswer("q2", 10);
recordAnswer("q3", ["option1", "option2"]);
for (var key in answers) {
    console.log("Question ID: ".concat(key, ", Answer: ").concat(answers[key]));
}
