function sortAndQuantifyTransactions(transActions) {
  const result = [];

  if (!validateTransactions(transActions)) {
    throw new Error("Undefined collection of transactions");
  }

  let transactionCount = transActions.reduce((countObject, transaction) => {
    countObject[transaction] = (countObject[transaction] || 0) + 1;
    return countObject;
  }, {});

  transactionCount = sortByAmountThenName(transactionCount);

  // Place them back in array for returning
  Object.keys(transactionCount).forEach((key, index) => {
    result[index] = `${key} ${transactionCount[key]}`;
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
