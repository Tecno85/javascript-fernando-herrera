# `JavaScript - Fernando Herrera`

### `1. Objeto Literal`

**_`Definición de Ivan Madrid`_**

"Un objeto literal no es una variable que almacena solo un tipo de dato, sino que es una entidad con la facultad de agrupar datos y comportamientos de forma sencilla, mediante el uso de clave-valor." Las claves son las propiedades del objeto y los valores pueden ser cualquier tipo de dato, como números, strings, funciones, arrays, u otros objetos.

**_`Definición ampliada`_**:

Un objeto literal en JavaScript es una estructura de datos que permite almacenar información en forma de pares clave-valor. Se crea directamente utilizando llaves {}, y puede contener datos simples (como números o strings) o complejos (como arrays, otros objetos, o funciones). Es una manera concisa de representar objetos en JavaScript sin necesidad de usar una clase o un constructor.

### _Puntos clave para incluir en la definición_:

- `Estructura básica`: Utiliza llaves {} para definir un conjunto de propiedades.

- `Claves (propiedades)`: Siempre son strings o se convierten automáticamente a strings.

- `Valores`: Pueden ser cualquier tipo de dato válido en JavaScript (números, strings, funciones, arrays, otros objetos, etc.).

- `Acceso`: Las propiedades se acceden mediante notación de punto (obj.propiedad) o corchetes (obj["propiedad"]).

Ejemplo:

```py
const estudiante = {
  nombre: "Carlos",
  edad: 25,
  cursos: ["Matemáticas", "Programación"],
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

// Aquí `estudiante` es un objeto literal con claves: nombre, edad, cursos, y saludar.
```

# Explicación de `Object.entries()`

## ¿Qué hace el código?

```javascript
const entriesPares = Object.entries(personaje);

El método Object.entries() toma un objeto y devuelve un array de pares clave-valor de ese objeto. Cada par es un array en sí mismo.

Ejemplo práctico

Supongamos que tienes un objeto llamado personaje:

const personaje = {
  nombre: "Mario",
  edad: 35,
  ocupacion: "Plomero",
};

Al ejecutar:

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Obtendrás:

[
  ["nombre", "Mario"],
  ["edad", 35],
  ["ocupacion", "Plomero"]
]

¿Para qué sirve?

1. Recorrer un objeto

Puedes usarlo para iterar sobre las claves y valores de un objeto:

for (const [clave, valor] of entriesPares) {
  console.log(`${clave}: ${valor}`);
}
// Resultado:
// nombre: Mario
// edad: 35
// ocupacion: Plomero

2. Transformar datos

Es útil si necesitas manipular el objeto o convertirlo en otro formato, como un array o una cadena.

Resumen
	•	Object.entries() convierte un objeto en un array de arrays.
	•	Esto te permite trabajar con las claves y valores del objeto de manera más flexible.

