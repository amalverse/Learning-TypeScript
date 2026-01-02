//Modules
// Exporting and Importing
// Default Export

export function abcd() {
    return "hey, exporting from here to use in app.ts file";
}

export function abcd2() {
    return "hey, exporting from here to use in app.ts file";
}

export default class Payment { 
  amount: number;
  account: string;

  constructor(amount: number, account: string) {
    this.amount = amount;
    this.account = account;
  }
}





