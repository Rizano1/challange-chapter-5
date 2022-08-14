const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const jsonParser = bodyParser.json()
const app = express()
const port = 3000

app.use('/style.css', express.static(__dirname + '/style.css'))
app.use('/bootstrap-5.2.0-beta1-dist', express.static(__dirname + '/bootstrap-5.2.0-beta1-dist'))
app.use('/assets', express.static(__dirname + '/assets'))
app.use('/suit.css', express.static(__dirname + '/suit.css'))
app.use('/suit.js', express.static(__dirname + '/suit.js'))

app.get('/', (req, res) => {
    res.send('halo')
})

app.get('/main', (req, res) => {
    res.sendFile(__dirname +  '/index.html')
})

app.get('/game', (req, res) => {
    res.sendFile(__dirname +  '/suit.html')
})

app.get('/user', (req, res) => {
    res.sendFile(__dirname +  '/user.json')
})

app.post('/login', jsonParser, (req, res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let user = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))

    for(let i = 0; i < user.length; i++){
        if (username == user[i].username && email == user[i].email && password == user[i].password){
            res.send("Authorized")
        }
    }

    for(let i = 0; i < user.length; i++){
        if (username != user[i].username || email !=  user[i].email || password !=  user[i].password) {
            res.status(401).send("Unauthorized")
        }
    }


})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
