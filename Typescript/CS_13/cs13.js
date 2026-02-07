//  ask 1 :describePerson
// Required: name: string
// Optional: age?: number
// Print "Name: <name>, Age: <age>" or "Name: <name>, Age: Unknown".
function describePerson(name, age) {
    if (age !== undefined) {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Name: ".concat(name, ", Age: Unknown"));
    }
}
// Task 2 :calculatePrice
// Required: basePrice: number
// Default: discount: number = 0.1
// Return price after discount.
function calculatePrice(basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - (basePrice * discount);
}
// Task 3: Test calls:
// describePerson("Eve");
// describePerson("Frank", 28);
// console.log(calculatePrice(100));      // 90
// console.log(calculatePrice(100, 0.2)); // 80
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));
