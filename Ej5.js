function contarOcurrencias(p) {
    const palabras=new Map();
    p.forEach((palabra)=> {
        if(palabras.has(palabra)) {
            palabras.set(palabra, palabras.get(palabra) + 1);
        }else {
            palabras.set(palabra,1);
        }
    });
    return(palabras);
};

const palabras = ['Pito','Pito','Pito','Huevos','Huevos'];
console.log(contarOcurrencias(palabras));