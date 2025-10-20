//Practica 1
var palabra=prompt("Escribe una palabra: ");
const palabras=new Array();
do {
    palabras.push(palabra);
    var palabra = prompt("Escribe una palabra: ");
}while(palabra!=null);

console.log(palabras);

palabras.forEach(function(p) {
    const info=document.getElementById('info');
    console.log(info);
    info.innerHTML+=p+'</br>';
});
