// ============ reduce() method =============
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// ...
// The reducer function takes four arguments:
// Accumulator ( acc )
// Current Value ( cur )
// Current Index ( idx )
// Source Array ( src )

// example where we get the sum of all items in numbers array
const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce(callback, initialValue);
const sum = numbers.reduce(numsSum, 0);
// acc can be omited, then it will take the value of the first item in array
// and first iteration will be skipped

function numsSum(acc, cur, ind, arr) {
    return acc + cur;
}

console.log(numbers);
console.log(sum);

console.log('----------------------');

const findMax = [3, 6, 88, 223, 1, 45, 3];
// example where we get the maximum value from the array
const max = findMax.reduce(getMax, -Infinity);

function getMax(acc, value) {
    if (acc > value) {
        return acc;
    }
    else {
        return value;
    }
}

console.log(findMax);
console.log(max);

console.log('----------------------');

// example where we get the total worth of products
const products = [
    {
        item: 'Laptop',
        price: 800,
        count: 8
    },
    {
        item: 'Desktop',
        price: 1200,
        count: 4
    },
    {
        item: 'Phone',
        price: 300,
        count: 22
    },
];

const totalWorth = products.reduce((acc, item) => acc + item.price * item.count, 0);

console.log(products);
console.log(totalWorth);