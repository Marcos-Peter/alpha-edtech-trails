const numbers = [1, 2, 3, 10];
const letters = ['a', 'b', 'c', 'd'];

function multiplyNumbers(_a,_b,_c,_d) {
  return (_a * _b * _c * _d);
};

console.log(multiplyNumbers(...numbers));


function concatArrays(_arr, _arr2) {
  return [..._arr, ..._arr2];
};

console.log(concatArrays(numbers, letters));

function sortAndMax() {
  const array = [];
  for(let i = 0;i < 10;i++){
    array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
  };
  console.log(array);
  return Math.max(...array);
};

console.log(sortAndMax());
console.log(sortAndMax());