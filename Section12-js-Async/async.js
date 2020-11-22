
const getTodos = (callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            //console.log(request, request.responseText);
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.readyState === 4){
            //console.log('could no fetch data');
            callback('could not fetch data', undefined);
        }
    })


    // the open method take 2 arguments, the first argument defines what is the kind of
    // request we want to make
    // the second argument defines the endpoint where we want to get data from
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // to send the request we need to call the send() method
    request.send();
}


// passamos err e data como parametro nessa função que irá se comunicar com a callback definido em cima
// err só consegue ser retornado se request.status for diferente de 202, ou seja, um erro
// assim sendo, retorna-se callback('could not fetch data', undefined) para o   getTodos
// sendo o primeiro argumento o err e o segundo o data, que não sera retornado
getTodos((err, data) => {
    console.log('callback fired');
    console.log(err);
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});







const getTodosFolder = (resource, callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    })


    request.open('GET', resource);
    request.send();
}


getTodosFolder('todos/bruno.json', (err, data) => {
    console.log(data)
    getTodosFolder('todos/kael.json', (err, data) => {
        console.log(data);
        getTodosFolder('todos/selius.json', (err, data) => {
            console.log(data);
        })
    })    
});


const getTodosFolderPromise = (resource, callback) =>{
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }else if(request.readyState === 4){
                reject('could not fetch data');
            }
        })


        request.open('GET', resource);
        request.send();
    });
}

getTodosFolderPromise('todos/bruno.json').then((data) => {
    console.log('prmise resolved: ', data);
    return getTodosFolderPromise('todos/kael.json');
}).then(data => {
    console.log('prmosed 2 resolved: ', data);
    return getTodosFolderPromise('todos/selius.json')
}).then(data => {
    console.log('promise 3 resolved: ', data);
}).catch((err) => {
    console.log('promise rejected', err);
})