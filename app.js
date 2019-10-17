/*
FUNCION USANDO YARGS
*/

const argv = require('./config/yargs').argv; //SE OBTIENE EL OBJETO DE LA LIBRERIA "argv.argv"
var colors = require('colors');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar'); //SE OBTIENEN LAS FUNCIONES DE LA LIB

let comando = argv._[0]; //SE OBTIENE EL PRIMER VALOR DEL ARREGLO GLOBAL COMO ARGUMENTO DE LA FUNCION

switch (comando) { //SE REALIZA UN SWITCH
    case 'listar':
        listarArchivo((argv.base || argv.b), (argv.limite || argv.l)) //SE INVOCA LA FUNCION COMO PROMESA "argv.base" es para obtener el valor de --base 0 -b
            .then(archivo => { console.log(archivo); }) //SE OBTIENEN EL VALOR Y SE IMPRIMER
            .catch(err => { console.log(err); }) //SE MANEJAN LOS ERRORES
        break;
    case 'crear':
        crearArchivo(argv.base || argv.b, (argv.limite || argv.l)) //SE INVOCA LA FUNCION COMO PROMESA "argv.limite" es para obtener el valor de --limite 0 -l
            .then(archivo => { console.log(`Archivo creado: ${archivo}`); }) //SE OBTIENEN EL VALOR Y SE IMPRIMER
            .catch(err => { console.log(err); }) //SE MANEJAN LOS ERRORES
        break;

    default:
        console.log('Comando no reconocido'); //POR SI NO SE CUMPLE NINGUNA DE LAS 2
        break;
}