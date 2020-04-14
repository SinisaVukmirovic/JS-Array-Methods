// ======= some() method ========
// The some() method executes the callback function once for each element present in the array until it finds the one where callback returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true . Otherwise, some() returns false .

const numbers = [1, 2, 3, 4, 5];

const isHigher = numbers.some(greaterThan);

function greaterThan(item, ind, arr) {
    return item > 4;
}

console.log(numbers);
console.log(isHigher);

const users = [
    {
        name: 'Tom',
        age: 23
    },
    {
        name: 'Maria',
        age: 19
    },
    {
        name: 'John',
        age: 16
    }
];

const anyKids = users.some(user => {
    return user.age <= 18;
});

console.log('Any kids?: ', anyKids);