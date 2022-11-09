// Write a code for a calculator which should perform all arithmetic operations using a
// common user-defined function only, a user must have to give 2 inputs the operator
// and operands values

function calculator(x, y, operator) {
  // const y = 10
  if (operator == '+') {
    return x + y
  } else if (operator === '-') {
    return x - y
  } else if (operator === '*') {
    return x * y
  } else if (operator ==='/') {
    return x / y
  } else if (operator ==='%') {
    return x % y
  } else {
    return 'enter right operator'
  }
}

const mod = calculator(0, '0', '%')
const plus = calculator(2, '5', '+')
const mul = calculator(2, 5, '*')
const minus = calculator(2, '2', '-')
const div = calculator(2, 0, '/')
console.log(mod)
console.log(plus)
console.log(mul)
console.log(minus)
console.log(div)
