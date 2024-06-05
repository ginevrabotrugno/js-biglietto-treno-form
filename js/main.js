// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere

// selezione input
const inputKm = document.getElementById("km");

// e l’età del passeggero.
const inputAge = document.getElementById("eta");

// selezione bottone
const calcola = document.querySelector(".button")
console.log(calcola);


// dichiarazione variabili
let chilometriViaggio;
let etaPasseggero;

// gestione dell'interazione dell'utente
calcola.addEventListener("click",

    function () {

        chilometriViaggio = parseInt(inputKm.value);
        console.log("chilometri: ", chilometriViaggio);

        etaPasseggero = parseInt(inputAge.value);
        console.log("età: ", etaPasseggero);

        // Sulla base di queste informazioni, il bottone dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

        // il prezzo del biglietto è definito in base ai km (0.21 € al km)

        let prezzoBiglietto = chilometriViaggio * 0.21;

        console.log("prezzo biglietto: €", prezzoBiglietto);

        document.getElementById("prezzo_intero").innerHTML = prezzoBiglietto.toFixed(2);

        let sconto = 0;

        if (etaPasseggero < 18) { // va applicato uno sconto del 20% per gli under 18

            sconto = (prezzoBiglietto * 0.2);

            // document.getElementById("sconto").innerHTML = sconto.toFixed(2);

        } else if ( etaPasseggero > 65) { //  va applicato uno sconto del 40% per gli over 65

            sconto = (prezzoBiglietto * 0.4);
             
            // document.getElementById("sconto").innerHTML = sconto.toFixed(2);
        
        }

        console.log("sconto: -€", sconto);

        document.getElementById("sconto").innerHTML = sconto.toFixed(2);

        let prezzoFinale = prezzoBiglietto - sconto;

        document.getElementById("finale").innerHTML = prezzoFinale.toFixed(2);

    }

)