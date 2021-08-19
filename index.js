// Your code here

// map-like
function mapToNegativize(sourceArray) {
  console.log(`sourceArray: ${sourceArray}`);
  return sourceArray.map(element => element * -1);
}

function mapToNoChange(sourceArray) {
  console.log(`sourceArray: ${sourceArray}`);
  return sourceArray.map(element => element);
}

function mapToDouble(sourceArray) {
  console.log(`sourceArray: ${sourceArray}`);
  return sourceArray.map(element => element * 2);
}

function mapToSquare(sourceArray) {
  console.log(`sourceArray: ${sourceArray}`);
  return sourceArray.map(element => element * element);
}
// reduce-like
function reduceToTotal(sourceArray, startingPoint) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (!!startingPoint ? sourceArray.reduce(reducer, startingPoint) : sourceArray.reduce(reducer))
}

function reduceToAllTrue(sourceArray) {
  let isTrue = (element) => !!element
  return sourceArray.every(isTrue);
}

function reduceToAnyTrue(sourceArray) {
  let isTrue = (element) => element == true
  return sourceArray.some(isTrue);
}