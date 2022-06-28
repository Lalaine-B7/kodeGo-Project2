//IMPORT
const express = require('express')
const myConnection = require('../lib/mySqlDb.js')
const addRouter = express.Router()

addRouter.get('/add', (req, res)=>{
    res.render('add',{
        header:'Add Record'
    })
   
})

//ADD DATA
addRouter.post('/update',(req, res)=>{
    let dataInput = {
        CAR_NAME: req.body.CAR_NAME,
        BRAND: req.body.BRAND,
        BODY_TYPE: req.body.BODY_TYPE,
        YEAR: req.body.YEAR,
        TRANSMISSION: req.body.TRANSMISSION,
        TYPE: req.body.TYPE,
        ENGINE: req.body.ENGINE,
        SEAT: req.body.SEAT,
        COLOR: req.body.COLOR,
        CONDITION: req.body.CONDITION
    }
    let sql = 'INSERT INTO cars set ?'
    let query = myConnection.query(sql, dataInput, (err, cars)=>{
        if(err) throw err
        res.json(cars)
        //res.status(202).send('Nice!')
    let sql = 'SELECT * from cars'
    let query = myConnection.query(sql, (err, cars) =>{
        
        if (err) throw err
        err.render('index', {
            header: 'New Records',
            records: cars,
            isAdd: true
        })
    })
    })

})
module.exports =addRouter