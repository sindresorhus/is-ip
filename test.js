import test from 'ava';
import {isIP, isIPv6, isIPv4, ipVersion} from './index.js';

test('isIP', t => {
	t.true(isIP('192.168.0.1'));
	t.true(isIP('1:2:3:4:5:6:7:8'));
	t.true(isIP('::1'));
	t.true(isIP('2001:0dc5:72a3:0000:0000:802e:3370:73E4'));
});

test('isIPv6', t => {
	t.true(isIPv6('1:2:3:4:5:6:7:8'));
	t.true(isIPv6('::1'));
	t.true(isIPv6('0000:0000:0000:0000:0000:0000:0000:0000'));
	t.true(isIPv6('0000:0000:0000:0000:0000:ffff:192.168.100.228'));
	t.true(isIPv6('2001:0dc5:72a3:0000:0000:802e:3370:73E4'));
});

test('isIPv4', t => {
	t.true(isIPv4('192.168.0.1'));
});

test('ipVersion', t => {
	t.is(ipVersion('192.168.0.1'), 4);
	t.is(ipVersion('1:2:3:4:5:6:7:8'), 6);
	t.is(ipVersion('abc'), undefined);
});
