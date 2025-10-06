console.log("page loaded...");

function likeBtn(element) {
    const span = element.querySelector("span");
    let like = parseInt(span.innerText);
    like++;
    span.innerText = like + " likes";
    alert("¡Te gusta esta publicación!");
}


function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}


function hide(element) {
    element.remove();
}