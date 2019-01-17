const express = require('express');
const router = express.Router();

var random = require('random');

router.get('/', (req, res, next) => {
	if (req.query.min == undefined || req.query.max == undefined) {
		res.status(400).json({
			success: false,
			message: "Min or max is required"
		});
		return;
	}

	var min = parseInt(req.query.min);
	var max = parseInt(req.query.max);

	res.json({
		success: true,
		result: random.int(min = min, max = max)
	});
});

module.exports = router;