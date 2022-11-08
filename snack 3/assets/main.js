// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso.
//  Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let array = [
  { nome: 'Orbea', peso: 7 },
  { nome: 'Bianchi', peso: 9 },
  { nome: 'Bottecchia', peso: 6 },
  { nome: 'Specialized', peso: 5 },
  { nome: 'Atala', peso: 10 },
];

//var pesoMin = Math.min(...array.map(({ nome, peso }) => peso));

var pesoMin = array.map(({ nome, peso }) => {
    return nome * Math.min(peso)
});

document.getElementById('result').innerHTML = 'il peso (kg) minimo delle biciclette è di: ' + pesoMin;

// VARIE PROVE

// let array2 = array.filter(({nome, peso}) => {
//     //console.log(peso);
//     return Math.min((peso));
// })

//  console.log(array2)
 