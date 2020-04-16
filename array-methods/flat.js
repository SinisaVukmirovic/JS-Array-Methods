// ========= flat() method =========
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The source for this interactive example is stored in a GitHub repository

// depth (Optional)
// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

const arr = [1, 2, [3, 4, [5, [6, 7, [8]]]]];

const flatten = arr.flat();

const flatterLvlDepth = arr.flat(3);

const infiniteFlatten = arr.flat(Infinity);

console.log(arr);
console.log(flatten);
console.log(flatterLvlDepth);
console.log(infiniteFlatten);