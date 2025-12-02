const input=document.getElementById('input');
const productId=document.getElementById('id');
const productName=document.getElementById('name');
const productPrice=document.getElementById('price');
const productError=document.getElementById('error');
const productPost=document.getElementById('post');
const searchStatus=document.getElementById('status');

function buscarId() {
    var id=input.value;
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
        productError.innerHTML='';
        productStatus(200);
    })
    .catch((error)=>{
        productId.innerHTML='';
        productName.innerHTML='';
        productPrice.innerHTML='';
        productError.innerHTML=error;
        productStatus(404);
        console.error(error);
    })
};

function productStatus(status) {
    searchStatus.innerHTML=status;
};

fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 26,
        title: 'Un producto generico',
        price: 6.50
    })
})
    .then((response)=>{
        if(response.ok) {
            return response.json();
        }
    })
    .then((data)=>{
        console.log(data['id']);
        productPost.innerHTML=data['title'];
    })