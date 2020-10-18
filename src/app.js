const path = require('path')
const express = require('express')



const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath)) 

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App!',
        name: 'Audrey Hepburn'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me', 
        name: 'Audrey Hepburn'
    })
})

app.get('/help', (req, res) => {
    res.render('about', {
        title: 'Help page',
        paragraph: 'Hello here is the help page. Below are some FAQ. If your question has not been answered, send an email please.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Its snowing!!!!',
        location: 'Los Angeles'
    })
    
})

app.listen(3000, () => {
    console.log("Servr is workingggg")
})



// app.get('', (req, res) => {
//     res.send('<h1>Weather App</h1>')
// });

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Ben',
//         age: 99
//     }, {
//         name: 'Sandra'
//     })
    
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
 
// })


//app.com
//app.com/help
//app.com/about

//port 3000 