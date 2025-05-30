# 📚 UCSE - Funciones y Arrays en JavaScript

¡Bienvenido/a! Este repositorio contiene ejemplos prácticos y teoría sobre **funciones** y **arrays** en JavaScript, dos pilares fundamentales para la programación moderna. Aquí aprenderás a crear, manipular y aprovechar al máximo estas herramientas. 🚀

---

## ✨ Funciones en JavaScript

Las **funciones** son bloques de código reutilizables que realizan una tarea específica. Permiten organizar el código, evitar repeticiones y mejorar la legibilidad.

### Declaración de funciones

- **Función tradicional:**
  ```js
  function saludar(nombre) {
    return 'Hola ' + nombre;
  }
  ```
- **Función anónima:**
  ```js
  const saludar = function(nombre) {
    return 'Hola ' + nombre;
  }
  ```
- **Función flecha (arrow function):**
  ```js
  const saludar = nombre => 'Hola ' + nombre;
  ```

### Parámetros y valores por defecto
Puedes definir funciones con parámetros opcionales y valores por defecto:
```js
function sumar(nro1 = 0, nro2 = 0) {
  return nro1 + nro2;
}
```

### Parámetro rest (...)
Permite recibir un número indefinido de argumentos como un array:
```js
function sumar(...nros) {
  let suma = 0;
  for (let index = 0; index < nros.length; index++) {
    suma += nros[index];
  }
  return suma;
}
```

---

## 🍇 Arrays en JavaScript

Un **array** es una estructura que permite almacenar varios valores en una sola variable. Los arrays pueden contener cualquier tipo de dato y se accede a sus elementos mediante índices.

### Declaración y acceso
```js
const frutas = ['anana', 'pera', 'uva'];
console.log(frutas[0]); // 'anana'
console.log(frutas.length); // 3
console.log(frutas[frutas.length - 1]); // Último elemento
```

### Modificación de elementos
```js
frutas[0] = 'piña';
```

### Desestructuración y spread
```js
console.log(...frutas); // 'piña' 'pera' 'uva'
```

---

## 🛠️ Métodos útiles de Arrays

- **push()**: Agrega elementos al final.
  ```js
  frutas.push('sandia', 'manzana');
  ```
- **pop()**: Elimina el último elemento y lo retorna.
  ```js
  frutas.pop();
  ```
- **splice()**: Permite agregar, eliminar o reemplazar elementos en cualquier posición.
  ```js
  frutas.splice(0, 1, 'naranja');
  ```
- **at()**: Accede a elementos por índice, soporta índices negativos.
  ```js
  frutas.at(-1); // Último elemento
  ```
- **map()**: Crea un nuevo array aplicando una función a cada elemento.
  ```js
  const cuadrados = [1,2,3].map(num => num * num);
  ```
- **filter()**: Filtra los elementos según una condición.
  ```js
  const mayores = [45, 25, 1].filter(edad => edad > 18);
  ```
- **reduce()**: Reduce el array a un solo valor.
  ```js
  const suma = [1,2,3].reduce((acc, num) => acc + num, 0);
  ```
- **forEach()**: Ejecuta una función por cada elemento.
  ```js
  frutas.forEach((fruta, i) => console.log(i, fruta));
  ```

---

## 🔤 Métodos útiles de Strings

- **length**: Devuelve la longitud de la cadena.
- **indexOf()**: Busca la posición de un substring.
- **split()**: Divide un string en un array.

```js
const nombre = 'Fabio';
console.log(nombre.length); // 5
const listaCorreos = 'a@b.com, c@d.com';
const arrayCorreos = listaCorreos.split(', ');
```

---

## 📦 Archivos incluidos
- `Funciones.js`: Ejemplos de funciones y parámetros.
- `Arrays.js`: Declaración y manipulación básica de arrays.
- `Array Methods.js`: Métodos avanzados de arrays.
- `String Methods.js`: Métodos útiles para strings.

---

¡Explora los archivos y experimenta! Si tienes dudas, consulta la teoría aquí o pregunta a tu profesor/a. 😊
