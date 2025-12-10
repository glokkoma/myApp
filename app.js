const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/login', (req, res) => {
  res.redirect('/');
});

app.post('/contact', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor CineCampanillas corriendo en http://localhost:${port}`);
});