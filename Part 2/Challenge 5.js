const myObj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 
// Now we read result part as:
// myArray[0].price ... assess 100
// myArray[0].quantity ... assess 5
// myArray[1].price ... assess 150
// myArray[1].quantity ... assess 2
// So result expression will be like
// 100 * 5 > 150 * 2, which will simplified to 500 > 300,
// Output will be 'true'.