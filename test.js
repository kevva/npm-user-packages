import test from 'ava';
import m from './';

test(async t => {
	const pkgs = await m('kevva');
	t.true(pkgs.length > 100);
	t.truthy(pkgs[0].name);
	t.truthy(pkgs[0].description);
});
