def insertionSort(nums):
    index = 1
    for i in range(index, len(nums)):
        for j in range(0, index):
            if nums[i] < nums[j]:
                insert = nums.pop(i)
                nums.insert(j, insert)
        if index is not len(nums):
            index += 1
    return nums
