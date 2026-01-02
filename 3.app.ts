//*** CLASS 3: CLASSES AND OBJECTS ***//
//Class definition
//Constructors
//Access Modifiers(public, private, protected)
//Readonly Poperties
//Optional Properties
//Parameter Properties
//Getters and Setters
//Static Members
//Abstract classes and Methods

class Device {
        name = "lg";
        price = 1000;
        category = "mobile";
}

let device1 = new Device();
console.log(device1);

let device2 = new Device();
console.log(device2);


// Constructor -> Constructor is a special function that is called when a new object is created using the new keyword. It is used to initialize the properties of the object.

class BottleMaker {
        constructor(public name: string, public price: number, public color:string) {
        }
}

let bottle1 = new BottleMaker("Milton",1200, "yellow");
console.log(bottle1);


//Example 

class Music {
        constructor(public name:string, 
        public artist:string, 
        public thumbnail:string= "somethumbnail.jpg",
        public length:number, 
        public free:boolean){

        }
}

let music1= new Music("Lover", "Taylor Swift", "", 1200, true)
console.log(music1);


//this.keyword

class Abcd{
        name = "Amal Kishor";

        changeSomeStuff(){
               console.log(this.name);
        }

        changeSomeMoreStuff(){
                console.log("hey")
        }
}

// Public & Private Access Modifire
class RotiMaker{
        constructor(public name:string){}
}

let b1= new RotiMaker("RotiKing");
console.log(b1);
b1.name="Hululu"
console.log(b1);

class RotiMaker1{
        constructor(private name:string){}
}

let b2= new RotiMaker1("RotiKing");
console.log(b2);
// b2.name="Hululu" //error -name is private
console.log(b2);

//Typescript will compile your code even it shows error.

//Example 2
class BottleMaker1 {
        private material: string = "metal";
        constructor(public name:string){}

}
class MetalBottleMaker extends BottleMaker1{
        constructor(name: string){
                super(name);
        }
        getValue(){
                // console.log(this.name, this.material);  // ❌ This will cause a TypeScript error - because age is private while name is public.
        }
}

let Metalbottle1 = new MetalBottleMaker("Milton") 
console.log(Metalbottle1);


//Protected Access Modifire
class BottleMaker2 {
        protected name:string ="HardPlast";

}
class PlasticBottleMaker extends BottleMaker2{
        public material:string ="Platic";

        changeName(){
                this.name ="BlackPlast" //No Typescript error on prtected -but change must be happen inside class or subclass.
        }

}

let PlasticBottle1 = new PlasticBottleMaker() 
console.log(PlasticBottle1);
PlasticBottle1.changeName(); 
console.log(PlasticBottle1);
// PlasticBottle1.name ="RedPlastic";   // ❌ This will cause a TypeScript error

console.log(PlasticBottle1);

//Readonly Properties
class User {
  constructor(public readonly username: string) {}

  // ❌ This will cause a TypeScript error
  changeName() {
    // this.name = "helloyw"; // Error: Cannot assign to 'name' because it is a read-only property
  }
}

let u1 = new User("Amal");
console.log(u1.username);
// u1.username = "New Name"; // ❌ Error

//Optional Properties -?
class User1 {
        constructor(public username: string, public age: number, public gender?: string) {}
}

let user1 = new User1("Amal", 20, "male");
console.log(user1);

let user2 = new User1("Sidhant", 18);
console.log(user2);

//Parameter Properties
class User3 {
        constructor(public username: string, public age: number, public gender: string) {}
}

let user3 = new User3("Amal", 20, "male");
console.log(user3);

//Getters and Setters
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter
  get getMyName(): string {
    return this._name;
  }

  // Setter
  set setMyName(newName: string) {
    this._name = newName;
  }
}

const p1 = new Person("Amal");

console.log(p1.getMyName);   // Getter called 

p1.setMyName = "Amal Kishor";     // Setter called

console.log(p1.getMyName);  



//Static Members
class Sherry {
    // static property
    static version = 1.0;

    // static method
    static getRandomNumber() {
        return Math.random();
    }
}

// Access static members using class name
console.log(Sherry.version);              // 1.0
console.log(Sherry.getRandomNumber());    // random number


//Abstract classes and Methods
abstract class Animal {
    constructor(public name: string) {}

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Woof!
dog.move();      // Buddy is moving


//Example 2

// Base class
class Payment {
    constructor(
        public amount: number,
        protected account: number
    ) {}

    isPaymentValid(): boolean {
        return this.amount > 0;
    }
}

// Child class
class CardPayment extends Payment {
    processPayment(): void {
        if (this.isPaymentValid()) {
            console.log(
                `Payment of ₹${this.amount} processed from account ${this.account}`
            );
        } else {
            console.log("Invalid payment amount");
        }
    }
}

// Create object
const payment = new CardPayment(1500, 123456789);

// Access public property
console.log(payment.amount);   // 1500

// ❌ Protected property (not accessible outside class)
// console.log(payment.account);

// Process payment
payment.processPayment();

