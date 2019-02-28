const express = require('express');
const router = express.Router();

var winston = require('../config/winston');

router.get('/', (req, res, next) => {
	if (req.query.numbers == undefined) {
		res.status(400).json({
			success: false,
			message: "Numbers are required"
		});

		winston.error("400 Bad request - Numbers are required");

		return;
	}

	var sum = 0;

	for (var n of req.query.numbers.split('-')) {
		sum += parseInt(n);
	}

	res.send({
		success: true,
		result: sum
	});

	winston.info("200 Success - Result is " + sum);
});

module.exports = router;
