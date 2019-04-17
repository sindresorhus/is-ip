declare const isIp: {
	/**
	Check if `string` is IPv4 or IPv6.

	@example
	```
	import isIp = require('is-ip');

	isIp('192.168.0.1');
	//=> true

	isIp('1:2:3:4:5:6:7:8');
	//=> true
	```
	*/
	(string: string): boolean;

	/**
	Check if `string` is IPv4.

	@example
	```
	import isIp = require('is-ip');

	isIp.v4('192.168.0.1');
	//=> true
	```
	*/
	v4(string: string): boolean;

	/**
	Check if `string` is IPv6.

	@example
	```
	import isIp = require('is-ip');

	isIp.v6('1:2:3:4:5:6:7:8');
	//=> true
	```
	*/
	v6(string: string): boolean;
};

export = isIp;
