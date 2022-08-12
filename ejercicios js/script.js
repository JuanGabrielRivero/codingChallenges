// Ejercicios
// -------------------------------------------EJERCICIO 1------------------------------------------------------------------

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

/* let country = "Spain";
 let continent = "Europe";
 let population = 47; */

// -------------------------------------------EJERCICIO 2------------------------------------------------------------------

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

/* let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

// -------------------------------------------EJERCICIO 3------------------------------------------------------------------


// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

/* language = "Spanish";
 const country = "Spain";
 const continent = "Europe";
 const isIsland = false;
 isIsland = true; */

// -------------------------------------------EJERCICIO 4------------------------------------------------------------------


// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

/* console.log(population / 2);
population ++;
console.log(population);
console.log(population > 6);
console.log(population < 33 );

const description1 = country + " is in " + continent + " , and it's" + " " + population + "million people, 20% does not speak"+ " " + language;

console.log(description1); */


// -------------------------------------------EJERCICIO 5------------------------------------------------------------------

// LECTURE: Strings and Template Literals
//  1. Recreate the 'description' variable from the last assignment, this time
//  using the template literal syntax

/* const country = "Spain";
const continent = "Europe"
const population = 47;
const language = "Spanish";


const description = `${country} is in ${continent} and it's ${population} million people, 20% does not speak ${language}`;

 console.log(description); */

// -------------------------------------------EJERCICIO 6------------------------------------------------------------------

//  LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)


/*
const population = 47;
const country = "Spain";

if(population > 33){
    console.log(`${country} is ${population - 33} million pople above the average`);
}else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}
 -------------------------------------------EJERCICIO 7------------------------------------------------------------------

*/
// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

// 4
// console.log("9" - "5");

// 617

// console.log('19' - '13' + '17');

// 617

// console.log('19' - '13' + 17); 23

// false

// console.log('123' < 57);

// 1143
// console.log (5 + 6 + '4' + 9 - 4 - 2);

// -------------------------------------------EJERCICIO 8------------------------------------------------------------------


// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on

// const numNeighbours = Number(prompt("How many neighbour countries does your conutry have?"));
// if(numNeighbours == 1)console.log("Only 1 border!");

// if(numNeighbours === 1){
//     console.log("Only 1 border!");
// }else if(numNeighbours > 1){
// console.log("More than 1 border");
// }else{
//     console.log("No borders");
// }

// -----------------------------------EJERCICIO 9-----------------------------------------------------

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)




// const language = "Spanish";
// const population = 47;
// const isIsland = false;
// const country = "Spain";




// const language = "english";
// const population = "10";
// const isIsland = false;
// const country = "portugal";




// if (language === 'english' && population < 50 && !isIsland)
// {
// console.log(`You should live in ${country} :)`);
// } else {
// console.log(`${country} does not meet your criteria :(`);
// }



// --------------------------------------EJERCICIO 10----------------------------------------------------

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'



// const language = "mandarin";

// switch(language){
//     case "chinese" :
//     case "mandarin" :
//         console.log("Most number of native speakers!");
//             break;
//   case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//             break;
//     case "hindi":
//         console.log("number 4");
//             break;
//     case "arabic":
//         console.log("5th most spoken language");
//         default:
//         console.log("Great language too");
//     }



// --------------------------------------EJERCICIO 11----------------------------------------------------

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original


// let country = "Spain";
// let population = 47;

// console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average `); // mas simplificado

// population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`); //mismo resultado pero mas codigo


// -------------------------------------------EJERCICIO 12----------------------


// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the  returned values in 3 different variables, and log them to the console



// function describeCountry(country, population, capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const describe1 = describeCountry("Finnland", 6, "Helsinki")
// const describe2 = describeCountry("Portugal", 21, "Lisboa")
// const describe3 = describeCountry("Spain", 47, "Madrid")

// console.log(describe1, "\n", describe2, "\n", describe3);



// --------------------------------------------------------------------ejercicio 13-----------------------------------------------------


// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)


// function percentageofWorld1(population){
// return (population / 7900) * 100;
// }


// const percentageofWorld2 = function(population){
//     return (population / 7900) * 100;
// }



// const populationSpain = percentageofWorld1(47);
// const populationPortugal = percentageofWorld1(10);
// const populationChina = percentageofWorld1(1441);
// console.log(populationSpain.toFixed(2), populationPortugal.toFixed(2), populationChina.toFixed(2));

// ---------------------------------------------ejercicio 14---------------------------------

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'



// const percentageofWorld3 = population => (population / 7900) * 100;

// const populationSpain = percentageofWorld3(47);
// const populationPortugal = percentageofWorld3(10);
// const populationChina = percentageofWorld3(1441);

// console.log(populationSpain.toFixed(2), populationPortugal.toFixed(2), populationChina.toFixed(2));


// -------------------------------------ejercicio 15-----------------------------------------

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// function percentageOfPeople(population){
//     return (population / 7900) * 100;
//     }

// function describePopulation (country, population){
//     const populationChina = percentageOfPeople(1441);
//         const result = `${country} has ${population} million people, which is about ${populationChina.toFixed(2)}% of the world. `
//     return result;

// }

// console.log(describePopulation("China", 1441));
// console.log(describePopulation("Portugal", 10));
// console.log(describePopulation("Spain", 47));


// // or


// function percentageofWorld1(population){
//     return (population / 7900) * 100;
//     }


// const describePopulation = function (country, population) {
//     const percentage = percentageofWorld1(population);
//     const description = `${country} has ${population} million
//     people, which is about ${percentage}% of the world.`;
//     console.log(description);
//     };

//     describePopulation('Portugal', 10);
//     describePopulation('China', 1441);
//     describePopulation('USA', 332);


// -------------------------------- ejercicio 16 ------------------------------------------


// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// spain = 47
// china = 1141
// portugal = 10
// USA = 332;

// function percentageOfPeople(population) {
//     return (population / 7900) * 100;
// }


// const populations = [47, 1141, 10, 332];

// console.log(populations.length === 4);



// const percentages = [
//     percentageOfPeople(populations[0]),
//     percentageOfPeople(populations[1]),
//     percentageOfPeople(populations[2]),
//     percentageOfPeople(populations[3])
// ];

// console.log(percentages);
