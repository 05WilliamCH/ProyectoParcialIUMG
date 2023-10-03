/**Hacer un programa en Consola que imprima la • Tabla del cinco de forma automática

* 5 x 1-5

5 x 2 = 10

5 x 3 = 15

5 x 10 = 50.
*/


let base = 5
console.clear();

const tabla = (base) => {
let resultado =
console.log(`----Tabla del ${base}---- `);
for (let i = 1; i <= 10; i++){
resultado = resultado + `${base} x ${i} = ${base * i} \n`;
 }

 return resultado
}

console.log(tabla(base));

// console.clear();
// console.log('==============');
// console.log(' Tabla del: 5 ');
// console.log('==============');

// for(let i = 1; i <= 10; i++){
//      console.log(`${base} x ${1} = ${base * 1}`);
//     } 