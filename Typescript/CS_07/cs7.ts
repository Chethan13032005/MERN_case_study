// Taask 1 : Define an enum Role for staff roles (Doctor, Nurse, Admin).

// Task 2 : Create an interface Staff with fields for id, name, and role.

// Task 3 : Create an array of staff members using the interface and enum.

// Task 4 : Write a function that prints a summary of all staff, showing their name and role.

enum Role {
    Doctor,
    Nurse,
    Admin
};

interface Staff {
    id:number;
    name:string;
    role:Role;
}

let staffMembers:Staff[]=[
    {id:1,name:"Dr.Ram",role:Role.Doctor},
    {id:2,name:"Nurse Sita",role:Role.Nurse},
    {id:3,name:"Admin John",role:Role.Admin}
]

function printStaffSummary(staffList:Staff[]):void{
    for(let staff of staffList){
        console.log(`Name: ${staff.name}, Role: ${Role[staff.role]}`);
    }
}
printStaffSummary(staffMembers);