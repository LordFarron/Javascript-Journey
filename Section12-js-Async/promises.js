// promise example

const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        resolve('some data');
        //reject('some error');
    });
}

/*
getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});*/

// the code below does the same thing as above, the difference lies on the easy sintax

getSomething().then((data)=> {
    console.log(data);
}).catch((err) => {
    console.log(err);
})