// ======= unshift() =======
// The unshift method inserts the given values to the beginning of an array-like object. unshift is intentionally generic. This method can be called or applied to objects resembling arrays.

numbers = [1, 2, 3];
console.log(numbers);

numbers.unshift(-1, 0);
console.log(numbers);

const newLenght = numbers.unshift(-2);
console.log(numbers);
console.log(newLenght);

console.log('------------------');

// ======= shift() =======
// The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned. shift is intentionally generic; this method can be called or applied to objects resembling arrays.

numbers.shift();
console.log(numbers);

const firstItemWas = numbers.shift();
console.log(numbers);
console.log(firstItemWas);