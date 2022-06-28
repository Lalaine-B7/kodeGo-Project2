const express = require('express')
const myConnection = require('../lib/mySqlDb.js')
const bodyParser = require('body-parser')

input = bodyParser.urlencoded({ extended: false })
var getId
const editRouter = express.Router()
editRouter.use(bodyParser.json())
editRouter.use(bodyParser.urlencoded({ extended: false }))
editRouter.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    let sql = `SELECT * FROM cars where id = ${id}`
    let query = myConnection.query(sql, (err, records) => {
        if (err) throw err;
        res.render('edit', {
            records: cars[0],
            header: 'Edit Records'
        })
    })
    getId = id
})
editRouter.post('/save', input, (req, res) => {
        const CAR_NAME = req.body.CAR_NAME
        const BRAND = req.body.BRAND
        const BODY_TYPE = req.body.BODY_TYPE
        const YEAR = req.body.YEAR
        const TRANSMISSION = req.body.TRANSMISSION
        const TYPE = req.body.TYPE
        const ENGINE = req.body.ENGINE
        const SEAT = req.body.SEAT
        const COLOR = req.body.COLOR
        const CONDITION = req.body.CONDITION

    let sql = `UPDATE cars
    SET CAR_NAME='${CAR_NAME}',BRAND='${BRAND}',BODY_TYPE='${BODY_TYPE}',YEAR='${YEAR}',TRANSMISSION='${TRANSMISSION}',TYPE='${TYPE}',ENGINE='${ENGINE}',SEAT ='${SEAT }',COLOR='${COLOR}',CONDITION='${CONDITION}'
    WHERE ID=${getID}`
    let query = myConnection.query(sql, (err, cars) => {
        res.redirect('/')
    })

})
module.exports = editRouter