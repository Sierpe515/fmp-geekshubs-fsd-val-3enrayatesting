const tablero = ["1", "2", "3", "4", "5", "6"];
const aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
console.log("El arreglo es: ");
console.log(tablero);
console.log("Y un aleatorio es: ");
console.log(aleatorio);

let result = aleatorio.replace(aleatorio, "7")
console.log (result)