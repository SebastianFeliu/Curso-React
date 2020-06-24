import heroes, {owners} from '../data/heroes';

//console.log(owners)

// Trae solo un valor, el primero que encuentra
export const getHeroeById = (id) => heroes.find( (element) => element.id === id);

//console.log(getHeroeById(2));
// Trae todos los elementos que cumplen la condición
export const getHeroesByOwner = (owner) => heroes.filter( (element) => element.owner === owner);

//console.log(getHeroesByOwner('DC'));