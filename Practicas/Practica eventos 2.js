let email = document.getElementById('email');
let passwrd = document.getElementById('passwrd');
let submit = document.getElementById('submit');

email.addEventListener('blur', function() {
    console.log(email.value);
    const emailV=email.value;
    if(emailV.includes('@')) {
        const info=document.getElementById('mensajeE');
        info.innerHTML='El email esta correcto';
    }else {
        const info=document.getElementById('mensajeE');
        info.innerHTML='El email debe contener @';
    }
});

passwrd.addEventListener('blur', function() {
    console.log(passwrd.value);
    const passwrdV=passwrd.value;
    if(passwrdV.length>=8 && passwrdV.length<=10) {
        const info=document.getElementById('mensajeC');
        info.innerHTML='La contraseña es correcta';
    }else {
        const info=document.getElementById('mensajeC');
        info.innerHTML='La contraseña debe tener de 8 a 10 carácteres';
    }
});