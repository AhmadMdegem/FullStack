const findByIsbn= function (data) {
    console.log(data.items[0].volumeInfo.title + ' by ' + data.items[0].volumeInfo.authors[0] )
}


const fetch = function (isbn) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: findByIsbn,
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}
fetch(9782806269171)
fetch(1440633908)
fetch(9781945048470)
fetch(9780307417138)
