const ejercicios = [
    {
        titulo: "Ejercicio 1: Agregar elementos",
        accion: function () {
            let compras = [];
            compras.push("pan", "leche", "huevos");
            return compras.join(", ");
        }
    },
    {
        titulo: "Ejercicio 2: Quitar el último",
        accion: function () {
            let compras = ["pan", "leche", "huevos"];
            let eliminado = compras.pop();
            return eliminado;
        }
    },
    {
        titulo: "Ejercicio 3: Agregar al inicio",
        accion: function () {
            let colores = ["rojo", "azul"];
            colores.unshift("amarillo");
            return colores.join(", ");
        }
    },
    {
        titulo: "Ejercicio 4: Quitar el primero",
        accion: function () {
            let colores = ["amarillo", "rojo", "azul"];
            let eliminado = colores.shift();
            return eliminado;
        }
    },
    {
        titulo: "Ejercicio 5: Combinación de métodos",
        accion: function () {
            let numeros = [10, 20, 30];
            numeros.push(40);
            numeros.shift();
            numeros.unshift(5);
            numeros.pop();
            return numeros.join(", ");
        }
    },
    {
        titulo: "Ejercicio 6: Agregar elementos en orden inverso",
        accion: function () {
            let orden = [];
            orden.unshift(3);
            orden.unshift(2);
            orden.unshift(1);
            return orden.join(", ");
        }
    },
    {
        titulo: "Ejercicio 7: Historial de mensajes",
        accion: function () {
            let historial = [];
            historial.push("Mensaje 1", "Mensaje 2", "Mensaje 3");
            let eliminado = historial.pop();
            return eliminado;
        }
    },
    {
        titulo: "Ejercicio 8: Cola de atención",
        accion: function () {
            let cola = ["Cliente1", "Cliente2", "Cliente3"];
            cola.shift();
            cola.push("Cliente4");
            return cola.join(", ");
        }
    },
    {
        titulo: "Ejercicio 9: Reordenar nombres",
        accion: function () {
            let nombres = ["Pedro", "Juan", "Luis"];
            nombres.pop();
            nombres.unshift("Mateo");
            nombres.push("Ana");
            return nombres.join(", ");
        }
    },
    {
        titulo: "Ejercicio 10: Pilas y colas",
        accion: function () {
            let pila = [];
            pila.push("Elemento1", "Elemento2", "Elemento3");
            let eliminadosPila = [pila.pop(), pila.pop()];

            let colaNueva = [];
            colaNueva.push("ClienteA", "ClienteB", "ClienteC");
            let atendidosCola = [colaNueva.shift(), colaNueva.shift()];

            return `Pila eliminados: ${eliminadosPila.join(", ")} | Cola atendidos: ${atendidosCola.join(", ")}`;
        }
    }
];

// Generar las cartas dinámicamente
const contenedor = document.getElementById("cards-container");

ejercicios.forEach((ejercicio, index) => {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
    <div class="card h-100 shadow-sm">
        <div class="card-body">
            <h5 class="card-title">${ejercicio.titulo}</h5>
            <input type="text" id="resultado${index}" class="form-control mb-2" readonly>
            <button onclick="ejecutarEjercicio(${index})" class="btn btn-primary">Ejecutar</button>
        </div>
    </div>`;
    
    contenedor.appendChild(col);
});

function ejecutarEjercicio(indice) {
    const resultado = ejercicios[indice].accion();
    document.getElementById(`resultado${indice}`).value = resultado;
}
