import {somar,subtrair,multiplicar,dividir,delta,harea} from "/export.js";

let somarValores = somar(10,89);
console.log(somarValores);


let dividirValores = dividir(10,89,90);
console.log(dividirValores);


let multiplicarValores = multiplicar(78,45,90);
console.log(multiplicarValores);


let subtrairValores = subtrair(78,45,90);
console.log(subtrairValores);


let resolverDelta = delta(65,25,0);
console.log(resolverDelta);

let resolverArea = harea(78,96);
console.log(`A área é ${resolverArea} m2`)

let exemploArray = exemplo();
console.log(exemploArray);