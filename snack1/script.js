//Snack 1:
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const Bike = [
    {
        nameBike: "Bike1",
        weigth: 10
    },
    { 
        nameBike: "Bike2",
        weigth: 12
    },
    {
        nameBike: "Bike3",
        weigth: 10
    },
    { 
        nameBike: "Bike4",
        weigth: 16
    },
    {
        nameBike: "Bike5",
        weigth: 8
    },
    {
        nameBike: "Bike6",
        weigth: 13
    }
];


const findLighter = (arrayList) => {
    let lighterBike;


    for (let i = 0; i < arrayList.lenght; i++) {
        const { nameBike, weigth} = arrayList[i];
        
        if (!lighterBike || weigth < lighterBike.weigth) {
            lighterBike = {
                nameBike,
                weigth
            }
        }
    }
    return lighterBike;
}


const foundLighter = findLighter(Bike);
console.log(foundLighter);


// function findLighter(arrayList) {

//     for(let i = 0; i < arrayList.lenght; i++) {
//         const{}
//     }
// }
