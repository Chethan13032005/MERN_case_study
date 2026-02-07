// task 1: Write a generic class FeedbackBox<T> that stores feedback items of any type and lets you retrieve them all.
class FeedbackBox<T>{
    private feedbacks: T[] = [];

    addFeedback(feedback:T):void{
        this.feedbacks.push(feedback);
    }

    getFeedbacks():T[]{
        return this.feedbacks;
    }
}

const quizFeedback = new FeedbackBox<string>();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Could be more challenging.");
console.log(quizFeedback.getFeedbacks());

type LessonFeedback = {
    tatings: number;
    comments: string;
}
const lessonFeedback = new FeedbackBox<LessonFeedback>();
lessonFeedback.addFeedback({tatings: 5, comments: "Excellent lesson!"});
lessonFeedback.addFeedback({tatings: 4, comments: "Very informative."});
console.log(lessonFeedback.getFeedbacks());

// task 2: Write a generic function getFirstItem<T> that returns the first item from any array.
function getFirstItem<T>(items:T[]):T | undefined{
    return items[0];
}

console.log(getFirstItem<number>([1, 2, 3, 4]));
console.log(getFirstItem<string>(["apple", "banana", "cherry"]));   
console.log(getFirstItem<{ id: number }>([{ id: 1 }, { id: 2 }]));