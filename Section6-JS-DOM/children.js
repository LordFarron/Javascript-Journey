// to find atributes between parents and childrens


const article = document.querySelector('article');

console.log(article.children);

const arrayArticle = Array.from(article.children);

console.log(arrayArticle);

arrayArticle.forEach( child =>{
    child.classList.add('article-element');
})

const header = document.querySelector('h2');

console.log(header.parentElement)
console.log(header.parentElement.parentElement);
console.log(header.nextElementSibling);
console.log(header.previousElementSibling);