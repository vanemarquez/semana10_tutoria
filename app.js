// Ejercicios (bucles)

// Ejercicio 1: Escribe un bucle while que imprima los números del 1 al 5.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Ejercicio 2: Escribe un bucle for que imprima los elementos de un array de nombres.
const nombres = ['Fabian', 'Luis', 'Vanessa', 'Martha'];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Ejercicio 3: Usa forEach para imprimir los elementos de un array de números multiplicados por 2.
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => {
    console.log(numero * 2);
});


// Ejercicio 4: Usa map para crear un nuevo array con los cuadrados de los números de un array dado.
let numerosarray = [1, 2, 3, 4, 5];
let cuadrados = numerosarray.map(numero => numero ** 2);
console.log(cuadrados);


// Ejercicio 5: Usa find para encontrar el primer número mayor que 10 en un array de números.
let numbers = [5, 8, 12, 4, 19];
let mayorQueDiez = numbers.find(numero => numero > 10);
console.log(mayorQueDiez);


// Ejercicio 6: Usa some para verificar si hay algún número par en un array de números.
let numbers1 = [1, 3, 5, 7, 10];
let numberPar = numbers1.some(numero => numero % 2 === 0);
console.log(numberPar);


// Ejercicio 7: Usa filter para crear un nuevo array con los números impares de un array dado.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let impares = numbers2.filter(numero => numero % 2 !== 0);
console.log(impares);


// Ejercicio 8 (Extra): Combina filter y map para crear un nuevo array con los cuadrados de los números impares de un array dado.
let numbers3 = [1, 2, 3, 4, 5, 6, 7];
let cuadradosImpares = numbers3
    .filter(numero => numero % 2 !== 0)
    .map(numero => numero ** 2);
console.log(cuadradosImpares);