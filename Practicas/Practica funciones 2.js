//Practica 2
var palabra=prompt("Escribe una palabra: ");
const palabras=new Array();
do {
    palabras.push(palabra);
    var palabra = prompt("Escribe una palabra: ");
}while(palabra!=null);

const palabrasMap=new Map();
for(i=0;i<palabras.length;i++) {
    let veces=0;
    for(j=0;j<palabras.length;j++) {
        if(palabras[j]==palabras[i]) {
            veces++;
        }
    }
    palabrasMap.set(palabras[i], veces);
}
console.log(palabrasMap);

palabrasMap.forEach(function(veces, valor) {
    const info=document.getElementById('info');
    console.log(info);
    info.innerHTML+='Palabra: '+valor+' Veces que aparece: '+veces+'</br>';
});