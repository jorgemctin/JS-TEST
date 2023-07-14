// ARRAYS
//     1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por consola la longitud
//     del array. Crea otra función que obtenga un elemento aleatorio del array y lo saque por consola.
//     2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que los liste y los saque por
//     consola.
//     4. Crea una string, pásala a array y saca por consola la versión invertida de la original. Ejemplo: "Hola" -> [H, o,
//     l, a] -> [a, l, o, H] -> "aloH"
//     5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale sus elementos y vacíe
//     los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3] y arrayDos = [4, 5, 6] el resultado debería
//     ser [1, 4, 2, 5, 3, 6]
//     6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays: uno para pares y otro
//     para impares. A continuación, saca por consola ambos arrays resultantes concatenados.
//     7. Utilizando el array del ejercicio anterior, crea una función que saque por consola únicamente los números mayores
//     que 5.
//     8. Dados los arrays php = ["php", "laravel", "Funciones", "Arrays"] y php2= ["Objetos", "Arrays", "strings"], crea
//     una función que determine si se repite algún elemento y lo saque por consola.

// const fizzBuzz = (n) => {
//     for (let i = 0; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzBuzz");
//         }else if (i % 3 === 0) {
//             console.log("Fizz");
//         }else if (i % 5 === 0) {
//             console.log("Buzz");
//         }else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(20);


const fizzBuzz = (n) => {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(20);

//1.1

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const arrayLength = () => {
    console.log("Longitud del array: ", array.length);
}
arrayLength();

// 1.2

const randomOne = () => {
    let random = Math.floor(Math.random() * array.length)
    let randomElement = array[random];
    console.log("El elemento random del array es: ", randomElement);
}
randomOne();

//2-Sistema Solar

const solarSistem = ["Mercurio", "Venus", "la Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

const getPlanets = () => {
    console.log("Los planetas del Sistema Solar:");
    for (let i = 0; i < solarSistem.length; i++) {
        console.log(solarSistem[i]);
    }
};
getPlanets();

//4

let arrayToRevert = "HELLO";

let arrayReverted = arrayToRevert.split("").reverse().join("")

console.log(arrayReverted);

// 5
function intercalarArrays(array1, array2) {
    const resultado = [];
    const longitud = array1.length;  // Se asume que array1 y array2 tienen la misma longitud
    for (let i = 0; i < longitud; i++) {
        resultado.push(array1[i]);
        resultado.push(array2[i]);
    }
    array1.length = 0;
    array2.length = 0;
    return resultado;
}

// Ejemplo de uso
const array1 = [1, 2, 3, 4];
const array2 = ['a', 'b', 'c', 'd'];
const resultado = intercalarArrays(array1, array2);

console.log(resultado);  // Salida: [1, 'a', 2, 'b', 3, 'c', 4, 'd']
console.log(array1);  // Salida: []
console.log(array2);  // Salida: []


///OTROS EJEMPLOS:
const erray = [1, 2, 3, "Hola"];

erray.push(4);
console.log(erray);  // Salida: [1, 2, 3, 4]

erray.push(5, 6, 1);
console.log(erray);  // Salida: [1, 2, 3, 4, 5, 6]

//6
const divideArray = () => {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let pares = [];
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
        else{
            impares.push(numeros[i]);
        }
        }
        return{
            pares: pares,
            impares: impares
    }
}
result = divideArray();
console.log(result.pares.concat(result.impares));

const arrayNumber = [1,2,3,4,5,6,7,8,9,10]
const upFive = () => {
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 5 ) {
        console.log("Somos mayores que 5:", arrayNumber[i]);
    }
}
}
upFive();

//7
const findDuplicates = (array1, array2) => {
    const duplicates = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !duplicates.includes(array1[i])) {
            duplicates.push(array1[i]);
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (array1.includes(array2[i]) && !duplicates.includes(array2[i])) {
            duplicates.push(array2[i]);
        }
    }
    if (duplicates.length > 0) {
        console.log("Elementos repetidos encontrados:");
        console.log(duplicates);
    } else {
        console.log("No se encontraron elementos repetidos.");
    }
};
const php = ["php", "laravel", "Funciones", "Arrays"];
const php2 = ["Objetos", "Arrays", "Funciones"];

findDuplicates(php, php2);