var processOrder = function (orderId, callback) {
    console.log("Order ".concat(orderId, " is being processed."));
    callback("shipped");
};
processOrder(123, function (status) {
    console.log("Order status: ".concat(status));
});
var customerContainer = {
    value: {
        id: "CUST001",
        name: "Chethu"
    }
};
console.log("Customer ID: ".concat(customerContainer.value.id, ", Name: ").concat(customerContainer.value.name));
