function sortAndQuantifyTransactions(transActions) {
  const result = [];

  if (!validateTransactions(transActions)) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = {};

  transActions.forEach((trans) => {
    txCount[trans] ? (txCount[trans] += 1) : (txCount[trans] = 1);
  });

  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning
  Object.keys(txCount).forEach(function (key, index) {
    result[index] = `${key} ${txCount[key]}`;
  });

  return result;
}

function sortByAmountThenName(txCount) {
  let sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
    return (
      txCount[itemTwo] - txCount[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  let sortedResults = {};
  sortedKeys.forEach((objectKey) => {
    sortedResults[objectKey] = txCount[objectKey];
  });

  return sortedResults;
}

function validateTransactions(transactions) {
  if (transactions === undefined || transactions === null) {
    return false;
  }

  return true;
}

module.exports = sortAndQuantifyTransactions;
