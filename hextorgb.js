

//this function receive 3 paramater which is integer.
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(color => {
	//Converts the decimal value of each color component (x) to its hexadecimal equivalent
  const hex = color.toString(16)
  //if hex only 1 character add 0 on the left side.
  return hex.length === 1 ? '0' + hex : hex
}).join('')


const hexToRgb = hex =>
	//this function check if short hand is detected #f53
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
  	//remove # using substring, split the string into 2 character, /g is used for global search.
    .substring(1).match(/.{2}/g)
    //iterates over 2 array and convert it into decimal integer, 16 is used to parsed using hexadecimal number
    .map(x => parseInt(x, 16))

console.log(rgbToHex(22,44,55))
console.log(hexToRgb('#f52'))