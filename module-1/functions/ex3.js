
function checkExists(array, num) {

    for (let index = 0; index < array.length; index++) {
        if (num === array[index]) {
            return true
        }
    }
    return false
}

console.log(checkExists([1, 2, 3], 2)) //true
console.log(checkExists([1, 2, 3], 5)) //false
