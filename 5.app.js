//Generics
// Generic function
// Generic interfaces
// Generic classes
//Generics function- It is a function that can work with any type of data.
function abcd(arg) {
    return arg;
}
console.log(abcd("Amal"));
console.log(abcd(25));
console.log(abcd(true));
console.log(abcd(["Amal", "Kishor"]));
//Example 2
function abcd2(arg1, arg2) {
    return { arg1: arg1, arg2: arg2 };
}
console.log(abcd2("Amal", 25));
console.log(abcd2(25, "Amal"));
//Example 3
function log(arg) {
    console.log(arg);
    return arg;
}
log("Amal");
log(25);
function person(obj) {
    return obj;
}
console.log(person({ name: "Amal", age: 25, key: "hello" }));
//Generics class- It is a class that can work with any type of data. 
var BookMaker = /** @class */ (function () {
    function BookMaker(key) {
        this.key = key;
    }
    return BookMaker;
}());
var book1 = new BookMaker("hello");
var book2 = new BookMaker(50);
console.log(book1, book2);
//Fixing issue with String Literals
function abcd3(a, b) {
    return "Hey";
}
console.log(abcd3("hey", "hello"));
