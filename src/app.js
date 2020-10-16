const express = require('express')


const app = express()

app.get('', (req, res) => {
    res.send('Hello express framework!')
});

app.get('/help', (req, res) => {
    res.send('Help page')
    console.log('help page')
})

app.get('/about', (req, res) => {
    res.send('About us')
    console.log(hiiii)
})

app.get('/weather', (req, res) => {
    res.send('Weather update')
    console.log('theres a 90% chance its already raining')
})


//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log("Servr is workingggg")
})
//port 3000 