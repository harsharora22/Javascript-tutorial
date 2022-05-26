// default parameters 

// function addTwo(a,b) {
//     if (b===undefined) {
//         b=3;
//     }
//     return a+b;
// }
function addTwo(a,b=2) {
   
    return a+b;
}
const ans = addTwo(1);
console.log(ans);