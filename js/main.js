// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
let chilometriViaggio = parseInt(prompt ("Inserisci il numero di chilometri da percorrere"));

console.log("numero chilometri: ", chilometriViaggio);

document.getElementById("chilometri").innerHTML = chilometriViaggio;

// e l’età del passeggero.
let etaPasseggero = parseInt(prompt ("Inserisci la tua età"));

console.log("età passeggero: ", etaPasseggero);

document.getElementById("eta").innerHTML = etaPasseggero;


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let prezzoBiglietto = chilometriViaggio * 0.21;

console.log("prezzo biglietto: €", prezzoBiglietto.toFixed(2));

document.getElementById("prezzo_intero").innerHTML = prezzoBiglietto;


if (etaPasseggero < 18) { // va applicato uno sconto del 20% per gli under 18

    let sconto = (prezzoBiglietto * 0.2);

    console.log("sconto: -€", sconto.toFixed(2));

    document.getElementById("sconto").innerHTML = sconto.toFixed(2);


    let prezzoFinale = prezzoBiglietto - sconto.toFixed(2);

    console.log("prezzo intero: €", prezzoFinale.toFixed(2));

    document.getElementById("finale").innerHTML = prezzoFinale.toFixed(2);


} else if ( etaPasseggero > 65) { // va applicato uno sconto del 40% per gli over 65

    let sconto = (prezzoBiglietto * 0.4);

    console.log("sconto: -€", sconto.toFixed(2));

    document.getElementById("sconto").innerHTML = sconto.toFixed(2);

    let prezzoFinale = prezzoBiglietto - sconto;

    // L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
    console.log("prezzo finale: €", prezzoFinale.toFixed(2));

    document.getElementById("finale").innerHTML = prezzoFinale.toFixed(2);

} else {
    let sconto = 0;

    console.log("sconto: -€", sconto);

    document.getElementById("sconto").innerHTML = sconto.toFixed(2);

    let prezzoFinale = prezzoBiglietto - sconto;

    console.log("prezzo finale: €", prezzoFinale.toFixed(2));

    document.getElementById("finale").innerHTML = prezzoFinale.toFixed(2);
}




