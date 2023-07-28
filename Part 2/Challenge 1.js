// The given code will not work because we are using const.When we change it to let, the code works and numberVariable will be equal to 3
// The corrected one is given below
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);
 // Output will be 3