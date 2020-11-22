const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter((score) => {
    return score > 20;
    
});


console.log(filteredScores);


const users = [
    {name: 'bruno', premium: true},
    {name: 'kael', premium: false},
    {name: 'roderick', premium: false},
    {name: 'selius', premium: true},
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers);


const prices = [20, 10, 30, 25, 15, 40 ,80, 5];

const salePrices = prices.map((price) => {
    return price/2;
})


console.log(salePrices);

const products = [
    {name: 'gold start', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
];

const descount = products.map((product) => {
    if(product.price > 30){
        return {name: product.name, price: product.price/2}
    } else{
        return product
    }
    //return product.price/2 > 30/2
})

console.log(descount, products);


const pontos = [10, 20, 60, 40, 70, 90, 30];

const resutado = pontos.reduce((acc, curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
}, 0); // the zero is the initial value of the accumulator

console.log(resutado);

const pontuacao = [
    {player: 'bruno', score: 50},
    {player: 'kael', score: 30},
    {player: 'bruno', score: 70},
    {player: 'Havit', score: 60},
    {player: 'bruno', score: 50},
    {player: 'kael', score: 30},
    {player: 'bruno', score: 70},
    {player: 'Havit', score: 60},
    {player: 'bruno', score: 50},
    {player: 'kael', score: 30},
    {player: 'bruno', score: 70},
    {player: 'Havit', score: 60},
];

const brunoTotal = pontuacao.reduce((acc, curr) => {
    if(curr.player === 'bruno'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(brunoTotal);


const pontuacao2 = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = pontuacao2.find((score) => {
    return score > 50;
})

console.log(firstHighScore);


const jogadores = [
    {name: 'bruno', score: 20},
    {name: 'selius', score: 10},
    {name: 'kael', score: 50},
    {name: 'virgo', score: 30},
    {name: 'acollat', score: 70},
]

jogadores.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    } else if(b.score > a.score){
        return 1;
    } else {
        return 0
    }
})

// se b for maior que a significa que o numero vai ser positivo, o que fará a troca ser efetuada
// se b for menor que a, o numero dara negativo, o que mostrará que a já é maior que b e não precisa trocar

jogadores.sort((a,b) => {
    return b.score - a.score;
})

console.log(jogadores);


const produtos = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50},
]

// const filteredPrices = produtos.filter(produto => produto.price > 20);

// const promos = filteredPrices.map((product) => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// })


const promos = products
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`)


console.log(promos);


