//Numero aleatorio
function numRandom() {
    const info=document.getElementById('lista');
    console.log(info);
    info.innerHTML+='<li>Numero:'+Math.floor(Math.random() * 100)+'</li>';
}

function saludar(nombre) {
    alert('Hola '+nombre);
}
const radios = document.getElementsByTagName('option');
for(let i=0;i<radios.length;i++) {
    radios[i].addEventListener('onchange', function() {
        saludar(this.value);
    })
}