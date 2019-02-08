// Google Interview Question on Youtube
// https://www.youtube.com/watch?v=XKu_SEDAykw&t=941s
// Given a number, and an array of sorted numbers, find a pair in the array that sum to the target number. return the pair if found, -1 if not
// THEY ARE ORDERED ASCENDING

// O(n^2) time, O(1) space
function pairSum(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return -1;
     
}

console.log(pairSum(8, [1,2,3,9]));
console.log(pairSum(8, [1,2,4,4]));


// O(n) time, O(1) space
function pairSumPlus (target, arr) {
    let left = 0;
    let right = arr.length -1;

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [arr[left], arr[right]];
        }
        else if (sum > target) {
            right--;
        }
        else {
            left ++;
        }
    }
    return -1;
}

console.log(pairSumPlus(8, [1,2,3,9]));
console.log(pairSumPlus(8, [1,2,4,4]));
console.log(pairSumPlus(8, [-4,-3,-2,-1,0,1,2,3,4,5]));

// interviewer throws wrench in problem at this point in talk
// can no longer guarantee that the list is sorted

// O(n) time for unsorted list because of object constant time lookup.

function pairSumUnsorted(target, arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[target - arr[i]]) {
            return [target - arr[i], arr[i]];
        } else {
            obj[arr[i]] = 1;
        }
    }
    return - 1;
}
console.log(pairSumUnsorted(8, [9,3,1,2]));
console.log(pairSumUnsorted(8, [4,2,2,4]));
console.log(pairSumUnsorted(8, [-4,5,-2,3,0,-1,2,3,4,-5]));
