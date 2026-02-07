var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    Content.prototype.publish = function () {
        this.published = true;
    };
    Content.prototype.isPublished = function () {
        return this.published;
    };
    return Content;
}());
//task 1: Create an Assignment class extending Content.
//task 2: Add a dueDate property (private).
//task 3: Allow only instructors to set or update the due date before publishing.
//task 4: Implement getType() returning "Assignment"
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment(title, author, dueDate) {
        var _this = _super.call(this, title, author) || this;
        _this.dueDate = dueDate;
        return _this;
    }
    Assignment.prototype.setDueDate = function (newDueDate, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = newDueDate;
        }
        else {
            throw new Error("Cannot update due date after publishing or user is not an instructor.");
        }
    };
    Assignment.prototype.getDueDate = function () {
        return this.dueDate;
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
var assignment = new Assignment("Math Homework", "Dr. Smith", new Date('2026-01-20'));
console.log(assignment.getType()); // Output: Assignment
console.log("Due Date: ".concat(assignment.getDueDate())); // Output: Due Date: Mon Jan 20 2026 ...
assignment.setDueDate(new Date('2026-01-25'), true);
console.log("Updated Due Date: ".concat(assignment.getDueDate())); // Output: Updated Due Date: Sun Jan 25 2026 ...
assignment.publish();
