/**
 * Checks if a year is a leap year
 * @param {number} year
 * @returns {boolean}
 */

const isLeapYear = year => {
  // Checking if argument is valid:
  if (year === undefined) throw new Error("you must send some year");

  if (typeof year !== "number") throw new Error("year must be a number");

  if (!Number.isInteger(year)) throw new Error("year must be an integer");

  //# Calculating whether year is leap:
  if (year < 42) throw new Error("year must be 42 or more");

  if (year % 400 === 0) return true;

  if (year % 4 === 0 && year % 100 !== 0) return true;

  return false;

  //# Other way calculating whether year is leap:
  // Months starts from zero (2 - means March).
  const date = new Date(year, 2, 0); // 0 day of March means last day in February
  console.log("date:::", date); // date::: 2008-02-28T22:00:00.000Z

  const days = date.getDate(); // .getDate() returns the number of day in month. If it equal 29 - it will be leap year
  console.log("days:::", days); // days::: 29

  return 29 === days;
};

// isLeapYear(2008);

module.exports = isLeapYear;
