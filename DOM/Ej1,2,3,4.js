/**Ejercicio 1 */
alert("Bienvenido");

/**Ejercicio 2 */
var nombre = prompt("Escribe tu nombre:")
alert("Bienvenido, " + nombre);

/**Ejercicio 3 */
var x = prompt("Escribe un número: ", "0");
var y = prompt("Escribe otro número: ", "0");
var num1 = parseInt(x);
var num2 = parseInt(y);
/**Pedimos los números al usuario y los pasamos a enteros con parseInt() */
alert("Resultado de la suma: " + (num1+num2));

/**Ejercicio 4 */
var x = prompt("¿Cuantos años tienes?", "0");
var edad = parseInt(x);
/**Pedimos la edad al usuario y la pasamos a entero con parseInt() */
if(edad<18) {
    alert("Eres menor de edad");
}else {
    alert("Eres mayor de edad");
};
/**Comprobamos su edad con un if y ponemos un alert para cada caso */
