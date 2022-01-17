const rand = Math.floor(Math.random() * (100 - 1) +1);

// alert("Press 'F12' or 'ctrl + shift' to open the console.");

// console.log("Hello World!");
// console.log("\n\n");
// console.log("We have some functions here.")
// console.log("Call the recursive function 'factorial' with any number to print the result of the factorial.");
// console.log("\n\n");
// console.log("If you simply want to teste the recursive function, just call 'testFactorial(rand)'");

function factorial (_num) {
  if(_num < 0) {
    return "Enable to calculate factorial of negative numbers.";
  } else if(_num === 0) {
    return 1;
  } else {
    return _num * factorial(_num - 1);
  }
};

function testFactorial(_rand) {
  for(let i = 0; i < rand;i++) {
    console.log(`${i}! = ${factorial(i)}`);
  }
}

factorial(6);

// testFactorial(rand);