// Task 1

var value = 67;
var another = 29;
if(value >= another){
    alert("Good hugya!")
}
else{
    alert("Bad hugya")
}

// Task 2

var a = +prompt("Math 100")
var b = +prompt("Urdu 100")
var c = +prompt("English 100")
var d = +prompt("Chemistry 75")
var e = +prompt("Physics 75")
var f = +prompt("Pak Study 50")

var total = a+b+c+d+e+f
console.log(total);

var pre = (total/500)*100

console.log(pre);

if (pre >= 80) {
    console.log("A+one");

}
else if (pre >= 70) {
    console.log("A Grade");

}
else if (pre >= 60) {
    console.log("B Grade");

}
else if (pre >= 50) {
    console.log("C Grade");

}
else {
    console.log("D Grade");
} 

// Task 3
var a = 10;
if(a===10){
    alert("a is 10")
}
else{
    alert("The correct value of a is ____");
}

//Task 4

var city = prompt("Enter Your City?")
if(city === "Karachi"){
    alert("Hurray! You Select Karachi")
}
else if(city === "Lahore"){
    alert("Small Choice Lahore ewww")
}
else{
    alert("You  Are From Another Planet")
}