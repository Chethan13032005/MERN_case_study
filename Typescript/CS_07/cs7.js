// Taask 1 : Define an enum Role for staff roles (Doctor, Nurse, Admin).
// Task 2 : Create an interface Staff with fields for id, name, and role.
// Task 3 : Create an array of staff members using the interface and enum.
// Task 4 : Write a function that prints a summary of all staff, showing their name and role.
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
;
var staffMembers = [
    { id: 1, name: "Dr.Ram", role: Role.Doctor },
    { id: 2, name: "Nurse Sita", role: Role.Nurse },
    { id: 3, name: "Admin John", role: Role.Admin }
];
function printStaffSummary(staffList) {
    for (var _i = 0, staffList_1 = staffList; _i < staffList_1.length; _i++) {
        var staff = staffList_1[_i];
        console.log("Name: ".concat(staff.name, ", Role: ").concat(Role[staff.role]));
    }
}
printStaffSummary(staffMembers);
