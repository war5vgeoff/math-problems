  const generateRandomTsCode = () => {
    let code = '';
  
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Generate a random operation (either +, -, x, or /)
    const randomOperation = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];
  
    // Generate two random numbers that meet the requirements for the operation
    const randomNumbers = [];
    let i = 0;
    while (i < 2) {
      const randomNum = Math.floor(Math.random() * 100);
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
        i++;
      }
    }
  
    // Evaluate the equation and return the result as a string
    const result = eval(`${randomNumbers[0]}${randomOperation}${randomNumbers[1]}`).toString();
  
    code += `console.log("What is ${randomNumbers[0]} ${randomOperation} ${randomNumbers[1]}?");`;
    code += `console.log("The answer is: ${result}");`;
  
    return code;
  };