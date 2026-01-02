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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 1000;
        this.category = "mobile";
    }
    return Device;
}());
var device1 = new Device();
console.log(device1);
var device2 = new Device();
console.log(device2);
// Constructor -> Constructor is a special function that is called when a new object is created using the new keyword. It is used to initialize the properties of the object.
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    return BottleMaker;
}());
var bottle1 = new BottleMaker("Milton", 1200, "yellow");
console.log(bottle1);
//Example 
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        if (thumbnail === void 0) { thumbnail = "somethumbnail.jpg"; }
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
    return Music;
}());
var music1 = new Music("Lover", "Taylor Swift", "", 1200, true);
console.log(music1);
//this.keyword
var Abcd = /** @class */ (function () {
    function Abcd() {
        this.name = "Amal Kishor";
    }
    Abcd.prototype.changeSomeStuff = function () {
        console.log(this.name);
    };
    Abcd.prototype.changeSomeMoreStuff = function () {
        console.log("hey");
    };
    return Abcd;
}());
// Public & Private Access Modifire
var RotiMaker = /** @class */ (function () {
    function RotiMaker(name) {
        this.name = name;
    }
    return RotiMaker;
}());
var b1 = new RotiMaker("RotiKing");
console.log(b1);
b1.name = "Hululu";
console.log(b1);
var RotiMaker1 = /** @class */ (function () {
    function RotiMaker1(name) {
        this.name = name;
    }
    return RotiMaker1;
}());
var b2 = new RotiMaker1("RotiKing");
console.log(b2);
// b2.name="Hululu" //error -name is private
console.log(b2);
//Typescript will compile your code even it shows error.
//Example 2
var BottleMaker1 = /** @class */ (function () {
    function BottleMaker1(name) {
        this.name = name;
        this.material = "metal";
    }
    return BottleMaker1;
}());
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    function MetalBottleMaker(name) {
        return _super.call(this, name) || this;
    }
    MetalBottleMaker.prototype.getValue = function () {
        // console.log(this.name, this.material);  // ❌ This will cause a TypeScript error - because age is private while name is public.
    };
    return MetalBottleMaker;
}(BottleMaker1));
var Metalbottle1 = new MetalBottleMaker("Milton");
console.log(Metalbottle1);
//Protected Access Modifire
var BottleMaker2 = /** @class */ (function () {
    function BottleMaker2() {
        this.name = "HardPlast";
    }
    return BottleMaker2;
}());
var PlasticBottleMaker = /** @class */ (function (_super) {
    __extends(PlasticBottleMaker, _super);
    function PlasticBottleMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "Platic";
        return _this;
    }
    PlasticBottleMaker.prototype.changeName = function () {
        this.name = "BlackPlast"; //No Typescript error on prtected -but change must be happen inside class or subclass.
    };
    return PlasticBottleMaker;
}(BottleMaker2));
var PlasticBottle1 = new PlasticBottleMaker();
console.log(PlasticBottle1);
PlasticBottle1.changeName();
console.log(PlasticBottle1);
// PlasticBottle1.name ="RedPlastic";   // ❌ This will cause a TypeScript error
console.log(PlasticBottle1);
//Readonly Properties
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    // ❌ This will cause a TypeScript error
    User.prototype.changeName = function () {
        // this.name = "helloyw"; // Error: Cannot assign to 'name' because it is a read-only property
    };
    return User;
}());
var u1 = new User("Amal");
console.log(u1.username);
// u1.username = "New Name"; // ❌ Error
//Optional Properties -?
var User1 = /** @class */ (function () {
    function User1(username, age, gender) {
        this.username = username;
        this.age = age;
        this.gender = gender;
    }
    return User1;
}());
var user1 = new User1("Amal", 20, "male");
console.log(user1);
var user2 = new User1("Sidhant", 18);
console.log(user2);
//Parameter Properties
var User3 = /** @class */ (function () {
    function User3(username, age, gender) {
        this.username = username;
        this.age = age;
        this.gender = gender;
    }
    return User3;
}());
var user3 = new User3("Amal", 20, "male");
console.log(user3);
//Getters and Setters
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "getMyName", {
        // Getter
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setMyName", {
        // Setter
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person("Amal");
console.log(p1.getMyName); // Getter called 
p1.setMyName = "Amal Kishor"; // Setter called
console.log(p1.getMyName);
//Static Members
var Sherry = /** @class */ (function () {
    function Sherry() {
    }
    // static method
    Sherry.getRandomNumber = function () {
        return Math.random();
    };
    // static property
    Sherry.version = 1.0;
    return Sherry;
}());
// Access static members using class name
console.log(Sherry.version); // 1.0
console.log(Sherry.getRandomNumber()); // random number
//Abstract classes and Methods
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy");
dog.makeSound(); // Woof!
dog.move(); // Buddy is moving
//Example 2
// Base class
var Payment = /** @class */ (function () {
    function Payment(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    Payment.prototype.isPaymentValid = function () {
        return this.amount > 0;
    };
    return Payment;
}());
// Child class
var CardPayment = /** @class */ (function (_super) {
    __extends(CardPayment, _super);
    function CardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardPayment.prototype.processPayment = function () {
        if (this.isPaymentValid()) {
            console.log("Payment of \u20B9".concat(this.amount, " processed from account ").concat(this.account));
        }
        else {
            console.log("Invalid payment amount");
        }
    };
    return CardPayment;
}(Payment));
// Create object
var payment = new CardPayment(1500, 123456789);
// Access public property
console.log(payment.amount); // 1500
// ❌ Protected property (not accessible outside class)
// console.log(payment.account);
// Process payment
payment.processPayment();
