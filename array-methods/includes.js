// ========== includes() method ============
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const names = ['Djokovic', 'Nadal', 'Federer'];

const result = names.includes('Djokovic');

console.log(result);

const fruits = ['Bananas', 'Apples', 'Mangos', 'Grapes', 'Plums'];

const doWeHave = fruits.includes('Grapes');

if (doWeHave) {
    console.log('Whoohooo, we got grapes!');
}
else {
    console.log('Nooo, we are out of grapes!');
}