// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let fruit in fruits){
    fruits2.push(fruits[fruit].toUpperCase());
}
console.log(fruits2);
