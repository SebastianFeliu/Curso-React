const personajes = ['Goku', 'Vegeta', 'Trunks'];
//Coma serian las posiciones del arreglo
const [ , , p1 ] = personajes;

console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamará setNombre
const useState = (valor) => {
    return [valor, ()=> console.log('Hola Mundo')];
}

/*const arr = useState('Goku');

arr[1]();
*/

const [nombre, setNombre] = useState('Vegeta');

console.log(nombre);
setNombre();

