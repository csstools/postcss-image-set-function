import postcss from 'postcss'
import options from './lib/options'
import onCSSDeclaration from './lib/onCSSDeclaration'

export default postcss.plugin('postcss-image-set-function', opts => {
	// prepare options
	if ('preserve' in Object(opts)) options.preserve = Boolean(opts.preserve)
	if ('oninvalid' in Object(opts)) options.oninvalid = opts.oninvalid

	return (root, result) => {
		options.result = result
		// for every declaration
		root.walkDecls(onCSSDeclaration)
	}
})
