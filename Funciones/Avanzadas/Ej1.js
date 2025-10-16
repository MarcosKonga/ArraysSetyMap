const numeros = [1, 2, 3, 4, 5, 6];
let sumaTotal=0;
for(let i=0;i<=5;i++) {
    sumaTotal+=numeros[i];
};
console.log (sumaTotal);

function sumaArrayR(numeros) {
    if(numeros.length===0) {
        return 0;
    }
    return numeros[0] + sumaArrayR(numeros.slice(1));
}
console.log (sumaArrayR(numeros));

