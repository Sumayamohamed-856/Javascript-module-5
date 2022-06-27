const main = {
    hotdog: 14,
    hamburger: 8,
    taco: 12
 };

 const side = {
    beans : 3,
    chili : 1,
    soda : 1
  };

const rendorMenu = () => {
  let menuString = ''
  for (key in main) {
    menuString = menuString + ' ' + key +  ' => '  + main[key]
  }
  
  return menuString
  
}

const rendorSide = () => {
  let sideString = ''
  for (key in side) {
    sideString = sideString +  key  +  ' => '  +  side[key]
  }
  
  return sideString;
}

// rendorMenu()
// rendorSide()



function chooseMenu() {
  let printMenu = prompt(rendorMenu())  
  console.log(printMenu)


  let customerMenu = prompt(`Great choice! Your price is $${main[printMenu]} Do you want move forward with it?`); 
  let printSide = prompt(rendorSide())
  let customerSide = prompt(`Great choice! Your price is $${side[printSide]}  Do you want move forward with it?`);
  let printSideOne = prompt(rendorSide())
  let customerSideOne = prompt(`Great choice! Your price is $${side[printSide]}  Do you want move forward with it?`);
  let totalPriceSide = prompt(`Total price: $${side[printSide] + side[printSideOne] + main[printMenu]}:  Leave a feedback and see you next time!`)
  
}

chooseMenu();