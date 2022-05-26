// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruit2=[];
for (const fruit of fruits) {
    fruit2.push(fruit.toUpperCase());
}
console.log(fruit2);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    
}