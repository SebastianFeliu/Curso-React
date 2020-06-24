
const activo = true;

/*let mensaje = '';

// Forma uno, que esta bien
if( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo'
}
*/
// Operador condicional ternario
const mensaje = ( activo ) ? 'Activo': 'Inactivo';
console.log(mensaje);
// Esto ejecuta como si fuera un if
const mensaje2 = activo && 'Activo';
console.log(mensaje2);

