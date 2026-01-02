"use strict";
//Modules
// Exporting and Importing
// Default Export
Object.defineProperty(exports, "__esModule", { value: true });
exports.abcd = abcd;
exports.abcd2 = abcd2;
function abcd() {
    return "hey, exporting from here to use in app.ts file";
}
function abcd2() {
    return "hey, exporting from here to use in app.ts file";
}
var Payment = /** @class */ (function () {
    function Payment(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    return Payment;
}());
exports.default = Payment;
