const textarea= document.querySelector(".textarea");
const mensaje= document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar (){

    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.background = "none"
}

function encriptar (stringEncriptado){
    let convirtiendoCodigo= [["e", "enter" ], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < convirtiendoCodigo.length; i++){

         if(stringEncriptado.includes(convirtiendoCodigo[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(convirtiendoCodigo[i][0], convirtiendoCodigo[i][1])
        }
    }
       
    return stringEncriptado

}
function btnDesEncriptar (){

    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
}

function desencriptar (stringDesencriptado){
    let convirtiendoCodigo= [["e", "enter" ], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < convirtiendoCodigo.length; i++){

         if(stringDesencriptado.includes(convirtiendoCodigo[i][1])){
            stringDesencriptado= stringDesencriptado.replaceAll(convirtiendoCodigo[i][1], convirtiendoCodigo[i][0])
        }
    }
       
    return stringDesencriptado

}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

