module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/jsx-runtime',
		// includes all from `next` and provides really useful settings for react, hooks, a11y.
		'next/core-web-vitals',
	],
	plugins: ['react'],
	rules: {
		'no-console': 'warn',
		'quotes': ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-double'],
		'indent': ['warn', 'tab'],
		'comma-dangle': ['error', 'always-multiline'],
		'semi': ['warn', 'always'],
		'import/order': ['error', {
			'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
			'newlines-between': 'always-and-inside-groups',
		}],
	},
	ignorePatterns: [
		'sw/',
		'.xdn/',
		'.layer0/',
		'/dist',
		'/public',
		'/node_modules',
	],
	overrides: [
		// allow require in api routes and js files
		{
			files: ['./src/pages/api/**/*.ts', '*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
