function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingresa un número:"));
    let resultado = "Tabla de multiplicar de" + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

function sumaNumeros() {
    let cantidad = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    for (let i = 1; i <= cantidad; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i}:`));
        suma += numero; 
    }
    alert("El total de la suma es:" + suma);
}

function numPares() {
    let numInicio = parseInt(prompt("Ingresa el número inicial:"));
    let numFinal = parseInt(prompt("Ingresa el número final:"));
    let array = [];
    for (let i = numInicio; i <= numFinal; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    alert("Los números pares entre" + " " + numInicio + " " + "y" + " " + numFinal + " " + "son:" + " " + array.join(" - "));
}