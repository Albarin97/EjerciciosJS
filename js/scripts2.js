//El Segundo ejercicio es sobre funciones, te dejo las instrucciones nuevamente aqui
/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

function perimetroCirculo(r){
    return 2*Math.PI*r
}
const perimetroCirculoF = (r) => perimetro = 2*Math.PI*r;

function areaRectangulo(B, A){
    return B*A;
}
const areaRectanguloF = (B, A) => area = B*A;

function cuadrado (x) {
    return Math.pow(x,2);
}
const cuadradoF = (x) => cuadrado = Math.pow(x,2);

function cToF (c){
    return (c*1.8)+32;
}
const cToFF = (c) => Faren = (c*1.8)+32;

function voltaje (res, cor){
    return res*cor;
}
const voltajeF = (res, cor) => voltaje = res*cor;

function volumenEsfera(r){
    return (4/3)*Math.PI*Math.pow(r,3);
}
const volumenEsferaF = (r) => volumen = (4/3)*Math.PI*Math.pow(r,3);


