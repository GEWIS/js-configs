import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactA11y from 'eslint-plugin-jsx-a11y'

import {fixupPluginRules} from '@eslint/compat';

export default [
  // React plugin
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        jsxPragma: null,
      }
    },
    plugins: {
      "react": reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Default rules
  {
    files: ['src/**/*.tsx'],
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
    }
  },
  // A11y
  {
    files: ['src/**/*.tsx'],
    plugins: {
      'jsx-a11y': reactA11y
    },
    rules: {
      ...reactA11y.flatConfigs.recommended.rules
    }
  },
  // React hooks
  {
    files: ['src/**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules
    },
  },
];
