
let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "10880, 90265",
        ubicacion: "Malibu, California"
    }, 
    "ultima-pelicula": "Infinity War"
};

console.log(personaje)
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad:", personaje["edad"]);
console.log("Coords: ", personaje["coords"])
console.log("Coords: ", personaje.coords)
console.log("Coords: ", personaje.coords.lat)
console.log("Coords: ", personaje["coords"]["lat"])
console.log("No. Trajes:", personaje.trajes.length)
console.log("Último traje:", personaje.trajes[personaje.trajes.length - 1])

const x = "vivo";

console.log("Vivo", personaje[x])
console.log("Última perícula:", personaje["ultima-pelicula"])

// Para eliminar una propiedad de un objeto utilizamos la palabra reservada 
// delete antes del objeto y su propiedad

delete personaje.edad;
console.log(personaje)

// Para crear una nueva propiedad en el objeto

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Como crear un objeto que no pueda mutar-cambiar desde el momento que se realiza la instrucción Object.freeze. Esto no permite cambiar las propiedades ya creadas ni agregar nuevas.

Object.freeze(personaje.direccion);

personaje.dinero = 300000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica"
console.log(personaje)

// Para ver solo los nombres de las propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
// Para ver solo los nombres de los valores
const valores = Object.values(personaje);
console.log({propiedades, valores})

// Más información sobre los Objetos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object