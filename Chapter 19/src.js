// Task 1

userInput = "HELLO WORLD"
var allLower = userInput.toLowerCase();
console.log("All lower case: "  + allLower);

// Task 2

var x = "HELLO"
x = x.toLowerCase();
console.log("All lower case: "  + x);

// Task 3

var y = "Hello World";
y = y.toUpperCase();
console.log("All upper case: "  + y);

// Task 4

var noCase = "LoREm iPsUm DOLOR"
var lowerCase = noCase.toLowerCase();
console.log(lowerCase);

// Task 5

var instrument = ["sTRINg","gUITAR","VIOLIN"]
var newArray = instrument[1].toLowerCase();
console.log(newArray);
var newArray = instrument[2].toLowerCase();
console.log(newArray);

// Task 6

alert(noCase.toUpperCase());

// Task 7

// Method 1
var cityName = "kaRacHi";
var upperCase = cityName.slice(0,1).toUpperCase();
console.log(upperCase);
var lowerCase = cityName.slice(1).toLowerCase();
console.log(lowerCase);
var capitalCityName = upperCase + lowerCase;
console.log(capitalCityName);

// Method 2
var overAllCityName = cityName.slice(0,1).toUpperCase() +  cityName.slice(1).toLowerCase();
console.log(overAllCityName);