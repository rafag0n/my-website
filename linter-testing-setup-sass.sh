yarn add -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-jest eslint-plugin-react prettier &&
yarn add -D jest jest-dom @testing-library/react @testing-library/jest-dom @testing-library/dom babel-jest jest-css-modules &&
echo '{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 4,
  "useTabs": true
}' >> .prettierrc.json &&
echo '{
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:jest/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error"
    }
}' >> .eslintrc.json &&
echo '{
  "presets": ["next/babel"]
}' >> .babelrc &&
echo 'module.exports = {
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	transform: {
	  "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	  "\\.(css|less|scss|sass)$": "identity-obj-proxy"
	},
	moduleNameMapper: {
		"\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
	}
};
' >> jest.config.js &&
echo "import '@testing-library/jest-dom/extend-expect';" >> setupTests.js
yarn add @zeit/next-sass node-sass &&
echo "/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
module.exports = withSass({
	cssModules: true,
});" >> next.config.js 