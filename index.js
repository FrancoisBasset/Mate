var express = require('express');
var app = express();

var random = require('random');

app.listen(3000, () => {
	console.log("3000");
});
 
app.get('/', (req, res) => {
  res.send('Привет');
});

app.get("/random", (req, res, next) => {
	if (req.query.min == undefined || req.query.max == undefined) {
		res.json({
			success: false,
			message: "Min or max is required"
		});
	}

	var min = parseInt(req.query.min);
	var max = parseInt(req.query.max);

	res.json({
		success: true,
		result: random.int(min = min, max = max)
	});
})

app.get("/addition", (req, res, next) => {
	if (req.query.numbers == undefined) {
		var json = {
			success: false,
			message: "Numbers is required"
		};
		res.json(json);
	}

	var sum = 0;

	for (var n of req.query.numbers.split('-')) {
		sum += parseInt(n);
	}

	res.send({
		success: true,
		result: sum
	});
});