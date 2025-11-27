const datos = {
    name: 'Marcos',
    job: 'Panadero'
};
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
})
    .then((response)=>{
        if(response.ok) {
            return response.json();
        }else {
            throw new Error('Error al cargar datos');
        }
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.error('Error en la peticion:', error);
    })