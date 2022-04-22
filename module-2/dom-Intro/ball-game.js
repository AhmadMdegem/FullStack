const moveRight = function () {
    let l = parseInt(document.getElementById("block").style.left) || 0
    if (l + 15 <= 405) {

        l += 15
        l += "px"
        document.getElementById("block").style.left = l
    }
}
const moveLeft = function () {
    let l = parseInt(document.getElementById("block").style.left) || 0
    if (l - 15 >= 0) {

        l -= 15
        l += "px"
        document.getElementById("block").style.left = l
    }
}
const moveDown = function () {
    let l = parseInt(document.getElementById("block").style.top) || 0
    if (l + 15 <= 330) {

        l += 15
        l += "px"
        document.getElementById("block").style.top = l
    }
}
const moveTop = function () {
    let l = parseInt(document.getElementById("block").style.top) || 0

    if (l - 15 >= 0) {
        l -= 15
        l += "px"
        document.getElementById("block").style.top = l
    }

}