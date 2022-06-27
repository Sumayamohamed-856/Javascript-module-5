// build a exponent function in javascript

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return items.reduce(reducer);
  };
  
  toThePowerOf(2, 3); //?
  toThePowerOf(3, 3); //?
  toThePowerOf(4, 2); //?
  toThePowerOf(10, 10); //?
  10 ** 10; //?


// Introduction to JavaScript Promises

let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello....')
  }, 2000);

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });


// Using a fetch Promise to Communicate with APIs in JavaScript

console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise
  .then(data => data.json())
  .then(data => {
    data.posts.forEach((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });


// How to Group Promises Together with Promise.all in JavaScript

const greeting = new Promise((resolve, reject) =>{
  resolve('Hi there');
  reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
  res.forEach(activity => {
    console.log(activity);
  })
})

// Introduction to Async and Await in JavaScript

const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 2000);
  });
}

const uupdateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities() {
  const returnedLogin = await login();
  console.log(returnedLogin);

  const returnedUpdateAccount = await uupdateAccount();
  console.log(returnedUpdateAccount);
}

loginActivities();

// Combining Async / Await with Closures to Ensure All Processes Have Run

const loggin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 4000);
  });
}

const uppdateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities(login, uppdateAccount) {
  const returnedLogin = await login;
  console.log(returnedLogin);

  const returnedUppdateAccount = await uppdateAccount;
  console.log(returnedUppdateAccount);
}

loginActivities(login(), uppdateAccount());

// Using Async / Await for Communicating with Outside APIs in JavaScript

async function queryApis() {
  const postsPromise = fetch('https://api.dailysmarty.com/posts');
  const posts = await postsPromise.then(res => res.json());
  console.log(posts);

  const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
  const repos = await reposPromise.then(res => res.json());
  console.log(repos);
}

queryApis();


// Implementing Error Handling In a JavaScript Async / Await Function

async function queryApis() {
  try {
    const postsPromise = fetch('http://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);
  } catch(err) {
    console.log(err);
    console.log('There was an error with the DailySmarty API');
  }

  try {
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
  } catch(err) {
    console.log(err);
    console.log('There was an error with the GitHub API');
  }
}

queryApis();

// Build a Weighted Lottery Function in JavaScript

const weightedLottery = weights => {
  // keep track of your  weights
  // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
  let containerArray = [];

  Object.keys(weights).forEach(key =>{
      for (let i = 0; i < weights[key]; i++) {
          containerArray.push(key);
      }
  })

  return containerArray[(Math.random() * containerArray.length) | 0];
}

const weights = {
  winning: 1,
  losing: 1000
}

weightedLottery(weights)