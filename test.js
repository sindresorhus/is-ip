import test from 'ava';
import {isIP, isIPv6, isIPv4, ipVersion} from './index.js';

test('isIP', t => {
	t.true(isIP('192.168.0.1'));
	t.true(isIP('1:2:3:4:5:6:7:8'));
	t.true(isIP('::1'));
});

test('isIPv6', t => {
	t.true(isIPv6('1:2:3:4:5:6:7:8'));
	t.true(isIPv6('::1'));
});

test('isIPv4', t => {
	t.true(isIPv4('192.168.0.1'));
});

test('ipVersion', t => {
	t.is(ipVersion('192.168.0.1'), 4);
	t.is(ipVersion('1:2:3:4:5:6:7:8'), 6);
	t.is(ipVersion('abc'), undefined);
});
