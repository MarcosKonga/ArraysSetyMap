const numeros = [1,2,3,4,5,6];
const mayorTres=[ ];
console.log(numeros.filter(function(num) {
    if(num>3) {
        return num;
    }
}));