import {getHeroeById} from './bases/08-imp-exp';
/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
       // console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el héroe');
        console.log('2 segundos despues')
        resolve();
    }, 2000)
});

promesa.then((res) => {
    console.log(res)
}).catch(err => {
    console.log('ERROR!', err)
})*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
           // console.log(heroe);
            console.log('2 segundos despues')
            if(heroe) {
                 resolve(heroe);
            } else {
                reject('No se encontro el héroe solicitado');
            }
            //reject('No se pudo encontrar el héroe');
        }, 2000)
    });
};

/*getHeroeByIdAsync(20).then((res) => {
    console.log(res)
}).catch(err => {
    console.warn('ERROR!', err)
})*/

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn)