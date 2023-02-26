const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('pug');

const projects = require('../Project Overview for Nodejs Express/data.json');

const app = express();
const port = 3000;


//middlewares
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

app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    res.render('project', {data: projects[id]});
});

app.get('/projects', (req, res) => {
    res.redirect('/');
})

app.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    res.redirect(`/project/${id}`);
});

app.use((req, res) => {
    res.status(404);
    res.send("<h2>Page not found"+`</br></br> Click here to go back </br></br> <a href="http://localhost:3000/">Go back!</a></h2>`);
})

app.listen(port, () =>{
    console.log(`The app is listening on ${port}`);
})