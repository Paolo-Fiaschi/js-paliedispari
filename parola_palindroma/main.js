// // Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.


var parola = document.getElementById('parola');
send.addEventListener("click",
  function(){
    var parolaInseritaU = parolaInserita.value;
    // funzione per analizza le parola al contrario
    function reverseString(str) {  //parto dall'ultima lettere della parola inserita e con il ciclo scansiono tutte le lettere che la compongono
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    var reverse = reverseString(parolaInseritaU);// memorizzo in una var il contenuto della funzione per la parola reverse
    console.log(reverse); // Controllo che si ottenga il reverse della parolaInserita


    //  funzione per vedere se due parole sono o meno palindrome
    function palindroma(par1, par1Rev){
      var risultato;
      if (par1 === par1Rev) {
        risultato = " è palindroma"

      }else {
        risultato = " non è palindroma"
      }
      return risultato;
    }

    var palindroma = palindroma(parolaInseritaU, reverse); // memorizzo in una var il contenuto della funzione per vedere se due parole sono o meno palindrome

    // verifico il risultato finale
    console.log(palindroma);
    parola.innerHTML = "La parola " + parolaInseritaU +  palindroma;

  }
)
reset.addEventListener("click",
  function(){
    parolaInserita.value = "";
    parola.innerHTML = "";

  }
)
