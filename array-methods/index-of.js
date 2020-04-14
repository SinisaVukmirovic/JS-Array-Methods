// ========= indexOf() method ========
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex . Returns -1 if the value is not found.

const names = ['Rafael', 'Novak', 'Roger'];

console.log(names);
console.log('Novak is at index: ', names.indexOf('Novak'));

// if we want to replace something, first we need to find out at what inded is it
const replace = names.indexOf('Novak');

names[replace] = 'G.O.A.T';

console.log(names);

// if array doesn't contain searched value, it will return -1
console.log(names.indexOf('Vavrinka'));

const brands = ['Nokia', 'Sony', 'Samsung', 'Huawei'];

const searchFor = names.indexOf('Apple');

if (searchFor > -1) {
    console.log('Oh, yeah, we have it.');
}
else {
    console.log(`Nah, we don't have it.`);
}

// =========== lastIndexOf() =========
// works the same as indexOf, just that it returns that index of the last occurance if there are multiple

const manyModels = ['Gold', 'Civic', '320i', 'Golf', 'Passat', 'Golf', 'Yugo', 'Mustang'];

console.log(manyModels.lastIndexOf('Golf'));