import vuePlugin from 'eslint-plugin-vue';
// eslint-disable-next-line import/no-unresolved -- import is resolved
import tsEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

const config = [
  ...vuePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vuePlugin,
    },
  },
  ...vueTsEslintConfig({ extends: ['recommendedTypeChecked'] }),
  // Default rules
  {
    files: ['**/*.vue'],
    rules: {
      // Recommended rules
      ...vuePlugin.configs['flat/recommended'].rules,
      // Custom rules
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/attributes-order': [
        'error',
        {
          alphabetical: true,
        },
      ],
    },
  },
];

 
export { config as eslintConfig };
