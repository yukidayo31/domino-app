export const initialDominoes = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export const copyInitialDominoes = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export function showDoubleNum(initialDominoes) {
  let doubleNum = [];
  for (let i = 0; i < initialDominoes.length; i++) {
    if (initialDominoes[i][0] === initialDominoes[i][1]) {
      doubleNum.push(initialDominoes[i]);
    }
  }

  return doubleNum.length;
}
console.log("showDoubleNum:", showDoubleNum(initialDominoes));

export const sortAsc = (initialDominoes) => {
  let sortedFirst = initialDominoes.sort((a, b) => a[0] - b[0]);

  let sumValue = [];
  for (let i = 0; i < sortedFirst.length; i++) {
    sumValue.push({
      sum: sortedFirst[i][0] + sortedFirst[i][1],
      components: sortedFirst[i],
    });
  }

  let sortedAsc = sumValue.sort((a, b) => a.sum - b.sum);

  let result = [];
  for (let i = 0; i < sortedAsc.length; i++) {
    result.push(sortedAsc[i].components);
  }

  return result;
};
console.log("sortAsc:", sortAsc(initialDominoes));

export const sortDesc = (initialDominoes) => {
  let sortedFirst = initialDominoes.sort((a, b) => b[0] - a[0]);

  let sumValue = [];
  for (let i = 0; i < sortedFirst.length; i++) {
    sumValue.push({
      sum: sortedFirst[i][0] + sortedFirst[i][1],
      components: sortedFirst[i],
    });
  }

  let sortedDesc = sumValue.sort((a, b) => b.sum - a.sum);

  let result = [];
  for (let i = 0; i < sortedDesc.length; i++) {
    result.push(sortedDesc[i].components);
  }

  return result;
};
console.log("sortDesc:", sortDesc(initialDominoes));

export const removeDuplicate = (initialDominoes) => {
  let sumValue = [];
  for (let i = 0; i < initialDominoes.length; i++) {
    sumValue.push({
      sum: initialDominoes[i][0] + initialDominoes[i][1],
      components: initialDominoes[i],
    });
  }

  let uniqueSum = new Set();
  let uniqueComponents = [];

  for (let i = 0; i < sumValue.length; i++) {
    if (!uniqueSum.has(sumValue[i].sum)) {
      uniqueSum.add(sumValue[i].sum);
      uniqueComponents.push(sumValue[i].components);
    }
  }

  return uniqueComponents;
};
console.log("removeDuplicate:", removeDuplicate(initialDominoes));

export const flip = (copyInitialDominoes) => {
  let flipped = [];
  for (let i = 0; i < copyInitialDominoes.length; i++) {
    let temp = copyInitialDominoes[i][0];
    copyInitialDominoes[i][0] = copyInitialDominoes[i][1];
    copyInitialDominoes[i][1] = temp;

    flipped.push([copyInitialDominoes[i][0], copyInitialDominoes[i][1]]);
  }

  return flipped;
};
console.log("flip:", flip(copyInitialDominoes));

export const removeCertainTotalNum = (input) => {
  let sumValue = [];
  for (let i = 0; i < initialDominoes.length; i++) {
    sumValue.push({
      sum: initialDominoes[i][0] + initialDominoes[i][1],
      components: initialDominoes[i],
    });
  }

  let result = [];
  for (let i = 0; i < sumValue.length; i++) {
    if (sumValue[i].sum !== input) {
      result.push(sumValue[i].components);
    }
  }

  return result;
};
console.log("removeCertainTotalNum:", removeCertainTotalNum(7));

export const resetData = () => {
  return initialDominoes;
};
console.log("resetData:", resetData());
