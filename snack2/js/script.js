// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const squadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

const squadreFalliSubiti = [];

for (let i = 0; i < squadre.length; i++) {
    
    const squadra = squadre[i];
    squadra.puntiFatti = getRandomNumber(40, 100);
    squadra.falliSubiti = getRandomNumber(40, 80);
}

const { nome, falliSubiti } = squadra;
console.log("nome:", nome);
console.log("falliSubiti:", falliSubiti);

squadreFalliSubiti.push({
    nome,
    falliSubiti
});

console.log(squadreFalliSubiti);

