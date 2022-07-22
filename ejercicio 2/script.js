// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀


// const massMark = 78;
// const heightMark = 1.69;
// const massJhon = 92;
// const heightJhon = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;


const bmiMark = massMark / heightMark ** 2;
const bmiJhon = massJhon / (heightJhon * heightJhon);

const markHigerBMI = bmiMark > bmiJhon;

console.log(bmiMark.toFixed(2), bmiJhon.toFixed(2), markHigerBMI);


if(bmiMark > bmiJhon){
    console.log(`Mark's BMI ${bmiMark.toFixed(2)} is higher than Jhon's ${bmiJhon.toFixed(2)}!`);
}else{
    console.log(`Jhon's BMI ${bmiJhon.toFixed(2)} is higher than Mark's ${bmiMark.toFixed(2)}!`);
}
