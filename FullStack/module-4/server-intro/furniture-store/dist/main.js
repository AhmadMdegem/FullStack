const priceCheck = function () {
    let input = $("#name-input").val()
    $.get(`priceCheck/${input}`, function (storeData) {
        $("body").append(`<div>name : ${input} , price: ${storeData.price}</div>`)
    })
}
const buy = function () {
    let input = $("#buy-input").val()
    $.get(`buy/${input}`, function (storeData) {
        if (storeData.inventory)
            $("body").append(`<div>Congratulations, you’ve just bought ${input} for ${storeData.price}. There are ${storeData.inventory} left now in the store</div>`)
        else {
            $("body").append(`<div>There are not enough ${input} in store</div>`)
        }
    })

        
}