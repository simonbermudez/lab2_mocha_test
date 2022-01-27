var assert = require('assert');

const calculator = require('../app/calculator')

describe('Calculator Test Cases', function () {
    // Add tests
    it('add(5,2) expected result 7', function () {
        assert.equal(calculator.add(5,2), 7);
    });
    it('add(5,2) expected result 8', function () {
        assert.equal(calculator.add(5,2), 8);
    });


    // Sub tests
    it('sub(5,2) expected result 3', function () {
        assert.equal(calculator.sub(5,2), 3);
    });
    it('sub(5,2) expected result 5', function () {
        assert.equal(calculator.sub(5,2), 5);
    });

    // Mul tests
    it('mul(5,2) expected result 10', function () {
        assert.equal(calculator.mul(5,2), 10);
    });
    it('mul(5,2) expected result 12', function () {
        assert.equal(calculator.mul(5,2), 12);
    });

    // Div tests
    it('div(10,2) expected result 5', function () {
        assert.equal(calculator.div(10,2), 5);
    });
    it('div(10,2) expected result 2', function () {
        assert.equal(calculator.div(10,2), 2);
    });
});