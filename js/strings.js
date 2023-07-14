// STRINGS

//     1.- Crea una variable y asígnale el valor "La comida que más me gusta es el sushi".
//     2.- Determina la posición de la palabra "gusta" en la cadena.
//     3.- Reemplaza la palabra "más" por la palabra "menos".
//     4.- Comprueba si en la cadena existe la palabra "pasta".
//     5.- Invierte el orden de la cadena.
//     6.- Cuenta cuántas vocales "e" hay en la cadena.
//     7- Convierte la cadena en un array, y que cada posición del array sea una palabra

//1
let food = "La comida que más me gusta es el sushi";
//2
const position = food.indexOf("gusta");
console.log("La posición de la palabra 'gusta' es: " + position);
//3
let foodChange = food.replace("más", "menos");
console.log("Cambiada palabra mas por menos en la frase: ", foodChange);
//4
let existePasta = foodChange.includes("pasta");
console.log("¿La palabra 'pasta' existe en la frase?", existePasta);
//5
let reverseFood = foodChange.split(" ").reverse().join(" ");
console.log("Frase revertida: ", reverseFood);
//6
let counter  = 0;
for (let i = 0; i <= foodChange.length; i++) {
    if (foodChange[i] === "e") {
        counter ++;
    }
}
console.log("Cantidad de vocales 'e' en la frase: ", counter);

let arrayFood = foodChange.split(" ");
console.log("Array de palablas: ", arrayFood);