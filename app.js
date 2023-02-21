const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('pug');

const projects = require('../Project Overview for Nodejs Express/data.json');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use("/static", express.static('public'));
app.use('/img', express.static('public/img'));

app.set('view engine', 'pug');

   

app.get('/', (req, res) => {
    res.render('index', {data: projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project', (req, res) => {
    res.render('project', {data: projects});
});

app.get('/projects', (req, res) => {
    res.redirect('/project');
});

app.listen(port, () =>{
    console.log(`The app is listening on ${port}`);
})