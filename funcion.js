function getFocus() {
    let textArea = document.getElementById("textAreaIzq");
    textArea.focus();
}

getFocus();

function copy() {
    let texto = document.getElementById("textAreaDer");
    texto.select();
    document.execCommand("copy");
    Swal.fire({
        icon: 'success',
        iconColor: '#f2f2f2',
        background:  'rgb(165, 30, 55)',
        title: '¡Texto copiado!',
        color:'#f2f2f2',
        confirmButtonColor: '#FFC0CB',
    });

}

function campoVacio(){
    Swal.fire({
        iconColor: '#f2f2f2',
        icon: 'error',
        background: 'rgb(165, 30, 55)',
        title: '¡ALERTA!',
        color:'#f2f2f2',
        confirmButtonColor: '#FF00FF',
        text: 'Ingresa un mensaje',
    });
}

document.head.appendChild(swalCss);
function encriptar() {
    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    let texto = document.getElementById("textAreaIzq").value;

    if (texto.length!=0) {
        if (/[^a-zñ ]/.test(texto)) {
            Swal.fire({
                icon: 'error',
                title: '¡ALERTA!',
                text: 'Escribe solo letras minusculas y sin acento',
                background: 'rgb(165, 30, 55)',
                confirmButtonColor: '#FF00FF',
                color: '#f2f2f2',
                iconColor: '#f2f2f2',
              });
              
        } else {
            sinMensaje.style.display= "none";
            salidaDetexto.style.display= "flex";
            contenedorBotonesDerecho.style.display= "flex";
            let cifradoText = texto.replace(/e/gm, "enter");
            cifradoText = cifradoText.replace(/i/gm, "imes");
            cifradoText = cifradoText.replace(/a/gm, "ai");
            cifradoText = cifradoText.replace(/o/gm, "ober");
            cifradoText = cifradoText.replace(/u/gm, "ufat");
            document.getElementById("textAreaDer").innerHTML = cifradoText;
        }
    } else {
        campoVacio();
    }
}

function desencriptar() {
    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    let texto = document.getElementById("textAreaDer").value;

    if (texto.length!=0) {
        sinMensaje.style.display= "none";
        salidaDetexto.style.display= "flex";
        contenedorBotonesDerecho.style.display= "flex";
        let cifradoText = texto.replace(/enter/gm, "e");
        cifradoText = cifradoText.replace(/imes/gm, "i");
        cifradoText = cifradoText.replace(/ai/gm, "a");
        cifradoText = cifradoText.replace(/ober/gm, "o");
        cifradoText = cifradoText.replace(/ufat/gm, "u");
        document.getElementById("textAreaIzq").value = cifradoText;
    } else {
        campoVacio();
    }
}


var audio = document.getElementById("my-audio");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
