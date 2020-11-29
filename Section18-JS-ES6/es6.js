// rest parameter
const double = (...nums) => {
    console.log(nums); //it will make an array of the received values
    return nums.map(num => num*2); //creating a new array of doubled numbers
}

const result = double(1, 3, 4, 7, 9, 2, 4, 6, 8);

console.log(result);

// spread sysntax (arraus)

const people = ['bruno', 'kael', 'selius'];
const members = ['roderick', 'caelus', ...people];
console.log(...people);
console.log(members);

const person = {
    name: 'brunao',
    age: 19,
    job: 'developer'
}

const personClone = {...person};
console.log(personClone);


// sets

const namesArray = ['bruno', 'kael', 'bruno', 'roderick'];
console.log(namesArray);

// transform the not unique array to a Set object
const namesSet = new Set(namesArray);
console.log(namesSet);
// transform the Set object to an array
const uniqueNames = [...namesSet];
console.log(uniqueNames);

// the other way to write that in one line is:
// const uniqueNames = [´...new Set(namesArray)];


const persons = new Set([
    {name: 'brunao', age: 30},
    {name: 'lu', age: 30},
    {name: 'ha', age: 30},
])

persons.forEach(person => {
    console.log(person.name, person.age);
})



const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolTwo, typeof symbolOne);