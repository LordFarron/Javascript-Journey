const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


button.addEventListener('click', e => {
    popup.style.display = 'block';
    console.log(e.target);
})

close.addEventListener('click', () => {
    popup.style.display = 'none';
})


popup.addEventListener('click', () =>{
    popup.style.display = 'none';
})