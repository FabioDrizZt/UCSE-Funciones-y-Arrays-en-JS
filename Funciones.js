/* const saludar = function (nombre) {
  return 'Hola ' + nombre
} */

/* function saludar(nombre) {
  return 'Hola ' + nombre
} */

/* const saludar = (nombre) => {
  return 'Hola ' + nombre
} */

const saludar = nombre => 'Hola ' + nombre
/* const saludar2 = (nombre, apellido) => 'Hola ' + nombre + ' ' + apellido */
const saludar2 = (nombre, apellido) => `Hola ${nombre} ${apellido} - ${new Date()}` // alt+96

console.log(saludar('fabio'))
console.log(saludar2('fabio', 'argañaraz'))

/* function sumar (nro1 = 0, nro2 = 0) {
  return nro1 + nro2
} */

function sumar (...nros) {
  let suma = 0
  for (let index = 0; index < nros.length; index++) {
    suma += nros[index]
  }
  return suma
}

console.log(sumar(1))
console.log(sumar(1, 2))
console.log(sumar(1, 2, 3))
console.log(sumar(1, 2, 3, 5, 6, 7, 8))
