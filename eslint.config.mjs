/* eslint-disable import/no-extraneous-dependencies -- root workspace */
import { eslintConfigStrict as javascript } from '@gewis/eslint-config-javascript';
import { eslintConfig as prettier } from '@gewis/prettier-config';
/* eslint-enable import/no-extraneous-dependencies */

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
