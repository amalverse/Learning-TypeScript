//Type Assertion

// let value: any = "Hello"; 
// let length = (<string>value).length; //Error-Type 'any' is not assignable to type 'string'.
// console.log(length);

let value1: any = "Hello";
let length1 = (value1 as string).length;
console.log(length1);

//Type Casting

let value2: any = "Hello";
let length2 = value2.length;
console.log(length2);

let value3: any = "Hello";
let length3 = value3.length;
console.log(length3);

//Non-null assertion operator

let value4: any = "Hello";
let length4 = value4!.length;
console.log(length4);


//TypeGuard and Typescript Utility Types
// Using Typeof and instanceof
// Partial, Required and Readonly

function logMessage(message: string | number) {
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

class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Alice", 30);
const student2 = new Student("Bob", 25);

if (student1 instanceof Student) {
    console.log("student1 is an instance of Student");
}
if (student2 instanceof Student) {
    console.log("student2 is an instance of Student");
}

// Utility Types: Partial, Required, Readonly

// Base interface with OPTIONAL properties
interface UserStudent {
  studentname?: string;
  age?: number;
}

// ------------------------------
// Normal usage
const userstudent1: UserStudent = {
  studentname: "Alice"
};

// ------------------------------
// Readonly: cannot modify after creation
const userstudent2: Readonly<UserStudent> = {
  studentname: "Bob",
  age: 25
};

// ❌ Error: Cannot assign to 'age' because it is a read-only property
// user2.age = 26;

// ------------------------------
// Required: forces ALL properties
const userstudent3: Required<UserStudent> = {
  studentname: "Charlie",
  age: 40
};

// ❌ Error: Property 'age' is missing
// const userInvalid: Required<User> = { name: "Test" };

// ------------------------------
// Partial: all properties optional
const userstudent4: Partial<UserStudent> = {
  studentname: "Dave"
};

// Even this is allowed
const userstudent5: Partial<UserStudent> = {};

console.log(userstudent1);
console.log(userstudent2);
console.log(userstudent3);
console.log(userstudent4);
console.log(userstudent5);


