const findFactorial = function (num) {
    if (num === 0)
        return 1
    if (num === 1)
        return 1
    return factorials(num - 1) * num
}
console.log(findFactorial(0));