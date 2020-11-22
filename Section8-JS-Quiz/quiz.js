const correctAnswers = ['A', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
    scrollTo(0,0);
    
    result.classList.remove('d-none');
   
    
    let output = 0;
    // a função abaixo permite fazer um loop regrado pelo tempo
    const timer = setInterval(() => {
        //colocamos o resultado que irá aparecer na tela aqui pois a animação deve rodar da forma
        // que geramos os números
        result.querySelector('span').textContent = `You are ${output}% correct`;
        // se o output, que é zero, for igual ao score que o user marcou, então pare o loop
        // se não for, então passa pelo incremento usual
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10)

})







