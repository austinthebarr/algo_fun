function bubbleSort (nums) {
    let swapped = true;
   
    while(swapped) {
      swapped = false
    for (let i=0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]){
          swapped = true;
          let first = nums[i];
          let last = nums[i+1];
          nums[i] = last;
          nums[i+1] = first;
        }
      }  
    }
    return nums;
}
