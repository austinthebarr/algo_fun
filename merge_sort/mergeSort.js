const mergeSort = (nums) => {
  const length = nums.length;
  if (length < 2) {
    return nums;
  }
  let mid = Math.floor(length / 2);
  let start = nums.slice(0, mid);
  let last = nums.slice(mid);

  return stitch(mergeSort(start), mergeSort(last));
};

const stitch = (start, last) => {
  const results = [];
  while (start.length && last.length) {
    if (start[0] < last[0]) {
      results.push(start.shift());
    } else {
      results.push(last.shift());
    }
  }

  return [...results, ...start, ...last];
};
