/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

var squadre = [
    { nome: "squadra1", puntiFatti: 0, falli: 0 },
    { nome: "squadra2", puntiFatti: 0, falli: 0 },
    { nome: "squadra3", puntiFatti: 0, falli: 0 },
    { nome: "squadra4", puntiFatti: 0, falli: 0 },
    { nome: "squadra5", puntiFatti: 0, falli: 0 },
    { nome: "squadra6", puntiFatti: 0, falli: 0 },
    { nome: "squadra7", puntiFatti: 0, falli: 0 },
    { nome: "squadra8", puntiFatti: 0, falli: 0 },
    { nome: "squadra9", puntiFatti: 0, falli: 0 },
    { nome: "squadra10", puntiFatti: 0, falli: 0 },
]

function random() {
    return Math.floor(Math.random() * 100);
}

for (let i = 0; i < squadre.length ; i++) {
    squadre[i].puntiFatti = random (1, 50);
    squadre[i].falli = random (1, 100);
}

var squadreNomePunti = [];


for (var i = 0; i < squadre.length; i++) {

    var squadraSingola = squadre[i];

    squadraSingola.puntiFatti = random();

    squadraSingola.falli = random();

    var { nome, puntiFatti } = squadraSingola;
    squadreNomePunti.push({nome, puntiFatti});

}

console.log(squadreNomePunti);