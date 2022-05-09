
function isEven(num) {
    return num % 2 == 0
}



function printOddNumbers(arrayNum) {

    for (let index = 0; index < arrayNum.length; index++) {
        if (!isEven(arrayNum[index])) {
            console.log(arrayNum[index]);
        }

    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

printOddNumbers(arr)
