const productId=document.getElementById('id');
const productName=document.getElementById('name');
const productPrice=document.getElementById('price');
const productError=document.getElementById('error');

var id=prompt('Escribe el ID de un producto');

fetch(`https://dummyjson.com/products/${id}`)
    .then((response)=>{
        if(response.ok) {
            return response.json();
        }else {
            throw new Error('Status 404 Artículo no encontrado');
        }
    })
    .then((data)=>{
        productId.innerHTML='ID: '+data['id'];
        productName.innerHTML='Nombre: '+data['title'];
        productPrice.innerHTML='Precio: '+data['price'];
    })
    .catch((error)=>{
        productError.innerHTML=error;
        console.error(error);
    })

fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 69,
        title: 'Relajador muscular',
        price: 45
    })
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