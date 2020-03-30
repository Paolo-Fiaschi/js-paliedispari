// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.


// faccio scegliere all'utente pari o dispari
var scelta = prompt("scegli pari o dispari");

// centralizzo una funzione per avere 2 numeri random da 1 a 5
function numRandom(min, max){
  var num = Math.floor(Math.random() * (max - min +1) + min);
  return num;
}
// controllo che i 2 numeri ottenuti dalla funzione
var numGenerato1 = numRandom(1, 5);
console.log("utente 1 " + numGenerato1);
var numGenerato2 = numRandom(1, 5);
console.log("utente 2 " + numGenerato2);

// centralizzo una funzione per vedere se dati due numeri, questi sono pari o dispari
function pariDispari(num1, num2){
  var risultato;
  var somma = num1 + num2;
  if (somma % 2 === 0) {
    risultato = "pari";
  }else {
    risultato = "dispari";
  }
  console.log(risultato);
  return risultato;
}
// memorizzo in una var il contenuto della funzione per vedere se due numeri sono pari o dispari
var vincitore = pariDispari(numGenerato1, numGenerato2);

// condizioni per vedere se l'utente ha vinto o perso confrontandolo con il risultato della funzione
if (scelta == vincitore) {
  scelta = "vinto";
}else {
  scelta = "perso";
}
// verifico il risultato finale
console.log(scelta);
