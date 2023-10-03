const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .option('1', {
                alias: 'listar',           
                type: 'boolean',
                demandOption: true,
                default: false
            })
                
            .check((argv, options)=>{
                if (isNaN(argv.b)){
                    throw 'La base tiene que se ser un número'
                }
                return true;
             
            }) 
                .argv

  module.exports = argv;