interface PaymentGateway {
    processPayment(amount: number):Promise<boolean>;
}

class PaymentProcessor{
    constructor(private gateway: PaymentGateway){}

    async pay(amount: number): Promise<void>{
        const success = await this.gateway.processPayment(amount);
        success ? console.log("Payment successful") : console.log("Payment failed");
}
}

//task 1: Implement a new gateway class BankTransferGateway that logs payment processing.
class BankTransferGateway implements PaymentGateway{
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} via Bank Transfer.`);
        return true
    }
}

//task 2: Use it with PaymentProcessor to process a payment.
const bankgateway = new BankTransferGateway();
const processor = new PaymentProcessor(bankgateway);
processor.pay(150);


//task 3: Write a mock gateway that simulates failure (return false) and test error handling.
class FailingMockGateway implements PaymentGateway{
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Simulating payment failure for amount $${amount}.`);
        return false;
    }
}

const failingGateway = new FailingMockGateway();
const failingProcessor = new PaymentProcessor(failingGateway);
failingProcessor.pay(200);