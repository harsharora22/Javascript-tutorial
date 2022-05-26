// 2015 / es6 
// class keyword 
// class are fake


class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        return this;


    }
    about() { return `${this.firstName} is ${this.age} years old.`; }
    is18() { return this.age >= 18; }
    sing() { return "la la la la "; }
}

// function CreateUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//     return "la la la la ";
// }


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));
