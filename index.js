// Frequency Counter Pattern
// Create a function that accepts two arrays of numbers and checks
// Whether or not the second array contains each element 
// in the first array squared.  Return true or false. 
// For example, [1,2,3] and [1,4,9] 
// would return true, but [1,2,3] and [1,4,10] would return false


// Naive solution 
// time complexity - O(n^2), nessted loop - for / indexOf
// space complexity - O(1) , occupies constant space
function squared(arr1, arr2) {
    // check if arrays are of equal length
    if (arr1.length !== arr2.length) {
        // two arrays of unequal lengths can't return true
        return false;
    }
    else {
        // arrays are equal lengths, now iterate over each value in arr1
        // and search arr2 for that value squared
        for (let i = 0; i < arr1.length; i++) {
            // check if the current value squared is found arr2
            let currentIndex = arr2.indexOf(arr1[i]**2);
            if (currentIndex == -1) {
                return false;
            }
            else {
                // if the value squared is found, remove it from arr2
                arr2.splice(currentIndex, 1);
            }
        }
        return true;
    }
}

console.log(squared([1,2,3], [1,4,9])); // true
console.log(squared([1,2,3], [1,4,10])); // false

// Frequency Counter Better Solution
// time complexity - O(n) -- iterating over two arrays of the same length, at most.
// O(2n) => O(n)
// space complexity - O(n) -- occupying n space 

function betterSquared(arr1, arr2) {
    // check arrays for same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // create two objects to hold values and counts of values
    let obj1 = {};
    let obj2 = {};

    // iterate over each array separately and add value/count pairs to objects
    for (let element of arr1) {
        obj1[element] = (arr1[element] || 0) + 1;
    }

    for (let element of arr2) {
        obj2[element] = (arr2[element] || 0) + 1;
    }

    // for each key in object 1, search for its value squared in obj2
    // object lookups happen in constant time
    for (let key in obj1) {
        // check to see if the key squared exist in object 2
        if (!(key ** 2 in obj2)) {
            return false;
        }

        // check if the count of key and key^2 are the same
        if (obj1[key] !== obj2[key ** 2]) {
            return false;
        }
     
    }

    return true;
}


console.log(betterSquared([1,2,3], [1,4,9])); // true
console.log(betterSquared([1,2,3], [1,4,10])); // false


// Frequency Counter  - validAnagram
// Given two strings, write a function to determine if the second string is an agagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Examples:
// 1 validAnagram('','') // true
// 2 validAnagram('aaz', 'zza') // false
// 3 validAnagram('anagram', 'nagaram') // true
// 4 validAnagram('rat', 'car') // false
// 5 validAnagram('awesome', 'awesom') //false
// 6 validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') //false
// 7 validAnagram('qwerty', 'qeywrt') // true
// 8 validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -=1;
        }
    }

    return true;
}

console.log(validAnagram('','') + ' should be true'); // true
console.log(validAnagram('aaz', 'zza') + ' should be false'); // false
console.log(validAnagram('anagram', 'nagaram') + ' should be true'); // true
console.log(validAnagram('rat', 'car') + ' should be false'); // false
console.log(validAnagram('awesome', 'awesom') + ' should be false'); //false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') + ' should be false'); //false
console.log(validAnagram('qwerty', 'qeywrt') + ' should be true'); // true
console.log(validAnagram('texttwisttime', 'timetwisttext') + ' should be true'); // true


// Pair Sum
/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

// Naive solution to Pair Sum - O(n^2) time 
function sumZero(arr) {
    // iterate over array
    for (let i = 0; i < arr.length; i++) {
        // iterate over array from next index
        for (let j = i + 1; j < arr.length; j++) {
            // if the two values sum to 0, return the pair
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3] 
console.log(sumZero([-2,0,1,3])); // undefined
console.log(sumZero([1,2,3])); // undefined

// Improved solution to Pair Sum - O(n) time
function betterSumZero(arr) {
    // declare two pointers to the head and tail of array
    let left = 0;
    let right = arr.length - 1;

    // while the left index is less than the right index, loop
    while (left < right) {
        // store the sum as the values of left + right
        let sum = arr[left] + arr[right];

        // if the sum is 0, we are done and return the pair
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        // if the sum is greater than 0, move the right pointer down 1
        else if (sum > 0) {
            right --;
        }
        // if the sum is less than 0, move the left pointer up 1
        else {
            left ++;
        }
    }
}

console.log(betterSumZero([-3,-2,-1,0,1,2,3])); // [-3,3] 
console.log(betterSumZero([-2,0,1,3])); // undefined
console.log(betterSumZero([1,2,3])); // undefined


// Count Unique Values - O(n) time
/*
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in the array, 
but it will always be sorted. */

function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
      if (arr) {
          // create two index values, first and next
          let a = 0;
          let b = 1;

          // iterate over array
          for (let i = 0; i < arr.length; i++) {
              
            // check if the values at a and b are the same, if so increment b
              if (arr[a] === arr[b]) {
                  b++;
              }
              // if the values are different, then
              else {
                  // increment a
                  a++;
                  // overwrite the value at index a with the value in index b
                  arr[a] = arr[b];
                  // increment b
                  b++;
              }
          }
      // at this point, a is equal to the amount of unique values in our array. return it
      return a;
      }
  }


console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4