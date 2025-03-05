 
import { eslintConfig as javascript } from '@gewis/eslint-config-javascript';
import { eslintConfig as prettier } from '@gewis/prettier-config';
 

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
  ...javascript,
  prettier,
];
