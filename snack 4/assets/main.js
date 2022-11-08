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

array.forEach((element) => {
  let randomPoint = Math.floor(Math.random(0) * 100);

  let randomFall = Math.floor(Math.random(0) * 50);

  element.puntiFatti = randomPoint;
  element.falliSubiti = randomFall
});

console.log(array);

let newArray = array.map (({nome, falliSubiti}) => {
    return {nome, falliSubiti}
})

console.log(newArray)


