function cambioVideo(element){
    const mainVideo = document.getElementById("video");
    let rutaMainVideo = mainVideo.src;
    let vidSmall = element.src;
    element.src = rutaMainVideo;
    mainVideo.src = vidSmall;

    //cambio de texto
    const tituloMain = document.getElementById("titulo_main");
    let contentTextoMain = tituloMain.textContent;
    const tituloSmall = element.nextElementSibling;
    let contentTextoSmall = tituloSmall.textContent;
    tituloMain.textContent = contentTextoSmall;
    tituloSmall.textContent = contentTextoMain;
}