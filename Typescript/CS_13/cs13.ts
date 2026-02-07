//  ask 1 :describePerson
// Required: name: string
// Optional: age?: number
// Print "Name: <name>, Age: <age>" or "Name: <name>, Age: Unknown".
function describePerson(name:string,age?:number):void{
    if(age!==undefined)
    {
        console.log(`Name: ${name}, Age: ${age}`);
    }
    else{
        console.log(`Name: ${name}, Age: Unknown`);
    }
}


// Task 2 :calculatePrice
// Required: basePrice: number
// Default: discount: number = 0.1
// Return price after discount.
function calculatePrice(basePrice:number,discount:number=0.1):number{
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