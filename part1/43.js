// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
const [{userId:idofUser},{firstName:nameofUser}]=users;
console.log(idofUser);
console.log(nameofUser);