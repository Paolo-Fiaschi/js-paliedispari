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
var reverse = reverseString(parolaInserita);// memorizzo in una var il contenuto della funzione
console.log(reverse); // Controllo che si ottenga il reverse della parolaInserita

// verifico se la parola è palindroma
if (parolaInserita === reverse) {
  parola.innerHtml = "la parola è palindorma";
  console.log("si");
}else {
  parola.innerHtml = "la parola NON è palindorma";
  console.log("no");
}


// console.log(reverse);
