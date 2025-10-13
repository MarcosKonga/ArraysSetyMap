const numeros = [4, 21, 33, 12, 9, 54];
const pares = new Array();
for (i=0;i<numeros.length;i++) {
    if(numeros[i]%2==0) {
        pares.push (numeros[i]);
    }
}
console.log(pares);
