const fetch = function (input) {
    $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`, function (gifs) {
        $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
    })
}


$("#submit").on("click", function () {
    let input = $("#yourgif").val()
    $("#yourgif").val('')

    console.log(input)
    fetch(input)
})