function sum(numOne, numTwo) {
    return numOne + numTwo
}

console.log(sum(5, 6));


// Build a Pretty Price Method in JavaScript

const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
}

prettyPrice(5.89 + 89)