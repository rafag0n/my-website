module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	setupFiles: ['<rootDir>/setTestEnvVars.js'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sss|styl)$':
			'<rootDir>/node_modules/jest-css-modules',
	},
};
