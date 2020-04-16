// =========== findIndex() method ===============
// The findIndex() method executes the callback function once for every index in the array until it finds the one where callback returns a truthy value (that is, a value that coerces to true ). If such an element is found, findIndex() immediately returns the element's index.

const numbers = [1,2, 3, 4, 5];

const atIndex = numbers.findIndex(getIndex);

function getIndex(value) {
    return value === 3;
};

console.log(numbers);
console.log(atIndex);