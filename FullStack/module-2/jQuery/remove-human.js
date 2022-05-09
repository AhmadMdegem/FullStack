

$("botton").on("click", function () {
    let name = $("input").val()
    let divCopy = `<li > ${name} </li>`

    $("#list1").append(divCopy)
});


$("ul").on("click","li",function () {

    $(this).remove()
})

