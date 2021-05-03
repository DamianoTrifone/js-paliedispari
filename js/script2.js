// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Esercizio 2
var pariDispari = prompt("Pari o dispari? Inserisci la tua scelta");
console.log(pariDispari);
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente);

function pariDispariPc(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var min = 1;
var max = 5;
var numeroPC = pariDispariPc(min, max);

console.log(numeroPC);
var somma = numeroUtente + numeroPC;
console.log(somma);

function pari(somma){
    if(somma % 2 == 0){
   return true;
} else{
    return false;
}
}

if (pariDispari == pari && pari == true || paridispari == dispari && pari == false) {
    document.getElementById("esito").innerHTML = "Hai vinto!"
} else{
    document.getElementById("esito").innerHTML = "Hai perso! Ritenta, sarai più fortunato"
}