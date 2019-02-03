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
        if (!(key **2 in obj2)) {
            return false;
        }

        // check if the count of key and key^2 are the same
        if (obj1[key] !== obj2[key ** 1]) {
            return false;
        }
     
    }

    return true;
}


console.log(betterSquared([1,2,3], [1,4,9])); // true
console.log(betterSquared([1,2,3], [1,4,10])); // false
