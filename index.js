var express = require('express');
var app = express();

const random = require('./routes/random');
const addition = require('./routes/addition')

app.listen(3000, () => {
	console.log("3000");
});
 
app.get('/', (req, res) => {
	res.send('Привет');
});

app.use('/random', random);
app.use('/addition', addition);

module.exports = app;