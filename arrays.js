var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return (element, ...array)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  return (...array, element)
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArrayn (array, index) {
  return array[index]
}

function destructivelyRemoveElementfromBeginningOfArray (array){
  array.shift(element)
  return array
}

function removeElementfromBeginngingOfArray (array) {
  return array.slice(1)
}


