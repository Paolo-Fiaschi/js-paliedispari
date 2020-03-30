// // Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.


var parola = document.getElementById('parola');
var parolaInserita = prompt("inserire una parola");


// funzione per analizza le parola al contrario
function reverseString(str) {  //parto dall'ultima lettere della parola inserita e con il ciclo scansiono tutte le lettere che la compongono
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var reverse = reverseString(parolaInserita);// memorizzo in una var il contenuto della funzione per la parola reverse
console.log(reverse); // Controllo che si ottenga il reverse della parolaInserita


//  funzione per vedere se due parole sono o meno palindrome
function palindroma(par1, par1Rev){
  var risultato;
  if (par1 === par1Rev) {
    risultato = "Parola palindroma"
  }else {
    risultato = "Parola NON palindroma"
  }
  return risultato;
}

var palindroma = palindroma(parolaInserita, reverse); // memorizzo in una var il contenuto della funzione per vedere se due parole sono o meno palindrome

// verifico il risultato finale
console.log(palindroma);
parola.innerHtml = "la parola inserita è una " + palindroma;

// document.getElementById('parola').innerHtml = "la parola inserita è una " + palindroma;
