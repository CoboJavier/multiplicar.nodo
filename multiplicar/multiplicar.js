const fs = require('fs');
const colors = require('colors');

const { rejects } = require('assert');
const { resolve } = require('path');

let data = '';

let listarTabla = (base, limite = 10) => {
    console.log('======================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('======================='.green);
    for (let index = 1; index <= limite; index++) {
        resultado = base * index;

        console.log(`${base} * ${index} = ${resultado}`);

    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('La base o el limite no son un numero');
            return;
        }


        for (let index = 1; index <= limite; index++) {
            resultado = base * index;
            data += `${base} * ${index} = ${resultado} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}al${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });


    });
};



module.exports = {
    crearArchivo,
    listarTabla
}