// Fundamentals To Do 2

// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
// ****************************************************** Anwser
// function countDown(x) {
//   var arr = [];

//   for (var i = x; i >= 0; i--) {
//     arr.push(i);
//   }
//   console.log(arr.length);
//   return arr;
// }

// console.log(countDown(10));
// ****************************************************** # 2

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
// ****************************************************** Anwser
// function printArr(x) {
//   if (x[0] == null) {
//     return console.log("What?");
//   } else {
//     console.log(x[0]);
//     return x[1];
//   }
// }
// var arr = [];
// console.log(printArr(arr));

// ****************************************************** # 3

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
// ****************************************************** Anwser

// function sumArr(x) {
//   if (isNaN((x[0] = false))) {
//     console.log("What?");
//   } else {
//     return x[0] + x.length;
//   }
// }
// arr = [3, 5, 6, 8];
// console.log(sumArr(arr));
// ****************************************************** # 4
// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
// ****************************************************** Anwser

// arr = [1, 3, 5, 7, 9, 13];
// y = [];
// function greater_sec(x) {
//   for (var i = 0; i < x.length; i++) {
//     if (x[i] > x[1]) {
//       y.push(x[i]);
//     }
//   }
//   console.log(y);
//   return y.length;
// }

// console.log(greater_sec(arr));

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
// ****************************************************** Anwser

y = [];
arr = [5, 2, 4, 10, 51];
function greater_sec(x) {
  if (x.length < 2) {
    return console.log("Array not long enough");
  } else {
    for (var i = 0; i < x.length; i++) {
      if (x[i] > x[1]) {
        y.push(x[i]);
      }
    }
  }
  return y.length;
}

console.log(greater_sec(arr));
