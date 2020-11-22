let name = ['bruno', 'oliveira', 'brandao'];

let juntar = name.join('-');

console.log(juntar)

let middlName = ['dos', 'Santos'];

let fullname = name.concat(middlName);
let juncao = fullname.join('-');
console.log(juncao);



// for loops in an array

const names = ['bruno', 'luis', 'frank'];

for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `
        <div>${names}</div>
    `;
    console.log(html);
}