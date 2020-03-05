let logMessage = (message):void=>console.log(message);
logMessage("Hello From Arrow Function");


let addFunction = (num1: number, num2: number):number =>{
    return num1+num2;
}

//Arrow Function with Arguments and Return type

let result = addFunction(10,30);
console.log("Result is:" + result);

