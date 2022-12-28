function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, sumar) {
    return sumar(num1, num2);
};

console.log(calc(2,2, sum));

setTimeout(function() {
console.log('hola javascript');
}, 5000)

function gretting(name) {
    console.log(`hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar')

// mi practica para probar el callback donde se pasa una funcion como argumento a otra funcion, se ve que perros con sus dos argumentos es una funcion, esos argumentos se pasan a la siguiente funcion animales, mas otra palabra que en realidad hace referencia a callback, para luego meter el callback mas los argumentos anteriores en un return.


// function perros(perro1, perro2) {
//     return perro1 + perro2;
// }

// const animales = (perro1, perro2, suma) => {
//     return suma(perro1, perro2);
// }
// console.log(animales(1,5,perros));

// en el setTimeout se coloca una funcion mas el tiempo en que queremos que sea ejecutada.


// setTimeout(function() {
//     return console.log(1+1);
// }, 2000);