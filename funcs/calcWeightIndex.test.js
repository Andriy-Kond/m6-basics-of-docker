/**
 * Incoming arguments: height in metr and weight in kg
 * Return weight / (height * height). The calculation result is rounded to two decimal places.
 * Throw error with corresponding message if incoming arguments is not valid.
 *
 * 1.9, 90 => 24.93
 *
 * 90, 1.9 => error 'weight must be first argument'
 * 190, 90 => error 'height must be in meter'
 * 1.9 => error 'required weight and height'
 * '1.9', '90' => error 'weight and height must be numbers'
 *
 */
const calcBWIByQuetelet = require("./calcWeightIndex");

describe("Calculate Body Weight Index", () => {
  it("1.9, 90 => 24.93", () => {
    expect(calcBWIByQuetelet(1.9, 90)).toBe(24.93);
  });

  it("90, 1.9 => error 'weight must be first argument'", () => {
    expect(() => calcBWIByQuetelet(90, 1.9)).toThrow(
      "weight must be first argument",
    );
  });

  it("190, 90 => error 'height must be in meter'", () => {
    expect(() => calcBWIByQuetelet(190, 90)).toThrow("height must be in meter");
  });

  it("1.9 => error 'required weight and height'", () => {
    expect(() => calcBWIByQuetelet(1.9)).toThrow("required weight and height");
  });

  it("'1.9', '90' => error 'weight and height must be numbers'", () => {
    expect(() => calcBWIByQuetelet("1.9", "90")).toThrow(
      "weight and height must be numbers",
    );
  });
});
