//JavaScript Fundamentals - Part 1

// const country = "Bangladesh";
// const continent = "Asia";
// let population = 169.4; // for example population = 13 or 130
// isIsland = true;
// let language = "Bangla";

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// console.log(population / 2);

// population++;

// console.log(population);
// console.log(population > 6);
// console.log(population < 33);

// const description1 =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

// console.log(description1);

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// if ( population > 33){
//   console.log(`${country}'s population is avobe average`);
// }else{
//   console.log(`${country}'s population is ${ 33 - population} million below average`);
// }

// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // ->  23
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// //Equality Operators: == vs. ===

// //Declare a variable numNeighbours based on a prompt input like this:
// // const numNeighbours = prompt('How many neighbour countries does your contry have?');

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));    //convert numNeighbours to a number

// //                                   //use loose equality == for now).
// // if(numNeighbours === 1){          //Change == to ===
// //   console.log('Only 1 border!');
// // }else if(numNeighbours > 1){
// //   console.log( 'More than 1 border');
// // }else{
// //   console.log('No borders');     //this block will be executed when numNeighbours is 0 or any other value).
// // }

// /*note: When you use ===, JavaScript checks both value and type.
//  If numNeighbours is a string, and you're comparing it with a number using ===,
//  the condition will likely evaluate to false even if the content of the string represents the same number.
// */

// // Logical Operators
// /* part of the solution is under below:
//    condition -> language === 'English' && population < 50 && !isIsland  */

// if(language === 'English' && population < 50 && !isIsland){
//   console.log(`You should live in ${country} :)'`);
// }else{
//   console.log(`${country} does not meet your criteria :('`);
// }

// // The switch Statement
// //It's an alternative to using multiple if-else statements when you need to compare a single value against multiple possible values.
// /*The expression is evaluated once.
// -> The value of the expression is compared with the values of each case.
// -> If there's a match, the corresponding code block is executed.
// -> If no match is found, the code block under the default case (if provided) is executed. The default case is optional.
//  */

// switch (language){
//   case 'chinese':
//   case 'mandarin':
//        console.log('MOST number of native speakers!');
//        break;
//   case 'spanish':
//        console.log('2nd place in number of native speakers');
//        break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
// }

// //The Conditional(Ternary) Operator
// console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);

//JavaScript Fundamentals - Part 2

// // # Functions #
// function describeCountry (country, population, capitalCity){
//   return `${country} has ${population} million people and it's capital city is ${capitalCity} .`;
// }
// const describeBangladesh = describeCountry('Bangladesh', 169.4, 'Dhaka');
// const describePortugal = describeCountry('Portugual', 10, 'Lisbon');
// const describeFinland = describeCountry('Finland', 6 , 'Helsinki');
// console.log(describeBangladesh , describePortugal, describeFinland);

// // #Functiontion Declarations Vs Expressions#
function percentageOfWorld1(population) {
  //use function declarations
  return (population / 7900) * 100;
}

// const percentageOfWorld2 = function (population){   //use function expressions
//   return (population / 7900) * 100;
// };

// const percentageOfBangladesh1 = percentageOfWorld1(169.4);
// const percentageOfPortugal1 = percentageOfWorld1(16);
// const percentageOfChina1 = percentageOfWorld1(1441);
// console.log(percentageOfBangladesh1, percentageOfPortugal1, percentageOfChina1);

// #Arrow Functions#
// const percentageOfWorld3 = population => (population / 7900) * 100; //use single line arrow function
// const percentageOfBangladesh3 = percentageOfWorld3(169.4);
// const percentageOfPortugal3 = percentageOfWorld3(16);
// const percentageOfChina3 = percentageOfWorld3(1441);

// console.log(percentageOfBangladesh3 , percentageOfPortugal3, percentageOfChina3);

// #Functions Calling Other Functions#
// const describePopulation = function (country, population){
//     const percentage = percentageOfWorld1 (population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//     console.log(description);
//   };
// describePopulation('Bangladesh', 169.4);
// describePopulation('Portugal', 16);
// describePopulation('China', 1441);

// #Introduction to Arrays#
// const populations = [169.4 , 16, 1441, 30];
// console.log(populations.length === 4);

// const percentages = [percentageOfWorld1(populations[0]),
//                       percentageOfWorld1(populations[1]),
//                       percentageOfWorld1(populations[2]),
//                       percentageOfWorld1(populations[3])];
// console.log(percentages);

// #Basic Array Operations (Methods)#

// const neighbours = ["Bangladesh", "Sweden", "China"];

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central european country :D");
// }
// neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden;";
// console.log(neighbours);

// #Introduction to Objects#
// const myCountry = {
//   country: "Bangladesh",
//   capital: "Dhaka",
//   language: "Bangla",
//   population: 169.4,
//   neighbours: ["India", "Pakistan", "Nepal"],
// };
// #Dot vs. Bracket Notation
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
// //using dot notation
// myCountry.population += 2;
// console.log(myCountry.population);

// //using bracket notation
// myCountry['population'] -=2 ;
// console.log(myCountry.population);

// #Object Methods#
// const myCountry = {
//   country: "Bangladesh",
//   capital: "Dhaka",
//   language: "Bangla",
//   population: 169.4,
//   neighbours: ["India", "Pakistan", "Nepal"],
//   decribe : function() {
//     console.log(
//          `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//        );
//   },
//   checkIsland : function() {
//      this.isIsland = this.neighbours.length === 0 ? true : false;
//   // this.isIsland = !Boolean(this.neighbours.length);
//   }
// };
// myCountry.decribe();
// myCountry.checkIsland();
// console.log(myCountry);

// #Iteration: The for Loop#
//'Voter number 1 is currently voting'
// for (let voter = 1; voter <= 50; voter ++){
//   console.log(`Voter number ${voter} is currently voting`);
// }

// #Looping Arrays, Breaking and Continuing#
const populations = [169.4 , 16, 1441, 30];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }

// console.log(percentages2);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {        // first array length 3 
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);      
//   }
// }
//console.log(listOfNeighbours.length);

// #The While Loop#
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);