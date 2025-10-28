//Numero aleatorio
function numRandom() {
    const info=document.getElementById('numAleatorio');
    info.innerHTML+='Número: '+Math.floor(Math.random() * 100)+'<br>';
}

let opcSaludo = document.getElementById('saludo');
let opcCaja = document.getElementById('caja');
let opcNumero = document.getElementById('numero');

opcSaludo.addEventListener('click', function() {
    const info=document.getElementById('mensajeSaludo');
    info.innerHTML+='Bienvenido a la pagina web<br>';
});
opcCaja.addEventListener('click', function() {
    const info=document.getElementById('nuevaCaja');
    info.innerHTML+='<div style="background-color: red; position: relative; padding-top: 5%; width: 5%; text-align: center" height:0 >Nueva Caja</div><br>';
})
opcNumero.addEventListener('click', numRandom);