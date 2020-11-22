// function declaration
function greet(){
    console.log('hello there');
}


// function expression

let name = 'bruno';
const speak = function(name){
    console.log(`good day ${name}`);
}

greet();
speak(name);

// returning values

const calcArea = function(radius){
    return 3.14 * radius**2;
}
//stores the returned value to the scope variable area
const area = calcArea(5);
console.log(area);

const calcVol = function(area){
    return area*area;
}

const volume = calcVol(area);
console.log(volume);



// arrow function and ways to implement it

//do not run the code below without commeting out two of the functions

// you can implement it by using the parenthesis
const calcAreA = (radius) => {
    return 3.14 * radius**2;
}

// or you can leave without the parenthesis when there is only one parametter
const calcArEa = radius =>{
    return 3.14 * radius**2;
}

//as the code extends for one line, we can use this sintax

const calcarea = radius => 3.14 * radius**2; //it will return right away


const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}


console.log(bill([10,15,30], 0.2));


const bills = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
        console.log('index ' + i + ' total: ' + total);
    }
    
    return total;
}

console.log(bills([10,15,30], 0.2));


// Callback Functions

const myFunc = (callbackFunc) => {
    let value = 10;
    callbackFunc(value);
}


myFunc( value => {
    console.log(value);
})


const funcao = function(funcaoChamada){
    let valor = 773322312352334523434;
    funcaoChamada(valor);
}

funcao(function(valor){
    console.log(valor);
});


// example of a callback function creation

let student = [
    {name: "Mary", score: 90, school: "East"},
    {name: "James", score: 90, school: "East"},
    {name: "Steve", score: 90, school: "East"},
    {name: "Gabe", score: 90, school: "West"},
    {name: "Rachel", score: 90, school: "East"},
    {name: "Rochelle", score: 90, school: "West"},
    {name: "Lynette", score: 90, school: "East"}
];

let processStudents = function(data, callback){
    for(let i = 0; i < data.length; i++){
        if(data[i].school.toLowerCase() === "east"){
            if(typeof callback === "function"){
                callback(data[i]);
            }
        }
    }
}

// foreach

let people = ['bruno', 'mario', 'kael', 'acollat', 'virgo', 'selius'];

// forEach has a callback function
people.forEach( (person, index) => {
    console.log(person, index)
})


// anotehr way to do a foreach is creating a callback function, this makes thing more easy to read
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

let html = ``;



const ul = document.querySelector('.people');

people.forEach((person,index) => {
    html += `
    <li style="background-color: purple; color: white; width: 30rem">
     ${person} 
     </li>
   
    `
    ul.innerHTML = html
})

