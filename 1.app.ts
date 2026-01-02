//*** CHAPTER 1: BASIC DATA TYPES ***//

// Primitive Types(number, string, boolean)
//Arrays
//Tuples
//Enums
//Any, Unknown, Void, Null, Undefined, Never

//primitives and refrence

// [], {}, () -refrence -changes value at parents.
//example- 

var a = [1,2,3,4,5];
var b=a;

var removeLastFrom_b= b.pop();  //Also changes from a.
console.log(removeLastFrom_b);
console.log(b); //[ 1, 2, 3, 4 ]
console.log(a); //[ 1, 2, 3, 4 ] 


//Arrays
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: Array<string> = ['one', 'two', 'three'];
let mixedArr: (number | string)[] = [1, 'two', 3, 'four'];

console.log(arr1);
console.log(arr2);
console.log(mixedArr);

//Tuples
let tuple1: [number, string, boolean] = [1, 'hello', true]; // Correct assignment

// tuple1 = ['hello', 1, true]; // Error in typescript

console.log(tuple1);

//Enums -Enumeration of a set of named constants
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color.Red); //red

//Example 2
enum UserRoles {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
console.log(UserRoles.ADMIN);

//Any Type -Any type is a type that has no type information at all. It is a type that can hold any value, including null or undefined.
let randomValue: any;
randomValue = 10;
randomValue = 'Hello';
randomValue = true;
console.log(randomValue); //true

//correct way to use define type
let value: number;
// value='Hello'; //error
// value=true; //error
value=20;
console.log(value); //true

//Unknown Type -Unknown type is a type-safe counterpart of any. It is a type that can hold any value, but you cannot perform any operations on it without first performing some type of checking or assertion.
let abc: unknown;
abc = 10;
abc = 'Hello';

if (typeof abc === 'string') {
    console.log(abc.toUpperCase()); //HELLO
}

//Void Type -Void type is used to indicate that a function does not return a value.
function logMessage(message: string): void {
    console.log(message);
}
logMessage('Hello, world!');

//Null and Undefined Types
let u: undefined = undefined;
let n: null = null;
console.log(u); //undefined
console.log(n); //null

//Never Type -Never type is used to indicate that a function never returns a value, either because it always throws an error or because it has an infinite loop.
function throwError(message: string): never {
    throw new Error(message);
}
//throwError('This is an error message.');
function infiniteLoop(): never {
    while (true) {
    }
}
//infiniteLoop();


//Type Inference and Type annotations
let inferredString = 'This is a string';

let xyz: number | string | boolean;
xyz = 100;
xyz = 'TypeScript';
xyz = true;
console.log(xyz); //true

















