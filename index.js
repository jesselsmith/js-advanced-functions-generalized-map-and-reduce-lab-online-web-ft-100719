// Add your functions here
function map(sourceArray, callbackFunction) {
  const newArray = []
  sourceArray.forEach(element => newArray.push(callbackFunction(element)))
  return newArray
}

function reduce(sourceArray, callbackFunction, startingPoint) {
  let memo = startingPoint
  let workingArray = []
  if (memo === undefined) {
    memo = sourceArray[0]
    workingArray = sourceArray.slice(1)
  } else {
    workingArray = sourceArray
  }
  workingArray.forEach(element => memo = callbackFunction(memo, element))
  return memo
}