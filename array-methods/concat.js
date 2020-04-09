// ============ concat method =============
// The concat method creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array).

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = a.concat(b);

const d = [7, 8, 9];

const e = a.concat(b, d);

console.log('a: ', a);
console.log('b: ', b);
console.log('c: ', c);
console.log('a: ', a);
console.log('d: ', d);
console.log('e: ', e);

// using concat we can create a copy
const f = a.concat();
f.push(44, 55, 66);
// concatened array remains unchanged
console.log('a: ', a);
console.log('f: ', f);

const g = a.concat(77, 88, b);
console.log('g: ', g);