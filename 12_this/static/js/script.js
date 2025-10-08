//crear funcion de prueba this
function example(elemento){
    console.log("elemento clickeado", elemento);
}

function turnOff(element) {
    if (element.innerText == "On") {
        element.innerText = "Off";
    } else {
        element.innerText = "On";
    }
}

//botòn de eliminar