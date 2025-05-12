const nombre = 'Fabio'
console.log(nombre.length)
console.log(nombre[1])

const saludo = '¡Hola! Estamos programando'
//              01234567
console.log(saludo.indexOf('Estamos')) // devuelve 7
console.log(saludo.indexOf('vamos')) // devuelve -1

const listaCorreos = 'carola@gmail.com, jesus@gmail.com, pedro@gmail.com'
const arrayCorreos = listaCorreos.split(', ')
console.log(arrayCorreos)
