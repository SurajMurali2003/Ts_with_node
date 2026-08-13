"use strict";
// Basic types
Object.defineProperty(exports, "__esModule", { value: true });
const nodeFs = require("node:fs");
const name = "Murali";
const age = 50;
const rich = true;
// any type -> ts will not check for type
let status = "happy";
status = 100;
status = true;
const lands = ["chit-Farm", "TRL-House", "Senji-Flat"];
// Enums
// enum -> is used to define a set of named constant values.
var Approval;
(function (Approval) {
    Approval[Approval["pending"] = 0] = "pending";
    Approval[Approval["approved"] = 1] = "approved";
    Approval[Approval["rejected"] = 2] = "rejected";
})(Approval || (Approval = {}));
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["rights"] = 3] = "rights";
})(Direction || (Direction = {}));
const curWay = Direction?.up;
const reportStatus = Approval?.pending;
const reportStatus1 = Approval?.rejected;
console.log("reportStatus", reportStatus1);
console.log("curWay", curWay);
//# sourceMappingURL=app.js.map