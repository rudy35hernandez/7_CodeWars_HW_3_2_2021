/*
1.
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

*/

var stringToNumber = function(str){
    return Number(str);
  }
  
  /* 
  2.
  Can you find the needle in the haystack?
  
  Write a function findNeedle() that takes an array full of junk but containing one "needle"
  
  After your function finds the needle it should return a message (as a string) that says:
  */
  
  function findNeedle(haystack) {
   let theposition = haystack.indexOf('needle');
    return `found the needle at position ${theposition}`
      }
  
  /* 
  3. Given an array of integers, return a new array with each value doubled.
  
  For example:
  
  [1, 2, 3] --> [2, 4, 6]
  
  For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
  */
  
  function maps(x){
    return x.map(item => item * 2)
  }
  
  /* 
  4. Convert number to reversed array of digits
  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
  
  Example:
  348597 => [7,9,5,8,4,3]
  */
  
  function digitize(n) {
   return n.toString().split('').reverse().map(nums => parseInt(nums))
  };
  
  /* 
  5. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
  
  The output should be two capital letters with a dot separating them.
  
  It should look like this:
  
  Sam Harris => S.H
  
  Patrick Feeney => P.F
  */
  
  function abbrevName(name){
    return name.split(/\s+/).map(item => item[0]).join('.').toUpperCase()
      
  }
  
  /*
  
  6. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
  
  invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  invert([]) == []
  You can assume that all values are integers. Do not mutate the input array/list.
  */
  
  function invert(array){
    return array.map(num => num * -1)
  }
  
  /*
  
  7.Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she
  made a mistake.
  
  Can you help her?
  
  */
  
  function myGreeting(name){
   return name === 'Johnny' ? 'Hello my love' : 'Welcome everyone'
  }
  
  