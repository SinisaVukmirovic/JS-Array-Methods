// ========== slice() & splice() methods ===================

// ========== slice() ==========
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end ( end not included) where begin and end represent the index of items in that array. The original array will not be modified.

const numbers = [1, 2, 3, 4 , 5];

// from index 1 (included) to index 4 (not included)
const slicedNums = numbers.slice(1, 4);

// if no index numbers are passed array will be copied
const copyNums = numbers.slice();

// negative index will result in slicing from behind
const fromBehind = numbers.slice(-3);

console.log(numbers);
console.log(slicedNums);
console.log(copyNums);
console.log(fromBehind);

// ---------------------------------
const participants = ['Djokovic', 'Nadal', 'Federer', 'Vavrinka', 'Thiem', 'Zverev'];

const top3 = participants.slice(0, 3);

console.log(top3);