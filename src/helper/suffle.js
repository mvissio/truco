// Esta función nos permitirá barajar las cartas aleatoriamente
export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {

    // Seleccionamos un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Y lo intercambiamos con el elemento actual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
