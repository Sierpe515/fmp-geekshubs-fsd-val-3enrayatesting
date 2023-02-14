

let tablero = Array.from(document.getElementsByClassName("cellDesign"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let contadorTurnosP1 = 0;

let fichaBorrada = false;

let miTablero = ["","","","","","","","",""];

let juegoTerminado = false;

let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const comprueboGanador = () => {
    console.log(miTablero);

    if (miTablero[0] === miTablero[1] && miTablero [0] === miTablero [2] && miTablero[0] !== ""){
        console.log("Has ganado!");
        juegoTerminado = true;
    } else if (miTablero[3] === miTablero[4] && miTablero [3] === miTablero [5] && miTablero[3]){
        console.log("Has ganado!");
        juegoTerminado = true;
    } else if (miTablero[6] === miTablero[7] && miTablero [6] === miTablero [8] && miTablero[6]){
        console.log("Has ganado!");
        juegoTerminado = true;
    } else if (miTablero[0] === miTablero[3] && miTablero [0] === miTablero [6] && miTablero[0]){
        console.log("Has ganado!");
        juegoTerminado = true;
    } else if (miTablero[1] === miTablero[4] && miTablero [1] === miTablero [7] && miTablero[1]){
        console.log("Has ganado!");
        juegoTerminado = true;
    } else if (miTablero[2] === miTablero[5] && miTablero [2] === miTablero [8] && miTablero[2]){
        console.log("Has ganado!");
        juegoTerminado = true;
    } else if (miTablero[0] === miTablero[4] && miTablero [0] === miTablero [8] && miTablero[0]){
        console.log("Has ganado!");
        juegoTerminado = true;
    } else if (miTablero[2] === miTablero[4] && miTablero [2] === miTablero [6] && miTablero[2]){
        console.log("Has ganado!");
        juegoTerminado = true;
    };

}

// const reprodAudio = () => {
//     let audio = document.createElement("audio");
//     audio.src = "../audio/RISA DIABOLICA DE CHUCKY (152kbit_AAC).m4a";
//     auto.play;
// }

const evitarGanador = () => {
    console.log("Voy a evitar que ganes")
    combinacionGanadora.map(EvitarCombinacion => {
        let [pos1, pos2, pos3] = EvitarCombinacion;
        
        if (miTablero[pos1] === miTablero[pos2] && miTablero[pos3] === "" && miTablero[pos1]){
            console.log("Aquí me puedes ganar");
            // console.log([pos3])
            // reprodAudio ();
            tablero[pos3].innerHTML = "O"
            miTablero[pos3] = "O"
        } else if (miTablero[pos1] === miTablero[pos3] && miTablero[pos2] === "" && miTablero[pos1]){
            console.log("Aquí me puedes ganar", miTablero[pos2]);
            tablero[pos2].innerHTML = "O"
            miTablero[pos2] = "O"
        } else if (miTablero[pos2] === miTablero[pos3] && miTablero[pos1] === "" && miTablero[pos2]){
            console.log("Aquí me puedes ganar", miTablero[pos1]);
            tablero[pos1].innerHTML = "O"
            miTablero[pos1] = "O"
        } else {
            console.log("Por aquí no pasa nada");
        }
    })
}

const jugadaCpu = () => {
    
    let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
    console.log (aleatorio)
    while (aleatorio.innerHTML !== ""){
        aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
    }
    
    aleatorio.innerHTML = "O";
    miTablero[aleatorio.id] = "O";

}

const robarCpu = () => {
    if (contadorTurnosP1 > 2){
        console.log ("Debería de quitar una ficha")
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        while (aleatorio.innerHTML !== "O"){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        console.log("Voy a robar esta ficha");
        aleatorio.innerHTML = "";
        miTablero[aleatorio.id] = "";
        console.log(fichaBorrada)
    }
}

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {

            if (juegoTerminado) return;

            if((celda.innerHTML === "") && (fichaP1 > 0)){
                
                celda.innerHTML = "X";
                
                fichaP1-- ;

                miTablero[celda.id] = "X";

                robarCpu();

                // If (evitarGanador = true) else (jugadaCpu)?
                
                evitarGanador ();
                
                jugadaCpu();


                fichaBorrada = false

                contadorTurnosP1++
                console.log(contadorTurnosP1)

                comprueboGanador();

                // turno = !turno;
            } else if ((celda.innerHTML !=="") && (fichaP1 === 0)){
                    celda.innerHTML = "";
                    fichaBorrada = true;
                    fichaP1++;

                miTablero[celda.id] = "";
                // miTablero[celda.id] = null;
                // marca como null en el console log, pero no inhabilita casilla
                

            }
        })
    }
)