// 1. Captura de datos (Mínimo tres datos diferentes)
let nombre = prompt("¿Cómo te llamás?");
let edadTexto = prompt("¿Cuántos años tenés?");
let cantidadHermanosTexto = prompt("¿Cuántos hermanos tenés?"); // Tercer dato añadido

// 2. Procesamiento (Conversión con Number() y operaciones)
let edad = Number(edadTexto); 
let hermanos = Number(cantidadHermanosTexto); 

// Operación matemática simple (personas totales en tu núcleo familiar directo)
let totalFamilia = hermanos + 1; 

// Concatenación de strings con la información solicitada
let mensajeAlert = "¡Hola " + nombre + "! Tenés " + edad + " años.";
let mensajeConsola = "El usuario tiene " + hermanos + " hermanos. Total en el núcleo familiar directo (hermanos + usuario): " + totalFamilia;

// 3. Salida de datos (Uso de alert y console.log)
alert(mensajeAlert);
console.log(mensajeConsola);