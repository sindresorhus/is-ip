import test from 'ava';
import isIp from '.';

test('main', t => {
	t.true(isIp('192.168.0.1'));
	t.true(isIp('1:2:3:4:5:6:7:8'));
	t.true(isIp('::1'));
	t.true(isIp.v4('192.168.0.1'));
	t.true(isIp.v6('1:2:3:4:5:6:7:8'));
	t.true(isIp.v6('::1'));
});

test('.version()', t => {
	t.is(isIp.version('192.168.0.1'), 4);
	t.is(isIp.version('1:2:3:4:5:6:7:8'), 6);
	t.is(isIp.version('abc'), undefined);
});
