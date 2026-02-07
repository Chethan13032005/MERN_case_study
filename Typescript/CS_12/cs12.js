// task 1: Call displayMember for two members: one with email, one without.
function displayMember(id, name, email) {
    console.log("ID: ".concat(id, " ,Name: ").concat(name));
    if (email) {
        console.log("Email: ".concat(email));
    }
}
// task 2: Use calculateFines to sum fines: 5, 10, 2.5.
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, fines_1 = fines; _a < fines_1.length; _a++) {
        var fine = fines_1[_a];
        total += fine;
    }
    return total;
}
// task 3: Compute a membership fee for $100 with default discount, then with 20%.
function membershipFee(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    return price - (price * discountRate);
}
// task 4: Greet visitors “Alice” and “Bob” using both vipGreet and consoleGreet.
function greetVisitor(name, greetFn) {
    greetFn(name);
}
var vipGreet = function (name) {
    console.log("Welcome, esteemed VIP ".concat(name, "!"));
};
var consoleGreet = function (name) {
    console.log("Hello, ".concat(name, ". Enjoy your visit."));
};
// task 5: Compute factorial(5).
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function generateReport(data, format) {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(function (item) { return item.toString(); }).join("\n");
}
displayMember(1, "Alice");
displayMember(2, "Bob", "bob@mail.com");
console.log("Fines:", calculateFines(5, 10, 2.5));
console.log("Fee default:", membershipFee(100));
console.log("Fee 20%:", membershipFee(100, 0.2));
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);
console.log("Factorial:", factorial(5));
console.log(generateReport([{ title: "1984" }]));
console.log(generateReport([{ title: "1984" }], "json"));
