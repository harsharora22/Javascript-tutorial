// important array methods 
// const num=[2,4,8]
// function mutiplyBy2(number,index) {
//     console.log(`index is ${index} and number is ${number}`);
//     console.log(`${number}*2 = ${number*2}`);
// }
// for (let i = 0; i < num.length; i++) {
  
//    mutiplyBy2(num[i],i)
    
// }
// num.forEach(mutiplyBy2)

// num.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// })

// num.forEach(function(number){
//     console.log(number*2);
// })

const users=[
    {firstName:"harsh", age:16},
    {firstName:"mohan", age:26},
    {firstName:"ram", age:15},
]
users.forEach(function(user){
    console.log(user.firstName);
})

users.forEach((user,index)=>{
    console.log(user.firstName,index);
})

for (const user of users) {
    console.log(user.firstName);
}