//El primer ejercicio es sobre tipos de dato y variables, estuvimos utilizando la consola del navegador para depurar el codigo, pero si gustas puedes utilizer cualquier otra terminal
/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 * 
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 * 
 * Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */


//1
var num1 = 5;
let num2 = 6;
const num3 = 7;
var conca = "3"+3

var f = false;
let fa = false;
const t = true;

var h = "Hola";
let m = "Mundo";
const saludo = "Bienvenido";

console.log(num1, num2, num3, conca, f, fa, t, h, m, saludo);

//2
var X = 15, Y=30;

var suma = X+Y;
var resta = X-Y;
var multiplicacion = X*Y;
var division = X/Y;

console.log(suma, resta, multiplicacion, division);

//3
var h = "Hola";
var nombre = "Soy Albar";
var mun = "Mundo";
var gusta = "Me Gusta Programar";
var js = "En JS";

var frace1 = h+" "+mun;
var frace2 = h+" "+nombre;
var frace3 = nombre+" "+gusta;
var frace4 = gusta+" "+js;
var frace5 = h+" "+mun+" "+js;

console.log(frace1, frace2, frace3, frace4, frace5);

//4
var numToText = 15;
var numToText = numToText+"";
var textToNum = "16";
let number = Number(textToNum);
let F = Boolean(0);
let T = Boolean(1);

console.log(numToText, number, F, T);



