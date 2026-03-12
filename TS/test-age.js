"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canDrive(usr) {
    console.log("User is ", usr.name);
    if (usr.age >= 16) {
        console.log("allow drive");
    }
    else {
        console.log("do not allow drive");
    }
}
const tom = {
    name: "tom",
    age: 23,
};
const anna = {
    name: "Anna",
    age: 43,
    gender: "female"
};
canDrive(tom);
canDrive(anna);
//# sourceMappingURL=test-age.js.map