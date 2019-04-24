const express = require('express')
const mysql = require('mysql')
const config = require('./config')

// MySQL Connection
const db = mysql.createConnection({
  host     : config.host,
  port     : config.port,
  user     : config.user,
  password : config.password
})

// Db connection test
db.connect((err) => {
  if (err) {
    console.log('err:', err)
  }
  console.log('Db connected...')
})

const app = express()

const port = 5000

// Server Heath Check
app.get('/hc', (req, res) => {
  const running = `I'm alive!`
  res.send(running)
})

app.listen(port, () => console.log(`Serving on Port ${port}`))
