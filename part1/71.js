// methods
// function inside object
const personInfo = function () {
    console.log(`name is ${this.firstName} & age is ${this.age}`);
}
const person1 = {
    firstName: "harshit",
    age: 16,
    about: personInfo
}
const person2 = {
    firstName: "harsh",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName: "aman",
    age: 18,
    about: personInfo
}
person1.about()
person2.about()
person3.about()