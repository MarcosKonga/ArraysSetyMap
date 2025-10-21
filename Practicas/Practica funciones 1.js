//Practica 1
var palabra=prompt("Escribe una palabra: ");
const palabras=new Array();
do {
    palabras.push(palabra);
    var palabra = prompt("Escribe una palabra: ");
}while(palabra!=null);

console.log(palabras);
for(i=0;i<palabras.length;i++) {
    console.log(palabras.indexOf(palabras[i]))
    console.log(palabras.lastIndexOf(palabras[i]))
    if(palabras.indexOf(palabras[i])!==palabras.lastIndexOf(palabras[i])) {
        delete(palabras[palabras.lastIndexOf(palabras[i])])
    }
}

palabras.sort(function(a, b){
    if(a < b) { return 1; }
    if(a > b) { return -1; }
})

palabras.forEach(function(p) {
    const info=document.getElementById('info');
    console.log(info);
    info.innerHTML+=p+'</br>';
});
