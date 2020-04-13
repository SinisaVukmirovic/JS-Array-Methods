// ======== push() method ========
// The push method appends values to an array. push is intentionally generic. This method can be used with call() or apply() on objects resembling arrays. The push method relies on a length property to determine where to start inserting the given values.

const numbers = [1, 2, 3];
console.log(numbers);

const newLength = numbers.push(4, 5);

console.log(numbers);
console.log(newLength);

console.log('-----------------');

// ======== pop() method ========
// The pop method removes the last element from an array and returns that value to the caller. pop is intentionally generic; this method can be called or applied to objects resembling arrays.

numbers.pop();
console.log(numbers);

numbers.pop();
numbers.pop();
console.log(numbers);

const lastItemWas = numbers.pop();
console.log(lastItemWas);