module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',   // tsconfig 경로
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',     // TS 권장 룰
        'plugin:prettier/recommended'               // Prettier 통합
    ],
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    rules: {
        // 필요에 따라 룰 커스터마이징
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
    },
};
