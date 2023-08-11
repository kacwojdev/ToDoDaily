module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'import'],
    rules: {
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'import/newline-after-import': 'error',
        'consistent-return': 'warn',
        'jest/no-mocks-import': 'off',
        'no-duplicate-imports': 'error',
        'no-param-reassign': 'error'
    },
    globals: {
        process: true
    }
}
