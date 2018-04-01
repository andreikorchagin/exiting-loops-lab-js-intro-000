function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] != stopValue) {
      array[i] = changeValue;
    } else {
      break;
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] -= skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
}

function findBy(array, findFn) {

}
