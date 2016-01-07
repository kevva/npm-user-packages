'use strict';
var got = require('got');
var Promise = require('pinkie-promise');

module.exports = function (username) {
	if (typeof username !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	var page = 0;
	var ret = [];

	return (function loop() {
		var url = 'https://www.npmjs.com/profile/' + username + '/packages?offset=' + page;

		return got(url, {json: true}).then(function (res) {
			ret = ret.concat(res.body.items);

			if (res.body.hasMore) {
				page++;
				return loop();
			}

			return ret;
		});
	})();
};
