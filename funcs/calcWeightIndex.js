/**
 * Fn calcBWIByQuetelet() calculate body weight index (BWI)
 * @param {number} weight
 * @param {number} height
 * @returns {number}:
 * до 16 – явно виражений дефіцит маси тіла;
 * від 16 до 18,50 – нестача маси тіла;
 * від 18,50 до 25 – нормальна маса тіла;
 * від 25 до 30 – передожиріння, маса тіла надлишкова;
 * від 30 до 35 – ожиріння 1-го ступеня;
 * від 35 до 40 – ожиріння 2-го ступеня;
 * понад 40 – патологічне ожиріння, ожиріння 2-го ступеня.
 *
 * BWI by Quetelet's: BWI = weight/height*height
 *
 */

const calcBWIByQuetelet = (height, weight) => {
  // Validate arguments:
  if (height === undefined || weight === undefined)
    throw new Error("required weight and height");

  if (typeof height !== "number" || typeof weight !== "number")
    throw new Error("weight and height must be numbers");

  if (weight < height && weight < 3)
    throw new Error("weight must be first argument");

  if (height > 3) throw new Error("height must be in meter");

  // Calculating result:
  const idx = weight / height ** 2;

  return Math.round(idx * 100) / 100;

  // other way:
  return Number(idx.toFixed(2)); // .toFixed() returns string, therefore we must wrap it to Number() to convert it to number.
};

module.exports = calcBWIByQuetelet;
