'use strict';
var test = require('ava');
var isIp = require('./');

test(function (t) {
	t.assert(isIp('192.168.0.1'));
	t.assert(isIp('1:2:3:4:5:6:7:8'));
	t.assert(isIp.v4('192.168.0.1'));
	t.assert(isIp.v6('1:2:3:4:5:6:7:8'));
});
