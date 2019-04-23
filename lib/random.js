'use strict';

module.exports = function (num) {
	num = Math.floor(Number(num) || 0);

	let result = num;

	for (let i = 2; i < 9; i += 1) {

		if (result % i === 0) {
			result += i;
			result *= i;
		}
	}

	result = result % 100;

	return result;
};
