const calculateStylePoints = require('./calculateStylePoints');
const assert = require('assert');

describe('calculateStylePoints', () => {

        it('should return points', () => {
            const actual = calculateStylePoints([19.0, 19.0, 19.5, 19.0, 19.0]);

            const expected = 57.0;

            assert.equal(actual, expected);
        });

        it('should return points', () => {
            const actual = calculateStylePoints([17.5, 17.5, 18.0, 18.5, 18.0]);

            const expected = 53.5;

            assert.equal(actual, expected);
        });

        it('should return points', () => {
            const actual = calculateStylePoints([18.0, 18.0, 18.5, 18.5, 18.5]);

            const expected = 55.0;

            assert.equal(actual, expected);
        });


        });
