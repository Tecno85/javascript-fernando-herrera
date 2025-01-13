// Que es una Función
/* Una function: En JavaScript, una función es un bloque de código diseñado para realizar una tarea específica. Puedes definir una función una sola vez y ejecutarla (llamarla) tantas veces como necesites. Las funciones pueden recibir entradas (llamadas parámetros) y pueden devolver un valor después de realizar su tarea. Las funciones ayudan a organizar el código y hacerlo más reutilizable. 
Su objetivo es central la lógica de un procedimiento para ejecutarlo varias veces en lo que se esté desarrollando */

// Definición de una función

function saludar() {
  console.log("Hola Mundo");
}

saludar();
saludar();
saludar();

// Parámetro: Son las variables que se definen en la declaración de la función. Son los "recipientes" o nombres que van a recibir los valores que le pases cuando llames a la función. Los parámetros actúan como un marcador de posición.

function saludar2(nombre) {
  // "nombre" es el parámetro
  console.log("Hola, " + nombre);
}

saludar2("Ivan");

// Parámetros: Son las variables que defines en la función.
// Argumentos: Son los valores que pasas a la función cuando la llamas.

/******************************************************/

/******************************************************/
/*  
Función Anónima: es una función que no tiene un nombre definido. En lugar de declararla con un nombre, como lo harías con una función tradicional, la creas y la usas directamente en el lugar donde la necesitas.

En JavaScript, las funciones anónimas se usan comúnmente en lugares como los callbacks o funciones que se pasan como argumentos a otras funciones.
*/
// Función anónima asignada a una variable

const saludar3 = function () {
  console.log("Hola Mundo Función anónima");
};

// Llamada a la función anínima
saludar3();

// En este caso, function() es la función anónima que se asigna a la variable saludar. No tiene un nombre específico, pero aún así la puedes usar. En este caso la constante no puede ser reutilizada en esta función.

const saludar4 = function (nombre) {
  console.log(arguments); // Me permite ver los argumentos que son pasados ala función
  console.log("Hola " + nombre);
};

saludar4("Fernando", 40, true, "Costa Rica");

// Función de Flecha o Lamda Funtions

const saludarFlecha = () => {
  console.log("Hola Flecha");
};

saludarFlecha();

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

saludarFlecha2("Ivan");

// Funciones con retorno

function saludarRetorno (nombre) {
    console.log( "Hola " + nombre)
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Este código nunca se va a ejecutar.
    console.log("Soy un código que está después del return");
}

const retornoDeSaludar = saludarRetorno("Ivan");
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// Para qué sirven las funciones

// Las funciones tienen como tarea ejecutar un tipo de código y regresar algo desde  donde se llamó. 

function sumar ( a, b ) {
    return a + b;
}

/* 
Fumción de Flecha
const sumar2 = (a, b) => {
    return a + b;
}
*/

const sumarIvan = (a , b) => a + b;
// Función de Flecha acortada cuando solo tiene un elemento en su interior

console.log(sumar(1, 2));

function getAleatorio() {
    return Math.random();
}

console.log(getAleatorio());

// Transformar esta función a función de flecha

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
