const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>Homepage miniservizi_old</h1>') )

app.listen(3000, () => console.log('Server is up on port 3000') )
module.exports = app
