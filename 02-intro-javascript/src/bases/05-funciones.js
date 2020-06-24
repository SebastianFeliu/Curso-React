// Funciones en JS
//Forma no recomendada de crear funciones
// ya que es muy facil 'caerle encima' o editar la funcion
// Ej: saludar = 30
function saludar (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Vegeta'))

//Forma correcta
const saludar1 = function(nombre) {
    return `Hola, ${nombre}`;   
}

console.log(saludar1('Gohan'))

// Funciones de Flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludar2('Trunks'));

// si solo va a retornar se puede hacer en solo una línea de esta forma
const saludar3 = (nombre) =>  `Hola, ${nombre}`;
const saludar4 = () => 'Hola Mundo';

console.log(saludar3('Bulma'));
console.log(saludar4());


const getUser = () => {
    return {
        uuid: 'SFHFK15461',
        username: 'USENAME123543'
    }
}

console.log(getUser());

const getUser2 = () => 
    ( 
        {
        uuid: 'SFHFK15461',
        username: 'USENAME123543'
        } 
    );


console.log(getUser2());


// Tarea
// 1. Transformar a función de flecha
// 2. Tiene que retornar un objecto implícito
// 3. Probar

function getUsuarioActivo(nombre) {
    return {
        uuid: 'SFJKH12388',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Sebastián');
console.log(usuarioActivo)

const getUsuarioActivo1 = (nombre) => ({
    uuid: Math.random(),
    username: nombre
})

const usuarioActivo1 = getUsuarioActivo1('Sebastián2');
console.log(usuarioActivo1);