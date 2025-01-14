### ¿Cómo saber si dominas un tema como condicionales y estás listo para pasar a bucles?

---

### **Señales de que dominas un tema**

1. **Puedes explicar el tema con claridad:**
   - Si puedes explicarle a otra persona (o a ti mismo) qué son los condicionales, cómo funcionan y dar ejemplos, ya tienes un buen dominio.
   - Ejemplo: "Un condicional es una estructura que permite tomar decisiones basadas en condiciones. Si algo es verdadero, se ejecuta un bloque de código; si no, otro."

2. **Puedes resolver ejercicios básicos y aplicarlos en contextos variados:**
   - Escribe programas que usen condicionales para tomar decisiones, como:
     - Comprobar si un número es par o impar.
     - Determinar si un usuario puede acceder a un sitio web según su edad.
   - Intenta resolver ejercicios sin ayuda y sin errores frecuentes.

3. **Te sientes cómodo creando tus propios problemas y resolviéndolos:**
   - Inventa situaciones y usa condicionales para resolverlas. Por ejemplo:
     - Un sistema de calificación que imprima "Aprobado" o "Reprobado" según la nota del estudiante.
     - Un programa que determine si un año es bisiesto.

4. **Has enfrentado y superado errores comunes:**
   - Sabes qué hacer cuando cometes errores típicos, como usar `=` en lugar de `==`, o cómo manejar condiciones más complejas con operadores como `&&` y `||`.

5. **Puedes aplicar condicionales junto con otros conceptos:**
   - Por ejemplo, combínalos con variables, operadores de comparación y funciones:
     ```javascript
     function verificarAcceso(edad) {
         if (edad >= 18) {
             return "Acceso permitido";
         } else {
             return "Acceso denegado";
         }
     }
     console.log(verificarAcceso(20)); // "Acceso permitido"
     ```

---

### **Cómo decidir si avanzar a bucles**

1. **Haz una lista de ejercicios específicos para condicionales:**
   - Si puedes resolverlos todos con confianza, estás listo para avanzar.
   - Ejemplo: ¿Puedes resolver un ejercicio donde uses un `if-else` y otro donde uses un `switch`?

2. **Introduce pequeños desafíos combinados:**
   - Crea programas que podrían beneficiarse de bucles pero hazlos solo con condicionales. Esto te ayudará a entender las limitaciones de los condicionales y la necesidad de aprender bucles.
   - Ejemplo: Imprime los números del 1 al 5 usando solo `if`.

3. **Evalúa tu curiosidad por el siguiente tema:**
   - Si empiezas a preguntarte: "¿Cómo podría repetir esta acción sin escribir tanto código?", probablemente estés listo para aprender bucles.

---

### **Prueba final antes de avanzar**

Resuelve este desafío para comprobar tu dominio de condicionales:
> Escribe un programa que calcule el precio de un boleto según la edad del usuario:
> - Menores de 5 años: gratis.
> - Entre 5 y 12 años: $5.
> - Mayores de 12 años: $10.

Si puedes hacerlo sin problemas y explicar cómo funciona tu código, ¡es momento de pasar a bucles!

