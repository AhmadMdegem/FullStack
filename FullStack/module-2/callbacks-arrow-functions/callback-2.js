const time = new Date()
const returnTime = function (time) {
    console.log(('The current time is: ' + time));
}

const getTime = function (func) {
    func(time)
}

getTime(returnTime)