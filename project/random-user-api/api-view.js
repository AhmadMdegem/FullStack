
class Renderer {
    constructor() {
        this.data = {}
    }
    renderAll(data) {
        this.data = data
        this.renderFriends(this.data.friends)
        this.renderUser(this.data.mainUser)
        this.renderQuote(this.data.quote)
        this.renderPokemon(this.data.pokemon)
        this.renderMeat(this.data.meat)

    }

    renderFriends(data) {
        let source = $('#friends-template').html();
        let template = Handlebars.compile(source);
        $(".friends-container").empty()
        let newHTML = template({ friend: data });
        $(".friends-container").append(newHTML);
    }


    renderUser(data) {
        let source1 = $('#user-template').html();
        let template1 = Handlebars.compile(source1);
        $(".user-container").empty()
        let newHTML = template1({ user: data });
        $(".user-container").append(newHTML);
    }


    renderQuote(quot) {
        let quote = $('#quote-template').html();
        let templateQuote = Handlebars.compile(quote);
        $(".quote-container").empty()
        let newHTML = templateQuote({ quote: quot.quote });
        $(".quote-container").append(newHTML);
    }

   
    renderMeat(meat) {
        let meatt = $('#meat-template').html();
        let templateMeat = Handlebars.compile(meatt);
        $(".meat-container").empty()
        let newHTML = templateMeat({ meat: meat[0] });
        $(".meat-container").append(newHTML);
    }

   
    renderPokemon(poke) {
        let pokemon = $('#pokemon-template').html();
        let templatePokemon = Handlebars.compile(pokemon);
        $(".pokemon-container").empty()
        poke.name = poke.name[0].toUpperCase() + poke.name.slice(1)
        let newHTML = templatePokemon({ pokemon: poke });
        $(".pokemon-container").append(newHTML);
    }

}