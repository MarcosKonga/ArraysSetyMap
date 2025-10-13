console.log("Diagonal con N=20");

for(let i=0;i<20;i++) {
    let linea = '';
    for(let j=20;j>i;j--) {
        linea+= ' ';
    }
    linea+=' *';
    console.log(linea);
}