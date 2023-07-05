function basicReduce(inputArr) {
  return inputArr.reduce((acc, cur) => (acc += cur), 0);
}

function reduceWithInitialValue(inputArr, initVal) {
  return inputArr.reduce((acc, cur) => (acc += cur), initVal);
}

function findMinUsingReduce(inputArr) {
  return inputArr.reduce((a, b) => Math.min(a, b));
}

function flattenArrayUsingReduce(inputArr) {
  return inputArr.reduce((acc, cur) => acc.concat(cur), []);
}

function countOccurrencesUsingReduce(inputArr) {
  return inputArr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function concatenateStringsUsingReduce(inputArr) {
  return inputArr.reduce((acc, cur) => acc + cur, "");
}

module.exports = {
  basicReduce,
  reduceWithInitialValue,
  findMinUsingReduce,
  flattenArrayUsingReduce,
  countOccurrencesUsingReduce,
  concatenateStringsUsingReduce,
  // productOfArrayUsingReduce,
  // groupByPropertyUsingReduce,
  // arrayToObjectUsingReduce,
  // convertKeysToArray,
  // convertValuesToArray,
  // convertEntriesToArray,
  // createStringArrayFromEntries,
  // filterEvenAndConvertToArray,
  // swapKeysAndValues,
  // mergeObjectsImmutably,
  // findKeysWithSpecificValue,
  // countProperties,
  // filterObject,
};
