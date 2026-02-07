var transactions = [
    "checkout",
    "cancelled",
    "return",
    "priority",
    "checkout"
];
//task 1: Add a counter for each transaction type (checkout, return, priority, cancelled) using a for loop and an object.
var count = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};
for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
    var tx = transactions_1[_i];
    count[tx]++;
}
console.log("Transaction counts:", count);
//task 2: Use a while(true) infinite loop with a break condition when a new priority transaction arrives.
var i = 0;
while (true) {
    if (transactions[i] === "priority") {
        console.log("Priority transaction found at index:", i);
        break;
    }
    i++;
}
//task 3: Modify the do…while loop to handle a dynamic queue (an array you can push new returns into).
var returnQueue = ["return"];
var idx = 0;
do {
    console.log("Processing:", returnQueue[idx]);
    idx++;
} while (idx < returnQueue.length);
//task 4: Use for…in to reset all inventory counts to zero.
var inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};
for (var item in inventory) {
    inventory[item] = 0;
}
console.log("Reset inventory:", inventory);
//task 5: Display visitor names in reverse order using a for or for…of loop.
var visitors = ["Alice", "Bob", "Charlie", "Diana"];
for (var j = visitors.length - 1; j >= 0; j--) {
    console.log("Visitor:", visitors[j]);
}
