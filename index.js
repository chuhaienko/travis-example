'use strict';

const random = require('./lib/random');


let i = 0;

setInterval(() => {
	console.log(i, random(Date.now()));

	i += 1;
}, 1000);
