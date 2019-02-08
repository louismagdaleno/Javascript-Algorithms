// Sliding Window

// This pattern involves creating a window which can either be an array or number from one position to another

// Depending on a certain condition, the window either increases or closes (and a new window is created)

// Very useful for keeping track of a subset of data in an array/string etc.

// Example #1

// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// O(n^2) time complexity due to nested for loops.
function maxSubarraySum(arr, n) {
    if (arr.length === 0) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {

        let sum = arr[i];
        for (let j = i + 1; j < i + n; j ++) {
            sum += arr[j];
        }
       if (sum > max) max = sum;
    }

}
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null