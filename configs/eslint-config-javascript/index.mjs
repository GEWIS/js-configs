import path from 'node:path';
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

import { includeIgnoreFile } from '@eslint/compat';

const config = [
  includeIgnoreFile(path.resolve('.gitignore')),
  eslint.configs.recommended,
  // Default rules
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules: {
      'max-len': ['warn', { code: 120 }],
      semi: ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  // Plugin by plugin for better overview
  // Import plugin configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      'import/named': 'off',
      'import/order': ['warn'],
      'import/first': ['warn'],
    },
  },
];

export { config as eslintConfig };
