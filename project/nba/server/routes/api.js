const express = require("express");
const router = express.Router()
const urllib = require('urllib');

const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756"
}

const dreamTeam = []

router.get('/teams/:teamName', function (request, response) {
    urllib.request(`http://data.nba.net/10s/prod/v1/2018/players.json`, function (err, data, res) {
        const dummyData = JSON.parse(data)
        let teamName = request.params.teamName
        let players = []
        players = getPlayersTeam(teamName, dummyData)
        response.send(players)
    })

})
router.put('/team', function (request, response) {
    let params = request.body
    teamToIDs[params.teamName] = params.teamId
    response.send(teamToIDs)
})

router.get('/dreamTeam', function (request, response) {
    response.send(dreamTeam)
})
router.post('/addPlayer', function (request, response) {
    console.log(request.body.id);
    urllib.request(`http://data.nba.net/10s/prod/v1/2018/players.json`, function (err, data, res) {
        const dummyData = JSON.parse(data)
        if (dreamTeam.length < 5 && dreamTeam) {
            dreamTeam.push(getPlayer(request.body.id, dummyData));
        }
    })
    response.end()
})

function getPlayersTeam(teamName, dummyData) {
    let players = []
    for (let index = 0; index < dummyData.league.standard.length; index++) {
        let player = {}
        if (dummyData.league.standard[index].teamId === teamToIDs[teamName] && dummyData.league.standard[index].isActive === true) {
            player.firstName = dummyData.league.standard[index].firstName
            player.lastName = dummyData.league.standard[index].lastName
            player.pos = dummyData.league.standard[index].pos
            player.img = `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
            player.jersey = dummyData.league.standard[index].jersey
            player.personId = dummyData.league.standard[index].personId
            players.push(player)
        }
    }
    return players
}

function getPlayer(personId, dummyData) {
    let player = {}
    for (let index = 0; index < dummyData.league.standard.length; index++) {

        if (dummyData.league.standard[index].personId === personId) {
            player.firstName = dummyData.league.standard[index].firstName
            player.lastName = dummyData.league.standard[index].lastName
            player.pos = dummyData.league.standard[index].pos
            player.img = `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
            player.jersey = dummyData.league.standard[index].jersey
            player.personId = dummyData.league.standard[index].personId
        }
    }
    return player
}


module.exports = router