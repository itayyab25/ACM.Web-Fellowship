// 1
const myBoolean = true;
// 2
const myString = 'hello world';
// 3
const firstNumber = 20;
// 4 I have used `let` here.  We have to use this to re-assign the value of the variable
let secondNumber = 40;
// 5
secondNumber = 80;
// 6
const myArray = [myBoolean, myString];
// 7
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};
// 8
console.log(myObject);
// 9 
console.log(myObject.sumProperty);
// 10 
console.log(myObject.firstProperty[1]);