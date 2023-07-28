//  They are causing a syntax error. We have to place comma instead of semicolon after every array.

// (Corrected code)

const objectVariable = {
property1: 'i am property 1',
property2: 'i am property 2',
property3: [20, 30, 40]
};

console.log(objectVariable.property3[2]);
// Output will be 40