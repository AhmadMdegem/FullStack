let pcData=[]

$(".generator").on("click",function(){
    console.log("Processor ID: " + $(this).closest(".processor").attr("id"))
    let id = $(this).closest(".computer").data().id
    let obj = {}
    obj.cmp_id = id
    pcData.push(obj)
    console.log("The computer’s data-id is " + id )
    console.log("The bus " + $(this).closest(".computer").find(".BUS").text())

  })
  
  $(".validator").on("click",function(){
    console.log("The generator’s text is " + $(this).text())
  
    console.log("The MB is  " + $(this).closest(".computer").find(".MB").text())
    console.log("The buth qrs is  " + $(this).closest(".computer").find(".QR").text())


  })
  