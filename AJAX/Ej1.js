fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        if(response.ok) {
            return response.json();
        }else {
            throw new Error('HTTP ERROR XD:${response.status}');
        }
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(element['name']);
        });
    })
    .catch((error)=>{
        console.error('Error en la peticion:', error);
    })