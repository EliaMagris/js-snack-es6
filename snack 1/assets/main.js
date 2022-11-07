// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const foreachNewArray =[]
let nMin = 2;
let nMax = 5;

// PRIMO METODO CON FOREACH

myArray.forEach((element, index) => {
  if (index >= nMin && index <= nMax) {
    foreachNewArray.push(element)
    return true;
  }
});

console.log(foreachNewArray)

// SECODNO METODO CON FILTER

let newArray = myArray.filter((element, index) => {
  if (index >= nMin && index <= nMax) {
    return true;
  }
});


console.log(newArray);
