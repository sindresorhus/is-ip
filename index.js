import ipRegex from 'ip-regex';

export function isIP(string) {
	return ipRegex({exact: true}).test(string);
}

export function isIPv6(string) {
	return ipRegex.v6({exact: true}).test(string);
}

export function isIPv4(string) {
	return ipRegex.v4({exact: true}).test(string);
}

export function ipVersion(string) {
	return isIP(string) ? (isIPv6(string) ? 6 : 4) : undefined;
}
