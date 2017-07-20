// Type definitions for is-ip v2.0.0
// Project: https://github.com/sindresorhus/is-ip
// Definitions by: coderslagoon <https://github.com/coderslagoon/>

/**
 *Check if input is IPv4 or IPv6.
 *
 * @param {input} input
 *
 * @returns {boolean}
 */
declare function isIp(input: string): boolean;

declare namespace isIp {

	/**
	 *Check if input is IPv4.
	 *
	 * @param {input} input
	 *
	 * @returns {boolean}
	 */
	function v4(input: string): boolean;


	/**
	 *Check if input is IPv6.
	 *
	 * @param {input} input
	 *
	 * @returns {boolean}
	 */
	function v6(input: string): boolean;
}

export = isIp;
