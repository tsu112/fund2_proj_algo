// Fundamentals To Do 2

// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
// ****************************************************** Anwser
function countDown(x) {
  var arr = [];
  for (var i = x; i >= 0; i--) {
    arr.push(i);
    console.log(arr.length);
    return arr;
  }
}
console.log(countDown(10));
// ****************************************************** # 2

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
// ****************************************************** Anwser
function printArr(x) {
  if (x[0] == null) {
    return console.log("What?");
  } else {
    console.log(x[0]);
    return x[1];
  }
}
var arr = [];
console.log(printArr(arr));

// ****************************************************** # 3

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
// ****************************************************** Anwser

function sumArr(x) {
  if (isNaN((x[0] = false))) {
    console.log("What?");
  } else {
    return x[0] + x.length;
  }
}
arr = [3, 5, 6, 8];
console.log(sumArr(arr));
// ****************************************************** # 4
// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
// ****************************************************** Anwser

arr = [1, 3, 5, 7, 9, 13];
y = [];
function greater_sec(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > x[1]) {
      y.push(x[i]);
    }
  }
  console.log(y);
  return y.length;
}

console.log(greater_sec(arr));
// ****************************************************** # 5
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

// console.log(greater_sec(arr));
// ****************************************************** # 6
// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
// ****************************************************** Anwser

function this_len_that_val(num1, num2) {
  if (num1 == num2) {
    return "Jinx!";
  }
  var newarr = [];
  var len = 0;
  while (len < num1) {
    newarr.push(num2);
    len++;
  }
  return newarr;
}

console.log(this_len_that_val(3, 2));
// ****************************************************** # 7
// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
// ****************************************************** Anwser

var new_arr = [3, 1];

function just_right(arr) {
  if (arr[0] > arr.length) {
    return "Too big!";
  } else if (arr[0] < arr.length) {
    return "Too small";
  } else {
    return "Just right!";
  }
}
console.log(just_right(new_arr));
// ****************************************************** # 8
// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
// ****************************************************** Anwser

function fahrenheitToCelsius(fDegrees) {
  var x = (fDegrees - 32) / (9 / 5);
  return x;
}

var x = 98;
console.log(fahrenheitToCelsius(x));
// ****************************************************** # 9
// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
// ****************************************************** Anwser

function celsiusToFahrenheit(cDegrees) {
  var x = cDegrees * (9 / 5) + 32;
  return x;
}
var x = 36.667;
console.log(celsiusToFahrenheit(x));
