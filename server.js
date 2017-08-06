var express = require('express');
var hbs = require('hbs');
var app = express();
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  res.render('login.hbs');
});


app.listen(9000, () => {
  console.log('Server is up and running on port 9000');
})
