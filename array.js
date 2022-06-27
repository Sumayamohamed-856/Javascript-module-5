// Remove the First and Last Element from a JavaScript Array

const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
      return arr.slice(1, -1);
    } else {
      throw "You need at least three elements in the array";
    }
  };
  
  removeFirstAndLast([1, 2, 3, 4]); //?
  removeFirstAndLast(["<h1>", "Some content", "</h1>"]); //?
  removeFirstAndLast(["Some content", "</h1>"]); 


//   How to Create Arrays in JavaScript

var generatedArray = new Array(3);
var generatedArray = new Array('Altuve', 'Correa', 'Spring');

var literalArray = [1, 2, 3];

literalArray; // (3) [1, 2, 3]

var literalArray = ['Altuve', 'Correa', 'Spring'];

literalArray;  // (3) ['Altuve', 'Correa', 'Spring']

var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there');}]

literalArray[0]; // "Altuve"

var playerName = literalArray[1];

playerName; // "Correa"

mixedArray[2][2]; // "c"

mixedArray[3]; // Object {name: "Kristine"}

mixedArray[3].name; // "Kristine"

mixedArray[4]; // function greeting( ) { console.log('hey there');}

mixedArray[4](); // hey there


// Guide to Adding and Removing Array Elements in JavaScript

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']


// How to Use the Splice Function in JavaScript to Remove Specific Array Elements

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]