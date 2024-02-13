var rl = require('readline-sync');

var firstNumber = rl.question("Give me a number: ")
var secondNumber = rl.question("Give me another number: ")

console.log(Number(firstNumber) + Number(secondNumber))