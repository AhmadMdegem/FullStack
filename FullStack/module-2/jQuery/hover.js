
    $("body").append("<div class=box id=id1></div>");
    $("body").append("<div class=box id=id2></div>");

 
  
    $("#id2").hover(function () {
        $("#id1").css("background-color", "purple")
        $(this).css("background-color", "orange")

    })
    
   
    $("#id1").hover(function () {
        $("#id2").css("background-color", "purple")
        $(this).css("background-color", "orange")

    })
    