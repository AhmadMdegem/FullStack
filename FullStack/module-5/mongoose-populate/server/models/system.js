const mongoose = require('mongoose')
const Schema = mongoose.Schema


const solarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'planet' }],
    starName: String
})



const SolarSystem = mongoose.model('solarSystem', solarSystemSchema)

module.exports = SolarSystem