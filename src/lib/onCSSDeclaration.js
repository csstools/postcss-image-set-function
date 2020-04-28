import processImageSet from './process-image-set'
import options from './options'
import { parse } from 'postcss-values-parser'

export default decl => {
	const { value } = decl

	// if a declaration likely uses an image-set() function
	if (imageSetValueMatchRegExp.test(value)) {
		const valueAST = parse(value)

		// process every image-set() function
		valueAST.walkType('func', node => {
			if (imageSetFunctionMatchRegExp.test(node.name)) {
				options.decl = decl

				processImageSet(
					node.nodes.slice(0),
					decl
				)
			}
		})
	}
}

const imageSetValueMatchRegExp = /(^|[^\w-])(-webkit-)?image-set\(/i
const imageSetFunctionMatchRegExp = /^(-webkit-)?image-set$/i
