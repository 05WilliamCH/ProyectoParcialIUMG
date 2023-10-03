const { crearArchivo }  = require('./helpers/multiplicar5')
const colors= require('colors')
const argv = require('./config/yargs2')

console.clear();

console.log(argv);

const hasta = parseInt(argv.hasta);

crearArchivo(argv.b, argv.l, argv.h)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                .catch(err => console.log(err));

