const express = require('express')

const app = express();

app.listen(3000, () => console.log("Listening on 3000"))

// setup template engine
app.set('views', './views');
app.set('view engine', 'pug');

// serve static files
app.use(express.static(__dirname + '/public'));

// create the home url
app.get('/', (req, res) => {
    res.render('index', {title: 'Home', message: "Hello There"})
})

app.get('/about', (req, res) => {
    res.render('about')
})

// setup api router
app.get('/api', (req, res) => {

    // get request ip address
    const ip = req.ip;
    // get request Accept-Language
    const language = req.get('accept-language');
    // get user agent information or softare
    const agent = req.get('user-agent');

    // responde back to the request with a json object, including the above informations
    // res.json({
    //     "ipaddress": ip,
    //     "language": language,
    //     "software": agent
    // })
    res.render('index', {title: "API", ip: ip, language: language, software: agent})
})