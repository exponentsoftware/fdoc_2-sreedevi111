//Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const createArrayofArrays = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push([
      array[i].toLowerCase(),
      array[i].slice(0, 3),
      array[i].length,
    ]);
  }
  return newArray;
};
console.log(createArrayofArrays(countries));
