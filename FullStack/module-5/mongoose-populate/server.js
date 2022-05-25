const express = require('express')
const app = express()

const mongoose = require('mongoose')
const SolarSystem = require("./server/models/system")
const Planet = require("./server/models/planet")
const Visitor = require('./server/models/visitor')

mongoose.connect('mongodb://0.0.0.0:27017/solarSystem', { useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const Schema = mongoose.Schema

const solarSystem = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'planet' }],
    starName: String
})
const planet = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'solarSystem' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'visitors' }]
})
const visitors = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'planet' }]
})

let s1 = new SolarSystem({
    planets: [],
    starName: 'sun'
})

let moon = new Planet({
    name: 'moon',
    system: s1,
    visitors: []
})
let earth = new Planet({
    name: 'earth',
    system: s1,
    visitors: []
})

let v1 = new Visitor({
    name: 'omar',
    homePlanet: moon,
    visitedPlanets: [moon, earth]
})
let v2 = new Visitor({
    name: 'basel',
    homePlanet: earth,
    visitedPlanets: [earth, moon]
})

// s1.planets.push(earth)
// s1.planets.push(moon)
// s1.save()
// earth.save()
// moon.save()
// v1.save()
// v2.save()
Visitor.findById('628488056d3a21d237f84c1f').populate('visitedPlanets homePlanet').exec(function (err, result) {
    result.visitedPlanets.forEach(p => console.log(p.name));
})
const fetchData = async function () {
    const result = await SolarSystem
        .findOne({})
        .populate({
            path: "planets",
            populate: { path: "visitors" }
        })
        .exec()
       return result
}

fetchData().then(function (result) {
    result.planets.forEach(p => {
        console.log(p.name + " visitors: ");
        p.visitors.forEach(v => console.log(v.name))
    })
})
const getMixedData = async function () {
    const allPlanets = await Planet.find({})
    const allVistors = await Visitor.find({})
    const result = {allPlanets,allVistors}
    return result
}
getMixedData().then(result => console.log(result))
