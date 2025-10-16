const personas = [ { nombre: "Juan", edad: 17 }, { nombre: "Ana", edad: 22 },
{ nombre: "Pedro", edad: 19 }, { nombre: "Laura", edad: 16 } ];

console.log(((personas.filter(function(p) {
    if(p.edad>18) {
        return p;
    }
})).map(function (p) {
    p.edad*2;
    return p;
})));