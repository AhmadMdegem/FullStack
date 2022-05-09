$("#items").on("click",".item", function(){
    let name = $(this).data()
    if(name.instock){
        let text = $(this).text()
        let divCopy = `<div class=cart-item> ${text} </div>`
        $("#cart").append(divCopy)
    }
  })