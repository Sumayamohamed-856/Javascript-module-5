const getAverage = arr => {
    // sum avg
    const reducer = (total, currenValue) => total + currenValue;
    const sum = arr.reduce(reducer);
    
    // length of array
    // avg divide
    return sum / arr.length
}

getAverage([1, 2, 3])


// Basic Syntax for Building Functions in JavaScript

function hiThere () {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

storedText; // undefined

var storedTextTwo = hiThereTwo(); 
// undefined

storedTextTwo; // "Hi there again"

// How Variable Scope Works in JavaScript

var userObj = {
    email: 'sample@example.com',
    fullName: 'Kristine Hudgens'
  }
  
  function dashboardGreeting() {
    var userObj = {
      email: 'sample2@example.com',
      fullName: 'Jordan Hudgens'
    }
    console.log("Hi there, ".concat(userObj.fullName));
  }
  
  dashboardGreeting();
  console.log(userObj.fullName);


// Differences Between Function Expressions and Function Declarations

// function expression

var greeting = function () {
    return "Hi there!";
   };
   
   var age = 4;
   
   if (age <= 10) {
     var buildMenu = function () {
       return "Kids' Menu";
     };
   
     function wrongMenuBuilder () {
       return "Wrong Kids' Menu";
     }
   
     console.log(buildMenu());
     console.log(wrongMenuBuilder());
   }


// How to Work with Function Arguments in JavaScript

function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));

// Function Arguments: Reference vs Value

var someUser = {
    name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"

function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"

// Introduction to JavaScript Closures

function battingAverage () {
    var hits = 100;
    var atBats = 300;
  
    return {
      getCurrentAverage: function () {
        return (hits/atBats);
      },
      updateHitsAndAtBats: function (hit, atBat) {
        hits += hit;
        atBats += atBat;
      }
    }
  }
  
  var altuve = battingAverage();
  console.log(altuve.getCurrentAverage());
  altuve.updateHitsAndAtBats(0, 20);
  console.log(altuve.getCurrentAverage());
  

// Introduction to HTML Scripting with Built in JavaScript Functions

document.getElementsByClassName('b1')[0].innerHTML = 'Hi there';

// Introduction to the 'this' Keyword in JavaScript

//  Jquery

$('.btn-guide').click(function(event) {
    event.preventDefault();
    console.log($(this));
});

// this keyword

var guide = {
    title: 'Guide to Programming',
    content: 'Content goes here...',
    visibleToUser: function (viewingUserRole) {
      if (viewingUserRole === 'paid') {
        return true;
      } else {
        return false;
      }
    },
    renderContent: function(userRole) {
      if (this.visibleToUser(userRole)) {
        console.log(this.title + " - " + this.content);
      } else {
        this.content = '';
        console.log(this.title + " - " + this.content);
      }
    }
  }
  
  user = { role: 'paid' };
  guide.renderContent(user.role);


// Traffic light function

const trafficLight = light => {
  if (light == 'green') {
    console.log('you can drive ahead')
  } else if (light == 'yellow') {
    console.log('slow down')
  } else if (light == 'red') {
    console.log('come to full stop')
  }
}

trafficColor = {
  color: 'green'
}

trafficLight(trafficColor.color)


// fiizbuzz in javascript

function fiizBuzz (max) {
  for (var i = 1; i < max; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

}

fiizBuzz(100);