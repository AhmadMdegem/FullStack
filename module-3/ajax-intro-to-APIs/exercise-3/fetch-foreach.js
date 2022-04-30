const findByQueryType = function (data) {
        data.items.forEach(item => console.log(`Title: ${item.volumeInfo.title},
         Author: ${item.volumeInfo.authors}, 
         ISBN: ${item.volumeInfo.industryIdentifiers[0].identifier}`))
    
}

const fetch = function () {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:9782806269171',
        success: findByQueryType ,
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch()