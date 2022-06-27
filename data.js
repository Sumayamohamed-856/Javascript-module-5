// Guide to Compound Assignment Operators in JavaScript

var name = 'sumaya';
undefined
var sum = 0;
undefined
var gradeOne = 100;
undefined
var gradeTwo = 80;
undefined
sum += gradeOne;
100
sum += gradeTwo;
180
sum *= gradeTwo;
14400

// Order of Operations in JavaScript

/* order of opeartions
 pemdas = pedmas
 please Excuse My Dear Aunt Sally
  Paranthesis
  Exponents
  Multiplication 5 / 5 * 4
  Division
  Addition
  Subtraction
*/
var num = 5 + (5 * 10) / 6 ** 2 - 1;
console.log(num);

// How to Get the Average from an Array in JavaScript

const getAverage = arr => {
    let total = 0;
    arr.forEach(element => {
        total += element
    });

    return total / arr.length
}

getAverage([1, 2, 3]);


// Basic Syntax for Using Conditionals in JavaScript

var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
}


// Guide to If/Else Conditionals in JavaScript

var age = 30;

if (age <= 10) {
  console.log('You can eat from the kid menu');
} else {
  console.log('Adult menu time for you');
}

// compound conditionals in javascript

var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}

// How to Build a Switch Statement in JavaScript to Check for Data Types

var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}

// Overview of JavaScript Ternary Operator

function ageVerification(age) {
    // if (age > 25) {
    //   console.log('can rent a car');
    // } else {
    //   console.log("can't rent a car");
    // }
  
    return age > 25 ? "can rent a car" : "can't rent a car";
  }
  
  ageVerification(30); //?
  ageVerification(10); //?
  
  function adminControls(user) {
    // if (user) {
    //   if (user.admin) {
    //     return 'showing admin controls...';
    //   } else {
    //     return 'You need to be an admin';
    //   }
    // } else {
    //   return 'You need to be logged in';
    // }
  
    return user
      ? user.admin ? "showing admin controls" : "You need to be an admin"
      : "you need to be logged in";
  }
  
  const userOne = {
    name: "Kristine",
    admin: true
  };
  
  adminControls(userOne); //?
  
  const userTwo = null;
  
  adminControls(userTwo); //?
  
  const userThree = {
    name: "Tiffany",
    admin: false
  };
  
  adminControls(userThree); //?


// Section Introduction: Introduction to JavaScript Functions