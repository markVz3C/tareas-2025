function numNaturales () { //ejercicio 1
    let num = parseInt(prompt("Ingresa la cantidad de números que deseas sumar:"));
    let suma = 0;
    for(let i = 1; i <= num; i++) {
        suma += i;
    }
    alert("La suma de los primeros" + " " + num + " "+ "números naturales es:" + " " + suma);
}

function numPares () { //ejercicio 2
    let array = []; 
    for (let i = 1; i <= 200; i++) { 
        if (i % 2 === 0) { 
            array.push(i); 
        }
    }
    alert("Los 100 primeros números pares son:" + " " + array.join(" - "));
}

function numImpares () { //ejercicio 3
    let array = []; 
    for (let i = 1; i <= 200; i++) { 
        if (i % 2 === 1) { 
            array.push(i); 
        }
    }
    alert("Los 100 primeros números impares son:" + " " + array.join(" - "));
}

function numIngresados() { //ejercicio 4
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let num3 = parseInt(prompt("Ingresa el tercer número:"));
    let num4 = parseInt(prompt("Ingresa el cuarto número:"));
    let num5 = parseInt(prompt("Ingresa el quinto número:"));
    let suma = (num1 + num2 + num3 + num4 + num5);
    alert("El resultado de la suma es:" + " " + suma);
}

function numSuma () { //ejercicio 5
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let num = parseInt(prompt("Ingresa el número" + i + ":"));
        suma += num;
    }
    alert("La suma de los números es:" + suma);
}

function numOperatoria() { //ejercicio 6
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let opcion = prompt("Elija una operación para realizar:\n" + "Suma\n" + "Resta\n" + "Multiplicación\n" + "División\n");
    let resultado;
    switch (opcion){
        case "Suma":
            resultado = num1 + num2;
            alert("El resultado de la suma es:" + " " + resultado);
            break;
        case "Resta":
            resultado = num1 - num2;
            alert("El resultado de la resta es:" + " " + resultado);
            break;
        case "Multiplicación":
            resultado = num1 * num2;
            alert("El resultado de la multiplicación es:" + " " + resultado);
            break;
        case "División":
            resultado = num1 / num2;
            alert("El resultado de la división es:" + " " + resultado);
            break;
        }
}

function sumarNumerosPares() { //ejercicio 7
    let N = parseInt(prompt("Ingrese la cantidad de números pares a sumar:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        let num = parseInt(prompt(`Ingrese el número par ${i}:`));
        if (num % 2 === 0) {
            suma += num;
        } else {
            alert("El número ingresado no es par.");
            i--;
        }
    }
    alert("La suma de los números pares ingresados es: " + suma);
}

function sumarPares(){ //ejercicio 8
    let n = parseInt(prompt("Ingresa hasta que número par deseas sumar:")); 
    let suma = 0; 
    let count = 0; 
    let numeroPar = 2; 
    let array = [] 
    while (count < n) { 
        suma += numeroPar; 
        numeroPar += 2; 
        count++; 
        array.push(numeroPar - 2); 
    }
    alert("La suma de los " + n + " primeros números pares es: " + suma + `\nLista de números pares: ${array.join(", ")}`);
}

function sumaNumerosImpares() { //ejercicio 9
    let n = parseInt(prompt("Ingresa la cantidad de números impares a sumar:"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        const num = parseInt(prompt(`Ingrese el número ${i}:`));
        suma += num;
    }
    alert("La suma de los números ingresados es: " + suma);
}
function sumaImpares() { //ejercicio 10
    let n = parseInt(prompt("Ingresa hasta que número impar deseas sumar:")); 
    let suma = 0; 
    let count = 0; 
    let numeroImpar = 1; 
    let array = [] 
    while (count < n) { 
        suma += numeroImpar; 
        numeroImpar += 2; 
        count++; 
        array.push(numeroImpar - 2); 
    }
    alert("La suma de los " + n + " primeros números impares es: " + suma + `\nLista de números impares: ${array.join(", ")}`);
}


function sumaMultiplos() { //ejercicio 11
    let n = parseInt(prompt("¿Cuántos múltiplos de 3 desea sumar?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let multiplo = i * 3;
        suma += multiplo
        }
        alert("La suma de los primeros" + " " + n + " " + "múltiplos de 3 es:" + suma);
}

function factorial() { //ejercicio 12
    let n = parseInt(prompt("Ingresa un número:"));
    let factorial = 1;
    let i = 1
    while (i <= n) {
        factorial *= i;
        i++
    }
    alert("El factorial de" + " " + n + " " + "es:" + " " + factorial);
}

function conversion() { //ejercicio 13
    let celsius = parseInt(prompt("Ingresa los grados celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(celsius + "°C" + " " + "equivalen a" + " " + fahrenheit + "°F");
}

function palabraLarga() { // ejercicio 14
    let frase = prompt("Ingresa una frase:");
    let palabras = frase.split(' ');
    let palabraMasLarga = '';
    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    alert("La palabra más larga es: " + palabraMasLarga);
}

function numPrimos() { //ejercicio 15 (pendiente)
    let n = parseInt(prompt("Ingresa un número:"));
    if (n < 2) return false;
    for (let i = 2; i <= numero; i++) {  
        if (numero % i === 0) {
            return false;
        }
    }
    alert("El número" + " " + n + " " + "es primo:"  + numPrimos(n));       
    return true;
}

function contador() { //ejercicio 16
    let cadena = prompt("Ingresa una cadena de texto:");
    let contador = {};
    for (let caracter of cadena) {
        if (contador[caracter]) {
            contador[caracter]++;
        } else {
            contador[caracter] = 1;
        }
    }
    let resultado = "Conteo de caracteres:\n";
    for (let caracter in contador) {
        resultado += `${caracter}: ${contador[caracter]}\n`;
    }
    alert(resultado);
}


function pares() { //ejercicio 17
    let cantidad = parseInt(prompt("¿Cuántos valores quieres ingresar?"));
    let pares = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(prompt(`Ingresa el valor ${i + 1}:`));
        if (numero % 2 === 0) {
            pares.push(numero);
        }
    }
    if (pares.length > 0) {
        alert("Números pares ingresados:" + " " + pares.join(" - "));
    } else {
        alert("No se ingresaron números pares.");
    }
}