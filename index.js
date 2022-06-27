//IMPORT
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mySql = require('mysql')

const addRouter = require('./routes/add.js')

const port = 3001
const app = express()

//MIDDLEWARE AND VIEWS
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

//ROUTES
app.use('/', addRouter)
app.get('/',(req, res)=>{
    let sql = 'SELECT * from cars'
    let query = myConnection.query(sql,(err, cars)=>{
        if(err) throw err
        // res.json(cars)
        res.render('index', {
            header:'Cars',
            records: cars
        })
    })
})


//DATABASE CONNECTION

//CONNECTION(PORT & SERVER) CONNECTION CHECKING
const myConnection = mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mysqldb100'
})
myConnection.connect(function(error){
if(!!error)console.log(error) 
else console.log('Connected to mysqldb100!')


})
app.listen(port, ()=>{
    console.log(`connected at port ${port}`)
})