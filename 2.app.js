// *** CHAPTER 2: INTERFACES AND TYPE ALIASES ***//
//Defining Interfaces
//Using Interfaces to define object shapes
//Extending Interfaces
//Type Aliases 
//Union and Intersection 
var person1 = {
    name: 'Alice',
    age: 30,
    isEmployed: true
};
var person2 = {
    name: 'Bob',
    age: 25,
    isEmployed: false
};
console.log(person1);
console.log(person2);
var Person3 = {
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "1234",
};
var Person4 = {
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "1234",
    admin: true
};
console.log(Person3);
console.log(Person4);
var userdata = {
    name: "priya",
    email: "priya@gmail.com"
};
console.log(userdata);
var num5; // value is a new type can be string, number or null
num5 = 5;
console.log(num5);
num5 = "Hello";
console.log(num5);
num5 = null;
console.log(num5);
function checktype(obj) {
}
// console.log(checktype(true)); //boolean not allowed
console.log(checktype("amal")); //Allowed
//It's look same to interfaces but It is not same as interfaces.
// type prakar =number;  
// type prakar =string;  //-this will not work in tpe but in interface it will merge.
//type uses datatypes while interfaces makes shape of objects.
