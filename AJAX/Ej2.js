const lista=document.getElementById('lista');
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        if(response.ok) {
            return response.json();
        }else {
            throw new Error('Error al cargar datos');
        }
    })
    .then((data)=>{
        data.forEach(element => {
            lista.innerHTML+='<li>'+element['name']+' / '+element['email']+'</li>'
        });
    })
    .catch((error)=>{
        console.error('Error en la peticion:', error);
    })