//requires
const fs = require('fs'); //IMPORTANDO FILESYSTEM
const colors = require('colors');

let crearArchivo = (base, limite) => { //FUNCIONES PROMESA
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor "${base}" 0 "${limite}" no son un numero`);
            return;
        }
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        //FUNCION PARA ESCRIBIR EN UN RACHIVO
        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`.blue);
        });
    })
}

let listarArchivo = (base, limite) => { //FUNCIONES PROMESA
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor "${base}" o "${limite}" no son un numero!`);
            return;
        } else {
            let data = "";
            console.log('###############################'.green);
            console.log(`\tTable del ${base}`.green);
            console.log('###############################\n'.green);
            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base*i}\n`;
            }
            resolve(data);
        }

    })
}

module.exports = { //EXPORTANDO ELAS FUNCIONES AL MODULO GLOBAL
    crearArchivo,
    listarArchivo
}