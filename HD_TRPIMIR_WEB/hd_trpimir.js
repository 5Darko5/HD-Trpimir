const tipkaPocetna = document.getElementById("tipka-pocetna")
const tipkaODrustvu = document.getElementById("tipka-o-društvu")
const tipkaKlape = document.getElementById("tipka-klape")
const tipkaPublikacije = document.getElementById("tipka-publikacije")
const tipkaGalerija = document.getElementById("tipka-galerija")
const tipkaStatut = document.getElementById("tipka-statut")
const tipkaClanovi = document.getElementById("tipka-clanovi")

function openLink(unesiLink){
    window.open(unesiLink, "_self")
}

tipkaPocetna.addEventListener("click", function() {openLink("1_hd_trpimir.html")});
tipkaODrustvu.addEventListener("click", function() {openLink("2_o-drustvu.html")});
tipkaKlape.addEventListener("click", function() {openLink("3_klape.html")});
tipkaPublikacije.addEventListener("click", function() {openLink("4_publikacije.html")});
tipkaGalerija.addEventListener("click", function() {openLink("5_galerija.html")});
tipkaStatut.addEventListener("click", function() {openLink("6_statut.html")});
tipkaClanovi.addEventListener("click", function() {openLink("7_clanovi.html")});
