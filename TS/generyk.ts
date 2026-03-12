interface HasLength {
    length: number;
}

function getLenght<T extends HasLength>(arg:T):number {
    return arg.length;
}

console.log(getLenght([1,2,3]));
console.log(getLenght("Hello"));


// drugi sposób

function getLength2<T>(arg:T):number {
    if (typeof arg === "string" || Array.isArray(arg)){
        return arg.length
    }    
    return 0;
}

console.log(getLength2<number>(22));
console.log(getLength2("Hello"));