const box = document.createElement("div") 

box.setAttribute("class", "box")
box.onclick = function(){     
    box.innerHTML = "I'm alive!"
}

document.getElementById("aa").appendChild(box) 