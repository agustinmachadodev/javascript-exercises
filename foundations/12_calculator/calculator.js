const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
    let total = 0;
    for(let num of arr) {
      total += num
    }

    return total;
};

const multiply = function(arr) {
    let total = 1;

    for(let i = 0; i < arr.length; i++) {
        total *= arr[i];
    }

    return total;
};

const power = function(a, b) {
    return a ** b;
};

const factorial = function(a) {
    let fact = 1;

    for(let i = a; i > 1 ; i-- ) {
      fact *= i;
    }

    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
