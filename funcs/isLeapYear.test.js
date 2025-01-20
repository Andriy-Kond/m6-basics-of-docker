/**
 * 1. Incoming argument is an integer value
 * 2. Fn will return "true" if it is a leap year and "false" if not.
 * 3. Trow the error with corresponding message if argument is not valid
 *
 * The year is leap if it:
 * - divisible by 4 without a remainder but not divisible by 100
 * - divisible by 400 without a remainder
 *
 * not divisible by 4:
 * 2003/2023 - false
 *
 * divisible by 4 and by 100:
 * 1900/2100 - false
 *
 * divisible by 4 but not by 100:
 * 2008/2012/2024 - true
 *
 * divisible by 400 (although divisible by 4 and by 100):
 * 1600/2000/2400 - true
 *
 * 41 - error 'year must be 42 or more'
 *
 * 2008.4 - error 'year must be integer'
 *
 * () - error 'you must send some year'
 *
 * '2008' - error 'year must be a number'
 * null - error 'year must be a number'
 * true - error 'year must be a number'
 * false - error 'year must be a number'
 * {} - error 'year must be a number'
 * [] - error 'year must be a number'
 * ()=>{} - error 'year must be a number'
 *
 */

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", () => {
  it("2003/2023 - false", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  it("1900/2100 - false", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  it("2008/2012/2024 - true", () => {
    expect(isLeapYear(2008)).toBe(true);
  });

  it("2008/2012/2024 - true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  it("41 - error 'year must be 42 or more'", () => {
    expect(() => isLeapYear(41)).toThrow("year must be 42 or more");
  });

  it("2008.4 - error 'year must be an integer'", () => {
    expect(() => isLeapYear(2008.4)).toThrow("year must be an integer");
  });

  it("() - error 'you must send some year'", () => {
    expect(() => isLeapYear()).toThrow("you must send some year");
  });

  //  *
  //  *
  //  * false - error 'year must be a number'
  //  * {} - error 'year must be a number'
  //  * [] - error 'year must be a number'
  //  * ()=>{} - error 'year must be a number'

  it("'2008' - error 'year must be a number'", () => {
    expect(() => isLeapYear("2008")).toThrow("year must be a number");
  });

  it("null - error 'year must be a number'", () => {
    expect(() => isLeapYear(null)).toThrow("year must be a number");
  });

  it("true - error 'year must be a number'", () => {
    expect(() => isLeapYear(true)).toThrow("year must be a number");
  });
  it("false - error 'year must be a number'", () => {
    expect(() => isLeapYear(false)).toThrow("year must be a number");
  });

  it("{} - error 'year must be a number'", () => {
    expect(() => isLeapYear({})).toThrow("year must be a number");
  });

  it("[] - error 'year must be a number'", () => {
    expect(() => isLeapYear([])).toThrow("year must be a number");
  });
  it("()=>{} - error 'year must be a number'", () => {
    expect(() => isLeapYear(() => {})).toThrow("year must be a number");
  });
});
