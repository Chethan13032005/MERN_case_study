// Task 1 : Create a function processTransaction that takes an amount (number), a description (string), and a flag isCredit (boolean).
// Task 2 : If the amount is negative, the function should throw an error (never).
// Task 3 : If the description is missing, use undefined and handle it in the function.
// Task 4 : Print a summary of the transaction.
function processTransaction(amount, description, isCredit) {
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }
    var type = isCredit ? "Credit" : "Debit";
    var desc = description !== null && description !== void 0 ? description : "No description provided";
    console.log("Transaction Summary:\n    Type: ".concat(type, "\n    Amount: $").concat(amount, "\n    Description: ").concat(desc));
}
processTransaction(150.75, undefined, true);
processTransaction(200.00, "Salary Deposit", true);
// processTransaction(-50.00 , "Invalid Transaction" , false); // This will throw an error
