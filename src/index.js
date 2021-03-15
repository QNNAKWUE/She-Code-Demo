const express = require('express');
const app = express();

const ejs = require('ejs');
const viewPath = __dirname + "/views/";

app.engine('html', ejs.renderFile);
app.set('view engine', 'html')
app.set('views', viewPath);
app.use(express.static(viewPath));

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/whatsapp', (req, res)=>{
    res.render('whatsapp');
})
app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.all('*', (req, res) =>{
    res.render('404');
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Server started successfully");
});
