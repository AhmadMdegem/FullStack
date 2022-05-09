const ballNode = document.getElementById("block")
const ADD_NUM = 15
const getLeftPosition = function (ballNode) {
    return parseInt(ballNode.style.left) || 0
}

const getTopPosition = function (ballNode) {
    return parseInt(ballNode.style.top) || 0
}
const moveRight = function () {
    let left = getLeftPosition(ballNode)
    if (left + ADD_NUM <= 405) {
        left += ADD_NUM
        left += "px"
        ballNode.style.left = left
    }
}
const moveLeft = function () {
    let left = getLeftPosition(ballNode)
    if (left - ADD_NUM >= 0) {
        left -= ADD_NUM
        left += "px"
        ballNode.style.left = left
    }
}

const moveDown = function () {
    let top = getTopPosition(ballNode)
    if (top + ADD_NUM <= 330) {
        top += ADD_NUM
        top += "px"
        ballNode.style.top = top
    }
}

const moveTop = function () {
    let top = getTopPosition(ballNode)
    if (top - ADD_NUM >= 0) {
        top -= ADD_NUM
        top += "px"
        ballNode.style.top = top
    }

}