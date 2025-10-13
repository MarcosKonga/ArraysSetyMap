const palabras = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"];

for(let palabra of palabras) {
    let esPalindromo = true;
    for(let i in palabra) {
        if(palabra[i] !== palabra[palabra.length-1-i]) {
            esPalindromo=false;
            break;
        }
    }

    if(esPalindromo) {
        
    }
}


for (i=0;i<palabras.length;i++) {

}