const express = require('express')
const moment = require('moment');
const router = express.Router()

const Expense = require("../models/expense")
const expenseJSON = require("../../expenses")

// expenseJSON.forEach(expenseObj => {
//     let expense = new Expense({
//         name: expenseObj.item,
//         amount: expenseObj.amount,
//         date: expenseObj.date,
//         group: expenseObj.group
//     })
//     expense.save()
// })

const getDate = date => {
    if (date == null) {
        return moment().format('LLLL')
    } else {
        return moment(date).format('LLLL')
    }
}

router.get("/expenses", function (request, response) {
    Expense.find({})
        .sort({ date: -1 })
        .exec(function (err, expenses) {
            console.log(expenses)
            response.send(expenses)
        })
})

router.post("/expense", function (request, response) {
    const data = request.body
    let expense = new Expense({
        name: data.name,
        amount: data.amount,
        group: data.group,
        date: getDate(data.date)
    })

    console.log("expense: ", expense)

    const expensePromise = expense.save()
    expensePromise.then(function (expense) {
        console.log(`The amount of expense is ${expense.amount}\n and you spent your money on ${expense.group}`)
    })
    response.send(`New expense was inserted -> ${expense}`)
})

router.put("/update/:group1/:group2", function (request, response) {
    const group1 = request.params.group1
    const group2 = request.params.group2
    Expense.findOneAndUpdate({ group: group1 }, { group: group2 }, { new: true })
        .exec(function (err, expense) {
            console.log(expense)
            response.send(`The ${group1} expense changed , to ${expense.group} group`)
        })
})

router.get("/expenses/:group", function (request, response) {
    const groupData = request.params.group
    Expense.find({ group: groupData })
        .exec(function (err, expenses) {
            response.send(`All expenses per a specific category founded ${expenses}`)
        })
})

router.get("/expenses/total/:group", function (request, response) {
    const groupData = request.params.group
    Expense.aggregate([
        { $match: { group: groupData } },
        {
            $group: { _id: "$group", total: { $sum: "$amount" } }
        }]).exec((err, total) => {
            response.send(total);
    })
})

module.exports = router

