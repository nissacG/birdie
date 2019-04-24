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

// Db connection
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

// Get x amount of data
app.get('/getdata/:amount', (req, res) => {
  let sql = `SELECT * FROM birdietest.census_learn_sql LIMIT ${req.params.amount}`
  let query = db.query(sql, (err, results) => {
    if (err) throw err
    res.json(results)
    // res.send('data fetched')
  })
})

app.listen(port, () => console.log(`Serving on Port ${port}`))
