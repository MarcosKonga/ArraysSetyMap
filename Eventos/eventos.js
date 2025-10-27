//Ejercicio 1
function numRandom() {
    const info=document.getElementById('lista');
    console.log(info);
    info.innerHTML+='<li>Numero:'+Math.floor(Math.random() * 100)+'</li>';
}
//Ejercicio 2
function mousemove(event) {
const info=document.getElementById('position');
console.log(info);
info.innerHTML='X: '+event.pageX+' Y: '+event.pageY;
}
window.addEventListener('mousemove', mousemove);
//Ejercicio 4
function saludar(nombre) {
    alert('Hola '+nombre);
}
const radios = document.getElementsByName('persona');
for(let i=0;i<radios.length;i++) {
    radios[i].addEventListener('change', function() {
        saludar(this.value);
    })
}
//Ejercicio 5
document.getElementById('btnContar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const longitud = texto.length;
    alert('Hay '+longitud+' caracteres');
})
//Ejercicio 6
const cuadros = document.querySelectorAll('.color');
console.log(cuadros);
cuadros.forEach((cuadro) => {
    cuadro.addEventListener('mouseover', function() {
        console.log('dentro')
        document.body.style.backgroundColor=cuadro.id;
    })
    cuadro.addEventListener('mouseout', function() {
        document.body.style.backgroundColor='white';
    })
});
//Ejercicio 7
