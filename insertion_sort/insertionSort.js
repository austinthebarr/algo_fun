function insertionSort (nums) {
    for(let i = 1; i < nums.length; i++){
      for(let j = 0; j < i; j++) {
        console.log(nums + ' I = ' + i + ' J = ' + j )
        // 5 < 10
        if(nums[i] < nums[j]){
         // [5]
          const spliced = nums.splice(i,1);
         // [5,10..]
          nums.splice(j,0,spliced[0])
        }
      }
    }
   return nums;
  }