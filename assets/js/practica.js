/* 
Escribe un programa que calcule el precio de un boleto según la edad del usuario:

Menores de 5 años: gratis.

Entre 5 y 12 años: $5.

Mayores de 12 años: $10.
*/

console.log("Precio del Boleto, según la edad.");

let edadUsuario = parseInt(prompt("Ingresa tu edad: "));

if (edadUsuario < 5) {
    console.log("El boleto no tiene costo. Puedes seguir.")
} else if (edadUsuario >= 5 & edadUsuario <= 12) {
    console.log("EL boleto tiene un costo de $5 dolares.")
} else {
    console.log("El boleto tiene un costo de $10 dolares.")
}


