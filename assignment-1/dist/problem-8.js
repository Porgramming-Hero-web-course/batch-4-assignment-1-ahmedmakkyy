"use strict";
function validateKeys(obj, keys) {
    return keys.every(key => key in obj);
}
// Outuput
const personInfo = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personInfo, ["name", "age"]));
console.log(validateKeys(personInfo, ["name", "gender"]));
