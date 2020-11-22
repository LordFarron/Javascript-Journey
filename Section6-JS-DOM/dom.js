const paragraph = document.querySelectorAll('p');
let i=0;
paragraph.forEach((para)=>{
   i++
    para.innerText += " hell ya " + i
})

paragraph.forEach(p =>{
   if(p.innerText.includes('success')){
       console.log(p.innerText);
       p.classList.add('success');
   } if(p.innerText.includes('failure')){
        p.classList.add('error')
   }
})

// get element by an id

const title = document.getElementById('page-title');

// it's important to note that queryselectors are different from getElements
// querySelectos return a nodeList that can you can peform more operation than
// the html collection returned by the getElements

const content = document.querySelector('.content');

const people =  ['bruno', 'yuka', 'kael'];

people.forEach(person =>{ 
    content.innerHTML +=  `<p>${person}</p>`;
})

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.amazon.com')
console.log(link.getAttribute('href'));


// styles in javascript

console.log(title.style);
console.log(title.style.color);

title.style.color = 'yellow'
console.log(title.style.color);



