//Variables y constantes
const nombre   = 'Sebastián';
const apellido = 'Feliú';

let valorDado = 5;

console.log(nombre, apellido, valorDado);

if (true) {
    //let solo va estar disponible en el scope
    // por eso se puede volver a crear la variable 'valorDado'
    let valorDado = 6;
    //La constante tambien pero solo porque no existe otra constante en el scope
    //Ahora bien, si yo no defino la const nombre en este scope 
    // Tomará la variable del scope global
    // var ya no se ocupa...
    const nombre = 'Edifier';
    console.log(nombre);
    console.log(valorDado);
}