// Data type is string which is given in Challenge
// The 'resultVariable' will print "2040".
// But we can add these two variables values by converting 'variable2' value from string to number.We apply '+variable2',the unary plus operator to the variable2 value, which converts the string '40' to the number 40 and then the data type will be a number.

// Data type number
const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + +variable2;

console.log(resultVariable);
// The result will be "60"
