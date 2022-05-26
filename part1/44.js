// function declaration
// function singhappyBirthday() {
//     console.log('happy birthday to you...');
// }
// singhappyBirthday();
// function calculate(num1, num2) {
//     return num1 + num2;
// }
// const ruturnedValue = calculate(2, 6);
// console.log(ruturnedValue);

// isEven
// input: 1 number
// output : true,false
// function isEven(number) {
//   return number % 2 === 0;
    
// }
// console.log(isEven(10)); 

// function
// input: string
// output : first Charcter

// function firstChar(anyString) {
//     return anyString[0];
// }
// console.log(firstChar( "abc"));

// function firstchar(string) {
//     return string;
// }
// console.log(firstchar('harsh')); 


// function
// input: array, target(number)
// output : index of target if targrt present in array

function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }
        
    }
    return -1;
    
}
const myArray=[1,2,8,90]
const ans = findTarget(myArray,8)
console.log(ans);