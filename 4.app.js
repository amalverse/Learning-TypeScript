//Functions
// Function types
// Optional and Default Parameters
// Rest Parameters
// Overloads
function abcd() {
    return "hey";
}
console.log(abcd());
function abcd1() {
}
function person(name, age, cb) {
    cb("Hello");
}
person("amal", 25, function (arg) {
    console.log("abcd");
});
function processNumbers(num, cb) {
    cb(num);
}
processNumbers(10, function (n) {
    console.log(n * 2);
});
var createUser = function (name, age) {
    return age ? "".concat(name, " is ").concat(age) : "".concat(name, " age not provided");
};
console.log(createUser("Amal"));
console.log(createUser("Amal", 21));
var greet = function (name, message) {
    if (message === void 0) { message = "Welcome"; }
    return "".concat(message, ", ").concat(name, "!");
};
console.log(greet("Amal")); // Welcome, Amal!
console.log(greet("Amal", "Hello")); // Hello, Amal!
var sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
};
console.log(sum(1, 2, 3, 4, 5));
var processNumber = function (num, cb) {
    cb(num);
};
processNumber(10, function (n) {
    console.log(n * 2);
});
//Example 2
function abcd2(a, b) {
    if (typeof a === "string" && typeof b === "number") {
        console.log(a + b);
    }
    else if (typeof a === "number" && typeof b === "string") {
        console.log(a + b);
    }
    else {
        console.log("Invalid input");
    }
}
abcd2("hello", 20);
abcd2(12, "hello");
abcd2("hello", "a");
