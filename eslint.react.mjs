import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactA11y from 'eslint-plugin-jsx-a11y'

export default [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactA11y.flatConfigs.recommended,
  {
    files: ['src/**/*.{jsx,tsx}'],
    plugins: {
      'react-hooks': reactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
];
