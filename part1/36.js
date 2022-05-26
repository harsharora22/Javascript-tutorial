// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const data={name:"harsh", age:16};
const data = {
    name: "harsh",
    age: 16,
    hobbies: ["coding", "cricket", "eatingFood"]

}

// console.log(data["name"]);

// how to access data from objects 
console.log(data.name);
console.log(data.age);
console.log(data.hobbies[0]);

// how to add key value pair to objects
data.gender='male';
console.log(data);