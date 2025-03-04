const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
};

let num1 = getRandomNumber();
let num2 = getRandomNumber();
console.log(`${num1} x ${num2} =`);
