// Ejercicio 1: Agregar elementos
function ejercicio1() {
    let compras = [];
    compras.push("pan", "leche", "huevos");
    return `<b>Ejercicio 1:</b> ${compras.join(", ")}`;
}

// Ejercicio 2: Quitar el último
function ejercicio2() {
    let compras = ["pan", "leche", "huevos"];
    let eliminado2 = compras.pop();
    return `<b>Ejercicio 2:</b> Eliminado: ${eliminado2} | Arreglo: ${compras.join(", ")}`;
}

// Ejercicio 3: Agregar al inicio
function ejercicio3() {
    let colores = ["rojo", "azul"];
    colores.unshift("amarillo");
    return `<b>Ejercicio 3:</b> ${colores.join(", ")}`;
}

// Ejercicio 4: Quitar el primero
function ejercicio4() {
    let colores = ["amarillo", "rojo", "azul"];
    let eliminado4 = colores.shift();
    return `<b>Ejercicio 4:</b> Eliminado: ${eliminado4} | Arreglo: ${colores.join(", ")}`;
}

// Ejercicio 5: Combinación de métodos
function ejercicio5() {
    let numeros = [10, 20, 30];
    numeros.push(40);
    numeros.shift();
    numeros.unshift(5);
    numeros.pop();
    return `<b>Ejercicio 5:</b> ${numeros.join(", ")}`;
}

// Ejercicio 6: Agregar elementos en orden inverso
function ejercicio6() {
    let orden = [];
    orden.unshift(1);
    orden.unshift(2);
    orden.unshift(3);
    return `<b>Ejercicio 6:</b> ${orden.join(", ")}`;
}

// Ejercicio 7: Historial de mensajes
function ejercicio7() {
    let historial = [];
    historial.push("Mensaje 1");
    historial.push("Mensaje 2");
    historial.push("Mensaje 3");
    let eliminado7 = historial.pop();
    return `<b>Ejercicio 7:</b> Eliminado: ${eliminado7} | Historial: ${historial.join(", ")}`;
}

// Ejercicio 8: Cola de atención
function ejercicio8() {
    let cola = ["Cliente1", "Cliente2", "Cliente3"];
    cola.shift();
    cola.push("Cliente4");
    return `<b>Ejercicio 8:</b> ${cola.join(", ")}`;
}

// Ejercicio 9: Reordenar nombres
function ejercicio9() {
    let nombres = ["Pedro", "Juan", "Luis"];
    nombres.pop();
    nombres.unshift("Mateo");
    nombres.push("Ana");
    return `<b>Ejercicio 9:</b> ${nombres.join(", ")}`;
}

// Ejercicio 10: Pilas y colas
function ejercicio10() {
    let pila = [];
    pila.push("A");
    pila.push("B");
    pila.push("C");
    let pilaPop1 = pila.pop();
    let pilaPop2 = pila.pop();

    let colaNueva = [];
    colaNueva.push("X");
    colaNueva.push("Y");
    colaNueva.push("Z");
    let colaShift1 = colaNueva.shift();
    let colaShift2 = colaNueva.shift();

    return `<b>Ejercicio 10:</b> 
    <br>Pila eliminados: ${pilaPop1}, ${pilaPop2}
    <br>Cola atendidos: ${colaShift1}, ${colaShift2}
    <br>Pila actual: ${pila.join(", ")}
    <br>Cola actual: ${colaNueva.join(", ")}`;
}

function mostrarEjercicio(num) {
    // Limpia todos los divs
    for (let i = 1; i <= 10; i++) {
        document.getElementById("ej" + i).innerHTML = "";
    }
    // Muestra solo el ejercicio seleccionado
    switch(num) {
        case 1: document.getElementById("ej1").innerHTML = ejercicio1(); break;
        case 2: document.getElementById("ej2").innerHTML = ejercicio2(); break;
        case 3: document.getElementById("ej3").innerHTML = ejercicio3(); break;
        case 4: document.getElementById("ej4").innerHTML = ejercicio4(); break;
        case 5: document.getElementById("ej5").innerHTML = ejercicio5(); break;
        case 6: document.getElementById("ej6").innerHTML = ejercicio6(); break;
        case 7: document.getElementById("ej7").innerHTML = ejercicio7(); break;
        case 8: document.getElementById("ej8").innerHTML = ejercicio8(); break;
        case 9: document.getElementById("ej9").innerHTML = ejercicio9(); break;
        case 10: document.getElementById("ej10").innerHTML = ejercicio10(); break;
    }
}