const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon app listening on port ${port}`)
})