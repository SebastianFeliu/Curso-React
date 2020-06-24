const persona = {
    nombre: 'Tony',
    apellido: 'Startk',
    edad: 45,
    direccion: {
         ciudad: 'New York',
         zip: 553153413,
         lng: 34.5413648,
    },
}

console.log(persona);
console.log({ persona });

// Imprime en forma de tabla
//Si yo hago persona2 = persona quedaran apuntando al mismo espacio en memoria
//por ende si yo cambio la propiedad nombre se cambiara en ambos objetos
// persona2 = {...persona} crea una copia del objeto en ese estado pero no queda apuntanto al mismo espacio en memoria
const persona2 = {...persona};
persona2.nombre = 'Sebastián';
console.table(persona);
console.log(persona2);