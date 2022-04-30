const fetch = function () {
    $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu", function (gifs) {
        console.log(gifs.data[0].embed_url)
        $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
    })
}

fetch()