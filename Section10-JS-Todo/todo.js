const addForm = document.querySelector('.add');

const list = document.querySelector('.todos');


// we want the input field inside the search
const search = document.querySelector('.search input');


const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;
    
    list.innerHTML += html;

}

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    
    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
    }
})

list.addEventListener('click', e => {
    /*const del = document.querySelector('.delete');
    console.log(e.target);
    if(e.target === del){
        e.target.parentElement.remove();
    }*/

    // you could also do by this way:

    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


const filterTodos = term =>{
    Array.from(list.children)
    .filter((todo) => {
        // the reason for why we are negating the true value is that we need to make an array from
        // this and use a foreach on each element to add a class to hide the text
        return !todo.textContent.toLowerCase().includes(term)
    })
        .forEach(todo => todo.classList.add('filtered'));


        Array.from(list.children)
            .filter(todo => todo.textContent.toLowerCase().includes(term))
            .forEach(todo => todo.classList.remove('filtered'));


}


search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
