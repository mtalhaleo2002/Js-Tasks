// Task 1

var value = 0;
for(i = 0; i <= 9;i++){
 console.log(++value);
}

// Task 2

// for(i = 0; i <= 11; i++){

// Task 3

// (;;){
for(var i = 0; i <= 4; i++){
}

// Task 4

var digit = 0;
for(j = 0; j < 100; j++){
    console.log(++digit);
}

// Task 5

var number = 0;
for(i = 3; i > 0 ; i--){
    console.log(++number);
}

// Task 6

var array = [1, 2, 3, 4, 5];
console.log(array);
var numberOfElements = array.length;
console.log(numberOfElements);

// Task 7

var flag = true;
console.log(flag);

// Task 8

var pets = ["dog", "cat", "ox"];
console.log(pets);
for(i = 0; i < pets.length;i++){
    alert("Hurray !")
}

// Task 9

for(i = 0; i <= 9; i++){
    if(i === 1){
        alert([i]);
        break;
    }
}

// Task  10

var userNames = ["hamza","danish","rehman","waleed","rahim","suleman"];
var firstName = prompt("Enter Your First Name");
for(i = 0; i < userNames.length ;i++){
    if (firstName === userNames[i]) {
            console.log("User name found at index " + i);
            alert("Enter");
            break;
    }else if(i === userNames.length - 1) {
        alert("Please write correct user name.");
            break;
        }
    
}

// Task 11

var dairyProducts = ["egg","bread","slice","rusk"];
var matchFound = false;
console.log(matchFound);
var userInput = prompt("Enter your Dairy product in lower-case one word")
for (var i = 0; i < dairyProducts.length; i++) {
 if (userInput === dairyProducts[i]) {
 alert("Match found");
 matchFound = true;
 console.log(matchFound);
 break;
 }
};

// Task 12

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for(var i = 0; i< firstArr.length; i++){
    for(var j = 0; j< secondArr.length; j++){
        var result = firstArr[i] + "" + secondArr[j];
        console.log(result);
    }

}
