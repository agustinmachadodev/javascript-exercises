const convertToCelsius = function(num) {
  let conversion = (num - 32) / 1.8
  return parseFloat(conversion.toFixed(1))
};


const convertToFahrenheit = function(num){
  let conversion = (num * 1.8) + 32
  return parseFloat(conversion.toFixed(1))
} 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
