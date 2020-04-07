// ========== filter method ============
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const numbers = [1, 2, 3, 4, 5, 6];

// example where we filter out only the even numbers
const filteredEven = numbers.filter(filter);

function filter(item, index, array) {
    return item % 2 === 0;
}

console.log(numbers);
console.log(filteredEven);

console.log('-----------------------');

const people = [
    {
        name: 'John',
        age: 22
    },
    {
        name: 'Marry',
        age: 18
    },
    {
        name: 'Sam',
        age: 14
    }
];

// example where we filter out the adults from an array of objects
const adults = people.filter(person => person.age >= 18);

console.log(people);
console.log(adults);

console.log('-----------------------');

// example wjere we filter out all the duplicates
const arrWithDiplicates = [1, 2, 3, 2, 3, 4, 3, 4, 5, 6];

const noDuplicates = arrWithDiplicates.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
});

console.log(arrWithDiplicates);
console.log(noDuplicates);