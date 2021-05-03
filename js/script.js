// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Esercizio 1 - Palindroma

var parola = prompt("Inserisci una parola");
console.log(parola);

var lettereSingole = parola.split("");
console.log(lettereSingole);

var lettereSingole = lettereSingole.reverse();
console.log(lettereSingole);

var parolaInvertita = lettereSingole.join("");
console.log(parolaInvertita);

if (parola == parolaInvertita){
    document.getElementById("esito").innerHTML = "La parola " + parola + " è palindroma";
} else{
    document.getElementById("esito").innerHTML = "La parola " + parola + " non è palindroma";
}