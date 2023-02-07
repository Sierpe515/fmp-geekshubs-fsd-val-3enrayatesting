

let tablero = Array.from(document.getElementsByClassName("cellDesign"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["","","","","","","","",""];

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

}

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {

            //Ejemplo de como añadir una clase a un elemento seleccionado
            // celda.classList.add('cellDesign2');

            //Ejemplo de inyección de HTML desde JavaScript
            // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

            if((celda.innerHTML === "") && (fichaP1 || fichaP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";

                (turno) ? fichaP1-- : fichaP2--;

                miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();

                //Cambiamos de turno
                turno = !turno;
            } else if ((celda.innerHTML !=="") && (fichaP1 || fichaP2 === 0)){
                if (celda.innerHTML === "X" && turno == true){
                    celda.innerHTML = "";
                        // if (celda.innerHTML === ""){
                        //     celda.innerHTML = "X";
                        // };
                } else if (celda.innerHTML === "O" && turno == false){
                    celda.innerHTML = "";
                    }

                (turno) ? fichaP1++ : fichaP2++;

                // if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                //     celda.innerHTML = (turno) ? "X" : "O";
            }
        })
    }
)