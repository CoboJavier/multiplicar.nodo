//required
//const fs = require('fs');
//const fs = require('express');
//ARCHIVOS PROPIOS
//const fs = require('./fs');
//let base = 'asd';

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//const { alias } = require('yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar')
        listarTabla(argv.base, argv.limite)


        break;

    case 'crear':
        //console.log('Crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido')
        break;
}

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//crearArchivo(base)
//    .then(archivo => console.log(`archivo creado ${archivo}`))
//    .catch(e => console.log(e))