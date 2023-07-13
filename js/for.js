// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

for (i = 0; i < 5; i++) {
    if (i % 2 === 0) {
        console.log(i, "Es par");
    } else {
        console.log(i, "Es impar");
    }
}

 const array = [2, 2, 3, 8, 2]

for (i = 0; i < array.length; i++) {
    const element = array[i];
    const square = element * element;
    console.log(`El cuadrado de ${element} es ${square}`);
}
//Te dice en todo el array donde se encuentran los 2
const array2 = [2, 7, 2, 8, 2]
const target = 2;

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (element === target) {
        console.log(`El elemento ${target} se encuentra en el indice ${i}`);
    }
}

//Te dice en que indice se encuentra pero solo la primera vez

const array3 = [2, 5, 7, 7, 8, 4];
const target1 = 7;
let index = -1;

for (let i = 0; i < array3.length; i++) {
    const element = array3[i];
    if (element === target1) {
        index = i;
        break;
    }
}

console.log(`El elemento ${target1} se encuentra en el índiceee ${index}`);

//Multiplicar
for (let i = 0; i < 5; i++) {
    let x = i * 2 + 8;
    console.log(x);
}

//Meter en array con for
const array4 = [2,5,7,7,7,7];
const target2 = 7;
const indices = [];

for (let i = 0; i < array4.length; i++) {
    const element = array4[i];
    if (element === target2) {
        indices.push(i);
    }
}
console.log(indices);
console.log(`El elemento ${target2} se encuentra en los índices: ${indices.join(',')}`);