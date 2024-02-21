'use strict'
/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense){
    console.log('I can drive :D');
}

///////////////////////////////////////
// Functions
function logger(){
    console.log("I am Jonas");
    
}
// calling / running / invoking function
logger();
logger();
logger();
 
function fruitProcessor (apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
//fruitProcessor(5, 0);
 const appleJuice = fruitProcessor(5,0);
 console.log(appleJuice);
//  console.log(fruitProcessor(5,0));
 
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23'); */

///////////////////////////////////////
// Function Declarations vs. Expressions

//  Function declaretion
function calcAge1(birthYear){
    //const age = 2037 - birthYear;
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);


// Function Expression
/* note :here after equal , all code is expression ex-> function (birthYear){
                                                 return 2037 - birthYear;
                                                }
                   as we know expression give us a value.                               */
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//////////////////////////////////// ///
// Arrow functions
 
// const calcAge3 = birthYear => 2037 - birthYear; //for single line code
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear , firstName) => {   //for multiline code and for many parameters
//     const age = 2037 - birthYear;
//     const retirement = 65 - age ;
//     // return retirement;
//     return `${firstName}  retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////
// Functions Calling Other Functions
// const cutPieces = function (fruit){
//     return fruit * 4;
// }

// function fruitProcessor (apples, oranges){
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);
    
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions
/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  
  const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));
*/
  
  ///////////////////////////////////////
  // Coding Challenge #1
//   const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);