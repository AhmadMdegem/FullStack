
const addItem = function () {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    document.getElementById("myList").appendChild(newItem)
}