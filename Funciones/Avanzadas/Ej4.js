const numeros = [1,2,3,4,5,6];
let suma=0;
suma+=numeros.reduce(function (total, num) {
    return total+num;
}, 0);
console.log(suma);