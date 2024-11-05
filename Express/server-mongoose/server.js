const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
const db = require('./config/db')
const Products = require('./routes/ProductRoute')
const Order = require('./routes/OrderRoute')
const Users = require('./routes/UserRoute')


app.get('/', (req, res) => res.status(200).json({ message: "welcome" }))
//localhost:3000/
app.use('/products',Products)
//app.listen(port, (() => console.log(`Listening on ${port}`)))
app.use('/order',Order)
app.use('/users',Users)
//localhost:3000/products
app.listen(port, (() => console.log(`Listening on ${port}`)))
