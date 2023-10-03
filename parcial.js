function obtenerDatosPersona() {
return {nombre: 'William', apellido: 'Chiroy', correo: 'denis7chiroy@hotmail.com', id: 1001};
     }
    
let {nombre, apellido, correo, id} = obtenerDatosPersona();
      
console.log('Contenido de la variable `nombre`:', nombre);
console.log('Contenido de la variable `apellido`:', apellido);
console.log('Contenido de la variable `correo`:', correo);
console.log('Contenido de la variable `id`:', id);