const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

const pattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value;
    

    if(pattern.test(username)){
        feedback.textContent = 'valid username';
    } else feedback.textContent = 'invalid username, you must enter a valid 6 - 12 size username';

});


// live feedback

const inputArea = document.getElementById('username');

form.username.addEventListener('keyup', e => {
    console.log(e.target.value, form.username.value)
    if(pattern.test(form.username.value)){
        console.log("yeeeeeeeeee");
        inputArea.classList.add('valid')
        // you could also type for effiency of code the following:
        // form.username.setAttribute('class', 'valid'); 
    }else{
        console.log('nooooooooooooooooo')
        inputArea.classList.add('invalid')
         // form.username.setAttribute('class', 'valid'); 
    }
})