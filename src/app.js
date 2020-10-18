const path = require('path')
const express = require('express')



const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath)) 

app.get('', (req, res) => {
    res.send('<h1>Weather App</h1>')
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Ben',
        age: 99
    }, {
        name: 'Sandra'
    })
    
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
 
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Its snowing!!!!',
        location: 'Los Angeles'
    })
    
})


//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log("Servr is workingggg")
})
//port 3000 