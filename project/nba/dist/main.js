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


$(".grid-container").on("click", ".button", function () {
    let listIngredients = {}
    listIngredients.id = $(this).closest(".grid-item").attr("id")
    console.log(listIngredients);
    $.post(`/addPlayer`,listIngredients)

})



const getDreamTeam = function () {
    $.get(`dreamTeam/`, function (teams) {
        $('.grid-container').empty();
        const source = $('#dreamTeam-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ players: teams });
        $('.grid-container').append(newHTML);
    })
}