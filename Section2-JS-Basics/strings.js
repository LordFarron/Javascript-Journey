//strings
console.log('This is a string');

let email = 'brunno.brandon@gmail.com'
//strings concatenation

let firstName = 'Bruno';
let lastName = 'Brandon';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

//getting characters

console.log(fullName[0]);

//string length

console.log(fullName.length);

//string methods

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result)

let index = email.indexOf('@');
console.log(index);


let cut = email.slice(0,10);
console.log(cut);

let sub = email.substr(4, 10)
console.log(sub);


/*
------ template strings ------
*/
const title = 'Best Books of 2020';
const author = 'Bruno';
const likes = 30;


// concatenation way

let post = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(post);  

//template way

let result2 = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result2);

//creatinh html templates

let html = `

    <h2>${title}</h2>
    <p>${author}</p>
    <span>This Blog has ${likes} likes</span>

`;

console.log(html);


