const getRandomColor = function () {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}




for (let index = 2; index < 6; index++) {
    const newItem = document.createElement("div")
    newItem.setAttribute("Id", index)
    newItem.innerHTML = index
    
    
    document.getElementById("container").appendChild(newItem)
    newItem.onmouseenter = function () {
        this.style.backgroundColor=getRandomColor()
    }
}



