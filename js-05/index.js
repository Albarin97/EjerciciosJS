// Callbacks
function calcular(x, y, op, callback) {// Callback se ejecuta como funcion en el parametro
    let result;
    switch (op) {
        case 'add':
            result = x + y;
            break;
        case 'substract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'div':
            result = x / y;
            break;
        default:
            result = 'Op no valida';
            break;
    }

    callback(result);
}

function logResult(value) {
    console.log(`Result: ${value}`)
}

calcular(100, 50, "add", logResult);
calcular(100, 50, "substract", logResult);
calcular(100, 50, "multiply", logResult);
calcular(100, 50, "div", logResult);


function getUser(user) {
    console.log(`Welcome ${user}`);
}

setTimeout(getUser.bind(null, "Albar"), 3000);

setTimeout(() => getUser('Username'), 3000);

//EJERCICIO 1
//let name = "Albar", age = 26, movies=["Cloverfield","Jhon Wick"]

//userProfile("Albar", 26, ["Cloverfield","Jhon Wick", "Up"]);

function userProfile(name, age, movies) {
    console.log(`Hola soy ${name}, tengo ${age} años y ${movies[0]} es una de mis peliculas favoritas`);
    console.log("A demas tambien me gustan: ")
    for (let index = 1; index < movies.length; index++) {
        console.log(movies[index]);
    }
}
//userProfile(name, age, movies);

//EJERCICIO 2
function higNum(array) {
    let i = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array[i]) {
            i = index;
        }
    }
    console.log(`El numero mas grande de tu arreglo es el: ${array[i]} en la posicion ${i + 1}`)
}

//[1,2,3,4,5,6,7]
//[8,7,6,5,4,3,2]
//[4,7,5,9,2,4,1]

//EJERCICIO 3
function alarma(seg) {
    setTimeout(() => {
        console.log("Pi!!!!!");
        console.log("Pi!!!!!");
        console.log("Pi!!!!!");
        console.log("DESPIERTA!!!!!");
    }, seg * 1000);
}

//EJERCICIO 4
//USAR PALIDROME! Ejem: palindrome('2an5ita6 -lav.a 8la ,t$ina');
function palindrome(palabra) {
    const palindro = invertirYEliminarNoLetras(palabra).toLowerCase();
    console.log("Pal: "+palindro)
    palabra = palabra.replace(/[^a-zA-Z]/g, '').toLowerCase();
    console.log("Palabra: "+palabra)

    if (palindro == palabra) {
        console.log("Es Palindromo");
    } else {
        console.log("NO Es Palindromo");
    }
}

function invertirYEliminarNoLetras(str) {
    const soloLetras = str.replace(/[^a-zA-Z]/g, '');
    const textoInvertido = invertirString(soloLetras);
    return textoInvertido;
}

function invertirString(str) {
    return str.split('').reverse().join('');
}


//EJERCICIO 5
/**
 * Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/
function factorial(n){
    if(n==1){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

//EJERCICIO 6
/**
 * 
 * Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
 * 
 */
function flatArray(arr){
    console.log(flattenArray(arr));
}

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
  }
  
  // flatArray([1, 2, [3, 4, [5, 6]], 7, [8]]);
  
  


