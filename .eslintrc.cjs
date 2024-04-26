module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', 'react-func', 'import'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'linebreak-style': ['warn', 'unix'],
        'no-var': 'warn',
        semi: ['warn', 'never'],
        indent: ['warn', 4],
        'no-multi-spaces': 'warn',
        'space-in-parens': ['warn', 'never'],
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'prefer-const': 'warn',
        'no-use-before-define': 'warn',
        'arrow-body-style': ['warn', 'as-needed'],
        complexity: ['warn', 4],
        'max-statements': ['error', 10],
        'react/self-closing-comp': [
            'warn',
            {
                component: true,
                html: true,
            },
        ],
        'react-func/max-lines-per-function': [
            'warn',
            {
                max: 20,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true,
            },
        ],
        'import/order': [
            'warn',
            {
                'newlines-between': 'always',
                pathGroupsExcludedImportTypes: ['react'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
    },
}
