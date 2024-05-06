const {add, multiply, divide, subtraction} = require("./test_introduction.js");

test("add two number", () => {
let numberOne = 9;
let numberTwo = 10;
let ans = add(2, 5)
expect(ans).toBe(7);
});
test("multiply two number", () => {
let numberOne = 2;
let numberTwo = 2;
let ans = multiply(2, 2)
expect(ans).toBe(4);
});
test("divide two number", () => {
let numberOne = 6;
let numberTwo = 3;
let ans = divide(6, 3)
expect(ans).toBe(2);
});
test("subtraction two number", () => {
let numberOne = 10;
let numberTwo = 3;
let ans = subtraction(numberOne, numberTwo)
expect(ans).toBe(7);
});