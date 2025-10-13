const colores = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"];
let subColores = colores.slice(1, 5);
console.log(subColores);

colores.splice(3,2, 'negro', 'blanco');
console.log(colores);