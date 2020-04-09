// ========= splice() method ==========
// Featured snippet from the web
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const numbers = [1, 2, 3, 4, 5];

// removing last 3 items
numbers.splice(2, 3);
// 1st is starting index, 2nd is how many items to remove, 
// and (optional) 3rd replace with what 

const numbers2 = [11, 22, 33, 44, 55];
// getting the removed items by storing it in a new variable
const splicedNums2 = numbers2.splice(2, 3);

console.log(splicedNums2);

const replaceSome = [11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(replaceSome);

console.log('-------------------------');

// replacing values
const replacedItems = replaceSome.splice(2, 3, 21, 22, 23);

console.log(replaceSome);
console.log(replacedItems);

console.log('-------------------------');

// adding some
const addSome = [1, 2, 3];
console.log(addSome);

addSome.splice(1, 0, 4, 5);
console.log(addSome);