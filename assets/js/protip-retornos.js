function crearPersona (nombre, apellido) {
    return {nombre, apellido}
}

const persona = crearPersona("Fernando", "Herrera");
console.log(persona);