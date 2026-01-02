// *** CHAPTER 2: INTERFACES AND TYPE ALIASES ***//
//Defining Interfaces
//Using Interfaces to define object shapes
//Extending Interfaces
//Type Aliases 
//Union and Intersection 

//Interfaces
interface Person {
    name: string;
    age: number;
    isEmployed?: boolean;  //optional -?
}

let person1: Person = {
    name: 'Alice',
    age: 30,
    isEmployed: true
};

let person2: Person = {
    name: 'Bob',
    age: 25,
    isEmployed: false
};

console.log(person1);
console.log(person2);

//Extending Interface
interface User {
    name: string;
    email: string;
    password: string;
}

interface Admin extends User { 
    admin:boolean;   //Add one more Propety
}
let Person3 :User ={
     name: "Rahul",
    email: "rahul@gmail.com",
    password:"1234",
}
let Person4 :Admin ={ //Admin Extends user and add admin:boolean
    name: "Rahul",
    email: "rahul@gmail.com",
    password:"1234",
    admin: true   
}

console.log(Person3);
console.log(Person4);


//Two interface with same name merges

interface Love {
    name:string;
}
interface Love{
    email:string;
}

let userdata: Love ={     //Both Inerfaces merges
    name:"priya",
    email:"priya@gmail.com" 
}
console.log(userdata); 

//Type Aliases
type value = string | number | null;

let num5 : value; // value is a new type can be string, number or null
num5 = 5
console.log(num5);
num5 = "Hello";
console.log(num5);
num5 = null;
console.log(num5);
// num5 = true; //Error: Type 'boolean' is not assignable to type 'value'.

//Example 2
type arg = string | null;

function checktype(obj: arg){

}
// console.log(checktype(true)); //boolean not allowed
console.log(checktype("amal")); //Allowed


//UNION AND INTERSECTION
//Union
// let a: string |  number;   //example of union 

//Intersection

type User2 = {
    name: string,
    email: string,
}

type Admin2 = User2 & {
    getDetails(user: string) :void
}

//It's look same to interfaces but It is not same as interfaces.

// type prakar =number;  
// type prakar =string;  //-this will not work in tpe but in interface it will merge.

//type uses datatypes while interfaces makes shape of objects.

