import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

export default [
    eslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        files: ['src/**/*.{js,ts,jsx,tsx,vue}'],
        languageOptions: {
            ecmaVersion: 'latest'
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.app.json'
                },
                node: {
                    project: './tsconfig.node.json'
                }
            }
        },
        rules: {
            'import/order': ['warn'],
            'import/first': ['warn'],
            // General JS/TS rules ported over
            'max-len': ['warn', { code: 120 }],
            'semi': ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
        }
    },
    ...tsEslint.configs.recommended,
    {
        files: ['src/**/*.{ts,tsx,vue}'],
        languageOptions: {
            parser: tsEslint.parser
        }
    },
    prettierConfig,
];
