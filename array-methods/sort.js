// ============ sort() method =============

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const names = ['Novak', 'Rafa', 'Tim', 'Alexander', 'Stefanos', 'Huan'];
console.log(names);

names.sort();
console.log(names);

const numbers = [33, 11, 22, 1, 4, 8];
console.log(numbers);

numbers.sort(compareFunc);
console.log(numbers);

function compareFunc(a, b) {
    // scenario 1: < 0 ...a comes first
    // scenario 2: = ...nothing will be changed 
    // scenario 3: > 0 ...b comes first

    return a - b;
}

console.log('--------------------------');

// sorting objects

const players = [
    {
        player: 'Nadal',
        rank: 2
    },
    {
        player: 'Tim',
        rank: 4
    },
    {
        player: 'Zverev',
        rank: 5
    },
    {
        player: 'Djokovic',
        rank: 1
    },
    {
        player: 'Federed',
        rank: 3
    }
];

console.log(players);

// making a copy of array with slice for comparison purposes
const correctOrder = players.slice();

correctOrder.sort((a, b) => a.rank - b.rank);

console.log(correctOrder);