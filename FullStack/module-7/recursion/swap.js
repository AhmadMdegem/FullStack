const swap = function (arr1, arr2) {
    if (arr1.length === 0) {
        return arr1
    }
    arr2.push(arr1[0])
    arr1.shift()
    return swap(arr1, arr2)
}
arr1 = [3, 2, 1]
arr2 = []
swap(arr1, arr2)
console.log(arr1);
console.log(arr2);
