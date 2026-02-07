// Task 1 : Create a function processTransaction that takes an amount (number), a description (string), and a flag isCredit (boolean).

// Task 2 : If the amount is negative, the function should throw an error (never).

// Task 3 : If the description is missing, use undefined and handle it in the function.

// Task 4 : Print a summary of the transaction.

function processTransaction( amount:number , description: string | undefined , isCredit : boolean):void
{
    if(amount<0)
    {
        throw new Error("Amount cannot be negative");
    }

    let type = isCredit ? "Credit" : "Debit";
    let desc = description ?? "No description provided";

    console.log(`Transaction Summary:
    Type: ${type}
    Amount: $${amount}
    Description: ${desc}`);

}

processTransaction(150.75 , undefined , false);
processTransaction(200, "Salary Deposit" , true);
// processTransaction(-50.00 , "Invalid Transaction" , false); // This will throw an error