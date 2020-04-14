// ======== every() method =========
// The every method executes the provided callback function once for each element present in the array until it finds the one where callback returns a falsy value. If such an element is found, the every method immediately returns false .

const numbers = [1, 2, 3, 4, 5];

const areAllPositive = numbers.every(isPositive);

function isPositive(item, index, arr) {
    return item > 0;
}

console.log(numbers);
console.log('Are all positive?:', areAllPositive);

console.log('-----------------');

const firstOrLastName = [
    {
        firstName: 'Bob'
    },
    {
        firstName: 'John'
    },
    {
        firstName: 'Tom'
    },
    {
        lastName: 'Ferguson'
    }
];

const areAllNames = firstOrLastName.every(name => name.firstName !== undefined);

console.log('Do all use first name?: ', areAllNames);