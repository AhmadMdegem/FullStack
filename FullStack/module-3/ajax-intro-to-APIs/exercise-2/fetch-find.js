const findByQueryType = function (data) {
    console.log(data.items[0].volumeInfo.title + ' by ' + data.items[0].volumeInfo.authors[0] )
}

const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: findByQueryType ,
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch('title',"The Wise Man's Fears")
fetch('isbn',9789814561778)
