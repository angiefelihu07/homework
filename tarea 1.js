// Definir un array
let numeros = [1, 2, 3, 4, 5];

// Acceso a elementos
let primerElemento = numeros[0]; // primerElemento = 1

// Modificar elementos0

numeros[2] = 10; // El tercer elemento ahora es 10

// Longitud del array
let longitud = numeros.length; // longitud = 5

// Agregar elementos
numeros.push(6); // Agrega 6 al final: [1, 10, 3, 4, 5, 6]
numeros.unshift(0); // Agrega 0 al principio: [0, 1, 10, 3, 4, 5, 6]

// Eliminar elementos
let ultimoElemento = numeros.pop(); // Elimina y devuelve 6
let primerElementoEliminado = numeros.shift(); // Elimina y devuelve 0

// Buscar elementos
let indiceDeTres = numeros.indexOf(3); // indiceDeTres = 2

// Recorrido de elementos
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Transformación de elementos
let cuadrados = numeros.map(function(numero) {
  return numero * numero;
}); // cuadrados = [1, 100, 9, 16, 25]

// Reducción de elementos
let sumaTotal = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0); // sumaTotal = 131 (la suma de todos los elementos)

// Ordenar elementos
numeros.sort(); // Ordena en su lugar: [1, 10, 16, 25, 9]

// Concatenación de arrays
let otrosNumeros = [7, 8];
let numerosConcatenados = numeros.concat(otrosNumeros); // [1, 10, 16, 25, 9, 7, 8]

// Verificación de elementos
let contieneDiez = numeros.includes(10); // contieneDiez = true
let todosMayoresACero = numeros.every(function(numero) {
  return numero > 0;
}); // todosMayoresACero = false

let algunosMayoresACero = numeros.some(function(numero) {
  return numero > 0;
}); // algunosMayoresACero = true