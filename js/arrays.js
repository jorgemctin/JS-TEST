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

const fizzBuzz = (n) => {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
        }else if (i % 3 === 0) {
            console.log("Fizz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else{
            console.log(i);
        }
        
    }
}

fizzBuzz(20);