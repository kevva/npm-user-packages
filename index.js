'use strict';
const got = require('got');

module.exports = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof username}\``));
	}

	let page = 0;
	let ret = [];

	return (function loop() {
		const url = `https://www.npmjs.com/profile/${username}/packages?offset=${page}`;

		return got(url, {json: true}).then(res => {
			ret = ret.concat(res.body.items);

			if (res.body.hasMore) {
				page++;
				return loop();
			}

			return ret;
		});
	})();
};
