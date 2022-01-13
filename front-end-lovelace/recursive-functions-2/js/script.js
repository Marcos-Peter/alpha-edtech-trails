const array = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

alert("Press 'F12' or 'Ctrl+Shift+I' to see the console.");

console.log("Hello World");
console.log("\n\n");
console.log("Now we'll print the array using recursive functions.");
console.log("\n");
console.log("To call te function just type 'printArray(array,0,0);'");

function printArray(_array, _x, _y) {
	const length = _array.length;
	if(_x < length) {
  	if(_y < length) {
    	console.log(array[_x][_y]);
      printArray(_array, _x, _y + 1);
    } else {
    	printArray(_array, _x + 1, _y - length);
    }
  }
};

console.log("If you want to see the function itself, just type 'printArray.toString();'");
