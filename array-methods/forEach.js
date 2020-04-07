// =========== forEach ============
// forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

// callback is invoked with three arguments:

// the value of the element
// the index of the element
// the Array object being traversed

const numbers = [1, 2, 3, 4, 5];
const letters = ['A', 'B', 'C', 'A', 'A', 'B', 'C', 'D', 'E', 'A'];
// ------------------------------

// using arrow function
// ---------------------
numbers.forEach((item, index, array) => {
    // console.log(item);
    console.log(`Array[${index}] item is: ${item}`);
});


// using normal function as callback
// ----------------------------------
// numbers.forEach(logNums);

// function logNums(item, index, array) {
//     // console.log(item);
//     console.log(`Array[${index}] item is: ${item}`);
// }


// using forEach to get the sum of all numbers in array
// -----------------------------------------------------
let sum = 0;

numbers.forEach(item => {
    sum += item;
});

console.log(sum);
// -----------------------

// using it for checking repeating on items in array
let count = {};

letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    }
    else {
        count[item] = 1;
    }
});

console.log(count);