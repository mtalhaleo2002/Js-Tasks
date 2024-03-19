// Task 1

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

// Task 2

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift("XXS", "XXS", "XS");
console.log(sizes);

// Task 3 

var declare = ["Element"];
console.log(declare);
declare.unshift("Second Element");
console.log(declare);
alert(declare[0]);

// Task 4

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);

// Task 5

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0,3);
console.log(regSizes);

// Task 6

var pets = ["dog", "cat", "ox", "duck", "frog"];
console.log(pets);
pets.splice(1, 0, "elephant", "ant")
console.log(pets);
pets.splice(3,3);
console.log(pets);

// Task 7

var pets = ["dog", "cat", "ox", "duck", "frog"];
console.log(pets);
pets.splice(1,2);
console.log(pets);

// Task 8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var animal = pets.slice(3,5);
console.log(animal);

