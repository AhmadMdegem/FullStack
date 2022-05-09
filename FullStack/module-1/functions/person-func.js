people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]


function nameCapital(pepoleInfo) {
    let j = 0
    for (item of pepoleInfo) {
        let value = Object.values(item)
        j += 1
        for (let index = 0; index < value.length; index++) {
            if (typeof (value[index]) == 'string') {
                item[j][index] = value[index].toUpperCase()
                console.log(item[j][index]);
            }

        }
    }

}
function cityCountry(pepoleInfo) {

    for (item of pepoleInfo) {

        return item.city +', '+ item.country
    }

}
cityCountry(people_info)

