const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(require('./routes'))

// Index
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '.public/index.html'))
})

// Excercise
app.get('/exercise', (req, res) => {
    res.sendFile(join(__dirname, './public/exercise.html'))
})

// Stats
app.get('/stats', (req, res) => {
    res.sendFile(join(__dirname, './public/stats.html'))
})

require('./config')
    .then(() => app.listen(3000))
    .catch(e => console.error(e))