//Practica 1
let combi=0;
do{
    const loteria=new Array();
    for(i=0;i<=4;i++) {
        loteria.unshift(Math.floor(Math.random() * 49) + 1);
        if(i==0) {

        }else if(i>0) {
            do{
                loteria.pop();
                loteria.unshift(Math.floor(Math.random() * 49) + 1);
            }while(loteria[i]==loteria[i-1])
        }
    }
    console.log(loteria);
    combi++;
}while(combi<50);

//Practica 2
let veces=0;
let vez1=0;
let vez2=0;
let vez3=0;
let vez4=0;
let vez5=0;
let vez6=0;
let vez7=0;
let vez8=0;
let vez9=0;
let vez10=0;
const numeros=new Map();
for(i=1;i<=10;i++) {
    numeros.set(i, 0);
};
do{
    let random=0;
    random=Math.floor(Math.random() * 10) + 1;
    switch(random) {
        case 1:
            numeros.set(1, vez1+=1);
            break;
        case 2:
            numeros.set(2, vez2+=1);
            break;
        case 3:
            numeros.set(3, vez3+=1);
            break;
        case 4:
            numeros.set(4, vez4+=1);
            break;
        case 5:
            numeros.set(5, vez5+=1);
            break;
        case 6:
            numeros.set(6, vez6+=1);
            break;
        case 7:
            numeros.set(7, vez7+=1);
            break;
        case 8:
            numeros.set(8, vez8+=1);
            break;
        case 9:
            numeros.set(9, vez9+=1);
            break;
        case 10:
            numeros.set(10, vez10+=1);
            break;
        default:
            break;
    }
    veces++;
}while(veces<10000);
console.log('Frecuencias');
for(i=1;i<=10;i++) {
    console.log('Numero '+i+': '+numeros.get(i));
};