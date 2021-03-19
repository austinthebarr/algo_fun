def quickSort(nums):
    if len(nums) < 2:
        return nums

    pivot = nums[len(nums) - 1]
    left = []
    right = []

    for i in range(len(nums) - 1):
        if nums[i] < pivot:
            left.append(nums[i])
        else:
            right.append(nums[i])
    return quickSort(left) + [pivot] + quickSort(right)
