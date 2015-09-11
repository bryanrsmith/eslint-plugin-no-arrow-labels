export default function noArrowLabelsRule(context) {
	return {
		LabeledStatement(node) {
			let ancestors = context.getAncestors();
			ancestors.pop();

			let hasArrowAncestor = ancestors.length && ancestors.some(n => n.type === 'ArrowFunctionExpression');
			if (hasArrowAncestor) {
				context.report(node, 'Unexpected labeled statement in arrow function body.');
			}
		}
	};
}