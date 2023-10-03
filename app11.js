const { crearArchivo } = require ('./helpers/multiplicar3')
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption:true
                })
                .check((argv, options) => {
                    if( isNaN (argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true; //esta es la parte mas importante para lanza la validacion
                })
                .argv

console.clear();

console.log(argv);

crearArchivo(argv.b)
                .then(nombreArchivo => console.log(nombreArchivo,'creado'))
                .catch(err => console.log(err))