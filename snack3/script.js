/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.
*/

var array = [10, 5, 6, 11, 20];


function raddoppio(array) {
    return array.map(element => element * 2);
}

function filtraPari(array) {
    return array.filter(value => value % 2 == 0)
}

function sublist(array, startIndex, endIndex) {
    return array.filter((element, index) => startIndex && index <= endIndex);
}


function sublistForeach(array, startIndex, endIndex) {
    const result = []

    array.forEach((element, index) => {
        if (index >= startIndex && index <= endIndex) {
        result.push(element);
        }
    })
}


var nuovoArray = sublist(array, 1, 3);
console.log(nuovoArray);

var nuovoArray2 = sublistForeach(array, 1, 3);

console.log(nuovoArray);
console.log(nuovoArray2);

console.log(raddoppio(nuovoArray));
console.log(filtraPari(nuovoArray));
