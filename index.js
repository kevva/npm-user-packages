'use strict';
const got = require('got');

module.exports = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof username}\``));
	}

	const size = 250;
	let offset = 0;
	let ret = [];

	return (function loop() {
		const url = `https://api.npms.io/v2/search?q=maintainer:${username}&size=${size}&from=${offset}`;

		return got(url, {json: true}).then(res => {
			ret = ret.concat(res.body.results.map(x => x.package));

			if (res.body.total > offset) {
				offset += size - 1;
				return loop();
			}

			return ret;
		});
	})();
};
