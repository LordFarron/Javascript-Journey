// object literals

// const blogs = [
//     {title: 'a quick study of Dostoevsky', likes: 30},
//     {title: 'the disscussion of the guilty in Dumas and laws implications', likes: 120}
// ];

let user = {
    name: 'Bruno',
    age: 30,
    email: 'brandon.brunno@gmail.com',
    location: 'brasil',
    blogs: [
        {title: 'a quick study of Dostoevsky', likes: 30},
        {title: 'the disscussion of the guilty in Dumas and laws implications', likes: 120},
    ],
    login: () => console.log('the user logged in'),
    loggout: () => console.log('the user logged out'),
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach( blog => {
            console.log(blog.title, blog.likes);

        });
    }
/*  Or you could write in this way:
    logBlogs: function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach( blog => {
            console.log(blog);

        });
*/
};

console.log(user.age)

user.age = 18;
console.log(user.age)


// we can access attributes by two ways
// we can use the dot notation or the square brackets notation

let key = 'location'
console.log(user[key]);

user.login();
user.loggout();
user.logBlogs();

// the code above is passing the location into a variable, in this example, this serves
// a way to tell to the developer that location is a key