

let tablero = Array.from(document.getElementsByClassName("cellDesign"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

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
    // switch (true) {
    //     case (miTablero[0, 1, 2] === ["X", "X", "X"]):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[3, 4, 5] === "X"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[6, 7, 8] === "X"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[0, 3, 6] === "X"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[1, 4, 7] === "X"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[2, 5, 8] === "X"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[0, 4, 8] === "X"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[2, 4, 6] === "X"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[0, 1, 2] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[3, 4, 5] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[6, 7, 8] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[0, 3, 6] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[1, 4, 7] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[2, 5, 8] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[0, 4, 8] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     case (miTablero[2, 4, 6] === "O"):
    //         console.log("Has ganado!")
    //         break;

    //     default:
        
    // }

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

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {

            //Ejemplo de como añadir una clase a un elemento seleccionado
            // celda.classList.add('cellDesign2');

            //Ejemplo de inyección de HTML desde JavaScript
            // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

            if (juegoTerminado) return;

            if((celda.innerHTML === "") && (fichaP1 || fichaP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";

                (turno) ? fichaP1-- : fichaP2--;

                miTablero[celda.id] = (turno) ? "X" : "O";

                fichaBorrada = false

                comprueboGanador();

                //Cambiamos de turno
                turno = !turno;
            } else if ((celda.innerHTML !=="") && (fichaP1 || fichaP2 === 0)){
                if (celda.innerHTML === "X" && turno == true){
                    celda.innerHTML = "";
                    fichaBorrada = true;
                    fichaP1++;
                        // if (celda.innerHTML === ""){
                        //     celda.innerHTML = "X";
                        // };
                } else if (celda.innerHTML === "O" && turno == false){
                    celda.innerHTML = "";
                    fichaBorrada = true;
                    fichaP2++;
                    }

                miTablero[celda.id] = "";

                // if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                //     celda.innerHTML = (turno) ? "X" : "O";
            }
        })
    }
)