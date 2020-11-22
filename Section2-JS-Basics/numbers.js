let radius = 10;
const pi = 3.14;

let result = radius % 3;
console.log(result);

let area = pi * radius**2;
console.log(area);


/* order of operation: 

B - Brackets
I - Indeces
D - Division
M - Multiplication
A - Adittion
S - Subtraction
*/

let likes = 10;

let post = 'this post has ' + likes + ' likes';
console.log(post);


//Number Conversion

let score = '100';

score = Number(score);
console.log(score + 50, typeof score);