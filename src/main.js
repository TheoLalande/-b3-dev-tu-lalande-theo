// import { scientificCalculus } from "./src/scientificCalculus.js";
const { ScientificCalculus, AritmeticCalculus } = require('./calculus.js');
const scientificCalculus = require('./calculus.js');

const prompt = require('prompt-sync')({sigint: true});


let pow, value, value2, operationNumber, result
const sc = new ScientificCalculus()
const ac = new AritmeticCalculus()

while(1){
console.log("What kind of operation would you like to do ?")
console.log("1. Addition")
console.log("2. Soustraction")
console.log("3. Division")
console.log("4. Multiplication")
console.log("5. Calcule de carré")
console.log("6. Calcule de racine carré")
console.log("7. Calcule de puissance")
operationNumber = prompt("Choose an operation : ")
value = Number(prompt("Choose a value : "))
if(operationNumber <5){
  value2 = Number(prompt("Choose a second value : "));
}
else if(operationNumber === '5' || operationNumber === '6'){
  
}
else if(operationNumber === '7'){
  pow = prompt("Choose a pow : ");
}

switch(operationNumber){
  case '1' :
    result = ac.getAddition(value, value2);
    break;
  case '2' :
    result = ac.getSubstraction(value, value2);
    break;
  case '3' :
    result = ac.getDivision(value, value2)
    break;
  case '4' :
    result = ac.getMultiplication(value, value2)
    break;
  case '5' :
    result = sc.getPowValue(value, 2);
    break;
  case '6' :
    result = sc.getRootValue(value, 0);
    break;
  case '7' :
    pow = prompt("Choose a pow : ");
    result = sc.getPowValue(value, pow);
    break;
  default :
    console.log("You didnt pick a correct value");
    break;
}
console.log('\n--------  Resultat : ' + result + '  --------  \n\n\n');
}

// console.log("value : " +value);
// console.log("pow : " +pow);
// console.log("operation  : " +operationNumber);