const express = require('express')
const app = express()
const path = require('path')
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
let flag = 0
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.get('/priceCheck/:name', function (request, response) {
    let name1 = request.params.name
    let flag = 0
    for (let index = 0; index < store.length; index++) {
        if(store[index].name === name1){
            response.send({price: store[index].price})
            flag = 1
        }
    }
    if(flag === 0)
        response.send({price : null})
})
app.get('/buy/:name', function (request, response) {
    let name1 = request.params.name
    let flag = 0
    for (let index = 0; index < store.length; index++) {
        if(store[index].name === name1){
            if(store[index].inventory){
                store[index].inventory -= 1
                response.send({inventory:  store[index].inventory, price: store[index].price})
                flag = 1
            } else {
               flag = 0
            }
        }
    }
    if(flag === 0)
        response.send({inventory : null, price: null})
})

app.get('/sale/', function (request, response) {
    let query = request.query
    let dummy = [...store]

    if(query.admin === 'true'&& flag === 0) {
        flag = 1
        for (let index = 0; index < dummy.length; index++) {
            if(dummy[index].inventory > 10 ) {
                dummy[index].price *= 0.5
            }
        }
    }
    response.send(dummy)
})

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})