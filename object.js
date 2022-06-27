// How to Check if Two Objects Have Equal Values

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
  
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      } 
      
      
      
    }
  
    return true;
  };
  
  const obj1 = {
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  const obj2 = {
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  obj1 == obj2;
  isEqual(obj1, obj2);


// Object Oriented Programming in JavaScript Section Introduction

class Instructor {
    constructor({ name }) {
      this.name = name;
    }
  }
  
  const jon = new Instructor({ name: 'Jon Snow' });
  console.log(jon.name);

//   What we have here is our name which is what's to be passed into when we ever 
//   we create a new instructor and we want to actually do something with this name. 
//   And so the way that we can do it is we can add this in so it is a part of the class. 
//   It's a part of the class whenever a new one gets created.
//   The way we can do it is, by saying this name and set it equal to that


// Guide to JavaScript OOP Instance Methods

class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  
    renderDetails() {
      console.log(`${this.name}: ${this.role}`);
    }
  }
  
  const jonn = new Instructor({name: 'Jon Snow'});
  const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
  jonn.renderDetails();
  brayden.renderDetails();


// Guide to OOP Static Methods in JavaScript


class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
      console.log('Hi there');
    }
  
    // Static method
    static canTeach(instructor) {
      return (instructor.role === 'classroom');
    }
  }
  
  let juniorInstructor = new Instructor({ 'name' : 'Brian' });
  let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  
  juniorInstructor.renderDetails(); // "Brian - assistant"
  seniorInstructor.renderDetails(); // "Alice - classroom"
  
  Instructor.helloWorld(); // "Hi there"
  
  // "Brian can teach: false"
  console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
  );
  
  // "Alice can teach: true"
  console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
  );


// object function

function rules() {
  if (players.teamA == 'wrong') {
    console.log('penality')
  } else if (players.teamB == 'wrong') {
    console.log('penality')
  } else {
    console.log('continue')
  }
}


players = {
   teamA: 'wrong',
   teamB: 'bulecolor'
}

rules(players.teamA)

// adding arguments to the static method

// class Instructor {
//   constructor({ name, role = "assistant" }) {
//     this.role = role;
//     this.name = name;
//   }

//   // Instance method
//   renderDetails() {
//     console.log(`${this.name} - ${this.role}`);
//   }

//   // Base case static method
//   static helloWorld() {
//     console.log('Hi there');
//   }

//   // Static method
//   static canTeach(instructor) {
//     if (instructor.role === 'classroom') {
//       console.log('pass')
//     } else {
//       console.log('fail')
//     }
//   }
// }

// let juniorInstructor = new Instructor({ 'name' : 'Brian', 'role': 'classTA' });
// let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

// juniorInstructor.renderDetails(); // "Brian - assistant"
// seniorInstructor.renderDetails(); // "Alice - classroom"

// // Instructor.helloWorld(); // "Hi there"

// // "Brian can teach: false"
// console.log(
//   `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
// );

// // "Alice can teach: true"
// console.log(
//   `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
// );