const suma = (n1, n2) => n1 + n2
const resta = (n1, n2) => n1 - n2
const multi = (n1, n2) => n1 * n2
const divi = (n1, n2) => {
  if (n2 !== 0) { return n1 / n2 }
  return NaN
}

const calculadora = (n1, n2, operacion) => {
  if (typeof n1 === 'number' && typeof n2 === 'number' && typeof operacion === 'function') {
    return operacion(n1, n2)
  }
/*   switch (operacion) {
    case '+': return n1 + n2
    case '*': return n1 * n2
    case '-': return n1 - n2
    case '/': return n1 / n2
    default:
      break
  } */
}

/* console.log(`Suma es: ${calculadora(7, 8, '+')}`)
console.log(`Resta es: ${calculadora(7, 8, '-')}`)
console.log(`Multi es: ${calculadora(7, 8, '*')}`)
console.log(`Division es: ${calculadora(7, 8, '/')}`) */

console.log(`Suma es: ${calculadora(7, 8, suma)}`)
console.log(`Resta es: ${calculadora(7, 8, resta)}`)
console.log(`Multi es: ${calculadora(7, 8, multi)}`)
console.log(`Division es: ${calculadora(7, 8, divi)}`)

console.log(typeof NaN)
console.log(0 / 0)
console.log(1 / 0)
console.log(-1 / 0)
