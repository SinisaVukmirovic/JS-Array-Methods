// ======== map method ========

// JavaScript Array map() Method
// The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. Note: map() does not execute the function for array elements without values.
// -------------------------------

const numbers = [1, 2, 3, 4, 5];

// example 1 where array items are doubled
const numsDoubled = numbers.map(double);

function double(item, index, array) {
    return item * 2;
}

console.log(numbers);
console.log(numsDoubled);

console.log('---------------------');

// example 2 where each item is multyplied with its index
const multipliedNums = numbers.map(multiply);

function multiply(item, index, array) {
    return item * index;
}

console.log(numbers);
console.log(multipliedNums);

console.log('---------------------');

// example with items in object
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

// total worth of product items (using arrow function now)
const totalWorth = products.map(item => item.price * item.count);

console.log(products);
console.log(totalWorth);

// same but with returning as object
const totalProductsWorth = products.map(item => ({
    product: item.item,
    totalValue: item.price * item.price
}));

console.log(products);
console.log(totalProductsWorth);

console.log('---------------------');

// example with converting string numbers into numbers

const stringNumbers = ['2', '11', '33', '5', '4',];

// const converted = stringNumbers.map(item => Number(item));
// or just
const converted = stringNumbers.map(Number);

console.log(stringNumbers);
console.log(converted);