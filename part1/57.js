// map method 
// const numbers = [1, 2, 3, 4];

// const square = function (number) {
//     return number * number
// }
// const ans= numbers.map(function(number){
//     return number*number;
// })
// console.log(square);
// console.log(ans);
const users=[
    {firstName:"harsh", age:16},
    {firstName:"mohan", age:26},
    {firstName:"ram", age:15},
]
const userName= users.map((user)=>{
   return user.firstName;
})
console.log(userName);