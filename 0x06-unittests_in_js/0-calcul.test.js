const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(5.78, 2), 8);
        assert.equal(calculateNumber(2.2, 0), 2);
        assert.equal(calculateNumber(30.5, 2), 33);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(2, 5.78), 8);
        assert.equal(calculateNumber(0, 2.2), 2);
        assert.equal(calculateNumber(2, 30.5), 33);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(15.78, 2.5), 19);
        assert.equal(calculateNumber(3.5, 2.7), 7);
    });
})
