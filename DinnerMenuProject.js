const renderOutput = type => {
    const output = [`${type} Dinner: `];
    Object.values(menu[type]).forEach(({name, price}) => {
      output.push(`${name} => $${price.toFixed(2)}`);
    });
    return output.join(' => ')
  }
  
  const main = {
    hotdog : {name : "Hotdog" , price : 14},
    hamburger : {name : "Hamburger" , price : 8},
    taco : {name : "Taco" , price : 12}
  };
  
  const side = {
    beans : {name : "Beans" , price : 3},
    chili : {name : "Chili" , price : 1},
    soda : {name : "Soda" , price : 1}
  };
  
  const menu = {
    'Main' : main,
    'Side' : side
  };
  
  console.log(renderOutput('Main'));
  console.log(renderOutput('Side'));

  //   for (key in menu[key]) {
  //   console.log(key + menu[key])
  // }