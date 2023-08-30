let express = require ('express');
let app = express();
let path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('pages/home');
})
app.get('/Events', (req,res) => {
    res.render('pages/Events')
})
app.get('/Leadbord', (req,res) => {
    res.render('pages/Leadbord')
})

app.use(express.static(path.join(__dirname,'views')));

app.listen(3000);
