const express = require('express');
const router = express.Router();

var random = require('random');

var winston = require("../config/winston");

router.get('/', (req, res, next) => {
	if (req.query.min == undefined || req.query.max == undefined) {
		res.status(400).json({
			success: false,
			message: "Min or max is required"
		});

		winston.error("400 Bad request - Min or max is required");

		return;
	}

	var min = parseInt(req.query.min);
	var max = parseInt(req.query.max);

	var result = random.int(min = min, max = max);

	res.json({
		success: true,
		result: result
	});

	winston.info("200 Success - From " + min + " and " + max + " => " + result);
});

module.exports = router;
