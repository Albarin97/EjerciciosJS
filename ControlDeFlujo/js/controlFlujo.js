//Estructura de control de flujo

/**
 * Bloques de codigo importantes dentro de programacin porq, de manera genral, mos permiten ejecutar sentencias o bloques de codigo estableciendo para ello condiciones
 * 
 * 
 */

let prueba = 5;

if (prueba === 5) {
    console.log("Se cumple");
} else {
    console.log("No se cumple");
}




if (prueba > 5 && prueba < 10) {
    console.log("sisierto")
} else {
    console.log("nosierto")
}

if (prueba > 5 || prueba < 10) {
    console.log("sisierto")
} else {
    console.log("nosierto")
}


if (prueba === 1) {
    console.log("Sentencia 1")
} else if (prueba === 2) {
    console.log("Sentencia 2")

} else if (prueba === 3) {
    console.log("Sentencia 3")

} else {
    console.log("Sentencia 4")

}


let condicion = prueba === 5 ? "Si cumple" : "No cumple";


switch (prueba) {
    case 1:
        console.log("Caso 1");
        break;
    case 2:
        console.log("Caso 2");
        break;
    case 3:
        console.log("Caso 3");
        break;
    case 4:
        console.log("Caso 4");
        break;
    case 5:
        console.log("Caso 5");
        break;
    default:
        console.log("No empata con ninguno");
        break;

}


let dia = "lunes";

function diaDinamico(dia){
    dia = dia.toLowerCase();
    switch (dia) {
        case "lunes":
            console.log("Dia 1");
            break;
        case "martes":
            console.log("Dia 2");
            break;
        case "miercoles":
            console.log("Dia 3");
            break;
        case "jueves":
            console.log("Dia 4");
            break;
        case "viernes":
            console.log("Dia 5");
            break;
        default:
            console.log("No existe dia");
            break;
    
    }
}

function comparacionDinamica(n){
    if(n>10){
        console.log("V")
    }else{
        console.log("F")
    }
}