// let a ={a:{b:{c:1}}}

// let b = a?.a;
// console.log(b)


// var user = { name: 'Joe' }
// var zip = user?.address?.zip;
// console.log(zip)

// var street = user.address && user.address.street;

 
//Use Destructuring Assignment to Assign Variables frUse Destructuring Assignment to Assign Variables from Arraysom Arrays

// let a= 8;
// let b = 6;

//  [a,b]=[b,a]
// console.log(b)


//ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements


// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   let arr,a,b;
//   [a,b,...arr]=source
 
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
