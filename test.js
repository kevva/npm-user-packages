import test from 'ava';
import fn from './';

test(async t => {
	const pkgs = await fn('kevva');
	t.true(pkgs.length > 100);
	t.ok(pkgs[0].name);
	t.ok(pkgs[0].description);
});
