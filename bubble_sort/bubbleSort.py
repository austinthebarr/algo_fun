def bubbleSort(nums):
    swapped = True
    while(swapped):
        swapped = False
        for index in range(len(nums)-1):
            first = nums[index]
            next = nums[index + 1]
            if first > next:
                swapped = True
                nums[index] = next
                nums[index + 1] = first
    return nums
