// Task 1

var sameWords = "captain";
var slice = sameWords.slice(1, 3);
console.log("Task 1: " + slice);

// Task 2

var day = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
var month = day.length;
console.log(month);

// Task 3

var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg);

// Task 4

var gadget = "massager";
var lengthOfGadget = gadget.length;
console.log("Total length of variable gadget is " + lengthOfGadget);

// Task 5

var word = "single";
var newWord = word.length;
var slice = word.slice(0, 1) + word.slice(3);
console.log(newWord);
console.log(slice);

// Task 6

// Answer is 3
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);

// Task 7

// Answer is 16
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);

// Task 8

var text = "Let's go for a walk, then go for lunch and later go shopping.";
var index = text.lastIndexOf("go");
console.log(index);

// Method 1
var type;
if (index === -1) {
  type = -1;
} else {
  type = index;
}
console.log(type);

// Method 2
let ok = index === -1 ? -1 : index;
console.log(ok);

// Task 9

var myString = ["represented","by","indexNum","exists","in","a","string"];
console.log(myString);
var mysearchString = "exists";
if (mysearchString) {
  let foundAt = myString.indexOf(mysearchString);
  if (foundAt > -1) {
    console.log(`${mysearchString} is at position ${foundAt}`);
  } else {
    console.log(`${mysearchString} does not exist`);
  }
}

// Task 10

var english = "abcde";
console.log(english.charAt(2));

// Task 11

var text = "Hello World!";
var cha = text.charAt(9);
console.log(`${text} 10th character is ${cha}`);

// Task 12

var str = "violin";
var x = str.charAt(str.length - 1);
console.log(`The last letter of the word '${str}' is ${x}`);

// Task 13

var input = "something";
var cha = input.charAt(4);
console.log(`${input} character at 5th point is ${cha}`);

// Task 14

var word = "Ya!";
if (word.charAt(2) === "!") {
  console.log("Found ! Exclamation mark")
}
else{
  console.log("Not Found '!' mark");
}

// Task 15

var variable = "no,allTheCharacters"
var arrayZ = []
for(var i = 0; i <= variable.length; i++){
  arrayZ.push(variable.charAt(i));
}
console.log(arrayZ);

var variableNo = variable.indexOf("no");
var newVariable = (variableNo !== -1) ? variable.substring(0, variableNo) + "yes" + variable.substring(variableNo+2): "not found";
console.log(newVariable)
console.log(`'no' starts from index: ${variableNo}`);

// Task 16

var str = "234123422112";
var index = str.indexOf("1");
console.log(index)
var newStr = str.substring(0, index) + "one" + str.substring(index + 1);
console.log(newStr);
console.log(`New string after replacing starting one with: ${newStr}`);

// Task 17

// Answer is //g
var x = "A new word is a new a word is a new."
var y = x.replace("a", "z");
console.log(y);

var z = x.replace(/a/g, "z");
console.log(z);




