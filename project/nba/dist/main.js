const getTeamPlayers = function () {
    let input = $("#input").val()
    $.get(`teams/${input}`, function (teams) {
        $('.grid-container').empty();
        const source = $('#players-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ players: teams });
        $('.grid-container').append(newHTML);   
    })
}