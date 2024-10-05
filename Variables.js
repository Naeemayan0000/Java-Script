
const accountId = "321-34-433"

// console.log(accountId);

// accountId = "345-43-223"

console.log(accountId);

// Use the const variable when you have to ensure that the refference of
// variables can't be changed through out the program but the content of 
// Object and Array can be Modified.const variable is a blocked scoped.


let userName = "Faizan Ahmad"

console.log(userName);

// What is temporal Dead Zone ?
// it's also a blocked scope like const but it can be reassinged.



var userInfo = "From Bahawalpur"

console.log(userInfo);
var userInfo = "From Lahore"
console.log(userInfo);

console.log(b);
var b = "c"

// Var is oldest way to declare variable before ECMA 6 
// it allows to redeclared the variable in the same scope.
// there is no (TDZ) it means that you can access the variable
// before its decleration .
