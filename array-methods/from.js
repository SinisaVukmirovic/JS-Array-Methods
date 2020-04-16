// ======== The Array.from() method ==========
// from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

const str = '12345';

// we want to create numbers array [1, 2, 3, 4, 5] from string above

const arr = Array.from(str, Number);

console.log(str, arr);

console.log('------------');

// if we want to remove duplicated values from an arrray

const numbers = [1, 2, 3, 3, 4, 2, 5, 6, 6, 4, 7, 8, 9];

const noDupl = Array.from(new Set(numbers));

console.log(numbers);
console.log(noDupl);

const members = ['Tom', 'Bob', 'Maria', 'Bob', 'Sven', 'John', 'Ana', 'Maria', 'Kenny'];

const getMemberNames = Array.from(new Set(members));

console.log(members);
console.log(getMemberNames);