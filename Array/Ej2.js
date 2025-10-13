const paises=["España","Francia","Alemania","Italia"];
for (i=0;i<paises.length;i++) {
    console.log(paises[i]);
}
delete paises[0];
for (i=0;i<paises.length;i++) {
    console.log(paises[i]);
}