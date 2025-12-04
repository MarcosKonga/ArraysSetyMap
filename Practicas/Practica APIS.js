const count=document.getElementById('countdown');

var time=setInterval(function() {
  var sec=count.textContent;
  sec--;
  count.innerHTML=sec;
  if(count.textContent<=0) {
      clearInterval(time);
      nuevoVideo();
  }
}, 1000);

function nuevoVideo() {
    Notification.requestPermission().then((resp) => {
    if(resp == 'granted') {
        new Notification('Se ha subido un nuevo video!').addEventListener('click', function() {
          window.location.replace('Practica APIS 2.html');
        })
    }else {
        console.log('Permiso denegado');
    }
    });
}