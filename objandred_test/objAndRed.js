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

function productOfArrayUsingReduce(inputArr) {
  return inputArr.reduce((acc, cur) => acc * cur, 1);
}

function groupByPropertyUsingReduce(inputArr, property) {
  return inputArr.reduce((acc, cur) => {
    if (!acc[cur[property]]) {
      acc[cur[property]] = [];
    }
    acc[cur[property]].push(cur);
    return acc;
  }, {});
}
function arrayToObjectUsingReduce(inputArr) {
  return inputArr.reduce((acc, cur, i) => {
    return {
      ...acc,
      [i]: cur,
    };
  }, {});
}

function convertKeysToArray(input) {
  return Object.keys(input);
}

function convertValuesToArray(input) {
  return Object.values(input);
}

function convertEntriesToArray(input) {
  return Object.entries(input);
}

function createStringArrayFromEntries(input) {
  return Object.entries(input).map(([k, v]) => `${k}: ${v}`);
}

module.exports = {
  basicReduce,
  reduceWithInitialValue,
  findMinUsingReduce,
  flattenArrayUsingReduce,
  countOccurrencesUsingReduce,
  concatenateStringsUsingReduce,
  productOfArrayUsingReduce,
  groupByPropertyUsingReduce,
  arrayToObjectUsingReduce,
  convertKeysToArray,
  convertValuesToArray,
  convertEntriesToArray,
  createStringArrayFromEntries,
  // filterEvenAndConvertToArray,
  // swapKeysAndValues,
  // mergeObjectsImmutably,
  // findKeysWithSpecificValue,
  // countProperties,
  // filterObject,
};
