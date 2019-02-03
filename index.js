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

