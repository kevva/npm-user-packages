import test from 'ava';
import m from '.';

test(async t => {
	const [pkg, ...pkgs] = await m('kevva');
	t.true(pkgs.length > 100);
	t.truthy(pkg.name);
	t.truthy(pkg.description);
});
