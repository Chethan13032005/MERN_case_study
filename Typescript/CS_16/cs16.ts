//task 1 : Implement a PromotionSystem observer that announces special offers to customers when a drink is served.
interface Observer {
    update(message: string): void;
}

class Customer implements Observer {
    update(message: string): void {
        console.log(`Customer received notification: ${message}`);
    }
}

class Inventory implements Observer {
    update(message: string): void {
        console.log(`Inventory updated with message: ${message}`);
    }
}

class PromotionSystem implements Observer {
    update(message: string): void {
        console.log(`Promotion System announces: ${message} special offer available!`);
    }
}


//task 2 :  Add it to the DrinkOrder notification list and test it.
class DrinkOrder {
    private observers: Observer[] = []; 

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyAll(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }

    completeOrder(): void {
        this.notifyAll("Your drink is ready");
    }
}

const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();