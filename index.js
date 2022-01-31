const os = require("os");
const express = require('express');

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

// ============ Contenuti dinamici ====================
app.get('/', (req, res) => {
    res.render('pages/pagehome', { hostname: os.hostname() })
})

app.get('/pageabout', (req, res) => {
    res.render('pages/pageabout')
})

app.get('/about', (req, res) => res.send({ name: "Peter", age: 70 }) )

app.listen(3000, () => console.log('Server is up on port 3000') )
module.exports = app
