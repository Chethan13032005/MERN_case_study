// task 1: Write a generic class FeedbackBox<T> that stores feedback items of any type and lets you retrieve them all.
var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.feedbacks = [];
    }
    FeedbackBox.prototype.addFeedback = function (feedback) {
        this.feedbacks.push(feedback);
    };
    FeedbackBox.prototype.getFeedbacks = function () {
        return this.feedbacks;
    };
    return FeedbackBox;
}());
var quizFeedback = new FeedbackBox();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Could be more challenging.");
console.log(quizFeedback.getFeedbacks());
var lessonFeedback = new FeedbackBox();
lessonFeedback.addFeedback({ tatings: 5, comments: "Excellent lesson!" });
lessonFeedback.addFeedback({ tatings: 4, comments: "Very informative." });
console.log(lessonFeedback.getFeedbacks());
// task 2: Write a generic function getFirstItem<T> that returns the first item from any array.
function getFirstItem(items) {
    return items[0];
}
console.log(getFirstItem([1, 2, 3, 4]));
console.log(getFirstItem(["apple", "banana", "cherry"]));
console.log(getFirstItem([{ id: 1 }, { id: 2 }]));
