
// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
*/
function edad(edad) {
    if (edad >= 18) {
        console.log("Puedes Votar")
    } else {
        console.log("NO Puedes Votar")

    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
function promedio(cal1, cal2, cal3, cal4) {
    let prom = (cal1 + cal2 + cal3 + cal4) / 4
    if (prom >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");

    }
}
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    if (numero <= 3) {
        return true;
    }

    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}


function primo(num) {
    if (esPrimo(num)) {
        console.log(`${num} es un número primo.`);
    } else {
        console.log(`${num} no es un número primo.`);
    }
}




/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function divisible(num) {
    if (num == 0) {
        console.log("No se puede dividir entre 0")
    } else if (num % 7 == 0 && num % 8 == 0) {
        console.log("Tu numero es divisible entre 7 y 8")
    } else if (num % 7 == 0) {
        console.log("Tu numero es divisible solo entre 7")
    } else if (num % 8 == 0) {
        console.log("Tu numero es divisible solo entre 8")
    } else {
        console.log("Tu numero NO es divisible entre 7 y 8")
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
function divisible2(num) {
    if (num == 0) {
        console.log("No se puede dividir entre 0")
    } else if (num % 4 == 0 && num % 9 == 0) {
        console.log("Tu numero es divisible entre 4 y 9")
    } else if (num % 7 == 0) {
        console.log("Tu numero es divisible solo entre 4")
    } else if (num % 8 == 0) {
        console.log("Tu numero es divisible solo entre 9")
    } else {
        console.log("Tu numero NO es divisible entre 7 y 8")
    }
}
/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */
function calculadora(op, x, y) {
    switch (op) {
        case 1:
            console.log(x + y)
            break;
        case 2:
            console.log(x - y)
            break;
        case 3:
            console.log(x * y)
            break;
        case 4:
            console.log(x / y)
            break;
        default:
            console.log("Esa Operacion no existe")
            break;
    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
function pelicula(genero) {
    genero = genero.toLowerCase();
    switch (genero) {
        case "accion":
            console.log("Te recomiendo: La guerra del futuro");
            break;
        case "drama":
            console.log("Te recomiendo: Blade Runner 2043");
            break;
        case "comedia":
            console.log("Te recomiendo: Son como niños");
            break;
        case "romance":
            console.log("Te recomiendo: Ella");
            break;
        case "suspenso":
            console.log("Te recomiendo: La isla siniestra");
            break;
        case "terror":
            console.log("Te recomiendo: Hereditary");
            break;
        default:
            console.log("No existe o no tengo recomendacion para ese genero");
            break;
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */
function cajero(op) {
    switch (op) {
        case 1:
            console.log("Retirando Dinero....");
            break;
        case 2:
            console.log("Realizando Transferencia....");
            break;
        case 3:
            console.log("Realizando Deposito....");
            break;
        case 4:
            console.log("Pagando Servicios....");
            break;
        default:
            console.log("No existe esa opcion");
            break;
    }
}
/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */
function divisas(mxm, conversion) {
    switch (conversion) {
        case 1:
            console.log(mxm * 0.059 + " Dolares");
            break;
        case 2:
            console.log(mxm * 0.055 + " Euros");
            break;
        case 3:
            console.log(mxm * 8.66 + " Yenes");
            break;
        case 4:
            console.log(mxm * 0.047 + " Libras Esterlinas");
            break;
        case 5:
            console.log(mxm * 0.053 + " Francos");
            break;
        default:
            console.log("No existe esa opcion");
            break;
    }
}
/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function descuento(precio, des) {
    if (des == "DESCUENTO10") {
        console.log("El precio con descuento es de: " + (precio * .90));
    } else {
        console.log("Lo siento, ese codigo de descuento no es valido");
    }
}