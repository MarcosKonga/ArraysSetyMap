const productos = [ { nombre: "Camiseta", precio: 20 }, { nombre:
"Pantalón", precio: 30 }, { nombre: "Zapatos", precio: 50 } ];

productos.forEach(function (p) {
    p.precio=p.precio-(p.precio*0.1);
});

console.log(productos);

