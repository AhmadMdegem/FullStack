const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})
router.post('/person', function (req, res) {
    let p1 = new Person(req.body)
    p1.save()
    res.end()
})

router.put('/person/:id', function(req,res){
    Person.findById(req.params.id, function (err, person) {
        person.age = 80 //how time flies
        person.save()
    })
    res.end()
})
router.delete('/apocalypse',function (req, res) {
    Person.find({}, function (err, person) {
        person.forEach(element => {element.remove(function (err) {
            console.log(err) 
        })
    })
    res.end()
})
})
module.exports = router