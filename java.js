// How to Work with Variables in JavaScript

var hello_world = "hi there";
alert(hello_world);

var hello_world = "hi there";
console.log(hello_world);

var age = 21;
let name = 'sumaya';
console.log(age);
console.log(name);

var age, mustafa, city;
mustafa = 'sumaya';
age = 21;
city = 'shakopee';
console.log(age);
console.log(mustafa);
console.log(city);


// Understanding the Key Difference Between Var and Let Variables Types

// var is flexible and you can redefined varibles 
// let can't be redefined varibles


// Guide to JavaScript Hoisting

// define your console.log after you define your varibles


// Syntax for JavaScript Comments

// You can put anything you want here

console.log('Hi there'); // Here is another comment

/*
Anything
you want
here
*/


// Comprehensive List of JavaScript Data Types

// Boolean
var truthy = true;
var notTruthy = false;

// Null
var nully = null;

// Undefined
var notDefined;

// Number
var age = 12;

// String
var nameOne = "Kristine";
var nameTwo = 'Jordan';

// Symbol
var mySym = Symbol('foo');

console.log(mySym);


// Guide to JavaScript Objects

var user = { name: 'sumaya' }
user.name = 'mustafa'
console.log(user.name);

var user = { 
    name: 'sumaya',
    age: 12,
    city: 'shakopee',
    grades: {
      math: 90,
      science: 80,
      English: 99
    }
  }
user.grades.coding = 15;
console.log(user.grades);


// How to Check for Data Types in JavaScript

typeof 12;
// "number"

typeof 'Astros';
// "string"

typeof true;
// "boolean"

typeof { name: "Kristine" };
// "object"

var age;
// undefined

typeof age;
// "undefined"

age = null;
// null

typeof age;
// "object"


// How to Perform Type Casting in JavaScript

"100" + 42; // "10042"
42 + "100"; // "42100"
"100" - 42; // 58
100 + null; // 100

var ageOne = 12;
String(ageOne); // '12'
ageOne.toString(); // '12'

var ageTwo = '33';
Number(ageTwo); // 33
parseInt(ageTwo); // 33
parseFloat(ageTwo); // 33
+ ageTwo; // 33
var age = + ageTwo // 33
parseInt('5555555555 is my phone number'); // 5555555555
parseInt('foo 5555555555 is my phone number'); // NaN
Number("100") + 42; // 142

Number(true); // 1
Number(false); // 0

// Working with String Functions - Part 1

var str = 'The quick brown fox jumped over the lazy dog';

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44

str.charAt(2); // "e"

str.charAt(200); // ""

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

str; // "The quick brown fox jumped over the lazy dog"

str.includes('quick'); // true

str.endsWith('dog'); // true

str.startsWith('Foo'); // false


// Working with String Functions - Part 2

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54


// Working with String Functions - Part 3

str
'The quick brown fox jumped over the lazy dog'
str.slice(10);
'brown fox jumped over the lazy dog'
str.charAt(10)
'b'
str.slice(-8);
'lazy dog'
str.slice(4, 20);
'quick brown fox '
var messeyString = '     foo     ';
undefined
messeyString;
'     foo     '
messeyString.trim();
'foo'
str.slice(4, 10).trim();
'quick'
str.toUpperCase();
'THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG'
str.toLowerCase();
'the quick brown fox jumped over the lazy dog'


// JavaScript Arithmetic Operators

2 + 2
4
(2 + 2)
4
2 - 3
-1
10 / 5
2
2 * 10
20
2 ** 10
1024
5 % 2
1
10 % 2
0
22222 % 2
0
6 % 2
0
var num = 2;
undefined
num++;
2
num;
3
++num;
4
num--;
4
num;
3
--num;
2
var someNum = 10;
undefined
var someOtherNum = -someNum;
undefined
someOtherNum;
-10
var strNum = '100';
undefined
var convertedStrg = + strNum;
undefined
convertedStrg;
100
+ strNum;
100