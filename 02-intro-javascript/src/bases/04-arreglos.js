// Arreglos en JS
// Es recomedable utilizar esta forma solo cuando es un array con un tamaño fijo
// Aunque si se puede seguir expandiendo
const arreglo1 = new Array(100);
console.log(arreglo1);

const arreglo = [1,2,3,4];
//No utilizar push porque eso modifica el objeto en js (arreglos se manejan como objetos en js)
//arreglo.push(1);
console.log(arreglo);

let arreglo2 = [...arreglo,5];

console.log(arreglo);
console.log(arreglo2);

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2
});

console.log(arreglo3)
