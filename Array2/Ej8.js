let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", telephone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];
/**Ejercicio A */
data.push (
{name: "Pedro", telephone: "611944444", age: 25},
{name: "Julia", telephone: "633232323", age: 37}
);
/**Ejercicio B */
console.log (data);
/**Ejercicio C */
data.sort(function (a, b) {
    return a.edad - b.edad;
});
console.log(data);
/**Ejercicio D */
data.sort(function (a,b) {
    return a.nombre.localeCompare(b.nombre);
});
/**Ejercicio E */
let menores =CSSNestedDeclarations.filter(function(persona) {
    return persona.edad>=30;
});
console.log(menores);