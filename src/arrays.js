const getNthElement = (index, array) => {
  const arrayLength = array.length;
  const indexPosition = index % arrayLength;
  return array[indexPosition];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return undefined;
};

const addToArray2 = (element, array) => {
  let arr2 = array.concat(element);
  return arr2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(str => str.toUpperCase());
};

const reverseWordsInArray = strings => {
  let str = strings.toString();
  let reverse_arr = str.split(/([\s,.])/).map((item) => {
      return item.split``.reverse().join``;}).map(String);
  let newarr = reverse_arr.filter(a => a !== ',');
  return newarr;
};

const onlyEven = numbers => {
  return numbers.filter(number => {
    return number % 2 ===0;
  });
};

const removeNthElement2 = (index, array) => {
  const i = index;
  const newArr = array.slice(0, i).concat(array.slice(i + 1, array.length));
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  let rex = /^[aeiou]/i;
  let results = strings.filter(str => rex.test(str));
  return results;
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  let sumoOfNum = numbers.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  return sumoOfNum;
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
