const express = require('express')
const app = express()
const port = 3000
const categories = require('./data/categories.json')
const news = require('./data/news.json')

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Again My Dragon News Server...')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.listen(port, () => {
    console.log(`My Dragon server running on port again ${port}`)
})