const fs = require('fs');
const colors = require('colors');
const path = require('path');


const crearArchivo = async (base, listar, hasta) => {
 
    try {


    let salida = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    const nombreArchivo = `tabla-${base}-hasta-${hasta}.txt`;
    const rutaArchivo = path.join(__dirname, '../salida', nombreArchivo);
// Elimina los códigos de color de la cadena de salida antes de escribir en el archivo
    const salidaSinColores = colors.stripColors(salida);

    fs.writeFileSync(rutaArchivo, salidaSinColores);

    if (listar) {
      console.log('William_Chiroy 2290-15-14801');
      console.log('=============='.green);
      console.log(' Tabla del:'.green,colors.blue(base));
      console.log('=============='.green);
      console.log(salida);
    }

    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo
};
