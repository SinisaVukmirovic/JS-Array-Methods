// ========= reverse() method ============
// The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array. reverse is intentionally generic; this method can be called or applied to objects resembling arrays.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.reverse();

console.log(numbers);

console.log('--------------');

// to "prevent" the mutating of the original array we can use concat before reversing
const dontMutate = [11, 22, 33, 44];
console.log('Dont mutate' ,dontMutate);

// const reversedArr = dontMutate.concat().reverse();

// or with ES6 spread operator
const reversedArr = [...dontMutate].reverse();

console.log('Not mutated', dontMutate);
console.log('Reversed', reversedArr);