"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} szczeka`);
    }
}
const dog = new Dog("Reks");
dog.bark();
// ❌ błąd
// console.log(dog.name)
//# sourceMappingURL=pies.js.map