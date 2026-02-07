// Implement four small functions to practice each decision-making construct:
// task 1 : checkSign(num: number): void
// Use an if statement to log whether num is positive.
function checkSign(num) {
    if (num > 0) {
        console.log("The number is positive");
    }
}
// task 2 : evenOrOdd(num: number): void
// Use an if…else to log whether num is even or odd.
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}
// task 3 : getGrade(score: number): string
// Use an if…else if…else ladder to return a letter grade:
// score ≥90 → "A"
// score ≥80 → "B"
// score ≥70 → "C"
// score ≥60 → "D"
// otherwise "F"
function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// task 4 : provideFeedback(grade: string): void
// Use a switch to log a feedback message for each grade ("A"… "F"), with a default for any unexpected value.
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Feedback: Excellent performance!");
            break;
        case "B":
            console.log("Feedback: Great job! Keep it up.");
            break;
        case "C":
            console.log("Feedback: Good effort; aim higher next time.");
            break;
        case "D":
            console.log("Feedback: Needs improvement; review your work.");
            break;
        default:
            console.log("Feedback: Unsatisfactory; please seek help.");
            break;
    }
}
// Example usage:
checkSign(5); // Logs: The number is positive
evenOrOdd(4); // Logs: The number is even
console.log(getGrade(85)); // Returns: "B"
provideFeedback("A"); // Logs: Feedback: Excellent performance! 
provideFeedback(getGrade(50)); // Logs: Feedback: Unsatisfactory; please seek help.
