// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = 23;
// if (x === 23) {
//   console.log(23);
// }
// const calcAge = (birthYear) => 2037 - birthYear;

// console.log();

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcious",
    //C) FIX
    value: Number(prompt("Degree celsius:")),
  };
  //B) FIND
  console.table(measurement);
  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY
console.log(measureKelvin());
