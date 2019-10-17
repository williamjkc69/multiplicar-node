const opt = { //SE INICIALIZA EL OBJETO CON LOS ARGUMENTOS DE LA FUNCION
    base: { //NOMBRE DEL ARGUMENTO "--base"
        demand: true, //argumento requerido
        alias: 'b' //ALIAS DEL ARGUMENTO "-b"
    },
    limite: { //NOMBRE DEL ARGUMENTO "--limite"
        alias: 'l', //ALIAS DEL ARGUMENTO "-l"
        default: 10 //VALOR POR DEFAULT SI NO SE LE ASIGNA UNO
    }
}
const argv = require('yargs') //DECLARANDO OBJETO DE 'YARGS'
    .command('listar', 'Imprime en consola las tablas de multiplicar!', opt) //NOMBRE Y DESCRP DEL COMANDO Y ARGUMENTOS
    .command('crear', 'crea en un .txt las tablas de multiplicar!', opt) //NOMBRE Y DESCRP DEL COMANDO Y ARGUMENTOS
    .help() //COMANDO PARA AYUDA "--help"
    .argv; //OBTENIENDO DATOS DEL ARRAY DE ARGS

module.exports = { //EXPORTANDO EL OBJETO AL MODULO GLOBAL
    argv //OBJETO
}