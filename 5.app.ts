//Generics
// Generic function
// Generic interfaces
// Generic classes

//Generics function- It is a function that can work with any type of data.

function abcd <T>(arg: T): T {
    return arg;
}

console.log(abcd<string>("Amal"));
console.log(abcd<number>(25));
console.log(abcd<boolean>(true));
console.log(abcd<string[]>(["Amal", "Kishor"]));

//Example 2
function abcd2<T, U>(arg1: T, arg2: U): {
    arg1: T;
    arg2: U;
} {
    return { arg1, arg2 };
}

console.log(abcd2<string, number>("Amal", 25));
console.log(abcd2<number, string>(25, "Amal"));

//Example 3
function log<T>(arg: T): T {
    console.log(arg);
    return arg;
}

log<string>("Amal");
log<number>(25);

//Generics interface- It is a interface that can work with any type of data.

interface lovely<T> {
    name: string;
    age: number;
    key: T;
}

function person(obj: lovely<string>): lovely<string> {
    return obj;
}

console.log(person({ name: "Amal", age: 25, key: "hello" }));


//Generics class- It is a class that can work with any type of data. 

class BookMaker<T>{
    constructor(public key:T){}
}

const book1 = new BookMaker<string>("hello");
const book2 = new BookMaker<number>(50);
console.log(book1, book2);



//Fixing issue with String Literals
function abcd3<T>(a:T, b:T):T{
    return "Hey" as T;
}
console.log(abcd3<string>("hey", "hello"));

