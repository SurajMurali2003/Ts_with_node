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
