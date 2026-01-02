//Type Assertion
// let value: any = "Hello"; 
// let length = (<string>value).length; //Error-Type 'any' is not assignable to type 'string'.
// console.log(length);
var value1 = "Hello";
var length1 = value1.length;
console.log(length1);
//Type Casting
var value2 = "Hello";
var length2 = value2.length;
console.log(length2);
var value3 = "Hello";
var length3 = value3.length;
console.log(length3);
//Non-null assertion operator
var value4 = "Hello";
var length4 = value4.length;
console.log(length4);
//TypeGuard and Typescript Utility Types
// Using Typeof and instanceof
// Partial, Required and Readonly
function logMessage(message) {
    if (typeof message === "string") {
        console.log(message.toUpperCase());
    }
    else {
        console.log(message);
    }
}
logMessage("Hello");
logMessage(100);
//instanceof
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student1 = new Student("Alice", 30);
var student2 = new Student("Bob", 25);
if (student1 instanceof Student) {
    console.log("student1 is an instance of Student");
}
if (student2 instanceof Student) {
    console.log("student2 is an instance of Student");
}
// ------------------------------
// Normal usage
var userstudent1 = {
    studentname: "Alice"
};
// ------------------------------
// Readonly: cannot modify after creation
var userstudent2 = {
    studentname: "Bob",
    age: 25
};
// ❌ Error: Cannot assign to 'age' because it is a read-only property
// user2.age = 26;
// ------------------------------
// Required: forces ALL properties
var userstudent3 = {
    studentname: "Charlie",
    age: 40
};
// ❌ Error: Property 'age' is missing
// const userInvalid: Required<User> = { name: "Test" };
// ------------------------------
// Partial: all properties optional
var userstudent4 = {
    studentname: "Dave"
};
// Even this is allowed
var userstudent5 = {};
console.log(userstudent1);
console.log(userstudent2);
console.log(userstudent3);
console.log(userstudent4);
console.log(userstudent5);
