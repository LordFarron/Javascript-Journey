const button = document.querySelector('button');
const ul = document.querySelector('ul');
const textInput = document.querySelector('textarea');

button.addEventListener('click', e =>{
    console.log("button clicked");
    //ul.innerHTML += `<li>${textInput.value}</li>`;
    //items.forEach( list =>{
    //    console.log(list);
    //})
    const li = document.createElement('li');
    li.textContent = 'somehtihng';
    ul.append();


})


const items = document.querySelectorAll('li');

items.forEach( item =>{
    item.addEventListener('click', e =>{
        console.log("li clicked");
        console.log(e.target);
        //e.target.style.textDecoration = 'line-through';
        e.target.remove();
    })
})