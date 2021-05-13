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
  let biciCorrente = myArray[i];

  if (biciCorrente.peso < biciLeggera.peso) {
      biciLeggera = biciCorrente;
  }
}

const container = document.getElementById("container");
const { nome, peso } = biciLeggera;

console.log(nome);
console.log(peso);

container.innerHTML = 
  "<h1>La bici più leggera </h1> <ul><li>Nome: <strong>${nome}</strong></li><li>Nome: <strong>${peso}</strong></li></ul>";

