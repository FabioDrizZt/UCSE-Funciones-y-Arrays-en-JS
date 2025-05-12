const frutas = ['pera', 'anana', 'uva']

// Agregar al final del arreglo
frutas.push('sandia', 'manzana')
console.log(frutas)

console.log(frutas.pop())
console.log(frutas)

// Metodo Splice
/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2,  …,  itemN)
*/
frutas.splice(0, 0, 'piña')
frutas.splice(frutas.length, 0, 'final', 'final2')
frutas.splice(frutas.length - 1, 1)
frutas.splice(0, 1)
console.log(frutas)
frutas.splice(2, 2, 'sandia', 'uva')
console.log(frutas)

// metodo at
console.log(frutas[frutas.length - 1])
console.log(frutas.at(-1))

// Metodo Map
const numeros = [1, 2, 3]
const numerosCuadrados = numeros.map(num => num * num)
console.log(numerosCuadrados)

// Metodo filter
const edades = [45, 25, 1, 5, 16, 176]
const mayoresDeEdad = edades.filter(edad => edad > 18)
console.log(mayoresDeEdad)

// Metodo Reduce
const sumaEdades = edades.reduce((sum, num) => sum + num, 0)
console.log(sumaEdades)

// Metodo ForEach
console.log('--- Metodoo Foreach---')
edades.forEach((edad, index) => {
  console.log(`La edad ${index} es ${edad}`)
})
