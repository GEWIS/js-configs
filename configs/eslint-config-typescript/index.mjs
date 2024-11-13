import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

import {includeIgnoreFile} from '@eslint/compat';
import path from 'node:path';

const config = [
  includeIgnoreFile(path.resolve('.gitignore')),
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    }
  },
  // Default rules
  {
    files: ['src/**/*.{ts,tsx,mts,cts,vue}'],
    rules: {
      'max-len': ['warn', {code: 120}],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    }
  },
  // Plugin by plugin for better overview
  // Import plugin configuration
  {
    files: ['src/**/*.{ts,tsx,mts,cts,vue}'],
    plugins: {
      import: importPlugin
    },
    settings: {
      ...importPlugin.flatConfigs.typescript.settings,
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
      ...importPlugin.flatConfigs.recommended.rules,
      ...importPlugin.flatConfigs.typescript.rules,
      'import/named': 'off',
      'import/order': ['warn'],
      'import/first': ['warn'],
    }
  }
];

export { config as eslintConfig }
