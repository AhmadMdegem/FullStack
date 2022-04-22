

$("bottom").on("click", function(){
    let name = $("input").val()
    let divCopy = `<li class=feedme> ${name} </li>`
    
    $("#list1").append(divCopy)
  })