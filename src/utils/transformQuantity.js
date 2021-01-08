const transformQuantity = (array) => {
  const tranformWithDecade = (number) => {
    if (number === 1) {
      return `${array.length - 2}-му другому`;
    }
    if (number === 2 || number === 3 || number === 4) {
      return `${array.length - 2}-м другим`;
    }
    if (number === 5 || number === 6 || number === 9 || number === 0) {
      return `${array.length - 2}-ти другим`;
    }
    if (number === 7 || number === 8) {
      return `${array.length - 2}-ми другим`;
    }
  };

  const endingWord = (array) => {
    const number = (array.length - 2) % 10;
    if (array.length - 2 < 10) {
      return tranformWithDecade(number);
    }
    if (array.length - 2 <= 20) {
      return `${array.length - 2}-ти другим`;
    }
    if (array.length - 2 < 100) {
      return tranformWithDecade(number);
    }
    if ((array.length - 2) % 100 === 0) {
      return `${array.length - 2}-та другим`;
    }
    if ((array.length - 2) % 100 !== 0) {
      return tranformWithDecade(number);
    }
  };

  const number = endingWord(array);
  if (array.length === 0) {
    return ``;
  }
  if (array.length === 1) {
    return `${array[0]}`;
  }
  if (array.length === 2) {
    return `${array[0]} и ${array[1]}`;
  }
  if (array.length >= 3) {
    return `${array[0]}, ${array[1]} и ${number}`;
  }
};

export default transformQuantity;
