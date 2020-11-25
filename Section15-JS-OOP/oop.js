// instead of creating, for example, various user objects like userOne, userTwo and more
// we can make a constructor to create the object for each user



// this class sintax is new to javascript and it's just a sintax, the old way still works
// see below user class to understand the old way of creating classes
class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(`${this.username} logged in`);
        return this
    }

    logout(){
        console.log(`${this.username} logged out`);
        return this
    }

    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this //use return this to return the object instance to be able to chain methods
    }
}

// javascript still uses the old way to create classes, the only thing the language do is
// convert the above sintax to this one:

/* function User(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in`);
    }
} 

*/


class Admin extends User{

    constructor(username, email, title){
        // to call the parent class constructor
        super(username, email);
        this.title = title;
    }

    deleteUser(user){
        users = users.filter((u) => {
            // se o nome em que o "u" estiver for diferente do user passado pelo metodo
            // ele retorna verdadeiro, então o dado especifico permanece no array
            return u.username !== user.username;
        });
    }

}

const userOne = new User('kael', 'kael@emai.com');
const userTwo = new User('bruno', 'bruno@email.com');
const userThree = new User('roderick', 'roderi@email.com');


console.log(userOne, userTwo, userThree);

userOne.login();
userTwo.login();
userThree.login();
userOne.logout();
userTwo.logout();
userThree.logout();

// this method chaining is possible only because we are returning the objects instance on the methods
userOne.incScore().incScore().incScore().logout();

let users = [userOne, userTwo, userThree];




const userAdmin = new Admin('caelus', 'caelus@email.com', 'the warrior');

console.log(userAdmin);

userAdmin.incScore().incScore();
console.log(userAdmin)


