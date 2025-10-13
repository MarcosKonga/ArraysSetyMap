const nombres=["Aitor","Barry","Carlos","Daniel","Eduardo"]
const edades=[20,18,14,16,19];
const mayoresDeEdad=[];
posMay=0;

for (i=0;i<edades.length;i++) {
    if(edades[i]>=18) {
        mayoresDeEdad[posMay]=nombres[i];
        mayoresDeEdad[posMay+1]=edades[i];
        posMay+=2
    }
}

for (i=0;i<mayoresDeEdad.length;i++) {
    console.log(mayoresDeEdad[i]);
}
