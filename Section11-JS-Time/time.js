const before = new Date('Novembro 20 2020 21:12:50');
const now = new Date();

console.log(now);
console.log(typeof now);


console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps

console.log('timestamp:', now.getTime());

// date string

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

console.log(before);
console.log(before.getTime());

const diff = now.getTime() - before.getTime();

// há 1000 milisegundos em 1 segundo, e dividiremos esse resultado por 60
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

let plural = () =>{
    if(days > 1){
        return 'days';
    } else {
        return 'day';
    }
}

console.log(`the blog was written ${days} ${plural()} ago`);


// converting timestamps into date objects

const timestamp = now.getTime();

console.log(new Date(timestamp));

const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;


    clock.innerHTML = html;

}

setInterval(tick, 1000)



// date fns


const agora = new Date();

console.log(dateFns.isToday(agora));


console.log(dateFns.format(agora, 'YYYY'))
console.log(dateFns.format(agora, 'MMMM'))
console.log(dateFns.format(agora, 'dddd'))
console.log(dateFns.format(agora, 'dddd Do MMMM YYYY'))


const antes = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(agora, antes, {addSufix: true}))