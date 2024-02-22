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
// function calcAge1(birthYear){
//     //const age = 2037 - birthYear;
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);


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
const calcAge = function (birthYear) {
    return 2037 - birthYear;
  }
  
  const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
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

///////////////////////////////////////
// Introduction to Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const  years  = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);  /*here length count how many elements are in array.
//                                 length is property. */
// console.log(friends[friends.length - 1]); //[friends.length - 1] its an expression cz we know expression give a value.

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'];

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schemtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// //Example:
// const calcAge = function(birthYear){
//   return 2037 - birthYear;
// }
// const year = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
// //here we create a new arrow in above and in array we put 3 expression that gives 3 values. and its length is 3.
// console.log(ages);

// Basic Array Operations (Methods)
// Add  elements are -> push , unshift
const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay'); //push method adds elements to the end of an array. 
// // we call that push function directly on the friends array.
//  //if we want to know the new length than we put it in the variable.
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); //unshift method aad to the begining of the array
// console.log(friends);

// Remove elements -> pop , shift

// friends.pop();//Last  // this method is the opposite of the push method .
// // so its remove the last element of the array.
// // but its return the the removed element.
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); //First //remove the first element of array.
// console.log(friends);

// check Index or position of array . these are -> indexOf , includes

// console.log(friends.indexOf('Steven')); //output will be 1 cz its index cz steven is indeed.
// console.log(friends.indexOf('Bob')); // output will be -1 cz there is no element called bob.

// friends.push(23);
console.log(friends.includes('Steven')); // it can be true cz steven is existing in this array.
console.log(friends.includes('Bob'));  //it can be false cz Bob not existing in this array.
// console.log(friends.includes(23));

if (friends.includes('Steven')){
  console.log('You have a friend called Steven');
}