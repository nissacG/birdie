const express = require('express')
const app = express()

const port = 5000

app.get('/hc', (req, res) => {
  const running = `I'm alive!`
  res.json(running)
})

app.listen(port, () => console.log(`Serving on Port ${port}`))
