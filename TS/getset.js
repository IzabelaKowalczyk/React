"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _age = 0;
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Wiek nie może być ujemny");
        }
        this._age = value;
    }
}
const user = new User();
user.age = 25;
console.log(user.age);
//# sourceMappingURL=getset.js.map