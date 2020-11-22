// primite values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne - ${scoreOne}`,`|`, `scoreTwo - ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne - ${scoreOne}`,`|`, `scoreTwo - ${scoreTwo}`);

// reference values

// when we link a variable to an object, that points to the same space in memory,
// so if we change one value in the variable, it will change where the pointer is 
// aiming at in the memory


const userOne =  {name: 'Bruno', age: 30};
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 50;
console.log(userOne, userTwo);