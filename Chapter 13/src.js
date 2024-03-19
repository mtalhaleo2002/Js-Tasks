// Task 1

var a = 3;
var b = 3;
var c = 3;
if(a == b && b == c){
    console.log(true)
}
else{
    console.log(false)
}

// Task 2

a = 6;
b = 5;
c = 9;
d = 89;
if(a == b || c !== d){
  console.log(true)
}
else{
    console.log(false);
}

// Task 3

var noun = "Hamza";
var age = 59;
if((noun == "Hamza" || noun == "Arsalan") && age < 60){
    console.log("Ok Wala Scene hai");
}else{
    console.log("Program tou warr gya")
}

// Task 4

var unit1 = 56;
var unit2 = 78;
if(unit1 < unit2 || unit1 > unit2){
    alert("Ok ki Report hai")
}

// Task 5

var first = "Mohammad";
var last = "Talha";
var checkFirst = prompt("Enter your First Name");
var checkLast = prompt("Enter your Last Name");
if(checkFirst == first && checkLast == last){
    alert("You Got it Man");
}else{
    alert("You don,t get it Man");
}