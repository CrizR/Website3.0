const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();
const content = JSON.parse(fs.readFileSync('content.json'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views/images'));


app.get('/home', (req, res) => {
    res.render('home.hbs', content);
});

app.get('/', (req, res) => {
    res.render('home.hbs', content);
});

app.get('/resume', (req, res) => {
    res.render('res.hbs', {
    });
});
app.listen(3000);
