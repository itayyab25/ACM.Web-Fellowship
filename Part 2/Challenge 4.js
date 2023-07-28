const myObj = {
  prop1: 'first value',
  prop2: 20
};

// Index         0   1   2
const myArray = [40, 50,2]; 
//To determine the value of result, let's break down the expression step by step:
//myObj.prop2 refers to the value of the property prop2 in the myObj object, which is 20.
//myArray[0] accesses the element at index 0 in the myArray array, which is 40.
//myArray[2] accesses the element at index 2 in the myArray array, which is 2.
//(myArray[0] / myArray[2]) evaluates to the result of dividing 40 by 2, which is 20.
//Now, let's substitute the values back into the expression:

const result = myObj.prop2 === (myArray[0] / myArray[2]);
//const result = 20 === 20;
// Output will be 'true'
