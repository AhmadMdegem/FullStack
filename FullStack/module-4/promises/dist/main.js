
$.get('/randomWord')
    .then(function (word) {
        let books = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        let gifs = $.get(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)
        Promise.all([books,gifs]).then(function (results){
            console.log(results);
        })
    }) 