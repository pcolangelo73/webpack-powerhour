module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"globals": {
		"process": false
	},
	"plugins": [
		"react"
	],
	"rules": {
		quotes: ['warn', 'single'],
		semi: ['error',	'always'],
		strict: ['error',	'global'],
		'no-use-before-define': 'off', //["warn", { 'functions': false, 'classes': false }],
		'no-unused-vars': 'off', //['warn', { 'vars': 'all', 'args': 'none', 'varsIgnorePattern': 'React' }],
		'no-console': 'off',
		'no-useless-constructor': 'warn',
		'prefer-const': 'warn',
		'no-var': 'error',
		'no-const-assign': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'warn',
		'no-ex-assign': 'error',
		'no-extra-semi': 'warn',
		'no-func-assign': 'warn',
		'no-irregular-whitespace': 'warn',
		'no-obj-calls': 'warn',
		'no-sparse-arrays': 'warn',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'warn',
		'no-unsafe-finally': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'curly': 'warn',
		'dot-notation': 'warn',
		'eqeqeq': 'error',
		'guard-for-in': 'error',
		'no-alert': 'warn',
		'no-magic-numbers': 'warn',
		'no-multi-spaces': 'warn',
		'no-native-reassign': 'error',
		'no-new-func': 'error',
		'no-param-reassign': 'error',
		'no-self-assign': 'warn',
		'no-self-compare': 'warn',
		'no-sequences': 'warn',
		'no-with': 'error',
		'yoda': 'warn',
		'no-shadow-restricted-names': 'error',
		'constructor-super': 'error',
		'no-class-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-this-before-super': 'error',
		'prefer-arrow-callback': 'warn',
		'camelcase': 'error',
		'new-cap': ['error', { 'capIsNew': false }],
		'new-parens': 'warn',
		'no-array-constructor': 'warn',
		'no-new-object': 'warn'
	}
};
