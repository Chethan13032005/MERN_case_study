abstract class Content {
    public readonly title: string;
    public readonly author:string;
    private published: boolean = false;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public publish(): void {
        this.published = true;
    }

    protected isPublished(): boolean {
        return this.published;
    }
    abstract getType(): string;
}

//task 1: Create an Assignment class extending Content.
//task 2: Add a dueDate property (private).
//task 3: Allow only instructors to set or update the due date before publishing.
//task 4: Implement getType() returning "Assignment"

class Assignment extends Content {
    private dueDate: Date ;

    constructor(title: string, author: string, dueDate: Date) {
        super(title, author);
        this.dueDate = dueDate;
    }

    public setDueDate(newDueDate: Date, isInstructor: boolean): void {
        if(!this.isPublished() && isInstructor){
            this.dueDate = newDueDate;
        }
        else{
            throw new Error("Cannot update due date after publishing or user is not an instructor.");
        }
}

public getDueDate(): Date {
    return this.dueDate;
}

public getType(): string {
    return "Assignment";
}
}

const assignment = new Assignment("Math Homework", "Dr. Smith", new Date('2026-01-20'));
console.log(assignment.getType()); // Output: Assignment
console.log(`Due Date: ${assignment.getDueDate()}`); // Output: Due Date: Mon Jan 20 2026 ...

assignment.setDueDate(new Date('2026-01-25'), true);    
console.log(`Updated Due Date: ${assignment.getDueDate()}`); // Output: Updated Due Date: Sun Jan 25 2026 ...

assignment.publish();




