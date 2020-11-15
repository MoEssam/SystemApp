const express = require('express')
const path = require('path')
const userRouter = require('./routers/cognito-user')
const bodyParser = require('body-parser')
require('dotenv/config')
global.fetch = require('node-fetch');

const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
    res.send('Hello from MOE')
})

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})