// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);

//Mathmatical operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas , ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Kaisar';
// const lastName = 'Sarwar';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // x=15
// x += 10; // x= x+10 = 25
// x *= 4; // x = x * 4 = 100
// x ++ ; // x = x + 1 = 101
// x -- ; // x = x - 1 = 100
// x -- ; // x = x - 1 = 99

// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);
// let x , y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

//CHALLENGE #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark ** 2 );
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = '1991';
// const year = '2037';

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);
// // use case of templete literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);
// //template literals also use for multiline string
// console.log('string with \n\
// multiple \n\
// lines');

// console.log(`string with
// multiple
// lines`);

// taking decision: if/else statement
// const age = 15;
// //const isOldEnough = age  >= 18;
// //if (isOldEnough)

// if (age >= 1){
//     console.log('Sarah can start driving license 🚗');
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// // CHALLENGE #2 (use if/else )
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */
// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }else{
//     console.log(`John's BMI (${BMIJohn})is higher than Mark's (${BMIMark})!`);
// }

// Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); //NaN (it's a number but its an invalid number)
// console.log(typeof NaN);         //its a number
// console.log(String(23) , 23);

// // TYPE COERCION
// console.log('I am ' + 23 + ' years old');
// console.log('23' + '10' + 3);  // ansr=  23103 bcz its string
// console.log('23' - '10' - 3); // ansr=10 bcz minus operator trigger the opposite conversion
// console.log('23' / '2');

// let n = '1' + 1;      // here (string) '1' + (number) 1 = 11
// n = n - 1;            // n = n - 1 = 11 - 1 = 10;
// console.log(n);
/*example: 2 + 3 + 4 + '5'
                                                                           = 9(2+3+4) 5 
                                                                           = "95"  
                                                                           here 2 , 3, 4 are numbers 
                                                                           & '5' its a string  */
/* example  '10' - '4' - '3' - 2 + '5'
    = "15"    */

//5 falsey values : 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// const money = 100;
// if (money){
//     console.log("Don't spend it all ;) ");
// }else{
//     console.log('You should get a job!');
// }

// let height;          // bcz its a falsey (undefined)
// let height = 123;             // its a truthy bcz defined value
// let height = 0;                         // 0 is a falsey value
// if(height){
//     console.log('YAY! Height is defined');
// }else{
//     console.log('Height is Undefined');
// }

// const age = 18;
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18)  console.log('You just became an adult :D (loose)');

// const favourite = Number
//   (prompt("What's your favourite number?")); /* here we using a converter 
//                                                               as Number function which works
//                                                               change the string in below if statement
//                                                               and convert to a number in line 37
//                                                               ansr is (23 === 23) */
// console.log(favourite);
// console.log(typeof favourite);

//  if (favourite == 23){  // using loose equal operator and '23' == 23 (string converted to a number 23) loose equal
//     console.log('Cool! 23 is an amazing number') ;
//  }

//  if (favourite == 23){  // using loose equal operator and '23' == 23 (string converted to a number 23)
//     console.log('Cool! 23 is an amazing number') ;
// }

// if (favourite === 23) { // 22 === 23 -> false; 
//   // using strict equal operator and '23' == 23 (string converted to a number 23)
//   console.log("Cool! 23 is an amazing number");
// }
// else if (favourite === 7){
//     console.log('7 is also a cool number');
// }else if(favourite === 9){
//     console.log('9 is also a cool number');
// }else{
//     console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23){
//     console.log("why not 23?");
// } 

/*note : loose equal will do two things : firstly type coercion and then comaprison
          strictly equal will do only  one thuing that is comparison and return a boolean */

//Logical Operator
// const hasDriversLicense = true;    // A      
// const HasGoodVision =   true;   // B
/* NOTE : AND (&&) -> if both oprands are true, it returns true otherwise it returns false. 
          OR (||) -> if atleast one of the operands is true otherwise it returns false.
         NOT (!)  -> it returns the opposite boolean value of its operand. 
                     If the operand is true, it returns false.
                     If the operand is false, it returns true.
                     ex->If !true then it return false
                         If !false then it return true */

// console.log(hasDriversLicense && HasGoodVision);
// console.log(hasDriversLicense || HasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && HasGoodVision){
//     console.log('Sarah is able to drive !');  // if both oprands are true.
// }else {
//     console.log('Someone else should drive....'); // if one operand is not true .
// }

// const isTired = false; // C
// console.log(hasDriversLicense && HasGoodVision && !isTired);

// if (hasDriversLicense && HasGoodVision && !isTired){   //if  isTired -> false then !isTired -> true
//     console.log('Sarah is able to drive !');  // if both oprands are true.
// }else {
//     console.log('Someone else should drive....'); // if one operand is not true .
// }
 
// CHALLANGE #3 (use if/else statement, boolean logic , logical operator)

// calculate the average score for each team and assigned to the variables here
// const scoreDolphins = (96 + 108 + 89)/3;
// const scoreKoalas = (88 + 91 + 110)/3;
// console.log(scoreDolphins, scoreKoalas);
// //Compare the team's average scores to determine the winner and print 
// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// }else if(scoreKoalas > scoreDolphins){  //if Koalas average score higher than Dolphines
//     console.log("Koalas win the trophy");
// }else if(scoreDolphins === scoreKoalas){ // if thier average scores are equal
//     console.log("Both win the trophy");
// }


//BONUS CHALLENGE
// calculate the average score for each team and assigned to the variables here
// const scoreDolphins = (109 + 195 + 50)/3;
// const scoreKoalas = (109 + 195 + 50)/3;
// console.log(scoreDolphins, scoreKoalas);
// //Compare the team's average scores to determine the winner and print 
// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){  // if Dolphins average score is higher then Koalas
//     console.log("Dolphins win the trophy");
// }else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){  //if Koalas average score higher than Dolphines
//     console.log("Koalas win the trophy");
// }else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){ // if thier average scores are equal
//     console.log("Both win the trophy");
// }else{
//     ('No one wins the trophy');
// }

//The Switch Statement
const day = 'monday';

switch (day){
    case 'monday':    // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to codding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday' :   
        console.log('Enjoy the Weekend :D');
        break;
    default:
        console.log('Not a valid day!');        
}
 
// same result of code using if/else statement
if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to codding meetup');
}else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code example');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the Weekend :D');
}else{
    console.log('Not a valid day!');
}

//27. Statements and Expressions
/* An Expression is a piece of code that produces a value.
 Ex-> 3+4 is a expression that gonna produce a value */

 if(23 > 10){
    const str = '23 is bigger'; /* here this string '23 is bigger' is an expression 
                                 and the whole line of code is statement
                                  bcz doesn't produce a value.
                                  basically if something ends with semicolone then it's a statement*/ 
 }
 // note: In template literals it can only insert expression but no statements
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

//28. The Conditional(Ternary)Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') ://age >= 18 ? its a condition // if part
// console.log('I like to drink water 💧');  // else part
 /*note: adding emoji for macOS: CMD+CTRL+SPACE & FOR Windows 10: Windows +  */
 /* note : operator produce value so that operator is an expression */

 const drink = age >= 18 ? 'wine 🍷' : 'water 💧' ; // using ternary operator in this expression.
 console.log(drink);

 //using if/else statement
 let drink2;
 if(age >= 18){
    drink2 = 'wine 🍷';
 }else{
    drink2 = 'water 💧';
 }
 console.log(drink2);

 //we can have coditionals inside of a template literal .  ${} -> its a placeholder where i can put expressions that produce a value.
 console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧' }`);
 //note : ternary operator can used when we need quick decision like the above code.

//CHALLENGE # 4
 const bill = 430;
 const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20 ;
 console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);