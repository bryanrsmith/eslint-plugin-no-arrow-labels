import eslint from 'eslint';
import rule from '../../src/rules/no-arrow-labels';

let ruleTester = new eslint.RuleTester({ ecmaFeatures: { arrowFunctions: true }});

ruleTester.run('no-arrow-labels', rule, {
	valid: [
		'() => ({ x: 1 })',
		'() => { return { x: 1 } }',
		'label: 1',
		'label: x => 1',
		'function test() { label: 1 }'
	],
	invalid: [
		{
			code: '() => { x: 1 }',
			errors: [{
				message: 'Unexpected labeled statement in arrow function body.',
				type: 'LabeledStatement'
			}]
		},
		{
			code: '() => { label: return { x: 1 }; }',
			errors: [{
				message: 'Unexpected labeled statement in arrow function body.',
				type: 'LabeledStatement'
			}]
		}
	]
});