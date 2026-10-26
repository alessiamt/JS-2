//variabile globale
let totale = 0;

function aggiungi (){

    let prezzo = 0;
    prezzo=document.getElementById("inserimento").value;
    console.log(typeof(prezzo))

    if(prezzo > 0 && !isNaN(prezzo)){

        prezzo = parseFloat(prezzo);
        console.log(typeof(prezzo))

        totale = totale + prezzo;
        console.log("TOTALE SPESA: " + totale + "€");

        document.getElementById("testo").innerHTML=totale + "€";
    }
}

function reset(){

    totale = 0;
    document.getElementById("testo").innerHTML=totale + "€";

}