var express = require('express');
var app = express();

const random = require('./routes/random');
const addition = require('./routes/addition');

app.use(express.static(__dirname + '/public'));

app.listen(80, () => {
	console.log("80");
});

app.use('/random', random);
app.use('/addition', addition);

module.exports = app;