// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere

// selezione input
const inputKm = document.getElementById("km");

// e l’età del passeggero.
const inputAge = document.getElementById("eta");

// selezione bottone
const calcola = document.querySelector(".button")

console.log(calcola);



// gestione dell'interazione dell'utente

calcola.addEventListener("click",

    function () {

        let chilometriViaggio = parseInt(inputKm.value);

        console.log("chilometri: ", chilometriViaggio);

        let etaPasseggero = parseInt(inputAge.value);

        console.log("età: ", etaPasseggero);

    }

)









// // Sulla base di queste informazioni, il bottone dovrà calcolare il prezzo totale del viaggio, secondo queste regole:


// // il prezzo del biglietto è definito in base ai km (0.21 € al km)

// let prezzoBiglietto = chilometriViaggio * 0.21;

// console.log("prezzo biglietto: €", prezzoBiglietto.toFixed(2));

// document.getElementById("prezzo_intero").innerHTML = prezzoBiglietto;


// if (etaPasseggero < 18) { // va applicato uno sconto del 20% per gli under 18

//     let sconto = (prezzoBiglietto * 0.2);

//     console.log("sconto: -€", sconto.toFixed(2));

//     document.getElementById("sconto").innerHTML = sconto.toFixed(2);


//     let prezzoFinale = prezzoBiglietto - sconto.toFixed(2);

//     console.log("prezzo intero: €", prezzoFinale.toFixed(2));

//     document.getElementById("finale").innerHTML = prezzoFinale.toFixed(2);


// } else if ( etaPasseggero > 65) { // va applicato uno sconto del 40% per gli over 65

//     let sconto = (prezzoBiglietto * 0.4);

//     console.log("sconto: -€", sconto.toFixed(2));

//     document.getElementById("sconto").innerHTML = sconto.toFixed(2);

//     let prezzoFinale = prezzoBiglietto - sconto;

//     // L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
//     console.log("prezzo finale: €", prezzoFinale.toFixed(2));

//     document.getElementById("finale").innerHTML = prezzoFinale.toFixed(2);

// } else {
//     let sconto = 0;

//     console.log("sconto: -€", sconto);

//     document.getElementById("sconto").innerHTML = sconto.toFixed(2);

//     let prezzoFinale = prezzoBiglietto - sconto;

//     console.log("prezzo finale: €", prezzoFinale.toFixed(2));

//     document.getElementById("finale").innerHTML = prezzoFinale.toFixed(2);
// }




// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 







// realizziamo le specifiche scritte sopra. 

// La risposta finale (o output) sarà anch’essa da scrivere in console.