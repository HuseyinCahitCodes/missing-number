const test = (nums) => {
  for (let i = 1; i <= nums.length + 1; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    }
  }
};

nums = [1, 2, 3, 4, 5, 6, 8, 9, 10];
alert("Your missing number is " + test(nums));

/////////////////////////////////////////////////////

const findNum = (arr) => {
  let n = arr.length;
  let sum = ((n + 2) * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum -= arr[i];
  }
  return sum;
};

let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
alert("Your missing number is " + findNum(arr));

//////////////////////////////////////////////////

const missingNums = (nums, n) => {
  let missingNums = [];
  for (let i = 1; i <= n; i++) 
    if (!nums.includes(i)) 
      missingNums.push(i);
      return missingNums;
};

alert("Your missing numbers are " + missingNums([1, 2, 4, 6, 8, 9, 10], 10));
