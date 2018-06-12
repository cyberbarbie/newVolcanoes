const   express             = require('express'),
        app                 = express(),
        mysql               = require('mysql'),
        methodOverride      = require('method-override'),
        expressSanitizer    = require('express-sanitizer');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(expressSanitizer());

con.connect((err) => {
    if (err) throw err;
    console.log("connected");
});

app.get('/', (req, res, err) => {
    res.redirect('/home');
})

app.get('/home', (req, res, err) => {
    res.render('home');
    if(err){
        console.log(err);
    }
});

app.get('/about', (req, res, err) => {
    res.render('about');
    if(err){
        console.log(err);
    }
});

app.get('/music', (req, res) => {
    res.render('music');
    if(err){
        console.log(err);
    }
});

/* app.get('gallery', (req, res) => {
    res.render('gallery');
    if(err){
        console.log(err);
    }
}); */

app.get('contact', (req, res) => {
    res.render('contact');
    if(err){
        console.log(err);
    }
});

/* app.get('*', (req, res) => {
    res.render('404');
}); */

app.listen(3000, (err) => {
    if (err) throw err;
    console.log("Listening to port " + 3000);
});