def mergeSort(nums):
    length = len(nums)
    if length < 2:
        return nums

    middle = length//2
    first = nums[:middle]
    last = nums[middle:]

    return stitch(mergeSort(first), mergeSort(last))


def stitch(first, last):
    results = []
    while len(first) > 0 and len(last) > 0:
        if first[0] < last[0]:
            results.append(first.pop(0))
        else:
            results.append(last.pop(0))

    return results + first + last
