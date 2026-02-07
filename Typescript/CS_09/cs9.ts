// task 1 : Define a CustomerID alias for string.
type CustomerID = string;

// task 2 : Create a Customer object alias with id: CustomerID, name: string, and optional email?: string.
type Customer ={
    id:CustomerID;
    name:string;
    email?:string;
}

// task 3 : Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void.
type OrderStatus = "pending" | "shipped" | "delivered";
type ProcessOrder = (orderId : number, callback: (status:OrderStatus) => void) => void;

const processOrder : ProcessOrder = (orderId , callback)=>{
    console.log(`Order ${orderId} is being processed.`);
    callback("shipped");
};

processOrder(123, (status)=>{
    console.log(`Order status: ${status}`);
});

// task 4 : Use the Container<T> generic to wrap a Customer object.
type Container<T>={
    value:T;
};

let customerContainer:Container<Customer>={
    value:{
        id:"CUST001",
        name:"Chethu"
    }
};

console.log(`Customer ID: ${customerContainer.value.id}, Name: ${customerContainer.value.name}`);

