const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib');

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756"
}

app.get('/teams/:teamName', function (request, response) {
    urllib.request(`http://data.nba.net/10s/prod/v1/2018/players.json`, function (err, data, res) {
        const dummyData = JSON.parse(data)
        let teamName = request.params.teamName
        let players = []
        players = getPlayersTeam(teamName, dummyData)
        response.send(players)
    })

})

function getPlayersTeam(teamName, dummyData) {
    let players = []
    for (let index = 0; index < dummyData.league.standard.length; index++) {
        let player = {}
        if (dummyData.league.standard[index].teamId === teamToIDs[teamName] && dummyData.league.standard[index].isActive === true) {
            player.firstName = dummyData.league.standard[index].firstName
            player.lastName = dummyData.league.standard[index].lastName
            player.pos = dummyData.league.standard[index].pos
            player.img = `https://nba-players.herokuapp.com/players/${player.firstName}`
            player.jersey = dummyData.league.standard[index].jersey
            players.push(player)
        }
    }
    return players

}

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})