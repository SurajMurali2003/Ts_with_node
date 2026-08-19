// Basic types

import nodeFs = require("node:fs");

const name: string = "Murali";

const age: number = 50;

const rich: boolean = true;

// any type -> ts will not check for type
let status: any = "happy";
status = 100;
status = true;

const lands: string[] = ["chit-Farm", "TRL-House", "Senji-Flat"];

// Enums
// enum -> is used to define a set of named constant values.
enum Approval {
  pending = 0,
  approved = 1,
  rejected = 2,
}

enum Direction {
  up,
  down,
  left,
  rights,
}

const curWay: Direction = Direction?.up;
const reportStatus: Approval = Approval?.pending;
const reportStatus1: Approval = Approval?.rejected;

console.log("reportStatus", reportStatus);
console.log("curWay", curWay);

// tuple -> Tuple in TypeScript is an array where the number, order, and type of elements are fixed.
const mixArr : [String, number] = ["jjj", 99];

// mutiple types in variabale
const multiVar : String | number = "dai";

// 🔷 Interface in TypeScript
// An interface defines the structure/shape that an object must follow.
interface User {
   name: String,
   id: number,
   age ? : number,
   readonly created_at: Date
};

const user : User = {
   name: "Suraj",
   id: 3,
   created_at: new Date()
};

// Functions in TS

function added(num1: number, num2: number ): number{
     return  num1 + num2;
}
added(9, 9);

const multiple = (a: number, b: number): number => {
   return a * b 
};


const greet = (age: number, text: String): [number, String]  => {
    return [age, text]
};

greet(3, "oo")




