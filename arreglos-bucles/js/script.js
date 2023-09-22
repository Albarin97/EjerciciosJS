let numeros = [1, 2, 3, 4, 5];

let textos = ["A", "B", "C", "D"];

let binario = [true, false, true, true];

let nulo = [null, null, null, null];

let muse = [
    {
        nombre: "Showbitz",
        año: 1999,
    },
    {
        nombre: "Origin Symmetry",
        año: 2001,
    },
    {
        nombre: "Absolutiopn",
        año: 2003,
    },
];

let arregloDeArreglos = [
    ["A", "B"],
    [1, 2],
    [true, false],

]

console.log(textos[textos.length - 1]);

console.log(binario.indexOf(false));
console.log(textos.indexOf("C"));


/**
 * METODDOS PARA TRABAJAR CON UN ARRAY
 * 
 * indexOf(); Nos indica cual es el indice del elemento buscado
 * 
 * Metodos de agregacin
 * unshift(); Agrega un elemento al principio dentro del arreglo
 * push(); Agrega un elemento al final del arreglo
 * 
 */

console.log("Agregamos elemento al principio" + numeros.unshift(0));
console.log("Agregamos elemento al final" + numeros.push(6));
console.log(numeros);

/**
 * METODOS PARA ELIMINAR ELEMENTOS
 * 
 * shift(); Eliminar el 1er elemento
 * pop(); Elimina el ultimo elemento
 */

console.log("Elimina elemento al principio" + numeros.shift(0));
console.log("Elimina elemento al final" + numeros.pop(6));
console.log(numeros);

/**
 * splice(posicion, elementos); Modifica elementos estableciendo un rango
 * 
 */

let palabra = ["h", "o", "l", "a"];
//let metodoSplice = palabra.splice(1,3);
let metodoJoin = palabra.join("");
let metodoForEach = palabra.forEach((elemento) => console.log(elemento));


let boletos = 1;
for (boletos; boletos <= 10; boletos++) {
    console.log(boletos);
}

let cuentaRegresiva = 10;
for (cuentaRegresiva; cuentaRegresiva >= 0; cuentaRegresiva--) {
    console.log(cuentaRegresiva);
}

for (let cont = 0; cont < textos.length; cont++) {
    console.log(textos[cont]);
}

/**
 * Variaciones del ciclo for
 * 
 * for...of Nos permite recorrer el array por cada uno de los elementos nos devuelve el valor
 * 
 * for...in nos permite recorrer un array, pero nos devuelve su posicion
 */

for (let letra of textos) {
    console.log("Letra: " + letra)
}

for (let letra in textos) {
    console.log("Letra: " + letra)
}

for (let cuenta = 1; cuenta <= 20; cuenta++) {
    if (cuenta % 2 == 0) {
        console.log('Los numeros pares son: ' + cuenta);
    }
}

//imprimir tabla de multiplicar del 8

const multiplicando = 8;
for (let i = 1; i <= 10; i++) {
    let resultado = multiplicando * i;
    console.log(`${multiplicando} x ${i} = ${resultado}`);
}

function tablaMultiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
}

const tablaFlecha = (num) => {
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
}


let productos = 10;
while (productos > 0) {
    console.log("Productos Vendidos" + productos)
    productos--;
}

let ropero = ["Chamarra", "Camisa", "Playera", "Vestido"];
let ropa = 0;

while(ropa < ropero.length){
    console.log(ropero[ropa]);
    ropa++;
}


function decrementar (num){
    console.log("Mi numero es: "+num)
    return num=num-1;
}
let num = 10;
while(num>=0){
    num = decrementar(num);
}

let asterisco = "";
let cont = 0;

while(cont<5){
    asterisco=asterisco+"*";
    console.log(asterisco);
    cont++;
}


/*------ Do-While -------- 
En el ciclo Do-While la condición se evalúa después de ejecutar la sentencia, es decir, la sentencia especifica se ejecuta al menos una vez.
Con Do-While lo primero que hacemos es ejecutar las acciones y después preguntar si podemos continuar ejecutando dichas acciones.

Sintaxis
do {
    code block
} while (condition);

*/

let numIni = 1;
do {
    console.log("Utilizando D-While: "+numIni);
    numIni++;
} while(numIni<=6);


/**
 * Control de Cliclos
 * break; Es unasentencia que permite al programa salir. Debe encontrasrse anidado dentro de un bucle.
 * continue; No termina el bucle, sino, que salta a la siguiente iteracion
 */

//El cliente #5 gan nu premio

for(let cliente = 0; cliente<=50; cliente++){
    if(cliente===5){
    console.log("Eres el cliente #5! Ganaste");
    continue;
    }
    console.log(`Cliente #${cliente}`);  
}