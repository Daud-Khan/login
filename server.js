var express = require('express');
var hbs = require('hbs');
var app = express();
app.use(express.static(__dirname + 'public'));
app.set('view engine', 'hbs');
app.get('/', (req, res)=>{
	res.render('login.hbs');
})


app.listen(3000,()=>{
	console.log('Server is up and running on port 3000');
})