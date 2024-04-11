// Task 1

var num = 54.8789879;
var newNum = num.toFixed(4).toString();
console.log(newNum)
console.log(typeof(newNum));

// Task 2

var digit = num.toFixed(2);
console.log(digit);
digit = digit.toString();
console.log(typeof(digit));
digit = Number(digit);
console.log(typeof(digit));

// Task 3

if(num.toFixed(2).toString().length > 4){
    console.log("Done");
}
else{console.log("Not Done")}

// Task 4

var value = 56.7892872188912;
alert(value.toFixed(2).toString());