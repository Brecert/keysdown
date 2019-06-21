module.exports = {
	roots: ["test","src"],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	globals: {
		"ts-jest": {
			tsConfig: 'test/tsconfig.json'
		}
	}
};