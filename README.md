# Javascript-Algorithms

Learning Data Structures and Algorithms by taking a Udemy course.

## Frequency Pattern
Given two arrays of numbers, create a function that will compare array1 to array2 and check if each value in array1 is squared in array2.
Also, the number of times a value occurs must be the same that the value ^2 occurs in the second array. for example, pattern([1,2,3], [1,4,9]) would return true, while pattern([1,2,3], [1,4,10]) would return false.

A naive solution could be iterating over all possible combinations to check if the pairs exist, which would be an O(n^2) runtime.

A better solution is to iterate over both arrays individually and store their numbers and counts of numbers as key/value pairs in an object. Once the objects are constructured, check to see if the keys in object one exist as keys^2 in obj2. Also, the count of each pair of values would also need to be equal.  This solution, with constant time lookups, runs in O(n) time, which is a significant improvement over the O(n^2).

## Anagrams
Given two strings, check to see if the strings are anagrams of each other.  Using the frequency pattern, we are able to achieve a time complexity of O(n).

## Multiple Pointers
Creating `pointers` or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition. `VERY` efficient for soliving problems with minimal space complexity as well.

## Pair Sum
Compare different indices in an array until a condition is met. For example, given an array of integers, find a pair of numbers whos sum is 0.

A naive solution is using a nested for loop to check for every possible combination of numbers to sum 0. This will take O(n^2) time.

A more efficient solution is to use two pointers: head and tail. These pointers respectively point to the head and tail of an array. In a sorted array, we are able compare head to tail and check if they sum to 0. If the sum is greater than 1, we move the tail pointer down. If the sum is less than 1, we move the head pointer up. If the sum is 0, we are done and return the pair.  This will take O(n) time to run, a significant improvement over our naive solution.

## Count Unique Values
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

This can be accomplished in linear time by using multiple variables. The first variable, A,  would refer to the index 0, the second variable, B,  would refer to index 1. Iterate over the array and compare the values at A and B. If the values are the same, increment B. If the values are different, a unique value has been found. At this point, increment A and overwrite the value stored at that index with the value stored at index B, then increment index b. Upon completion of scanning the entire array once, the variable A will contain the number of unique values in the array.

## Sliding Window
This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

## Max Subarray Sum
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.