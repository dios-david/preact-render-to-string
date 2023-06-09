import { Deferred } from '../src/util';

/**
 * tag to remove leading whitespace from tagged template
 * literal.
 * @param {TemplateStringsArray}
 * @returns {string}
 */
export function dedent([str]) {
	return str
		.split('\n' + str.match(/^\n*(\s+)/)[1])
		.join('\n')
		.replace(/(^\n+|\n+\s*$)/g, '');
}

export function createSuspender() {
	const deferred = new Deferred();
	let resolved;

	deferred.promise.then(() => (resolved = true));
	function Suspender({ children = null }) {
		if (!resolved) {
			throw deferred.promise;
		}

		return children;
	}

	return {
		suspended: deferred,
		Suspender
	};
}
