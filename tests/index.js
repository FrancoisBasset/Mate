const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

const randomQuery = {
	min: 1,
	max: 10
};

const additionQuery = {
	numbers: '1-1-1-1'
};

const additionSum = 4;

describe('Route /', () => {

    it('should return 200 status', () => {
    	return request(app)
    	.get('/')
    	.then(res => {
    		assert.equal(res.status, 200);
    	});
    });

    it('should not show Привет', () => {
    	return request(app)
        .get('/')
        .then(res => {
        	assert.notEqual(res.text, 'Привет');
        });
    });

});

describe('Route /random', () => {

	it('should return 400 status', () => {
		return request(app)
		.get('/random')
		.then(res => {
			assert.equal(res.status, 400);
		});
	});

	it('should return 200 status', () => {
		return request(app)
		.get('/random')
		.query(randomQuery)
		.then(res => {
			assert.equal(res.status, 200);
		});
	});

	it('should return a good response', () => {
		return request(app)
		.get('/random')
		.query(randomQuery)
		.then(res => {
			var min = randomQuery.min;
			var max = randomQuery.max;

			assert.equal(res.body.success, true);
			assert.equal(res.body.result >= min, true);
			assert.equal(res.body.result <= max, true);
		});
	});

});

describe('Route /addition', () => {

	it('should return 400 status', () => {
		return request(app)
		.get('/addition')
		.then(res => {
			assert.equal(res.status, 400);
		});
	});

	it('should return 200 status', () => {
		return request(app)
		.get('/addition')
		.query(additionQuery)
		.then(res => {
			assert.equal(res.status, 200);
		});
	});

	it('should return a good response', () => {
		return request(app)
		.get('/addition')
		.query(additionQuery)
		.then(res => {
			assert.equal(res.body.success, true);
			assert.equal(res.body.result, additionSum);
		});
	});

});
