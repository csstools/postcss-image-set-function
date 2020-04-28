import options from './options'

export default (message, word) => {
	if (options.oninvalid === 'warn') {
		options.decl.warn(options.result, message, { word: String(word) })
	} else if (options.oninvalid === 'throw') {
		throw options.decl.error(message, { word: String(word) })
	}
}
