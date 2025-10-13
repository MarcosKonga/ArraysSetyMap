/**Ejercicio 5.1 */
var log = document.getElementById('log');
var precio = document.getElementsByTagName('span');
var precios = document.querySelectorAll('.precio');
console.log(precios);

log.innerHTML +=
    'Hay '+precios.length+' precios listados';

/**Ejercicio 5.2 */
var p1 = document.getElementById('p1');
log.innerHTML += 'innerHTML: ' + p1.innerHTML + '<br>';
log.innerHTML += 'innerHTML: ' + p1.innerHTML + '<br>';
log.innerHTML += 'innerHTML: ' + p1.innerHTML + '<br>';

/**Ejercicio 5.3 */
var n2 = document.getElementById('n2');
if (n2) {
    n2.textContent ='Huevos';
}

/**Ejercicio 5.4 */
var i=0;
while (i < precios.length) {
    var valor =parseFloat(precios[i].textContent);
    valor = valor + 0.1;
    precios[i].textContent = valor.toFixed(2);
    i++;
}

/**Ejercicio 5.5 */
var nuevoLi = document.createElement('li');
nuevoLi.innerHTML = 'Tila <span class="precio">2.20</span>';
lista.appendChild(nuevoLi);

/**Ejercicio 5.6 */
var primeros = lista.getElementsByTagName('li');
if (primeros.length > 0) {
    primeros[0].innerHTML = 'Producto destacado <span class= "precio">9.99</span> $';
}

/**Ejercicio 5.7 */
var n2borrar = document.getElementById('n2');
n2borrar.parentNode.removeChild(n2borrar);

/**Ejercicio 5.8 */
var x =document.getElementsByName('alumnos');
var j = 0;
while (j<x.length) {
    x[j].checked=true;
    j++;
}

/**Ejercicio 5.9 */
var totalLi = lista.getElementsByTagName('li').length;
log.innerHTML += 'Total de elementos en lista al final: '+totalLi;