localStorage.setItem('name', 'bruno');
localStorage.setItem('age', '50');


let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name,age);

localStorage.removeItem('name');

// to clear all:
//localStorage.clear();

name = localStorage.getItem('name');
console.log(name);

const todos = [
    {text: 'play', author: 'bruno'},
    {text: 'buy', author: 'selius'},
    {text: 'sleep', author: 'kael'},
];

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));