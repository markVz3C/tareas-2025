/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
// referencia ul
const resultado = document.getElementById("resultado");
function agregarElementoCompra() {
    //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}
let carrito = []; //ejercicio 2
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los elementos
    for (let i = 0; i < carrito.length; i++) {
        const item = document.createElement("li");
        item.innerText = `${carrito[i]}`;
        lista.appendChild(item);
    }
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); //trim elimina espacios en blanco al inicio y al final / guardo valor sin espacios extras
    if (valor === "") return; // Si el valor está vacío, no hacemos nada
    carrito.push(valor); // Agrego el valor al final

    input.value = ""; // Limpio el campo de entrada
    input.focus(); // Agregamos foco hacia el input
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop(); // Elimina el último elemento del arreglo
        mostrarListaCompra(); // ← Esto actualiza la lista en pantalla
    }
}

// Ejercicio 3 y 4
let colores = [];

function mostrar_lista_colores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";

    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    } // Agregar valor al final

    colores.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    console.log(colores);
    mostrar_lista_colores();
}
// -------------------------------------------------------------------------------------
let colores2 = [];

function mostrar_lista_colores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";

    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores2[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    } // Agregar valor al final

    colores2.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input

    mostrar_lista_colores2();
}

function eliminar_primer_elemento() {
    if (colores2.length > 0) {
        colores2.shift();
    }
    mostrar_lista_colores2();
}


//ejercicio 5
let numeros = [10, 20, 30];

function mostrar_lista_numeros() {
    const lista = document.getElementById("resultado5");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los elementos

    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${numeros[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    } // Agregar valor al final

    numeros.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    mostrar_lista_numeros()
}

function eliminar_primer_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.shift();
    }
    mostrar_lista_numeros(); // Actualiza la lista en pantalla
}

function eliminar_ultimo_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.pop();
    }
    mostrar_lista_numeros(); // Actualiza la lista en pantalla
}

function agregar_ultimo_elemento_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;


    numeros.push(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    mostrar_lista_numeros();
}

// ejercicio 6
let orden = [];

function mostrarListaOrden() {
    const lista = document.getElementById("resultado6");
    lista.innerHTML = "";
    for (let i = 0; i < orden.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = orden[i];
        lista.appendChild(li);
    }
}

function agregarInicioOrden() {
    const input = document.getElementById("lista6");
    const valor = input.value.trim();
    if (valor === "") return;
    orden.unshift(valor);
    input.value = "";
    input.focus();
    mostrarListaOrden();
}

function cargarOrdenInverso() {
    orden = []; // Limpia antes de cargar
    orden.unshift(3);
    orden.unshift(2);
    orden.unshift(1);
    mostrarListaOrden();
}

let historial = [];
let eliminados =
function mostrarMensajes() {
    const lista = document.getElementById("resultado7");
    lista.innerHTML = "";

    for (let i = 0; i < historial.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${historial[i]}`;
        lista.appendChild(li);
    }
}

function MostrarEliminados() {
    const lista = document.getElementById("eliminados");
    lista.innerHTML = "";

    for (let i = 0; i < eliminados.length; i++) {
    li
    }
}

function eliminarUltimo() {
    if (historial.length > 0) {
        const borrados = historial.pop(); // Elimina el último elemento del arreglo
        eliminados.push(borrados); // Agrega el elemento eliminado al arreglo de eliminados
        input.focus(); // Agrega foco hacia el input
        mostrarMensajes(); // Actualiza la lista en pantalla
        MostrarEliminados(); // Actualiza la lista de eliminados
    }
}

function agregarFinal (){
    const input = document.getElementById("lista7")
    const valor = input.value.trim(); //guarda valor sin espacios extras
    if (valor === "") return; // Si el valor está vacío, no hacemos nada
    historial.push(valor); // Agrega el valor al final
    input.value = ""; // Limpia el campo de entrada
    input.focus(); // Agrega foco hacia el input
    mostrarMensajes(); // Actualiza la lista en pantalla
}