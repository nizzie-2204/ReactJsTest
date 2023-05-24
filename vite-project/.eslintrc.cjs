module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', 'prettier', 'simple-import-sort'],
    rules: {
        'react-refresh/only-export-components': 1,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-unused-vars': [
            2,
            { args: 'after-used', ignoreRestSiblings: true },
        ],
        'prettier/prettier': 2,
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 2,
    },
};
