# Javascript-Algorithms

Learning Data Structures and Algorithms by taking a Udemy course.

## Frequency Pattern
Given two arrays of numbers, create a function that will compare array1 to array2 and check if each value in array1 is squared in array2.
Also, the number of times a value occurs must be the same that the value ^2 occurs in the second array. for example, pattern([1,2,3], [1,4,9]) would return true, while pattern([1,2,3], [1,4,10]) would return false.

A naive solution could be iterating over all possible combinations to check if the pairs exist, which would be an O(n^2) runtime.

A better solution is to iterate over both arrays individually and store their numbers and counts of numbers as key/value pairs in an object. Once the objects are constructured, check to see if the keys in object one exist as keys^2 in obj2. Also, the count of each pair of values would also need to be equal.  This solutions, with constant time lookups, runs in O(n) time.

## Anagrams
Given two strings, check to see if the strings are anagrams of each other.  Using the frequency pattern, we are able to achieve a time complexity of O(n).
