function getLenght(arg) {
    return arg.length;
}
console.log(getLenght([1, 2, 3]));
console.log(getLenght("Hello"));
// drugi sposób
function getLength2(arg) {
    if (typeof arg === "string" || Array.isArray(arg)) {
        return arg.length;
    }
    return 0;
}
console.log(getLength2(22));
console.log(getLength2("Hello"));
