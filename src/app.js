const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()


//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine and views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
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
    res.render('help', {
        helpText: 'Words of wisdom.',
        title: 'Help',
        name: "Andrew"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Its snowing!!!!',
        location: 'Los Angeles'
    })
    
})

app.get('/footer', (req, res) => {
    res.render('footer', {
       footer: 'this is a footer '
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