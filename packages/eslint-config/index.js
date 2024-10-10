module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'airbnb-typescript/base'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': 'off',
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        semi: ['error', 'always'],
        'import/prefer-default-export': 'off',
        'import/extensions': ['error', 'ignorePackages', { ts: 'always' }],
    },
    ignorePatterns: ['vite.config.ts'],
};
