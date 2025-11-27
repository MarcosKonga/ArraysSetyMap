const imageUser = document.getElementById('image');
const nameUser = document.getElementById('name');
const emailUser = document.getElementById('email');
const adressUser = document.getElementById('adress');

fetch('https://randomuser.me/api/')
    .then((response)=>{
        if(response.ok) {
            return response.json();
        }
    })
    .then((data)=>{
        const datos=data['results']['0'];
        imageUser.innerHTML='<img src="'+datos['picture']['large']+'">'
        nameUser.innerHTML=datos['name']['title']+' '+datos['name']['first']+' '+datos['name']['last'];
        emailUser.innerHTML='Email: '+datos['email']
        adressUser.innerHTML=datos['location']['street']['number']+' '+
            datos['location']['street']['name']+'<br>'+datos['location']['city']+' ('+
            datos['location']['country']+')'
    })