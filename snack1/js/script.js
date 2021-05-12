// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const myArray = [{
    nome: "gisella",
    peso: 30
  }, 
  {
    nome: "lucia",
    peso: 35
  }, 
  {
    nome: "wilma",
    peso: 22
  }, 
  {
    nome: "teresa",
    peso: 17
  },
  {
    nome: "giusy",
    peso: 24
  }
],

biciLeggera = myArray[0];

for (var i = 1; i < myArray.length; i++) {
    var biciCorrente = myArray[i];

    if (biciCorrente.peso < biciLeggera.peso) {
        biciLeggera = biciCorrente;
    }
}

console.log(biciLeggera);
document.getElementById("nome").innerHTML = biciLeggera.nome;
document.getElementById("peso").innerHTML = biciLeggera.peso;