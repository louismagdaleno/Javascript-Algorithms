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