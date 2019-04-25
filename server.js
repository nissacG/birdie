const express = require('express')
const mysql = require('mysql')
const config = require('./config')

// MySQL Connection
const db = mysql.createConnection({
  host     : config.host,
  port     : config.port,
  user     : config.user,
  password : config.password,
  multipleStatements: true
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
  res.json(running)
})

// Get all columns
app.get('/getcolumns', (req, res) => {
  let sql = `SHOW columns FROM birdietest.census_learn_sql`
  let query = db.query(sql, (err, results) => {
    if (err) throw err
    res.json(results)
    // res.send('data fetched')
  })
})

// Get selected column data
app.get('/getcolumndata/:column', (req, res) => {
  let sql = `SELECT \`${req.params.column}\`, count(\`${req.params.column}\`) AS count, AVG(age) AS averageAge from birdietest.census_learn_sql GROUP BY \`${req.params.column}\` LIMIT 100;
            SELECT COUNT(DISTINCT(\`${req.params.column}\`)) AS total_values FROM birdietest.census_learn_sql`
  let query = db.query(sql, [1,2], (err, results) => {
    if (err) console.log(err)
    res.json(results)
  })
})

app.listen(port, () => console.log(`Serving on Port ${port}`))
