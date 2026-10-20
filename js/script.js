//variabile globale
let totale = 0;

function aggiungi (){
    let prezzo = 0;
    prezzo = prompt("Quanto costa il prdodotto?");
    console.log(typeof(prezzo))
    if(prezzo > 0 && !isNaN(prezzo)){
        prezzo = parseFloat(prezzo);
        console.log(typeof(prezzo))
        totale = totale + prezzo;
        console.log("TOTALE SPESA: " + totale + "€");
    }
}