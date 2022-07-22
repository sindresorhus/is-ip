import ipRegex from 'ip-regex';
import {isMatch} from 'super-regex';

const maxIPv4Length = 15;
const maxIPv6Length = 45;

const options = {
	timeout: 400,
};

export function isIP(string) {
	return isMatch(ipRegex({exact: true}), string.slice(0, maxIPv6Length), options);
}

export function isIPv6(string) {
	return isMatch(ipRegex.v6({exact: true}), string.slice(0, maxIPv6Length), options);
}

export function isIPv4(string) {
	return isMatch(ipRegex.v4({exact: true}), string.slice(0, maxIPv4Length), options);
}

export function ipVersion(string) {
	return isIP(string) ? (isIPv6(string) ? 6 : 4) : undefined;
}
