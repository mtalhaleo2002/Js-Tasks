// Task 1

// parseInt

// Task 2

var string;

function  getString(string) {
    var convert  = parseInt(string);
    console.log(convert)
    console.log(typeof(convert))
}
getString("56.99");
getString("780989");

// Task 3

var getString = "16.99"
var convertedString = parseFloat(getString);
console.log(convertedString);

// Task 4

var str = "123";
var newStr = parseInt(str);
console.log(typeof(newStr));

var decimal = "123.9988";
var newDecimal = parseFloat(decimal);
console.log(typeof(newDecimal));

// Task 5

var digit = 678;
console.log(typeof(digit));
var newDigit = digit.toString();
console.log(typeof(newDigit));

// Task 6

var digit2 = 42;
function  getNumber() {
    var conversion  = digit2.toString();
    console.log(conversion)
    console.log(typeof(conversion))
}
getNumber();

// Task 7

var num  = "3.14";
var newNum = Number(num);
console.log(typeof(num));
console.log(typeof(newNum));