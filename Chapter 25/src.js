// Task 1

var dObj = new Date();
console.log(dObj);

// Task 2

var object = new Date;
var change = object.toString();
console.log(change);

// Task 3

var daysOFWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var d = new Date();
var day = d.getDay();
console.log(day);
var fullNameDay = daysOFWeek[day];
console.log(fullNameDay);

// Task 4

var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var d = new Date();
var day = d.getDay();
alert(dayNames[day] + " " + day);

// Task 5

var dateObject  = new Date();
var date = dateObject.getDate();
console.log(date);
var month = dateObject.getMonth();
console.log(month);
var year = dateObject.getFullYear();
console.log(year);
var hour = dateObject.getHours();
console.log(hour);
var minute = dateObject.getMinutes();
console.log(minute);
var second = dateObject.getSeconds();
console.log(second);
var milliSecond = dateObject.getMilliseconds();
console.log(milliSecond);
var time = dateObject.getTime();
console.log(time);

// Task 6

var later = new Date(2020, 11, 31).toString();
console.log(later);

// Task 7

var secondMonth = new Date(1992, 1, 2).toString();
console.log(secondMonth);

// Task 8

alert(Date.parse('1980-01-01'));

// Task 9 

var date = new Date();
console.log(date);
date.setFullYear(2023);
console.log(date);

//  Task 10 

function changeMonthToJanuary(date){
    date.setMonth(0);
    return date;
}
var myDate = new Date();
var janDate = changeMonthToJanuary(myDate);
console.log(janDate);

// Task 11

function changeDayOfWeek(date, newDayOfWeek) {
    var currentDayOfWeek = date.getDay();
    console.log(currentDayOfWeek);
    var difference = newDayOfWeek - currentDayOfWeek;
    console.log(difference);
    date.setDate(date.getDate() + difference);
    return date;
}
var myNewDate = new Date(); 
var newDate = changeDayOfWeek(myNewDate, 18); 
console.log(newDate);

// Task 12

function changeOfMinutes(specificTime){
    var promptTime = prompt("Enter the new value for minutes (from 0 to 59):");
    specificTime.setMinutes(promptTime);
    return specificTime;
}
var userTime = new Date("October 16, 2021  17:45:00");
userTime = changeOfMinutes(userTime);
console.log(userTime.toString());

// Task 13

function addHours(currentDate,hoursTime){
    currentDate.setHours(currentDate.getHours()+hoursTime);
    return currentDate;
}

var onTime = new Date();
var changeHours = addHours(onTime, 4);
console.log(changeHours.toString());

// Task 14

function checkAge(dateOfBirth){
    var checkYear = new Date(dateOfBirth)
    var date = new Date();
    var difference = date - checkYear;
    var calculateDateOfBirth = Math.floor(difference/(1000 * 60 * 60 * 24 * 365));
    return calculateDateOfBirth;

}

var  birthday = "July 28, 2002";
var age = checkAge(birthday);
console.log("Your age is "+age +" years old.");