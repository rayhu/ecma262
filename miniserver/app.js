const express = require('express')
const app = express()
const port = 3333
const path = require("path");
app.use(express.static(path.join(__dirname, "../out")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../out/index.html'))
})

app.listen(port, () => {
  console.log(`Ecma 262 build result shoing at http://localhost:${port}`)
})
