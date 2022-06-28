//IMPORT
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const newConnection = require('./lib/mySqlDb.js')
const addRouter = require('./routes/add.js')
const editRouter = require('./routes/edit.js')
const port = 3001
const app = express()

//MIDDLEWARE AND VIEWS
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

//ROUTES
app.use('/', addRouter)
app.use('/', editRouter)

//PULL ALL RECORDS
app.get('/',(req, res)=>{
    let sql = 'SELECT * from cars'
    let query = newConnection.query(sql,(err, cars)=>{
        if(err) throw err
        // res.json(cars)
        res.render('index', {
            header:'Cars',
            records: cars,
            isAdd: false
        })
    })
})

//DELETE DATA
app.get('/delete/:id', (req, res) => {
    const id = req.params.id
    let sql = `DELETE FROM cars WHERE id=${id}`
    let query = newConnection.query(sql, (err, cars) => {
        if (err) throw err
        res.redirect('/');
        // res.send('record deleted')
    })
})

//CONNECTION CHECKING
newConnection.connect(function(error) {
    try {
        console.log('Connection to the database is Successfull!')
    } catch (err) {
        console.log(err)
    }
})
app.listen(port, () => {
    console.log(`Port is now running at ${port}`)
})