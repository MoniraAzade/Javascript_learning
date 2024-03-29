"use strict";
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

///////////////////////////////////////
// Basic Array Operations (Methods)
// Add  elements are -> push , unshift
// const friends = ['Michael', 'Steven', 'Peter'];
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
// console.log(friends.includes('Steven')); // it can be true cz steven is existing in this array.
// console.log(friends.includes('Bob'));  //it can be false cz Bob not existing in this array.
// // console.log(friends.includes(23));

// if (friends.includes('Steven')){
//   console.log('You have a friend called Steven');
// }

///////////////////////////////////////
// Coding Challenge #2
/*
const calcTip = function (bill){
     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20; 
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

///////////////////////////////////////
// Introduction to Objects
//for example when we use array
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];
// //when we use Object
// const Jonas = {   // here Jonas is an object we create
//   firstName: 'Jonas',  //firstName,lastName,age,job,friends -> are key or properties.
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };

///////////////////////////////////////
// Dot vs. Bracket Notation
// const jonas = {   // here Jonas is an object we create
//   firstName: 'Jonas',  //firstName,lastName,age,job,friends -> are key or properties.
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
//};
// console.log(jonas);

// console.log(jonas.lastName); /*this (.)dot an operator which will go to this object with the name that we specified here as Jonas.
//                                  this called dot notation.*/
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]); //we could put any expression here with this box bracket . this called deep bracket notation
// console.log(jonas['last' + nameKey]);

// lets example
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.');
// console.log(jonas[interestedIn]);

// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
// }else{
//   console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
// };

// jonas.location =' Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);

// Challenge of this lecture.
// console.log(`${jonas.firstName} has  ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`);

///////////////////////////////////////
// Object Methods
// Any function that is attached to an object  is called a method.
// const jonas = {   // here Jonas is an object we create
//   firstName: 'Jonas',  //firstName,lastName,age,job,friends -> are key or properties.
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

// calcAge: function (birthYear){ //here we can call this function is method cz its attached by the property name calcAge to an object
//   return 2037 - birthYear;
// }

// calcAge: function (){
//   // console.log(this);
//   return 2037 - this.birthYear;
// }

//   calcAge: function (){
//     this.age = 2037 - this.birthYear ; //here through dot notation we can create new property. ex: .age
//     return this.age ;
//   },  // Note : we need comma between all properties in obeject.
//   getSummery: function (){
//      return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }

// };
// /*
// const calcAge = function (birthYear){  //its a function declarations. we can't used in here.
//   return 2037 - birthYear
// } */

// console.log(jonas.calcAge());    //using dot notaion.
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas['calcAge'](1991));     //using bracket notation.

// // Challenge of this lecture
// //"Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummery());

///////////////////////////////////////
// Coding Challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// john.calcBMI();
// mark.calcBMI();

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${
//       mark.fullName
//     }'s (${mark.bmi}!)`
//   );
// } else if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${
//       john.fullName
//     }'s (${john.bmi})!`
//   );
//}

//Iteration : The for Loop
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// //Note : for loop keeps running while condition is true.
// for (let rep = 1; rep <= 10; rep++ ){  //using for loop.
//   console.log(`Lifting weights repetition ${rep}`);
// }

//Looping Arrays,Breaking and Continuing 
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
//   ];
// const types = [];
// // console.log(jonas[0])
// // console.log(jonas[1])
// // ...
// // console.log(jonas[4])
// // jonas[5]  does NOT exist
// for (let i = 0; i < jonas.length; i++){ 
//   // Reading from  jonas Array.   //here jonas.length are the length of Array.
//   console.log(jonas[i], typeof jonas[i]);
//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);            //['string', 'string', 'number', 'string', 'object', 'boolean']
// }
// console.log(types);   

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++){
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// Looping BackWards and Loops in Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];
// // o, 1,... , 4
// // 4, 3,..., 0
// for(let i = jonas.length - 1; i >= 0; i--){
//   console.log(i, jonas[i]);
// }

// // Loops in Loops
// for (let exercise = 1; exercise < 4; exercise++){
//   console.log(`------------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++){
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

/////The While Loop 
/* Note : while loop : it will run while this condition is true.
    while loop need a condiotion . no need any counter like (let rep = 1; ) */

//For Loop    
// for (let rep = 1; rep <= 10; rep++ ){  //using for loop.
//   console.log(`Lifting weights repetition ${rep}`);
// };

//While loop
// let rep = 1;
// while(rep <= 10){
//   console.log(`While: Lifting weights repetition ${rep}`);
//   rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;  /* Math.random  here math is object and random is method or function . 
// this function pick random number between 0 to 1like any decimal number . here Math.trunc , Math is an object and trunc is method or function . 
// this function remove decimal number like 2.890456 -> 2 */

// // console.log(dice);
// while (dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1; 
//   if (dice === 6){
//     console.log('Loop is about end ...');
//   }
// };

// #CODING  CHALLENGE # 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
for(let i = 0; i < bills.length ; i++){
     const tip = calcTip(bills[i]);
    //  tips[i] = tip;
     tips.push(tip);
     totals.push(bills[i] + tip);
}
console.log(bills, tips, totals);

