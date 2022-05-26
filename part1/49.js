// lexical scope 
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    myFunc();
    console.log(myVar);
}

myApp();