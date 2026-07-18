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


// 1. Inicialización de variables de control
let totalCarrito = 0;
let continuar = true;

// Mensaje de bienvenida inicial
alert("¡Bienvenido al simulador de compras de tecnología!");

// 2. Estructura de Repetición (Bucle while)
while (continuar) {
    // Presentamos un menú de opciones al usuario
    let opcion = prompt(
        "Seleccione un producto para agregar al carrito:\n" +
        "1 - Auriculares Inalámbricos ($50)\n" +
        "2 - Teclado Mecánico ($80)\n" +
        "3 - Mouse Gamer ($40)\n" +
        "0 - Finalizar compra y salir"
    );

    // 3. Estructura de Decisión (Condicionales)
    if (opcion === "1") {
        totalCarrito += 50; // Sumamos el precio al total
        alert("Auriculares agregados. Subtotal actual: $" + totalCarrito);
    } 
    else if (opcion === "2") {
        totalCarrito += 80;
        alert("Teclado agregado. Subtotal actual: $" + totalCarrito);
    } 
    else if (opcion === "3") {
        totalCarrito += 40;
        alert("Mouse agregado. Subtotal actual: $" + totalCarrito);
    } 
    else if (opcion === "0") {
        // Condición de parada: cambiamos la variable de control para romper el bucle
        continuar = false; 
    } 
    else {
        // Manejo de escenarios donde el usuario ingresa cualquier otra cosa
        alert("Opción no válida. Por favor, elija un número del menú (1, 2, 3 o 0).");
    }
}

// 4. Comunicar resultados al finalizar el bucle
alert("Compra finalizada. El total a pagar es: $" + totalCarrito);
console.log("El usuario cerró el carrito. Total facturado: $" + totalCarrito);