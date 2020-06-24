const nombre = 'Sebastián';
const apellido = 'Feliú';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`)