// Desestructuración
// Asignación Desescructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre, edad, clave} = persona;
//const {nombre:nombre2} = persona;
//console.log(nombre2);

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

const useContext = ({clave, nombre, edad, rango = 'Capitán'}) => {
   // console.log(nombre, edad, rango);
   return {
       nombreClave: clave,
       anios: edad,
       latlang: {
           lat: 151651,
           lng: 514851
       }
   }
}

const avenger = useContext(persona);

console.log(avenger);

const {nombreClave, anios, latlang:{lat, lng}} = avenger;

console.log(nombreClave, anios);
console.log(lat, lng);