// Imprimir los números del 1 al 10 que sean pares

const parNumer = () => {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }

    }
}
parNumer();

// Imprimir los números del 1 al 10 que sean impares

const imparNumber = () => {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
imparNumber();

// Ejercicio: Calcular la suma de los números del 1 al 100.

const sumaNumer100 = () => {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    return suma;
}
resultado = sumaNumer100();
console.log("La suma de los números del 1 al 100 es...", resultado);

// Imprimir la tabla de multipicar del 5

const tablaMultiplicador = () => {
    let multiplicar = 5;
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        resultado = multiplicar * multiplicador;
        console.log(`${multiplicar}*${multiplicador}=${resultado}`);
    }
}
tablaMultiplicador();


//SERIE FIBONACCI
function fibonacci(n) {
    let fibSequence = [0, 1]; // Inicializamos la secuencia con los primeros dos números
    for (let i = 2; fibSequence[i - 1] + fibSequence[i - 2] <= n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence;
}
// Imprimimos la serie de Fibonacci hasta el número 50
let fibonacciSequence = fibonacci(50);
for (let number of fibonacciSequence) {
    console.log(number);
}

//Ejercicio: Calcular la suma de los elementos pares y la suma de los elementos impares de un array

const paresImpares = () => {
    let sumaPares = 0;
    let sumaImpares = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumaPares += array[i]
        } else {
            sumaImpares += array[i]
        }
    }
    return {
        sumaPares: sumaPares,
        sumaImpares: sumaImpares
    }
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
resultado = paresImpares(array)
console.log(`La suma de los números pares del array son ${resultado.sumaPares}`);
console.log(`La suma de los números impares del array son ${resultado.sumaImpares}`);

// Calcula la hipotenusa de un triángulo rectángulo conocidos sus dos catetos,
//  se puede utilizar el teorema de Pitágoras.

function calcularHipotenusa(cateto1, cateto2) {
    const sumaCuadrados = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);
    const hipotenusa = Math.sqrt(sumaCuadrados);
    return hipotenusa;
}

// Ejemplo de uso
const catetoA = 3;
const catetoB = 4;
const hipotenusa = calcularHipotenusa(catetoA, catetoB);

console.log("La hipotenusa es: " + hipotenusa);

