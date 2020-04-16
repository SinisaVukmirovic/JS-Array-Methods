// ========== isArray ===========
// The Array.isArray() method determines whether the passed value is an Array.

const array = [1, 2, 'Tom', 4, 5, 'Maria'];
const string = 'String';
const number = 47;

console.log(Array.isArray(array));
console.log(Array.isArray(string));
console.log(Array.isArray(number));

// use it when we are not sure or want to check the type of a variable 