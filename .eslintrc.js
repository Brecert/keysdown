module.exports = {
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"plugin:@typescript-eslint/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"rules": {
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/no-parameter-properties": ["off"]
	}
};	