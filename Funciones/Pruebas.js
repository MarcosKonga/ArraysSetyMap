//Ejercicio 1
function cuadrado(num) {
    return num*num;
}
console.log(cuadrado(5));
//Ejercicio 2
(function () {
    let contador=0;
    contador++;
    console.log(contador);
})();
//Ejercicio 3
(function (texto, num) {
    console.log(texto.concat(num));
})('Laura', 5);
//Ejercicio 4
let parImpar=(x)=>{if(x%2==0){
    return true;
}else {
    return false;
}};
console.log(parImpar(2));
console.log(parImpar(9));