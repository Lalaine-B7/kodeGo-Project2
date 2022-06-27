//import
const express = require('express')
const addRouter = express.Router()

addRouter.get('/add', (req, res)=>{
    res.render('add',{
        header:'Add Record'
    })
})

module.exports =addRouter