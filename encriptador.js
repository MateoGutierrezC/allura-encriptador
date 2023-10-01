
//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

const encriptador = document.querySelector(".encriptador")
const desencriptador = document.querySelector(".mensaje")
/* const copiar = document.querySelector(".copiar") */



/* encriptar */

function btnEncriptar() {
    const textoEncriptado = encriptar(encriptador.value)
    desencriptador.value = textoEncriptado;
    encriptador.value= ""
}

function encriptar(stringEncriptado) {

    let rules = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptado=stringEncriptado.toLowerCase();

    for(let i= 0; i < rules.length ; i++){
        if (stringEncriptado.includes(rules[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(rules[i][0],rules[i][1]);
        }
    }
    return stringEncriptado;
}





/* desencriptar */

function btnDesencriptar(){
    const textoEncriptado = desencriptar(encriptador.value)
    desencriptador.value = textoEncriptado;
    encriptador.value= ""
}

 function desencriptar(stringDesencriptado) {
    
    let rules = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptado=stringDesencriptado.toLowerCase();

    for(let i= 0; i < rules.length ; i++){
        if (stringDesencriptado.includes(rules[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(rules[i][1],rules[i][0]);
        }
    }
    return stringDesencriptado;
}


/* copiar */


function copiar() {
    desencriptador.select();
    document.execCommand("copy");
    desencriptador.value = "";
    alert("Texto Copiado") 
}