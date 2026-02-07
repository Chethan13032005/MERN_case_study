var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.update = function (message) {
        console.log("Customer received notification: ".concat(message));
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.update = function (message) {
        console.log("Inventory updated with message: ".concat(message));
    };
    return Inventory;
}());
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.update = function (message) {
        console.log("Promotion System announces: ".concat(message, " special offer available!"));
    };
    return PromotionSystem;
}());
//task 2 :  Add it to the DrinkOrder notification list and test it.
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    DrinkOrder.prototype.notifyAll = function (message) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(message);
        }
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyAll("Your drink is ready");
    };
    return DrinkOrder;
}());
var order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();
