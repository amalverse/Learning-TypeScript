//Functions
// Function types
// Optional and Default Parameters
// Rest Parameters
// Overloads

function abcd(): string{
       return "hey"
}
console.log(abcd());

function abcd1(): void{
}


function person(name:string, age:number, cb: (arg:string)=>void){
    cb("Hello")
}

person("amal", 25, (arg:string)=>{
    console.log("abcd");
})

//Function Type as Parameter (Callback)
type Callback = (value: number) => void;

function processNumbers(num: number, cb: Callback) {
  cb(num);
}

processNumbers(10, (n) => {
  console.log(n * 2);
});

//Optional Parameters in Function Type
type UserFn = (name: string, age?: number) => string;

const createUser: UserFn = (name, age) => {
  return age ? `${name} is ${age}` : `${name} age not provided`;
};

console.log(createUser("Amal"));
console.log(createUser("Amal", 21));

// Default Parameters in Function Type
type GreetFn = (name: string, message?: string) => string;

const greet: GreetFn = (name, message = "Welcome") => {
  return `${message}, ${name}!`;
};

console.log(greet("Amal")); // Welcome, Amal!

console.log(greet("Amal", "Hello")); // Hello, Amal!

// Rest Parameters in Function Type
type SumFn = (...nums: number[]) => number;

const sum: SumFn = (...nums) => {
  return nums.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3, 4, 5)); 
// 15

// Overloads in Function Type
type ProcessNumberFn = (num: number, cb: (n: number) => void) => void;

const processNumber: ProcessNumberFn = (num, cb) => {
  cb(num);
};

processNumber(10, (n) => {
  console.log(n * 2);
});

//Example 2
function abcd2(a: any, b?:any): void{
    if(typeof a === "string" && typeof b === "number"){
        console.log(a+b);
    } else if(typeof a === "number" && typeof b === "string"){
        console.log(a+b);
        
    }
    else {
        console.log("Invalid input");
    }
}

abcd2("hello", 20);
abcd2(12,"hello");
abcd2("hello", "a");