// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let array = [
  { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Juve', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
];

function randomNumber(min, max){
  return Math.floor(Math.random(min) * max)
}

array.forEach((element) => {
   element.puntiFatti = randomNumber(0, 100);

   element.falliSubiti = randomNumber(0, 50);
});

console.log(array);

let newArray = array.map(({ nome, falliSubiti }) => {
  return { nome, falliSubiti };
});

console.log(newArray);
