const express = require('express')
const app = express()
const port = 3000
const categories = require('./data/categories.json')


const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Again My Dragon News Server...')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

// option one all data get
const news = require('./data/news.json')
app.get('/news', (req, res) => {
    res.send(news)
})


// specific id 
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

// category id
app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    if (id == 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})


app.listen(port, () => {
    console.log(`My Dragon server running on port again ${port}`)
})

