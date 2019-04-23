'use strict';

const { expect } = require('code');
const random     = require('../lib/random');

describe('random(num)', () => {
	it('should equals bad num to 0', () => {
		const resultOnUndefined = random();
		const resultOnNull      = random(null);
		const resultOnAlpha     = random('qwe');
		const resultOnZero      = random(0);

		expect(resultOnUndefined).equals(resultOnZero);
		expect(resultOnNull).equals(resultOnZero);
		expect(resultOnAlpha).equals(resultOnZero);
	});

	it('should return same result on same argument', () => {
		for (let i = 0; i < 100; i += 1) {
			const result1 = random(i);
			const result2 = random(i);

			expect(result1).equals(result2);
		}
	});
});
