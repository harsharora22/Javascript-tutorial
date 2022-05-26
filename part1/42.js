// objects inside array 
// very useful in real world applications
const users=[
    {userId:1, name:'harsh',gender:'male',},
    {userId:2, name:'mohan',gender:'male',},
    {userId:3, name:'simer',gender:'male',}
]
for (const user of users) {
    console.log(user.name);
}