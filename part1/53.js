// param destructuring 

// ect 
// react 

const person={
    name:"harsh",
    age:16
}
function personDetail({name,age}) {
    console.log(name);
    console.log(age);
    
}
personDetail(person)