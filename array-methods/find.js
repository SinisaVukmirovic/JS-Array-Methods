// ======= find() method ========
// The find method executes the callback function once for each index of the array until the callback returns a truthy value. If so, find immediately returns the value of that element. Otherwise, find returns undefined . callback is invoked for every index of the array, not just those with assigned values.

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
    },
    {
        name: 'Sam',
        age:33
    }
];

const getUserInfo = users.find(user => {
    return user.name === 'Maria';
});

console.log(getUserInfo);   

const getAge = users.find(userAge).age;

function userAge(user) {
    return user.name === 'Maria';
}

console.log(getAge);