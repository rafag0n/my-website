yarn add -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier &&
yarn add -D jest jest-dom @testing-library/react @testing-library/jest-dom @testing-library/dom babel-jest &&
echo '{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 4,
  "useTabs": true
}' >> .prettierrc.json &&
echo '{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
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
echo "export const testPathIgnorePatterns = [
	'<rootDir>/.next/',
	'<rootDir>/node_modules/',
];
export const setupFilesAfterEnv = ['<rootDir>/setupTests.js'];
export const transform = {
	'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
};
" >> jest.config.js &&
yarn add @zeit/next-sass node-sass &&
echo "/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
module.exports = withSass({
	cssModules: true,
});" >> next.config.js 