class APIManager {
    constructor() {
        this.data = {}
    }

    loadUserData() {
        $.ajax({
            context: this,
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            success: function (data) {
                this.data['results'] = data.results
                let mainUser = {}
                let friends = []
                mainUser["first"] = data.results[0].name.first
                mainUser["last"] = data.results[0].name.last
                mainUser["picture"] = data.results[0].picture.large
                mainUser["city"] = data.results[0].location.city
                mainUser["state"] = data.results[0].location.state
                this.data['mainUser'] = mainUser
                for (let user of this.data.results) {
                    let f1 = {}
                    f1.first = user.name.first
                    f1.last = user.name.last
                    friends.push(f1)
                }
                friends = friends.slice(1)
                this.data['friends'] = friends

            }
        })
    }

    loadQuoteData() {
        $.ajax({
            context: this,
            method: "GET",
            url: 'https://api.kanye.rest/',
            success: function (quote) {
                this.data['quote'] = quote
            }
        })
    }
    loadMeatData() {
        $.ajax({
            context: this,
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            success: function (info) {
                this.data['meat'] = info
            }
        })
    }
    loadPokemonData() {
        $.ajax({
            context: this,
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/` + Math.floor(Math.random() * 1126 + 1),
            success: function (info) {
                let pokemon = {}
                pokemon.picture = info.sprites.front_default
                pokemon.name = info.forms[0].name
                this.data['pokemon'] = pokemon
                
            }
        })
    }
    loadData() {
        this.loadUserData()
        this.loadQuoteData()
        this.loadMeatData()
        this.loadPokemonData()
       
    }
    getData(){
        
        return this.data
    }
}


