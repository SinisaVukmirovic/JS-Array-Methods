// ======== join() method =========
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const players = ['Djokovic', 'Nadal', 'Federer'];

const joinedPlayers = players.join(', ');
const joinedPlayers2 = players.join(' + ');
const joinedPlayers3 = players.join('');

console.log(joinedPlayers);
console.log(joinedPlayers2);
console.log(joinedPlayers3);

console.log(`Best tennis players are ${joinedPlayers}!`);