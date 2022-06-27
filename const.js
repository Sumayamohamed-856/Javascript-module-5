// Using the Const Variable Type in JavaScript

const city = 'shakopee'
console.log(city);


// Guide to Backtick string interpolation in Javascript

const lyrics = 'never gone give up'
console.log(`i'm ${lyrics + ' ' + lyrics}`);


// Integrating Conditionals into JavaScript Strings with Ternary Operators

const page = 'home';
console.log(`class=${page === 'home' ? 'go ahead': 'you can go ahead'}`);

// Introduction to Arrow Functions in JavaScript

// function declartion

function fullName(fName, lName) {
    console.log(`${fName} ${lName}`);
  }
  
  fullName('sumaya', 'mohamed')

// expression function

fullName = function (fName, lName) {
    console.log(`${fName} ${lName}`);
  }
  
fullName('sumaya', 'mohamed')

// arrow function

helloWorld = () => { console.log('hi there'); }
helloWorld();

firstName = fName => { console.log(fName.toUpperCase()); }
firstName('sumaya');

fullName = (fName, lName) => { 
    console.log(`${fName.toUpperCase()} ${lName.toUpperCase()}`); 
  }
  fullName('sumaya', 'mohamed');


// Build an HTML Heading Generator Function in JavaScript

const headingGenerator = (title, typeOfHeading) => {
    return `
      <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
  }
  
  headingGenerator('Greetings', 1);


// How Arrow Functions Work with ‘this’

function Invoice(subTotal) {
    this.taxRate= subTotal;
  
    this.total = setInterval(() => {
      console.log((this.taxRate * this.subTotal) + this.subTotal);
      // console.log(this);xRate = 0.06;
    this.subTotal 
    }, 2000);
  }
  
  const inv = new Invoice(200);
  inv.total();

// How to Swap Variable Values in JavaScript with Variable Deconstruction

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);


// How to Implement Array Destructuring in JavaScript

const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]
  
  const [posts, repos, profile] = apiList;
  
  console.log(posts);
  console.log(repos);
  console.log(profile);

// How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstructions

const user = {
  name: 'Kristine',
  email: 'kristine@devcamp.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);


// Guide to Adding Default Object Values to JavaScript Function Arguments

const blog = {
  title: 'My great post',
  summary: 'Summary of my post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
  `);
}

openGraphMetadata(blog);

// Guide to the JavaScript Spread Operator

// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays
const shoppingCard = [345, 375, 765, 123];
const updatedCard = [...shoppingCart];
updatedCard.push(5);
console.log(updatedCard);
console.log(shoppingCard);

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3

const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);


// Guide to JavaScript Bind Function

const userOne = {
  firstName: "Kristine",
  lastName: "Hudgens"
};

const userTwo = {
  firstName: "Tiffany",
  lastName: "Hudgens"
};

// Function expression
const fullName = function() {
  return `${this.lastName}, ${this.firstName}`;
};

// Nope!
// const fullName = () => {
//   return `${this.lastName}, ${this.firstName}`;
// };

const kristine = fullName.bind(userOne);
const tiffany = fullName.bind(userTwo);

kristine();
tiffany();